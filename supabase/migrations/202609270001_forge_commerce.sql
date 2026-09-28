create extension if not exists pgcrypto;

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  github_username text check (github_username is null or github_username ~ '^[A-Za-z0-9-]{1,39}$'),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.products (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null check (slug ~ '^[a-z0-9-]+$'),
  title text not null,
  price_minor integer not null default 0 check (price_minor >= 0),
  currency text not null default 'GHS' check (currency ~ '^[A-Z]{3}$'),
  is_free boolean generated always as (price_minor = 0) stored,
  file_path text,
  repo_url text,
  published boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.payment_intents (
  id uuid primary key default gen_random_uuid(),
  reference text unique not null,
  user_id uuid not null references auth.users(id) on delete cascade,
  product_id uuid not null references public.products(id) on delete restrict,
  amount_minor integer not null check (amount_minor > 0),
  currency text not null check (currency ~ '^[A-Z]{3}$'),
  status text not null default 'pending' check (status in ('pending','paid','failed')),
  created_at timestamptz not null default now(),
  paid_at timestamptz
);

create table if not exists public.purchases (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  product_id uuid not null references public.products(id) on delete restrict,
  paystack_reference text unique,
  amount_minor integer not null check (amount_minor >= 0),
  currency text not null check (currency ~ '^[A-Z]{3}$'),
  created_at timestamptz not null default now(),
  unique (user_id, product_id)
);

create table if not exists public.download_events (
  id bigint generated always as identity primary key,
  user_id uuid references auth.users(id) on delete set null,
  product_id uuid references public.products(id) on delete set null,
  ip_hash text check (ip_hash is null or length(ip_hash) = 64),
  created_at timestamptz not null default now()
);

create index if not exists purchases_user_id_idx on public.purchases(user_id);
create index if not exists purchases_product_id_idx on public.purchases(product_id);
create index if not exists payment_intents_user_id_idx on public.payment_intents(user_id, created_at desc);
create index if not exists download_events_user_time_idx on public.download_events(user_id, created_at desc);
create index if not exists products_published_idx on public.products(published) where published = true;

alter table public.profiles enable row level security;
alter table public.products enable row level security;
alter table public.payment_intents enable row level security;
alter table public.purchases enable row level security;
alter table public.download_events enable row level security;

create policy "published products are public" on public.products for select to anon, authenticated using (published = true);
create policy "users read own profile" on public.profiles for select to authenticated using ((select auth.uid()) = id);
create policy "users update own profile" on public.profiles for update to authenticated using ((select auth.uid()) = id) with check ((select auth.uid()) = id);
create policy "users read own payment intents" on public.payment_intents for select to authenticated using ((select auth.uid()) = user_id);
create policy "users read own purchases" on public.purchases for select to authenticated using ((select auth.uid()) = user_id);

grant usage on schema public to anon, authenticated;
grant select on public.products to anon, authenticated;
grant select, update on public.profiles to authenticated;
grant select on public.payment_intents, public.purchases to authenticated;

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('template-files', 'template-files', false, 104857600, array['application/zip','application/x-zip-compressed'])
on conflict (id) do update set public = false;

insert into public.products (slug, title, price_minor, currency, published) values
  ('relay','Real Estate Developer',4900,'GHS',true),
  ('monument','Sanitary Ware Store',3900,'GHS',true),
  ('loam','Lingerie Boutique',5900,'GHS',true),
  ('signal','Bakery & Pastry',0,'GHS',true),
  ('northstar','Law Firm',2900,'GHS',true),
  ('catalogue','Online Coach',0,'GHS',true),
  ('afterlight','Restaurant & Lounge',3400,'GHS',true),
  ('matter','Oil & Gas Company',4500,'GHS',true),
  ('arc','Import & Export',0,'GHS',true),
  ('fieldnotes','Agribusiness',2900,'GHS',true),
  ('unit','Online Store',5500,'GHS',true),
  ('common','Marketing Agency',4900,'GHS',true),
  ('dental-clinic','Dental Clinic',4900,'GHS',true),
  ('school-academy','School & Academy',3900,'GHS',true),
  ('hotel-resort','Hotel & Resort',5900,'GHS',true),
  ('logistics-company','Logistics Company',4500,'GHS',true),
  ('solar-energy','Solar Energy Company',5500,'GHS',true),
  ('auto-dealership','Auto Dealership',5900,'GHS',true),
  ('construction-company','Construction Company',4500,'GHS',true),
  ('beauty-salon','Beauty Salon & Spa',3400,'GHS',true),
  ('event-planner','Event Planner',2900,'GHS',true),
  ('ngo-charity','NGO & Charity',0,'GHS',true),
  ('pharmacy-health','Pharmacy & Health Store',4900,'GHS',true),
  ('security-company','Security Company',3900,'GHS',true)
on conflict (slug) do update set title = excluded.title, price_minor = excluded.price_minor, currency = excluded.currency, published = excluded.published;
