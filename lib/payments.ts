import { createAdminClient } from "@/lib/supabase/admin";
import type { VerifiedTransaction } from "@/lib/paystack";

export async function finalizePayment(transaction: VerifiedTransaction) {
  const admin = createAdminClient();
  const { data: intent, error } = await admin
    .from("payment_intents")
    .select("id,user_id,product_id,amount_minor,currency,status")
    .eq("reference", transaction.reference)
    .single();
  if (error || !intent) throw new Error("Unknown payment reference.");
  if (
    transaction.status !== "success" ||
    transaction.amount !== intent.amount_minor ||
    transaction.currency !== intent.currency
  )
    throw new Error("Payment verification mismatch.");
  const { error: purchaseError } = await admin
    .from("purchases")
    .upsert(
      {
        user_id: intent.user_id,
        product_id: intent.product_id,
        paystack_reference: transaction.reference,
        amount_minor: transaction.amount,
        currency: transaction.currency,
      },
      { onConflict: "user_id,product_id" },
    );
  if (purchaseError) throw purchaseError;
  await admin
    .from("payment_intents")
    .update({ status: "paid", paid_at: new Date().toISOString() })
    .eq("id", intent.id);
}
