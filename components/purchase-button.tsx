"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight } from "@/components/icons";

export function PurchaseButton({ slug, free, title }: { slug: string; free: boolean; title: string }) {
  const router = useRouter();
  const [pending, setPending] = useState(false);
  const [message, setMessage] = useState("");
  const [messageIsError, setMessageIsError] = useState(false);

  function isTrustedPaystackUrl(value: unknown): value is string {
    if (typeof value !== "string") return false;
    try {
      const url = new URL(value);
      return url.protocol === "https:" && url.hostname === "checkout.paystack.com";
    } catch {
      return false;
    }
  }

  async function proceed() {
    setPending(true); setMessage(""); setMessageIsError(false);
    const endpoint = free ? `/api/download/${slug}` : "/api/paystack/initialize";
    const checkoutWindow = free ? null : window.open("about:blank", "_blank");

    if (!free && !checkoutWindow) {
      setMessageIsError(true);
      setMessage("Your browser blocked the payment tab. Allow pop-ups for Forge and try again.");
      setPending(false);
      return;
    }

    if (checkoutWindow) {
      checkoutWindow.opener = null;
      checkoutWindow.location.replace(`${window.location.origin}/checkout/preparing`);
      setMessage("Secure checkout opened in a new tab. We’re connecting to Paystack now.");
    }

    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 30000);

    try {
      const response = await fetch(endpoint, free ? { signal: controller.signal } : { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ slug }), signal: controller.signal });
      const body = await response.json().catch(() => ({}));
      if (response.status === 401) {
        checkoutWindow?.close();
        router.push(`/signin?next=${encodeURIComponent(`/templates/${slug}`)}`);
        return;
      }
      if (!response.ok) {
        checkoutWindow?.close();
        setMessageIsError(true);
        setMessage(body.error || "Something went wrong. Please try again.");
        setPending(false);
        return;
      }
      if (free) {
        location.assign(body.url);
        return;
      }
      if (!isTrustedPaystackUrl(body.authorizationUrl)) {
        checkoutWindow?.close();
        setMessageIsError(true);
        setMessage("The payment provider returned an invalid checkout address. Please try again.");
        setPending(false);
        return;
      }
      checkoutWindow?.location.replace(body.authorizationUrl);
      setMessage("Checkout opened securely in a new tab.");
      setPending(false);
    } catch (error) {
      checkoutWindow?.close();
      setMessageIsError(true);
      setMessage(error instanceof DOMException && error.name === "AbortError" ? "Paystack took too long to respond. Please try again." : "Something went wrong. Please try again.");
      setPending(false);
    } finally {
      window.clearTimeout(timeout);
    }
  }
  return <><button className="button button-primary button-wide" type="button" onClick={proceed} disabled={pending}>{pending ? "Preparing…" : free ? "Get this template" : `Buy ${title}`} <ArrowRight /></button>{message && <p className="checkout-message" role={messageIsError ? "alert" : "status"}>{message}</p>}</>;
}
