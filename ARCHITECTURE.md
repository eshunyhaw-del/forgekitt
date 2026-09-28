# Template Marketplace — Architecture & Build Spec

> **Purpose of this document:** a complete, self-contained architecture and security
> specification for a template/source-code marketplace, written so a developer (or an
> AI assistant like ChatGPT) can build it step by step. It targets **1,000,000 users**,
> is **$0 to start**, and treats **security as a first-class requirement**.

---

## 1. What we are building (plain English)

A marketplace that sells website templates and source code.

- Visitors browse a fast marketing site.
- They **sign up / sign in** (email + password, and Google).
- Some templates are **free**, some are **paid**.
- Each template has a **live preview** (a working demo of all its pages, like Elementor).
- After getting a template, the user can **download a ZIP** and/or **access a GitHub repo**.
- Templates are built in **different stacks** (React, Astro, plain HTML/CSS/JS). The
  marketplace does not run them — it links to their demos and delivers their files.

**Two layers, never confused:**
1. **The Platform** (the storefront + dashboard) — one fixed stack.
2. **The Products** (the templates being sold) — any stack, each self-contained.

---

## 2. Chosen stack

| Concern | Technology | Notes |
|---|---|---|
| Platform framework | **Next.js (App Router) + TypeScript** | Server components for speed, server actions for secure writes. |
| Styling | **Tailwind CSS + shadcn/ui** | Fast, consistent, accessible components. |
| Platform hosting | **Vercel** | Free Hobby tier to build; Pro ($20/mo) once commercial. |
| Auth | **Supabase Auth** | Email/password + Google OAuth. JWT-based. |
| Database | **Supabase PostgreSQL** | With Row Level Security (RLS) — see Section 7. |
| ZIP storage | **Cloudflare R2** | Private bucket, zero egress fees, signed URLs only. |
| Template demos | **Cloudflare Pages** (one deploy per template) | Free, unlimited bandwidth. |
| Source repos | **GitHub** | Public for free templates; private + invite for paid. |
| Payments (later) | **Stripe** (or Lemon Squeezy) | Webhook-driven entitlement. No monthly fee. |
| Email (later) | **Resend** free tier | Transactional email (receipts, resets). |

**No custom admin/superuser panel is built.** Product management is done directly in the
**Supabase dashboard** (adding rows) — this removes an entire class of attack surface
(no privileged login to phish, no admin routes to exploit). See Section 8.

---

## 3. High-level architecture

```
                          ┌─────────────────────────────┐
                          │        Cloudflare CDN         │  (caches static assets/pages)
                          └──────────────┬───────────────┘
                                         │
        Browser ─────────────────────────▼──────────────────────────
          │                        Next.js on Vercel
          │            ┌───────────────────────────────────────┐
          │            │  Static marketing pages (SSG/ISR)      │  ← cached, fast, public
          │            │  Product pages (ISR, revalidated)      │
          │            │  Auth'd dashboard (server components)  │
          │            │  Server Actions / Route Handlers       │  ← all secure writes
          │            │  Middleware (auth gate, rate limit)    │
          │            └───────┬───────────────┬───────────────┘
          │                    │               │
          │      (verify JWT)  │               │  (signed URL request, entitlement check)
          │                    ▼               ▼
          │            ┌──────────────┐   ┌──────────────┐
          │            │  Supabase    │   │ Cloudflare R2 │
          │            │  Auth + PG   │   │ (private ZIPs)│
          │            │  + RLS       │   └──────────────┘
          │            └──────────────┘
          │
          └── "Live Preview" button ──► template demo on Cloudflare Pages (separate site)

   Payments (phase 2):  Stripe Checkout ──► Stripe Webhook ──► Server verifies signature
                                                              ──► writes `purchases` row
```

### Request patterns
- **Public browsing:** served as static/ISR pages from the CDN edge → near-zero DB load.
- **Auth actions:** handled by Supabase Auth (its own scalable service).
- **Downloads:** short-lived **signed URL** minted server-side only after an entitlement check.
- **Purchases:** confirmed by **Stripe webhook** (server-to-server, signature-verified),
  never trusted from the browser.

---

## 4. Component responsibilities

### 4.1 Marketing pages (home, browse, pricing, about)
- Rendered **statically (SSG)** or with **ISR** (Incremental Static Regeneration).
- No per-request DB hit → these scale to millions essentially for free via the CDN.
- Product catalog is fetched at build/revalidate time, cached, and revalidated on a
  timer (e.g. every 60s) or on-demand when a product changes.

### 4.2 Product detail page
- ISR page. Shows title, description, screenshots, price, **Live Preview** link, and a
  **Get / Buy** button.
- The download button does **not** contain the file URL. It calls a server action that
  checks entitlement and returns a fresh signed URL.

### 4.3 Auth (Supabase)
- Email/password + Google.
- Session = JWT in an **httpOnly, Secure, SameSite cookie** (not localStorage).
- Middleware refreshes/validates the session on protected routes.

### 4.4 Dashboard ("My Templates" / "My Downloads")
- Server components read the user's `purchases` joined to `products`, protected by RLS.
- Lists owned + free templates, each with a Download button and repo access status.

### 4.5 Download service (server action / route handler)
- Input: `productId`, authenticated user.
- Steps: verify session → check entitlement (`is free` OR row in `purchases`) →
  mint **60-second signed R2 URL** → return it. Never expose the bucket publicly.

### 4.6 GitHub access (paid, private repos)
- After purchase, a server action calls the GitHub API to **invite the buyer's GitHub
  username as a read collaborator** on the private repo (or grant via a template repo).
- The buyer supplies their GitHub username in the dashboard.

### 4.7 Payments (phase 2)
- **Stripe Checkout** hosted page (Stripe handles the card — you never touch card data → PCI scope stays minimal).
- **Stripe webhook** → verify signature → on `checkout.session.completed`, insert a
  `purchases` row. This is the **only** trusted source of "user paid".

---

## 5. Data model (Supabase PostgreSQL)

```sql
-- Users are managed by Supabase Auth (auth.users). We keep a public profile mirror.

create table profiles (
  id            uuid primary key references auth.users(id) on delete cascade,
  github_username text,
  created_at    timestamptz not null default now()
);

create table products (
  id            uuid primary key default gen_random_uuid(),
  slug          text unique not null,
  title         text not null,
  description   text,
  tech_stack    text,                      -- 'react' | 'astro' | 'html'
  is_free       boolean not null default false,
  price_cents   integer not null default 0,
  demo_url      text,                       -- Cloudflare Pages demo
  repo_url      text,                       -- GitHub repo
  repo_private  boolean not null default false,
  zip_object_key text,                      -- key in the private R2 bucket
  cover_image   text,
  published     boolean not null default false,
  created_at    timestamptz not null default now()
);

create table purchases (
  id            uuid primary key default gen_random_uuid(),
  user_id       uuid not null references auth.users(id) on delete cascade,
  product_id    uuid not null references products(id) on delete restrict,
  stripe_session_id text unique,            -- idempotency: prevents double-grant
  amount_cents  integer not null,
  created_at    timestamptz not null default now(),
  unique (user_id, product_id)              -- one entitlement per product per user
);

create table download_events (               -- audit + abuse detection
  id            uuid primary key default gen_random_uuid(),
  user_id       uuid references auth.users(id) on delete set null,
  product_id    uuid references products(id) on delete set null,
  ip_hash       text,                        -- hashed, never raw IP
  created_at    timestamptz not null default now()
);
```

Indexes: `purchases(user_id)`, `purchases(product_id)`, `products(slug)`,
`products(published)`, `download_events(user_id, created_at)`.

---

## 6. Scaling to 1,000,000 users — where it breaks and how we prevent it

The trick: **keep the hot paths off the database.** 99% of traffic is public browsing,
which is served static from the CDN and never touches Postgres.

| Layer | Bottleneck at scale | Mitigation |
|---|---|---|
| **Marketing/browse pages** | DB queries per visitor | **SSG/ISR + CDN cache.** Zero DB hits for anonymous browsing. Revalidate on a timer or on product change. |
| **Product images/screenshots** | Bandwidth | Serve from CDN / R2; use `next/image` optimization; lazy-load. |
| **Auth** | Login spikes | Supabase Auth is a managed, horizontally-scaled service. |
| **Database reads (dashboard)** | Connection exhaustion | Use **Supabase connection pooler (PgBouncer / Supavisor)** — serverless functions must go through the pooler, not direct connections. Add read indexes. |
| **Database writes** | Contention | Writes are rare (signup, purchase). Purchases are idempotent via `stripe_session_id`. |
| **Downloads** | Egress cost + hotlinking | **R2 has zero egress fees.** Signed URLs expire in 60s. CDN caches the object; signed URL only authorizes the fetch. |
| **Template demos** | Traffic to demos | Each demo is on **Cloudflare Pages (unlimited bandwidth)**, fully isolated from the platform — a viral demo cannot slow the storefront. |
| **Serverless function limits** | Cold starts / concurrency | Keep server actions lightweight; cache reference data; avoid heavy work in the request path. |
| **Rate/abuse** | Scrapers, credential stuffing | Rate limiting (Section 7.9) + CDN bot mitigation. |

**Capacity sanity check:** Supabase free tier = 50k MAU and 500MB DB. That is *not* 1M
users on the free tier — the *architecture* scales to 1M; the *free tier* is for launch.
Growth path: Supabase Pro (~$25/mo, 100k MAU + more DB) → scale DB compute as needed.
The point is nothing needs re-architecting to grow — you just raise plan limits.

**Stateless everywhere:** the platform holds no server-side session state (JWT in cookie),
so Vercel/Cloudflare can run any number of instances behind the CDN with no sticky sessions.

---

## 7. Security (the core requirement)

Threat model goals: **no source ZIP is downloadable without entitlement; no user data
leaks; no secret is exposed; payments cannot be forged; the site resists common web attacks.**

### 7.1 Secrets management — nothing exposed to the browser
- **Two classes of keys:**
  - *Public* (safe in browser): Supabase URL + **anon** key, Stripe **publishable** key.
  - *Secret* (server-only, NEVER shipped to client): Supabase **service_role** key,
    R2 credentials, Stripe **secret** key, Stripe **webhook signing secret**, GitHub token.
- Store secrets as **Vercel Environment Variables** (encrypted at rest). Never in the repo,
  never in `NEXT_PUBLIC_*` vars (anything prefixed `NEXT_PUBLIC_` is public — use it only
  for public keys).
- The **service_role** key bypasses RLS — use it only inside trusted server code
  (webhooks, admin scripts), never in a component that could render client-side.
- Add `.env*` to `.gitignore`. Rotate any key that is ever committed.

### 7.2 Authentication
- Sessions are **JWTs in httpOnly + Secure + SameSite=Lax cookies** — not localStorage
  (immune to XSS token theft).
- Enforce **strong passwords** and enable Supabase's leaked-password protection.
- Enable **email verification** before granting downloads.
- Turn on **rate limiting on auth endpoints** (Supabase setting) to blunt credential stuffing.
- Optional: add CAPTCHA (hCaptcha/Turnstile — free) on signup if abuse appears. **Note:
  we never auto-solve CAPTCHAs; they are a defense we deploy, not bypass.**

### 7.3 Authorization — Row Level Security (RLS) is the backbone
Enable RLS on **every** table. Default deny; allow only what's needed.

```sql
alter table profiles  enable row level security;
alter table purchases enable row level security;
alter table products  enable row level security;

-- Anyone may read only PUBLISHED products (never unpublished/draft rows).
create policy "read published products" on products
  for select using (published = true);

-- A user sees only their own purchases.
create policy "own purchases" on purchases
  for select using (auth.uid() = user_id);

-- A user reads/updates only their own profile.
create policy "own profile read"   on profiles for select using (auth.uid() = id);
create policy "own profile update" on profiles for update using (auth.uid() = id);

-- No client can INSERT into purchases directly. Only the webhook (service_role) writes them.
-- (No insert policy = no client insert allowed under RLS.)
```

This means even if someone steals the anon key (which is public anyway), they can only
ever read published products and their own rows. **Entitlement is enforced in the DB,
not just the UI.**

### 7.4 Download gating (the crown jewel)
- The R2 bucket is **private** — no public read.
- The client **never** sees the object key or a permanent URL.
- Flow: authenticated request → server verifies session → checks `is_free` OR a
  `purchases` row exists → mints a **signed URL valid ~60 seconds** → returns it.
- Log every mint to `download_events` (with **hashed** IP) for abuse detection.
- Optional: cap downloads per user per hour to stop link-sharing scripts.

### 7.5 Payments integrity
- Card data is entered on **Stripe's** hosted checkout — your servers never see it
  (keeps you out of heavy PCI scope).
- **Never trust the browser** for "payment succeeded." The success page is cosmetic.
- Entitlement is granted **only** by the Stripe **webhook**, and only after
  **verifying the webhook signature** with the signing secret.
- Use `stripe_session_id` as an **idempotency key** so a replayed webhook can't double-grant
  or double-charge logic.

### 7.6 Input validation & injection
- Validate/parse **all** inputs on the server with a schema library (**Zod**). Reject unknown fields.
- Use Supabase's parameterized client / query builder — **no string-concatenated SQL**.
- Sanitize any user-provided text before rendering; rely on React's default escaping and
  avoid `dangerouslySetInnerHTML`.

### 7.7 HTTP security headers (set in `next.config.js` / middleware)
- `Content-Security-Policy` (lock script sources; blocks most XSS).
- `Strict-Transport-Security` (force HTTPS).
- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY` (your storefront) — but allow framing **only** for demo pages if embedded.
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy` (disable unused browser features).

### 7.8 CSRF & CORS
- Server actions/mutations require the auth cookie + `SameSite` protects against CSRF;
  for route handlers that mutate, verify origin.
- Lock CORS to your own domain(s). Do not use `*` on any authenticated endpoint.

### 7.9 Rate limiting & abuse
- Rate-limit sensitive endpoints (login, signup, download-URL minting, password reset)
  using **Upstash Redis (free tier)** or Vercel's built-in rate limiting.
- Use **Cloudflare** in front for bot mitigation / basic DDoS absorption (free plan).

### 7.10 Dependency & supply-chain hygiene
- Enable **Dependabot** (free on GitHub) for dependency alerts.
- Enable **GitHub secret scanning** + **push protection** so keys can't be committed.
- Pin dependency versions; run `npm audit` in CI.

### 7.11 Reducing attack surface (why no admin panel)
- Product CRUD is done in the **Supabase dashboard** (protected by Supabase's own auth
  and 2FA). No custom `/admin` route means **nothing to brute-force, phish, or exploit**
  on your site. Fewer privileged code paths = fewer vulnerabilities.

### 7.12 Privacy & data minimization
- Store the **minimum** PII (email is handled by Supabase Auth; you store a GitHub
  username at most).
- Hash IPs in logs; never put PII in URLs/query strings.
- Have a plan for account deletion (cascade deletes are in the schema).

---

## 8. Operations without a superuser account

You asked for **no superuser login** on the site. Here's how you still run it safely:

- **Add/edit products:** Supabase Table Editor (upload ZIP to R2 first, paste the object key).
- **Refunds / support:** Stripe dashboard + Supabase.
- **Deploys:** push to GitHub → Vercel auto-deploys.
- **Secrets:** Vercel + Cloudflare + Supabase dashboards.

All of these are **external, hardened dashboards with their own 2FA** — far safer than a
hand-rolled admin panel.

---

## 9. Build order (phased, so you ship $0 and add cost only when earning)

**Phase 1 — Foundation (free)**
1. `create-next-app` (TypeScript) + Tailwind + shadcn/ui.
2. Supabase project: create tables, enable RLS + policies above.
3. Auth: email/password + Google; session cookie middleware.
4. Marketing pages (SSG/ISR) + product listing from `products`.

**Phase 2 — Products & delivery (free)**
5. Product detail page + Live Preview link.
6. R2 private bucket; server action to mint signed download URLs with entitlement check.
7. Free-template downloads working end to end.
8. Dashboard: "My Templates" + GitHub-username capture.

**Phase 3 — Payments (fees only)**
9. Stripe Checkout for paid products.
10. Stripe webhook → verify signature → write idempotent `purchases` row.
11. GitHub private-repo collaborator invite on purchase.

**Phase 4 — Hardening & scale**
12. Security headers, rate limiting (Upstash), Cloudflare in front.
13. ISR revalidation tuning + indexes.
14. Dependabot, secret scanning, `npm audit` in CI.
15. Transactional email (Resend) for receipts/resets.

---

## 10. Environment variables (template)

```
# ---- Public (safe in browser) ----
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=

# ---- Secret (server only — NEVER prefix with NEXT_PUBLIC_) ----
SUPABASE_SERVICE_ROLE_KEY=
R2_ACCOUNT_ID=
R2_ACCESS_KEY_ID=
R2_SECRET_ACCESS_KEY=
R2_BUCKET=
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
GITHUB_TOKEN=
UPSTASH_REDIS_REST_URL=
UPSTASH_REDIS_REST_TOKEN=
```

---

## 11. One-paragraph summary for ChatGPT

> Build a Next.js (App Router, TypeScript) + Tailwind + shadcn/ui marketplace on Vercel,
> with Supabase for Auth and PostgreSQL (RLS enabled on every table, default-deny). Public
> marketing and product pages use SSG/ISR so anonymous traffic is served from the CDN and
> never hits the database — this is what lets it scale toward a million users. Paid
> entitlement is written **only** by a signature-verified Stripe webhook (idempotent on the
> Stripe session id), never trusted from the browser. Template ZIPs live in a **private**
> Cloudflare R2 bucket and are delivered via **60-second signed URLs** minted server-side
> only after an entitlement check; template live-demos deploy separately to Cloudflare
> Pages. Secrets live in Vercel env vars (service_role/Stripe/R2/GitHub keys are server-only,
> never `NEXT_PUBLIC_`). No custom admin panel — products are managed in the Supabase
> dashboard to minimize attack surface. Add security headers, Zod input validation, and
> rate limiting (Upstash) before launch.
