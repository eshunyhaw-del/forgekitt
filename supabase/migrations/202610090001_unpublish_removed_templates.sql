-- Removes 12 templates from sale while they are redesigned. Rows are kept (not deleted) so they can be
-- republished later with: update public.products set published = true where slug in (...);
-- These slugs are also removed from lib/templates.ts, so they no longer appear on the site.
update public.products
set published = false
where slug in (
  'japanese-restaurant',
  'pizza-restaurant',
  'fine-dining-restaurants',
  'property-developer',
  'custom-home-builder',
  'artisan-bakery-cafe',
  'content-creative-studio',
  'natural-skincare-shop',
  'boutique-hotel',
  'hotel-group',
  'architecture-practice',
  'lidar-drone-inspection'
);
