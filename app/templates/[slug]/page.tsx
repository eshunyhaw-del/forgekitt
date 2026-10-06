import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowUpRight, CheckIcon } from "@/components/icons";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { TemplateCard } from "@/components/template-card";
import { PreviewMedia } from "@/components/preview-media";
import { PurchaseButton } from "@/components/purchase-button";
import { formatPrice, getTemplate, templates } from "@/lib/templates";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() { return templates.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const template = getTemplate(slug);
  return template ? { title: `${template.title} website template`, description: template.description, alternates: { canonical: `/templates/${template.slug}` }, openGraph: { title: `${template.title} website template`, description: template.description, images: [template.image] } } : { title: "Template not found" };
}

export default async function TemplateDetailPage({ params }: Props) {
  const { slug } = await params;
  const template = getTemplate(slug);
  if (!template) notFound();
  const related = templates.filter((item) => item.slug !== template.slug).slice(0, 3);

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "";
  const productLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${template.title} website template`,
    description: template.description,
    image: siteUrl ? `${siteUrl}${template.image}` : template.image,
    url: `${siteUrl}/templates/${template.slug}`,
    category: template.industry,
    brand: { "@type": "Brand", name: "Forge" },
    offers: {
      "@type": "Offer",
      price: template.price,
      priceCurrency: process.env.NEXT_PUBLIC_STORE_CURRENCY || "GHS",
      availability: "https://schema.org/InStock",
      url: `${siteUrl}/templates/${template.slug}`,
    },
  };

  return (
    <main className="detail-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productLd) }} />
      <section className="detail-hero dark-section">
        <SiteHeader tone="dark" promo={false} />
        <div className="detail-heading"><div><span className="eyebrow"><i /> {template.industry} / {template.stack}</span><h1>{template.title}</h1></div><p>{template.description}</p></div>
        <div className="detail-stage" id="preview" style={{ "--product-accent": template.accent } as React.CSSProperties}>
          <PreviewMedia className="detail-screen" video={template.video} poster={template.image} alt={`${template.title} homepage preview`} sizes="92vw" priority autoPlay />
          <div className="detail-stage-bar"><span>Preview recorded from the real template</span><a href="#preview">View preview <ArrowUpRight size={14} /></a></div>
        </div>
      </section>

      <section className="detail-content light-section">
        <div className="detail-main">
          <span className="section-number">About this template</span>
          <h2>A complete website<br />template.</h2>
          <p className="detail-lede">{template.title} includes the pages, layout and styling for this kind of business, so you can add your own content and publish.</p>
          <div className="included-grid"><div><span>Pages included</span><strong>{String(template.pages.length).padStart(2, "0")}</strong></div><div><span>Built with</span><strong>{template.stack}</strong></div><div><span>License</span><strong>Commercial</strong></div><div><span>Delivery</span><strong>Instant download</strong></div></div>
          <div className="page-list"><h3>What&apos;s included</h3>{template.pages.map((page, index) => <div key={page}><span>{String(index + 1).padStart(2, "0")}</span><strong>{page}</strong><CheckIcon /></div>)}</div>
        </div>
        <aside className="buy-panel">
          <div><span>One-time purchase</span><strong>{formatPrice(template.price)}</strong></div>
          <p>Source code, every page, and a commercial licence for one project.</p>
          <PurchaseButton slug={template.slug} free={template.price === 0} title={template.title} />
          <a className="button button-outline button-wide" href="#preview">View preview <ArrowUpRight /></a>
          <ul><li><CheckIcon /> Instant source access</li><li><CheckIcon /> One project licence (yours or one client&apos;s)</li><li><CheckIcon /> No recurring fees</li></ul>
          <small>Digital product, delivered instantly and non-refundable once downloaded, except as set out in our <Link href="/refunds">refund policy</Link>. By buying you agree to our <Link href="/terms">Terms</Link> and <Link href="/license">Licence</Link>.</small>
        </aside>
      </section>

      <section className="related light-section"><div className="section-heading compact"><div><span className="section-number">More templates</span><h2>Other templates.</h2></div><Link className="line-link" href="/templates">View all <ArrowRight /></Link></div><div className="template-grid">{related.map((item) => <TemplateCard key={item.slug} template={item} />)}</div></section>
      <SiteFooter />
    </main>
  );
}
