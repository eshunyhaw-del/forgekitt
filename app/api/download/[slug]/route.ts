import { createHash } from "node:crypto";
import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { hasSupabaseEnv } from "@/lib/supabase/env";

export async function GET(request: Request, { params }: { params: Promise<{ slug: string }> }) {
  if (!hasSupabaseEnv() || !process.env.SUPABASE_SERVICE_ROLE_KEY) return NextResponse.json({ error: "Downloads are awaiting backend configuration." }, { status: 503 });
  const { slug } = await params;
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "Please log in to download." }, { status: 401 });
  const admin = createAdminClient();
  const { data: product } = await admin.from("products").select("id,is_free,file_path,published").eq("slug", slug).eq("published", true).single();
  if (!product) return NextResponse.json({ error: "Template not found." }, { status: 404 });
  if (!product.is_free) {
    const { data: purchase } = await admin.from("purchases").select("id").eq("user_id", user.id).eq("product_id", product.id).maybeSingle();
    if (!purchase) return NextResponse.json({ error: "Purchase required." }, { status: 403 });
  }
  if (!product.file_path) return NextResponse.json({ error: "The download file has not been uploaded yet." }, { status: 409 });
  const bucket = process.env.SUPABASE_TEMPLATE_BUCKET || "template-files";
  const { data, error } = await admin.storage.from(bucket).createSignedUrl(product.file_path, 60, { download: true });
  if (error || !data) return NextResponse.json({ error: "Could not prepare the download." }, { status: 500 });
  const forwarded = request.headers.get("x-forwarded-for")?.split(",")[0] || "unknown";
  const salt = process.env.DOWNLOAD_LOG_SALT || "configure-download-salt";
  const ipHash = createHash("sha256").update(`${salt}:${forwarded}`).digest("hex");
  await admin.from("download_events").insert({ user_id: user.id, product_id: product.id, ip_hash: ipHash });
  return NextResponse.json({ url: data.signedUrl }, { headers: { "Cache-Control": "no-store" } });
}
