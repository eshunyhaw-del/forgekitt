-- Adds eight Astro templates converted from existing Magic UI-style sites. ZIPs are stored in the private
-- 'template-files' bucket as <slug>.zip. Prices must match lib/templates.ts.
insert into public.products (slug, title, price_minor, currency, published, file_path) values
  ('ai-agent-landing','AI Agent Landing Page',99900,'GHS',true,'ai-agent-landing.zip'),
  ('ai-coding-tool','AI Coding Tool Landing Page',99900,'GHS',true,'ai-coding-tool.zip'),
  ('mobile-app-landing','Mobile App Landing Page',99900,'GHS',true,'mobile-app-landing.zip'),
  ('ai-saas-landing','AI SaaS Landing Page and Blog',99900,'GHS',true,'ai-saas-landing.zip'),
  ('startup-landing-page','Startup Landing Page',99900,'GHS',true,'startup-landing-page.zip'),
  ('portfolio-blog','Developer Portfolio and Blog',99900,'GHS',true,'portfolio-blog.zip'),
  ('developer-tool-landing','Developer Tool Landing Page and Blog',99900,'GHS',true,'developer-tool-landing.zip'),
  ('product-changelog','Product Changelog',99900,'GHS',true,'product-changelog.zip')
on conflict (slug) do update set title = excluded.title, price_minor = excluded.price_minor, currency = excluded.currency, published = excluded.published, file_path = excluded.file_path;
