"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight } from "@/components/icons";

export function PurchaseButton({ slug, free, title }: { slug: string; free: boolean; title: string }) {
  const router = useRouter();
  const [pending, setPending] = useState(false);
  const [message, setMessage] = useState("");
  async function proceed() {
    setPending(true); setMessage("");
    const endpoint = free ? `/api/download/${slug}` : "/api/paystack/initialize";
    try {
      const response = await fetch(endpoint, free ? undefined : { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ slug }) });
      const body = await response.json();
      if (response.status === 401) { router.push(`/signin?next=${encodeURIComponent(`/templates/${slug}`)}`); return; }
      if (!response.ok) throw new Error(body.error || "The request could not be completed.");
      location.assign(free ? body.url : body.authorizationUrl);
    } catch (error) { setMessage(error instanceof Error ? error.message : "Something went wrong."); setPending(false); }
  }
  return <><button className="button button-primary button-wide" type="button" onClick={proceed} disabled={pending}>{pending ? "Preparing…" : free ? "Get this template" : `Buy ${title}`} <ArrowRight /></button>{message && <p className="checkout-message" role="alert">{message}</p>}</>;
}
