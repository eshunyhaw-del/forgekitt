import { createHmac, timingSafeEqual } from "node:crypto";

const baseUrl = "https://api.paystack.co";

function secret() {
  if (!process.env.PAYSTACK_SECRET_KEY) throw new Error("Paystack is not configured.");
  return process.env.PAYSTACK_SECRET_KEY;
}

export async function paystackRequest<T>(path: string, init?: RequestInit): Promise<T> {
  const response = await fetch(`${baseUrl}${path}`, {
    ...init,
    headers: { Authorization: `Bearer ${secret()}`, "Content-Type": "application/json", ...init?.headers },
    cache: "no-store",
  });
  const body = await response.json();
  if (!response.ok || !body.status) throw new Error(body.message || "Paystack request failed.");
  return body.data as T;
}

export function verifyPaystackSignature(rawBody: string, signature: string | null) {
  if (!signature) return false;
  const expected = createHmac("sha512", secret()).update(rawBody).digest("hex");
  const left = Buffer.from(expected);
  const right = Buffer.from(signature);
  return left.length === right.length && timingSafeEqual(left, right);
}

export type VerifiedTransaction = { status: string; reference: string; amount: number; currency: string; customer: { email: string }; metadata?: Record<string, unknown> };
