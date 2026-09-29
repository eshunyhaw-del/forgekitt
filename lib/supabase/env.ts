export function hasSupabaseEnv() {
  return Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY);
}

export function getSupabaseEnv() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
  // Message is user-facing (it can surface on the sign-in/sign-up form), so keep it friendly.
  if (!url || !key) throw new Error("We're having a problem right now. Please try again in a moment.");
  return { url, key };
}
