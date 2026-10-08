-- Adds 13 more Astro templates converted from existing layouts. ZIPs are stored in the private
-- 'template-files' bucket as <slug>.zip. Prices must match lib/templates.ts.
insert into public.products (slug, title, price_minor, currency, published, file_path) values
  ('software-studio','Software Studio',49900,'GHS',true,'software-studio.zip'),
  ('headphone-product-launch','Headphone Product Launch',99900,'GHS',true,'headphone-product-launch.zip'),
  ('architect-portfolio','Architect Portfolio',99900,'GHS',true,'architect-portfolio.zip'),
  ('photography-portfolio','Photography Portfolio',49900,'GHS',true,'photography-portfolio.zip'),
  ('golf-resort','Golf Resort & Members'' Club',99900,'GHS',true,'golf-resort.zip'),
  ('glass-lens-studio','Glass Lens Studio',49900,'GHS',true,'glass-lens-studio.zip'),
  ('brand-motion-designer','Brand & Motion Designer',99900,'GHS',true,'brand-motion-designer.zip'),
  ('fintech-card-showcase','Fintech Card Showcase',49900,'GHS',true,'fintech-card-showcase.zip'),
  ('aurora-ribbon-hero','Aurora Animated Hero',49900,'GHS',true,'aurora-ribbon-hero.zip'),
  ('fashion-clothing-store','Fashion Clothing Store',99900,'GHS',true,'fashion-clothing-store.zip'),
  ('tech-consulting-studio','Tech Consulting Studio',99900,'GHS',true,'tech-consulting-studio.zip'),
  ('fashion-lookbook','Fashion Lookbook',49900,'GHS',true,'fashion-lookbook.zip'),
  ('architecture-archive-studio','Architecture Archive Studio',99900,'GHS',true,'architecture-archive-studio.zip')
on conflict (slug) do update set title = excluded.title, price_minor = excluded.price_minor, currency = excluded.currency, published = excluded.published, file_path = excluded.file_path;
