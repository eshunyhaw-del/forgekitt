import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "@/components/icons";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { formatPrice, templates } from "@/lib/templates";
import { createClient } from "@/lib/supabase/server";
import { hasSupabaseEnv } from "@/lib/supabase/env";
import { DownloadButton } from "@/components/download-button";
import { AcademyCallout } from "@/components/academy-callout";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "My templates",
  description: "Your Forge library. Download the templates you own.",
  robots: { index: false, follow: false },
};

export default async function DashboardPage({ searchParams }: { searchParams: Promise<{ payment?: string }> }) {
  const query = await searchParams;
  let owned = templates.filter((template) => template.price === 0);
  let email = "";
  const configured = hasSupabaseEnv();
  if (configured) {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) redirect("/signin?next=/dashboard");
    email = user.email || "";
    const { data: purchases } = await supabase.from("purchases").select("products(slug)");
    const paidSlugs = new Set((purchases || []).flatMap((row) => {
      const product = row.products as unknown as { slug?: string } | null;
      return product?.slug ? [product.slug] : [];
    }));
    owned = templates.filter((template) => template.price === 0 || paidSlugs.has(template.slug));
  }
  return (
    <main className="dashboard">
      <section className="dashboard-top dark-section">
        <SiteHeader tone="dark" />
        <div className="dashboard-head">
          <div>
            <span className="eyebrow"><i /> Your library</span>
            <h1>My templates.</h1>
          </div>
          <div><p>Download your templates below. Each ZIP includes a README with the link to the source code. Your purchases stay in your library while your account is active.</p>{email && <form action="/auth/signout" method="post"><button className="text-button" type="submit">Log out {email}</button></form>}</div>
        </div>
      </section>

      <section className="dashboard-body light-section">
        {!configured && <div className="setup-notice" role="status"><strong>We&apos;re just getting things ready</strong><span>Your library will be available in a moment. Please check back shortly.</span></div>}
        {query.payment === "success" && <div className="setup-notice success" role="status"><strong>Payment confirmed</strong><span>Your template is now available below.</span></div>}
        {query.payment === "success" ? <AcademyCallout highlight /> : owned.length > 0 && <AcademyCallout />}
        {query.payment === "pending" && <div className="setup-notice" role="status"><strong>Payment is processing</strong><span>Refresh shortly. Paystack will confirm it securely.</span></div>}
        <div className="dashboard-meta">
          <span>{owned.length} template{owned.length === 1 ? "" : "s"}</span>
          <Link className="line-link" href="/">Browse more <ArrowRight /></Link>
        </div>

        {owned.length > 0 ? (
          <div className="library-grid">
            {owned.map((template) => (
              <article className="library-item" key={template.slug}>
                <Link className="card-media" href={`/templates/${template.slug}`} aria-label={`View ${template.title}`}>
                  <Image
                    src={template.image}
                    alt={`${template.title} template preview`}
                    fill
                    sizes="(max-width: 760px) 100vw, 300px"
                  />
                </Link>
                <div className="library-info">
                  <div>
                    <h3>{template.title}</h3>
                    <p>{template.industry} · {template.stack}</p>
                  </div>
                  <span>{formatPrice(template.price)}</span>
                </div>
                <div className="library-actions">
                  <DownloadButton slug={template.slug} />
                  <Link className="text-link" href={`/templates/${template.slug}`}>View details <ArrowUpRight size={12} /></Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="dashboard-empty">
            <span className="section-number">Empty</span>
            <h2>No templates yet.</h2>
            <p>Get a free template or buy one to start your library.</p>
            <Link className="button button-dark" href="/">Browse templates <ArrowRight /></Link>
          </div>
        )}
      </section>

      <SiteFooter />
    </main>
  );
}
