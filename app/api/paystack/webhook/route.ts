import { NextResponse } from "next/server";
import { finalizePayment } from "@/lib/payments";
import { verifyPaystackSignature, type VerifiedTransaction } from "@/lib/paystack";

export async function POST(request: Request) {
  const raw = await request.text();
  if (!verifyPaystackSignature(raw, request.headers.get("x-paystack-signature"))) return NextResponse.json({ error: "Invalid signature." }, { status: 401 });
  const event = JSON.parse(raw) as { event: string; data: VerifiedTransaction };
  if (event.event === "charge.success") {
    try { await finalizePayment(event.data); }
    catch (error) { console.error("Paystack webhook processing failed", error); return NextResponse.json({ error: "Processing failed." }, { status: 500 }); }
  }
  return NextResponse.json({ received: true });
}
