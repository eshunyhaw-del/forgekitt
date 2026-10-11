-- Adds the Design-Build Studio (Scandiwest) Astro template. The ZIP is stored in the private
-- 'template-files' bucket as design-build-studio.zip. Price must match lib/templates.ts.
insert into public.products (slug, title, price_minor, currency, published, file_path) values
  ('design-build-studio','Design-Build Studio',99900,'GHS',true,'design-build-studio.zip')
on conflict (slug) do update set title = excluded.title, price_minor = excluded.price_minor, currency = excluded.currency, published = excluded.published, file_path = excluded.file_path;
