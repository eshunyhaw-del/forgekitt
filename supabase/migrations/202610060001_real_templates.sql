-- Replace the placeholder catalogue with the real templates.
-- Old placeholder products are unpublished (not deleted) so existing purchases and payment records stay valid.
-- Prices here must match lib/templates.ts. Each template's ZIP is stored in the private
-- 'template-files' bucket as <slug>.zip.

update public.products set published = false
where slug not in ('land-construction', 'luxury-hotel', 'home-energy', 'bakery-cafe', 'law-practice', 'architecture-studio', 'residential-architect', 'joinery-furniture', 'furniture-maker', 'film-studio', 'cybersecurity-company', 'electrical-contractor', 'independent-pharmacy', 'web-design-agency', 'agency-portfolio', 'developer-portfolio', 'software-dev-portfolio');

insert into public.products (slug, title, price_minor, currency, published, file_path) values
  ('land-construction','Land & Construction Company',99900,'GHS',true,'land-construction.zip'),
  ('luxury-hotel','Luxury Hotel',99900,'GHS',true,'luxury-hotel.zip'),
  ('home-energy','Home Energy Company',99900,'GHS',true,'home-energy.zip'),
  ('bakery-cafe','Bakery & Cafe',0,'GHS',true,'bakery-cafe.zip'),
  ('law-practice','Law Practice',99900,'GHS',true,'law-practice.zip'),
  ('architecture-studio','Architecture Studio',99900,'GHS',true,'architecture-studio.zip'),
  ('residential-architect','Residential Architect',49900,'GHS',true,'residential-architect.zip'),
  ('joinery-furniture','Joinery & Furniture Studio',99900,'GHS',true,'joinery-furniture.zip'),
  ('furniture-maker','Furniture Maker',49900,'GHS',true,'furniture-maker.zip'),
  ('film-studio','Film Studio',49900,'GHS',true,'film-studio.zip'),
  ('cybersecurity-company','Cybersecurity Company',99900,'GHS',true,'cybersecurity-company.zip'),
  ('electrical-contractor','Electrical Contractor',49900,'GHS',true,'electrical-contractor.zip'),
  ('independent-pharmacy','Independent Pharmacy',99900,'GHS',true,'independent-pharmacy.zip'),
  ('web-design-agency','Web Design Agency',49900,'GHS',true,'web-design-agency.zip'),
  ('agency-portfolio','Agency Portfolio',49900,'GHS',true,'agency-portfolio.zip'),
  ('developer-portfolio','Developer Portfolio',49900,'GHS',true,'developer-portfolio.zip'),
  ('software-dev-portfolio','Software Developer Portfolio',49900,'GHS',true,'software-dev-portfolio.zip')
on conflict (slug) do update set title = excluded.title, price_minor = excluded.price_minor, currency = excluded.currency, published = excluded.published, file_path = excluded.file_path;
