-- Restores the prices that were in place before the free promotion (2026-10-21).
-- Not a migration: run it manually (Supabase SQL editor / MCP) when the promotion ends.
-- bakery-cafe was already free and stays free.
update public.products set price_minor = 99900 where published and price_minor = 0 and slug <> 'bakery-cafe';
update public.products set price_minor = 49900 where slug in (
  'agency-portfolio','aurora-ribbon-hero','cinematic-video-landing','creative-developer-portfolio','developer-portfolio',
  'electrical-contractor','fashion-lookbook','film-studio','fintech-card-showcase','furniture-maker','glass-lens-studio',
  'infinite-photography-reel','interior-design-studio','photography-portfolio','residential-architect','sneaker-fan-carousel',
  'software-dev-portfolio','software-studio','web-design-agency'
);
