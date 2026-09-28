# Template Marketplace — Conversion-Focused UI/UX Spec

> Companion to `ARCHITECTURE.md`. This defines a UI designed to **convert visitors into
> sign-ups and buyers**. It is opinionated on purpose: developers and founders (your
> audience) distrust hype and reward clarity, speed, and proof. Every section below has a
> **why** so the design decisions aren't arbitrary.

---

## 0. Who we're converting & the core principle

**Audience:** developers, indie hackers, founders, agencies who want a finished, converting
website they can fork/unzip and ship *today*.

**They convert on:** proof it works (live demos), speed, trust, and low friction — **not**
on marketing fluff. So the whole site must feel like the product: **fast, clean, static,
zero-nonsense, and obviously high-quality.** The site is your best advertisement — if your
storefront converts, buyers believe your templates will too.

**The one-line promise (use everywhere):**
> "Complete, conversion-ready websites. Fork it, or unzip it, and ship."

---

## 1. Design system (the visual foundation)

### Typography
- **Headings:** a strong geometric/grotesk sans (e.g. *Inter*, *Geist*, or *Satoshi*). Big, tight, confident.
- **Body:** same family, comfortable line-height (1.6), max ~70ch line length for readability.
- **Code/labels:** a mono (e.g. *Geist Mono*) for tech-stack tags and code snippets — signals "for developers."
- **Scale:** large hero headline (clamp 40–72px), clear hierarchy, generous whitespace.

### Color (conversion-safe)
- **Base:** near-white or near-black background (pick light *or* dark as default; offer a toggle).
  Dark mode reads as "premium/dev-tool"; light mode reads as "clean/trustworthy." **Support both.**
- **Neutrals:** a full gray ramp for text, borders, surfaces (this is 90% of the UI).
- **One accent color** used sparingly — only for **primary CTAs and key highlights**. Overusing
  color kills conversion; a single confident accent draws the eye exactly where you want clicks.
- **Semantic:** green = free/success, subtle badge colors for "New" / "Popular".

### Spacing & shape
- Consistent 4/8px spacing scale (Tailwind default).
- Rounded-2xl cards, soft layered shadows (subtle, not heavy), thin `1px` borders on surfaces.
- **Generous whitespace** — cramped = cheap, spacious = premium.

### Motion (you said mostly static — keep it purposeful)
- Micro-interactions only: button hover lift, card hover raise, smooth focus rings.
- One tasteful entrance fade/slide on scroll per section (respect `prefers-reduced-motion`).
- **No heavy scroll-jacking.** Speed and clarity beat spectacle for this audience.

### Components (shadcn/ui)
Button, Card, Badge, Dialog/Sheet (for auth), Tabs, Input, Dropdown, Tooltip, Skeleton
(loading states), Toast (feedback). Consistent components = trust.

---

## 2. Homepage / landing (the conversion engine)

Ordered top to bottom. Each block earns its place.

### 2.1 Navbar (sticky, minimal)
- Left: logo. Center/right: `Templates`, `Pricing`, `Docs`.
- Right: `Sign in` (ghost) + **`Get started free`** (accent, primary).
- **Why:** one clear primary action; "free" lowers the barrier immediately.

### 2.2 Hero (above the fold — the highest-leverage screen)
- **Headline:** the promise, big. e.g. *"Conversion-ready websites you can ship today."*
- **Subhead (one line):** *"Complete templates in React, Astro, and plain HTML. Fork the repo or download the ZIP — every page is done."*
- **Two CTAs:** primary **`Browse templates`**, secondary `See a live demo ↗`.
- **Proof strip under CTAs:** "Free + premium templates" · "Fork on GitHub" · "Instant ZIP download".
- **Visual:** a real, sharp screenshot/mock of your best template (or a small grid of 3). Show the product, not an illustration.
- **Why:** a visitor must understand *what, for whom, and what to do next* in 5 seconds. Real
  screenshots + a free path = instant credibility and a low-friction click.

### 2.3 Logos / trust bar (optional early, add when you have it)
- "Built with the tools you already use": Next.js, Astro, React, Tailwind logos.
- **Why:** familiarity = trust. Later, swap in customer logos / "used by X builders".

### 2.4 Featured templates grid (the core catalog teaser)
- 3–6 cards. Each card: **cover screenshot**, title, tech-stack badge (`React`/`Astro`/`HTML`),
  Free/Price badge, and on hover a **`Live Preview`** + **`Get`** action.
- **Why:** browsing *is* the buying motion here. Get them into templates fast. The live
  preview is the #1 conversion driver — seeing it work removes doubt.

### 2.5 "How it works" — 3 steps
1. **Preview** any template live. 2. **Get it** (free, or one-time purchase). 3. **Fork or unzip** and ship.
- Icons + one line each.
- **Why:** removes uncertainty about the process; makes buying feel effortless.

### 2.6 Value props (3–4, benefit-led not feature-led)
- *"Every page included"* — not just a homepage; full multi-page sites.
- *"Yours forever"* — one-time purchase, no subscription.
- *"Any stack"* — React, Astro, or zero-build HTML.
- *"Built to convert"* — designed with customers in mind, not just pretty.
- **Why:** answers the silent objections a buyer has before they ask.

### 2.7 Social proof
- Testimonials (even 2–3 real ones), star ratings, download counts ("Downloaded 1,200+ times").
- **Why:** proof others trusted you is the strongest conversion lever after the demo.

### 2.8 Pricing preview
- Show the model plainly: **Free templates** + **Premium (one-time price)**. No hidden fees.
- CTA to full pricing / browse.
- **Why:** transparency reduces drop-off; "one-time" beats subscription fear.

### 2.9 FAQ
- License? Refunds? Can I use it for clients? Do I need an account? What's the tech?
- **Why:** kills last-minute objections that otherwise cause abandonment.

### 2.10 Final CTA band
- Big headline + **`Get started free`**. Repeat the primary action.
- **Why:** the visitor who scrolled to the bottom is warm — give them the button again.

### 2.11 Footer
- Links, GitHub, contact, legal (Terms, Privacy, License). Newsletter capture (email) — free
  list-building for later launches.

---

## 3. Browse / catalog page (turn interest into selection)

- **Top:** search + filters — by **stack** (React/Astro/HTML), **price** (Free/Paid),
  **category** (SaaS, Portfolio, Landing, E-commerce, Blog).
- **Grid of product cards** (same card as homepage), responsive (1 col mobile → 3–4 desktop).
- **Each card:** screenshot, title, stack badge, price/free badge, hover → `Live Preview` + `Get`.
- **Sort:** Popular / Newest / Price.
- **Empty/loading:** skeleton cards (never a blank flash — feels broken).
- **Why:** fast filtering to the *right* template shortens time-to-decision. Card screenshots
  do the selling; keep text minimal.

---

## 4. Product detail page (where the purchase decision happens)

This page must **remove all doubt.** Layout: two columns on desktop.

### Left / main column
- **Big Live Preview** — either an **embedded iframe of the demo** or a large screenshot
  gallery + a prominent **`Open live preview ↗`** button. *This is the most important element.*
- **Screenshots** of multiple pages (proves it's a *complete* site, not one page).
- **Description:** what it's for, what pages are included (list them), who it's for.
- **Tech details:** stack, framework version, dependencies, "zero-build" note for HTML ones.
- **What you get:** "GitHub repo access + downloadable ZIP + all X pages + license."

### Right / sticky sidebar (the conversion box)
- Price (or **Free**), big.
- Primary CTA: **`Get template`** (free) or **`Buy — $X`** (paid).
- Under it: `Open live preview ↗`.
- Trust line: "One-time payment · Yours forever · Instant access."
- Stack badge, last updated, download count.
- **Why:** the sticky buy-box keeps the CTA in view while they scroll the proof. Price
  transparency + "yours forever" + instant access = low-friction yes.

### After getting/buying
- Immediate access: **Download ZIP** button + **GitHub username field** ("Enter your GitHub
  username to get repo access"). Clear success state (Toast + checklist).

---

## 5. Auth (sign up / sign in) — keep friction near zero

- Use a **modal/sheet** (shadcn Dialog) so users don't leave the page they're on — critical
  for not losing the buying momentum.
- **Google button first**, then email/password. Minimal fields.
- On sign-up: only email + password. Ask for GitHub username *later*, only when needed for a repo.
- Clear error/success states, "forgot password" link.
- **Why:** every extra field drops conversion. Social login + a modal keeps them in flow.

---

## 6. Dashboard ("My Templates")

- Clean list/grid of owned + free templates the user has claimed.
- Each row: thumbnail, title, **`Download ZIP`**, **`Open repo`** / repo-access status,
  `Live preview ↗`.
- A place to set/update **GitHub username**.
- Empty state: friendly nudge → **`Browse templates`** (turn empty dashboards into browsing).
- **Why:** post-purchase clarity builds trust and repeat purchases; the empty state recovers
  users who signed up but haven't bought.

---

## 7. Checkout (phase 2)

- Use **Stripe Checkout** (hosted) — it's already optimized to convert and handles cards/PCI.
- After payment: redirect to a **success page** that immediately shows download + repo access
  (don't make them hunt for it).
- **Why:** don't rebuild what Stripe already optimizes; instant delivery after pay = happy buyer.

---

## 8. Conversion principles baked into the whole site (checklist)

1. **One primary action per screen.** Never make the visitor choose between five buttons.
2. **Show the product, not promises.** Screenshots + live demos everywhere.
3. **Free path lowers the barrier.** Let people claim free templates with just a sign-up — now
   they have an account and are one step from buying.
4. **Speed is a feature.** Static pages, optimized images, instant navigation. Slow = lost sale.
5. **Trust signals near every CTA.** "Yours forever", "instant access", download counts, ratings.
6. **Transparent, one-time pricing.** No surprises, no subscription anxiety.
7. **Mobile-first.** Many visitors browse on phones; the grid, buy-box, and modals must be flawless small-screen.
8. **Accessibility = reach + trust.** Proper contrast, focus states, keyboard nav, alt text.
9. **Consistency.** Same card, same button, same spacing everywhere — inconsistency reads as untrustworthy.
10. **Reduce every field, every step, every click** between "interested" and "got it."

---

## 9. Page priority for building (ship value fast)

1. Homepage (hero + featured grid + how-it-works + CTA) — your pitch.
2. Browse/catalog — the buying floor.
3. Product detail with live preview — where conversion happens.
4. Auth modal.
5. Dashboard.
6. Checkout (phase 2).

Build 1–3 first with a few real free templates; that alone is a working, converting site.

---

## 10. Copy direction (tone)

- **Confident, concrete, developer-honest.** Short sentences. Benefits over adjectives.
- Say *"every page included"* not *"amazing quality"*. Say *"ship today"* not *"revolutionary"*.
- Let the **screenshots and live demos** do the emotional selling; let the **copy** remove doubt.
