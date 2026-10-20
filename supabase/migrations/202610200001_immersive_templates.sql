-- Adds four immersive templates: Luxury Fragrance House (AUREL), Immersive Architecture Studio (FORMA),
-- Luxury Event Production (MAISON ÉVÉN) and Immersive Furniture Showroom (ATELIER).
-- ZIPs are stored in the private 'template-files' bucket as <slug>.zip. Prices must match lib/templates.ts.
insert into public.products (slug, title, price_minor, currency, published, file_path) values
  ('luxury-fragrance','Luxury Fragrance House',99900,'GHS',true,'luxury-fragrance.zip'),
  ('immersive-architecture-studio','Immersive Architecture Studio',99900,'GHS',true,'immersive-architecture-studio.zip'),
  ('luxury-event-production','Luxury Event Production',99900,'GHS',true,'luxury-event-production.zip'),
  ('immersive-furniture-showroom','Immersive Furniture Showroom',99900,'GHS',true,'immersive-furniture-showroom.zip')
on conflict (slug) do update set title = excluded.title, price_minor = excluded.price_minor, currency = excluded.currency, published = excluded.published, file_path = excluded.file_path;
