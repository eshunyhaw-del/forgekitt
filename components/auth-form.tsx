"use client";

import type { FormEvent, ReactNode } from "react";
import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";

type Mode = "signin" | "signup" | "reset" | "update";

// Turn any raw error (including technical ones from the auth service) into plain,
// friendly language. Unknown/technical messages fall back to a safe generic line so
// developer wording never reaches a customer.
function friendlyError(raw: string): string {
  const m = raw.toLowerCase();
  if (m.includes("invalid login credentials")) return "That email or password isn't right. Please try again.";
  if (m.includes("already registered") || m.includes("already exists")) return "An account with this email already exists. Try logging in instead.";
  if (m.includes("rate limit") || m.includes("too many")) return "Too many attempts just now. Please wait a minute and try again.";
  if (m.includes("email") && (m.includes("valid") || m.includes("format"))) return "Please enter a valid email address.";
  if (m.includes("password")) return raw; // password hints (e.g. length) are already user-friendly
  if (m.includes("try again") || m.includes("moment")) return raw; // already-friendly messages
  return "Something went wrong. Please try again.";
}

/** The page to return to after signing in, taken from ?next= (same-site paths only). */
function safeNext(fallback: string) {
  const requested = new URLSearchParams(location.search).get("next");
  return requested?.startsWith("/") && !requested.startsWith("//") ? requested : fallback;
}

export function AuthForm({ children, mode }: { children: ReactNode; mode: Mode }) {
  const [message, setMessage] = useState("");
  const [pending, setPending] = useState(false);
  useEffect(() => { if (mode === "update") { try { void createClient().auth.getSession(); } catch { /* setup message appears on submit */ } } }, [mode]);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!event.currentTarget.reportValidity()) return;
    const data = new FormData(event.currentTarget);
    const email = String(data.get("email") || "");
    const password = String(data.get("password") || "");
    setPending(true); setMessage("");
    try {
      const supabase = createClient();
      if (mode === "signin") {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        const target = safeNext("/dashboard");
        // Hard navigation so the freshly-set auth cookie is sent with the request
        // (a client-side push can race the middleware and bounce back to /signin).
        window.location.assign(target);
        return;
      } else if (mode === "signup") {
        const { data: result, error } = await supabase.auth.signUp({ email, password, options: { emailRedirectTo: `${location.origin}/auth/callback?next=${encodeURIComponent(safeNext("/"))}` } });
        if (error) throw error;
        if (result.session) { window.location.assign(safeNext("/")); return; }
        setMessage(safeNext("") ? "Check your email and click the confirmation link. It brings you straight back to finish your purchase." : "Check your email to confirm your account, then return to log in.");
      } else if (mode === "reset") {
        const { error } = await supabase.auth.resetPasswordForEmail(email, { redirectTo: `${location.origin}/auth/update-password` });
        if (error) throw error;
        setMessage("If that account exists, a secure reset link is on its way.");
      } else {
        const { error } = await supabase.auth.updateUser({ password });
        if (error) throw error;
        setMessage("Password updated. Redirecting to your library…");
        setTimeout(() => window.location.assign("/dashboard"), 700);
      }
    } catch (error) {
      setMessage(error instanceof Error ? friendlyError(error.message) : "Something went wrong. Please try again.");
    } finally { setPending(false); }
  }

  return <form className="auth-card" onSubmit={submit} aria-busy={pending}>{children}{message && <p className="form-message" role="status">{message}</p>}</form>;
}

export function GoogleAuthButton() {
  const [pending, setPending] = useState(false);
  const [message, setMessage] = useState("");
  async function signIn() {
    setPending(true); setMessage("");
    try {
      const supabase = createClient();
      const { error } = await supabase.auth.signInWithOAuth({ provider: "google", options: { redirectTo: `${location.origin}/auth/callback?next=${encodeURIComponent(safeNext("/"))}` } });
      if (error) throw error;
    } catch (error) { setMessage(error instanceof Error ? friendlyError(error.message) : "Google sign-in couldn't start. Please try again."); setPending(false); }
  }
  return <><button className="button button-outline button-wide google-button" type="button" onClick={signIn} disabled={pending}><b aria-hidden="true">G</b> {pending ? "Connecting…" : "Continue with Google"}</button>{message && <p className="form-message" role="alert">{message}</p>}</>;
}
