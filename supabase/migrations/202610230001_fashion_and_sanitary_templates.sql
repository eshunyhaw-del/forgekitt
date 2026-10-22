-- Adds two templates: Women's Fashion Brand (NOVA) and Sanitary Ware Store (NOVA, Astro + optional Django backend).
-- ZIPs are stored in the private 'template-files' bucket as <slug>.zip. Prices must match lib/templates.ts.
insert into public.products (slug, title, price_minor, currency, published, file_path) values
  ('womens-fashion-brand','Women''s Fashion Brand',99900,'GHS',true,'womens-fashion-brand.zip'),
  ('sanitary-ware-store','Sanitary Ware Store',99900,'GHS',true,'sanitary-ware-store.zip')
on conflict (slug) do update set title = excluded.title, price_minor = excluded.price_minor, currency = excluded.currency, published = excluded.published, file_path = excluded.file_path;
