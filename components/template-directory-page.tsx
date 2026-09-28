import Link from "next/link";
import { ArrowRight } from "@/components/icons";
import { DirectoryFilters } from "@/components/directory-filters";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { TemplateCard } from "@/components/template-card";
import { templates } from "@/lib/templates";

export type DirectorySearchParams = { q?: string; stack?: string; price?: string; category?: string; industry?: string };

const slugify = (value: string) => value.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export async function TemplateDirectoryPage({ searchParams, basePath }: { searchParams: Promise<DirectorySearchParams>; basePath: "/" | "/templates" }) {
  const filters = await searchParams;
  const query = filters.q?.toLowerCase().trim() ?? "";
  const results = templates.filter((template) => {
    const matchesQuery = !query || `${template.title} ${template.category} ${template.industry} ${template.stack}`.toLowerCase().includes(query);
    const stackKey = slugify(template.stack);
    const matchesStack = !filters.stack || stackKey === filters.stack || stackKey.startsWith(filters.stack) || stackKey.includes(filters.stack);
    const matchesPrice = !filters.price || (filters.price === "free" ? template.price === 0 : template.price > 0);
    const matchesCategory = !filters.category || slugify(template.category) === filters.category;
    const matchesIndustry = !filters.industry || slugify(template.industry) === filters.industry;
    return matchesQuery && matchesStack && matchesPrice && matchesCategory && matchesIndustry;
  });

  return <main className="catalog-page directory-page">
    <SiteHeader />
    <section className="catalog-hero">
      <div className="catalog-hero-copy"><span>Template directory · {String(templates.length).padStart(2, "0")} complete builds</span><h1>Find a website made for your business.</h1><p>Pick your industry, preview every page, and launch with production-ready code.</p></div>
      <form className="catalog-search" action={basePath}><label><span>What are you building?</span><input id="catalog-search-input" name="q" defaultValue={filters.q} placeholder="Restaurant, estate developer, online store…" /></label><button className="button button-dark" type="submit">Search <ArrowRight /></button></form>
    </section>
    <DirectoryFilters active={filters} basePath={basePath} />
    <section className="catalog-browser light-section">
      <div className="result-meta"><span>{results.length} website{results.length === 1 ? "" : "s"}</span><span>Preview every page · Own the code</span></div>
      {results.length > 0 ? <div className="template-grid catalog-grid">{results.map((template, index) => <TemplateCard key={template.slug} template={template} priority={index < 3} />)}</div> : <div className="empty-state"><span>00</span><h2>No builds found.</h2><p>Try a broader search or clear the current filters.</p><Link className="button button-dark" href={basePath}>Reset the collection</Link></div>}
    </section>
    <SiteFooter />
  </main>;
}
