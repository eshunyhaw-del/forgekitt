-- Adds 5 more Astro templates converted from existing sites. ZIPs are stored in the private
-- 'template-files' bucket as <slug>.zip. Prices must match lib/templates.ts.
insert into public.products (slug, title, price_minor, currency, published, file_path) values
  ('cinematic-video-landing','Cinematic Video Landing Page',49900,'GHS',true,'cinematic-video-landing.zip'),
  ('building-intelligence-studio','Architecture & Building Data Studio',99900,'GHS',true,'building-intelligence-studio.zip'),
  ('digital-artist-portfolio','Digital Artist Portfolio',99900,'GHS',true,'digital-artist-portfolio.zip'),
  ('minimal-skincare-brand','Minimal Skincare Brand Site',99900,'GHS',true,'minimal-skincare-brand.zip'),
  ('art-direction-studio','Art Direction Studio',99900,'GHS',true,'art-direction-studio.zip')
on conflict (slug) do update set title = excluded.title, price_minor = excluded.price_minor, currency = excluded.currency, published = excluded.published, file_path = excluded.file_path;
