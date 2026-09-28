import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowUpRight, CheckIcon } from "@/components/icons";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { TemplateCard } from "@/components/template-card";
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

  return (
    <main className="detail-page">
      <section className="detail-hero dark-section">
        <SiteHeader tone="dark" promo={false} />
        <div className="detail-heading"><div><span className="eyebrow"><i /> {template.industry} / {template.stack}</span><h1>{template.title}</h1></div><p>{template.description}</p></div>
        <div className="detail-stage" id="preview" style={{ "--product-accent": template.accent } as React.CSSProperties}>
          <div className="detail-screen"><Image src={template.image} alt={`${template.title} homepage preview`} fill sizes="92vw" priority /></div>
          <div className="detail-stage-bar"><span>Homepage / Desktop</span><a href="#preview">Open full preview <ArrowUpRight size={14} /></a></div>
        </div>
      </section>

      <section className="detail-content light-section">
        <div className="detail-main">
          <span className="section-number">[ PRODUCT OVERVIEW ]</span>
          <h2>A complete website,<br />not a collection of parts.</h2>
          <p className="detail-lede">{template.title} gives you the structure, visual system, and working pages to move from idea to launch without rebuilding the basics.</p>
          <div className="included-grid"><div><span>Pages included</span><strong>{String(template.pages.length).padStart(2, "0")}</strong></div><div><span>Built with</span><strong>{template.stack}</strong></div><div><span>License</span><strong>Commercial</strong></div><div><span>Updates</span><strong>Included</strong></div></div>
          <div className="page-list"><h3>Everything included</h3>{template.pages.map((page, index) => <div key={page}><span>{String(index + 1).padStart(2, "0")}</span><strong>{page}</strong><CheckIcon /></div>)}</div>
        </div>
        <aside className="buy-panel">
          <div><span>One-time purchase</span><strong>{formatPrice(template.price)}</strong></div>
          <p>Source code, every page, commercial license, and future updates.</p>
          <PurchaseButton slug={template.slug} free={template.price === 0} title={template.title} />
          <a className="button button-outline button-wide" href="#preview">Open live preview <ArrowUpRight /></a>
          <ul><li><CheckIcon /> Instant source access</li><li><CheckIcon /> Use on client projects</li><li><CheckIcon /> No recurring fees</li></ul>
          <small>Secure access. Your files remain available in your Forge library.</small>
        </aside>
      </section>

      <section className="related light-section"><div className="section-heading compact"><div><span className="section-number">[ KEEP EXPLORING ]</span><h2>Other good<br />starting points.</h2></div><Link className="line-link" href="/templates">View all <ArrowRight /></Link></div><div className="template-grid">{related.map((item) => <TemplateCard key={item.slug} template={item} />)}</div></section>
      <SiteFooter />
    </main>
  );
}
