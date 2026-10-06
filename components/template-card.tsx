import Link from "next/link";
import type { Template } from "@/lib/templates";
import { formatPrice } from "@/lib/templates";
import { ArrowUpRight } from "@/components/icons";
import { PreviewMedia } from "@/components/preview-media";

export function TemplateCard({ template, priority = false }: { template: Template; priority?: boolean }) {
  return (
    <article className="template-card">
      <PreviewMedia
        video={template.video}
        poster={template.image}
        alt={`${template.title} website template preview`}
        sizes="(max-width: 720px) 100vw, (max-width: 1100px) 50vw, 33vw"
        priority={priority}
        href={`/templates/${template.slug}`}
        linkLabel={`View ${template.title}`}
      >
        <span className="card-action">Explore <ArrowUpRight size={14} /></span>
        {template.new && <span className="new-badge">New</span>}
      </PreviewMedia>
      <div className="card-info">
        <div><h3><Link href={`/templates/${template.slug}`}>{template.title}</Link></h3><p>{template.industry} · {template.stack}</p></div>
        <strong>{formatPrice(template.price)}</strong>
      </div>
    </article>
  );
}
