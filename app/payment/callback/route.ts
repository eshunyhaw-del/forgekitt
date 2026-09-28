import { NextResponse } from "next/server";
import { finalizePayment } from "@/lib/payments";
import { paystackRequest, type VerifiedTransaction } from "@/lib/paystack";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const reference = url.searchParams.get("reference");
  if (!reference || !/^[A-Za-z0-9.=\-]+$/.test(reference)) return NextResponse.redirect(new URL("/dashboard?payment=invalid", url.origin));
  try {
    const transaction = await paystackRequest<VerifiedTransaction>(`/transaction/verify/${encodeURIComponent(reference)}`);
    await finalizePayment(transaction);
    return NextResponse.redirect(new URL("/dashboard?payment=success", url.origin));
  } catch (error) {
    console.error("Payment callback verification failed", error);
    return NextResponse.redirect(new URL("/dashboard?payment=pending", url.origin));
  }
}
