-- Adds 4 more Astro templates converted from existing sites. ZIPs are stored in the private
-- 'template-files' bucket as <slug>.zip. Prices must match lib/templates.ts.
insert into public.products (slug, title, price_minor, currency, published, file_path) values
  ('conference-event-website','Conference Event Website',99900,'GHS',true,'conference-event-website.zip'),
  ('infinite-photography-reel','Infinite Photography Reel',49900,'GHS',true,'infinite-photography-reel.zip'),
  ('ai-automation-consultancy','AI & Automation Consultancy',99900,'GHS',true,'ai-automation-consultancy.zip'),
  ('sneaker-fan-carousel','Product Fan-Stack Carousel',49900,'GHS',true,'sneaker-fan-carousel.zip')
on conflict (slug) do update set title = excluded.title, price_minor = excluded.price_minor, currency = excluded.currency, published = excluded.published, file_path = excluded.file_path;
