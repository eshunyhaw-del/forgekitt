"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import type {
  AuthChangeEvent,
  Session,
  UserResponse,
} from "@supabase/supabase-js";

export function AccountActions({ mobile = false }: { mobile?: boolean }) {
  const router = useRouter();
  const [email, setEmail] = useState<string | null>(null);
  useEffect(() => {
    try {
      const supabase = createClient();
      supabase.auth
        .getUser()
        .then(({ data }: UserResponse) => setEmail(data.user?.email || null));
      const { data } = supabase.auth.onAuthStateChange(
        (_event: AuthChangeEvent, session: Session | null) =>
          setEmail(session?.user.email || null),
      );
      return () => data.subscription.unsubscribe();
    } catch {
      return;
    }
  }, []);
  async function signOut() {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/");
    router.refresh();
  }
  if (email)
    return mobile ? (
      <>
        <Link href="/dashboard">My library</Link>
        <button type="button" onClick={signOut}>
          Log out
        </button>
      </>
    ) : (
      <>
        <Link className="text-button" href="/dashboard">
          My library
        </Link>
        <button
          className="text-button account-signout"
          type="button"
          onClick={signOut}
        >
          Log out
        </button>
      </>
    );
  return mobile ? (
    <>
      <Link href="/signin">Log in</Link>
      <Link href="/signup">Create account</Link>
    </>
  ) : (
    <>
      <Link className="text-button" href="/signin">
        Log in
      </Link>
      <Link className="text-button" href="/signup">
        Sign up
      </Link>
    </>
  );
}
