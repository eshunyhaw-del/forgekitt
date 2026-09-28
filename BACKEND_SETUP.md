# Forge backend setup

The application code is wired for Supabase Auth/Postgres/Storage and Paystack Checkout. Secrets are intentionally not committed.

## 1. Configure Supabase

1. Create or open a Supabase project.
2. In **SQL Editor**, run `supabase/migrations/202609270001_forge_commerce.sql`.
3. In **Project Settings → API**, copy the project URL, publishable key, and secret/service-role key.
4. In **Authentication → URL Configuration**, set the site URL and add these redirect URLs:
   - `http://localhost:3000/auth/callback`
   - `http://localhost:3000/auth/update-password`
   - `https://forgkitt.com/auth/callback`
   - `https://forgkitt.com/auth/update-password`
5. For Google login, enable Google under **Authentication → Providers** and add the Google client ID and secret. Use the Supabase callback URL shown on that provider screen in Google Cloud.
6. Upload each ZIP to the private `template-files` bucket, then set that product's `file_path` in the `products` table (for example `relay.zip`).

## 2. Configure local secrets

Copy `.env.example` to `.env.local` and replace every placeholder. Keep `.env.local` private.

## 3. Configure Paystack

1. Copy the Paystack **test secret key** into `PAYSTACK_SECRET_KEY` first.
2. In Paystack's dashboard, set the webhook URL to `https://forgkitt.com/api/paystack/webhook`.
3. Keep `PAYSTACK_CURRENCY=GHS` unless the account is enabled for another currency.
4. Make a test purchase and confirm a row appears in both `payment_intents` and `purchases`.
5. Switch to the live secret only after the complete test flow passes.

## 4. Production checklist

- Set all environment variables in the hosting dashboard.
- Replace `NEXT_PUBLIC_SITE_URL` with the HTTPS production origin.
- Generate a long random `DOWNLOAD_LOG_SALT`.
- Enable Supabase leaked-password protection and appropriate Auth rate limits.
- Confirm the storage bucket is private.
- Upload real ZIP files and populate `file_path` values.
- Test email confirmation, password reset, Google login, successful/failed payment, webhook replay, and paid/free downloads.
