-- Server-only commerce flows need explicit table privileges in addition to RLS bypass.
grant select, insert, update on table public.payment_intents to service_role;
grant select, insert, update on table public.purchases to service_role;
