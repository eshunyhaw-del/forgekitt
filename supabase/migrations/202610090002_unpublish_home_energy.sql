-- Removes the Home Energy Company template from sale (it is also removed from lib/templates.ts).
-- The row is kept, not deleted, so it can be republished later:
--   update public.products set published = true where slug = 'home-energy';
update public.products set published = false where slug = 'home-energy';
