import { randomUUID } from "node:crypto";
import { NextResponse } from "next/server";
import { z } from "zod";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { paystackRequest } from "@/lib/paystack";
import { hasSupabaseEnv } from "@/lib/supabase/env";
import { checkRateLimit } from "@/lib/rate-limit";

const inputSchema = z.object({ slug: z.string().min(1).max(100).regex(/^[a-z0-9-]+$/) }).strict();

export async function POST(request: Request) {
  try {
    if (!hasSupabaseEnv() || !process.env.SUPABASE_SERVICE_ROLE_KEY || !process.env.PAYSTACK_SECRET_KEY) return NextResponse.json({ error: "Checkout is awaiting backend configuration." }, { status: 503 });
    const parsed = inputSchema.safeParse(await request.json());
    if (!parsed.success) return NextResponse.json({ error: "Invalid product." }, { status: 400 });
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user?.email) return NextResponse.json({ error: "Please log in to continue." }, { status: 401 });
    if (!(await checkRateLimit("checkout", user.id)).ok) return NextResponse.json({ error: "Too many requests, slow down." }, { status: 429 });
    const admin = createAdminClient();
    const { data: product } = await admin.from("products").select("id,slug,price_minor,currency,is_free,published").eq("slug", parsed.data.slug).eq("published", true).single();
    if (!product) return NextResponse.json({ error: "Product not found." }, { status: 404 });
    if (product.is_free || product.price_minor <= 0) return NextResponse.json({ error: "This template is free." }, { status: 400 });
    const reference = `forge-${randomUUID()}`;
    const { error: intentError } = await admin.from("payment_intents").insert({ reference, user_id: user.id, product_id: product.id, amount_minor: product.price_minor, currency: product.currency });
    if (intentError) throw intentError;
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || new URL(request.url).origin;
    const result = await paystackRequest<{ authorization_url: string }>("/transaction/initialize", { method: "POST", body: JSON.stringify({ email: user.email, amount: String(product.price_minor), currency: product.currency, reference, callback_url: `${siteUrl}/payment/callback`, metadata: JSON.stringify({ product_slug: product.slug }) }) });
    return NextResponse.json({ authorizationUrl: result.authorization_url });
  } catch (error) {
    console.error("Paystack initialization failed", error);
    return NextResponse.json({ error: "Checkout is temporarily unavailable." }, { status: 500 });
  }
}
