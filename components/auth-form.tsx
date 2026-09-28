"use client";

import { useRouter } from "next/navigation";
import type { FormEvent, ReactNode } from "react";
import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";

type Mode = "signin" | "signup" | "reset" | "update";

export function AuthForm({ children, mode }: { children: ReactNode; mode: Mode }) {
  const router = useRouter();
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
        const requested = new URLSearchParams(location.search).get("next");
        router.replace(requested?.startsWith("/") && !requested.startsWith("//") ? requested : "/dashboard");
        router.refresh();
      } else if (mode === "signup") {
        const { data: result, error } = await supabase.auth.signUp({ email, password, options: { emailRedirectTo: `${location.origin}/auth/callback?next=/dashboard` } });
        if (error) throw error;
        if (result.session) { router.replace("/dashboard"); router.refresh(); }
        else setMessage("Check your email to confirm your account, then return to log in.");
      } else if (mode === "reset") {
        const { error } = await supabase.auth.resetPasswordForEmail(email, { redirectTo: `${location.origin}/auth/update-password` });
        if (error) throw error;
        setMessage("If that account exists, a secure reset link is on its way.");
      } else {
        const { error } = await supabase.auth.updateUser({ password });
        if (error) throw error;
        setMessage("Password updated. Redirecting to your library…");
        setTimeout(() => { router.replace("/dashboard"); router.refresh(); }, 700);
      }
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Something went wrong. Please try again.");
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
      const { error } = await supabase.auth.signInWithOAuth({ provider: "google", options: { redirectTo: `${location.origin}/auth/callback?next=/dashboard` } });
      if (error) throw error;
    } catch (error) { setMessage(error instanceof Error ? error.message : "Google sign-in could not start."); setPending(false); }
  }
  return <><button className="button button-outline button-wide google-button" type="button" onClick={signIn} disabled={pending}><b aria-hidden="true">G</b> {pending ? "Connecting…" : "Continue with Google"}</button>{message && <p className="form-message" role="alert">{message}</p>}</>;
}
