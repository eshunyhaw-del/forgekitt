-- Adds the 14 Astro templates built from existing layouts. ZIPs are stored in the private
-- 'template-files' bucket as <slug>.zip. Prices must match lib/templates.ts.
insert into public.products (slug, title, price_minor, currency, published, file_path) values
  ('japanese-restaurant','Japanese Restaurant',99900,'GHS',true,'japanese-restaurant.zip'),
  ('pizza-restaurant','Pizza Restaurant',99900,'GHS',true,'pizza-restaurant.zip'),
  ('fine-dining-restaurants','Fine Dining Restaurant Group',99900,'GHS',true,'fine-dining-restaurants.zip'),
  ('content-creative-studio','Content & Creative Studio',99900,'GHS',true,'content-creative-studio.zip'),
  ('property-developer','Property Developer',99900,'GHS',true,'property-developer.zip'),
  ('custom-home-builder','Custom Home Builder',99900,'GHS',true,'custom-home-builder.zip'),
  ('artisan-bakery-cafe','Bakery & Cafe Chain',49900,'GHS',true,'artisan-bakery-cafe.zip'),
  ('natural-skincare-shop','Natural Skincare Shop',99900,'GHS',true,'natural-skincare-shop.zip'),
  ('boutique-hotel','Boutique Hotel Collection',99900,'GHS',true,'boutique-hotel.zip'),
  ('hotel-group','City Hotel Group',99900,'GHS',true,'hotel-group.zip'),
  ('architecture-practice','Architecture Practice',99900,'GHS',true,'architecture-practice.zip'),
  ('interior-design-studio','Interior Design Studio',49900,'GHS',true,'interior-design-studio.zip'),
  ('creative-developer-portfolio','Creative Developer Portfolio',49900,'GHS',true,'creative-developer-portfolio.zip'),
  ('lidar-drone-inspection','LiDAR Drone Product Demo',99900,'GHS',true,'lidar-drone-inspection.zip')
on conflict (slug) do update set title = excluded.title, price_minor = excluded.price_minor, currency = excluded.currency, published = excluded.published, file_path = excluded.file_path;
