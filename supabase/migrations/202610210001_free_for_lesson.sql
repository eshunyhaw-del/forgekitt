-- Temporary promotion: every published template is free (is_free is generated from price_minor = 0).
-- To go back to paid, run supabase/rollbacks/202610210001_restore_paid_prices.sql and set FREE_FOR_NOW = false in lib/templates.ts.
update public.products set price_minor = 0 where published and price_minor > 0;
