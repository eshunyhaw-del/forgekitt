-- Adds the Skincare Balm Product Site (Astro) template. Its ZIP is stored in the private
-- 'template-files' bucket as balm-product-showcase.zip. Price must match lib/templates.ts.
insert into public.products (slug, title, price_minor, currency, published, file_path) values
  ('balm-product-showcase','Skincare Balm Product Site',99900,'GHS',true,'balm-product-showcase.zip')
on conflict (slug) do update set title = excluded.title, price_minor = excluded.price_minor, currency = excluded.currency, published = excluded.published, file_path = excluded.file_path;
