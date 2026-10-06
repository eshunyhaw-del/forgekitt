import Link from "next/link";
import { ArrowUpRight } from "@/components/icons";
import { templates } from "@/lib/templates";
import { ThemeToggle } from "@/components/theme-toggle";
import { MobileSearchButton } from "@/components/mobile-search-button";
import { Logo } from "@/components/logo";
import { StickyHeader } from "@/components/sticky-header";
import { AccountActions } from "@/components/account-actions";

const latest = templates.find((template) => template.new);

export function SiteHeader({ tone = "light", promo = true }: { tone?: "light" | "dark"; promo?: boolean }) {
  return <>
    <StickyHeader />
    {promo && <div className="promo-bar"><span>{latest ? `New release: ${latest.title}` : "New templates added regularly"}</span><span>Complete websites. One-time price. No subscription.</span><Link href={latest ? `/templates/${latest.slug}` : "/templates"}>{latest ? "View release" : "Browse templates"} <ArrowUpRight size={12} /></Link></div>}
    <header className={`site-header site-header-${tone}`}>
      <Link className="brand" href="/" aria-label="Forge home"><Logo /></Link>
      <nav className="directory-nav" aria-label="Primary navigation"><Link href="/">All templates</Link><Link href="/?price=free">Free templates</Link><Link href="/dashboard">My library</Link></nav>
      <form className="header-search" action="/"><label><span className="sr-only">Search templates</span><input name="q" placeholder="Search industries or templates" /></label></form>
      <div className="header-actions"><ThemeToggle /><AccountActions /><Link className="button button-small button-dark" href="/?price=paid">Go premium</Link></div>
      <div className="mobile-controls"><MobileSearchButton /><ThemeToggle /><details className="mobile-menu"><summary aria-label="Open navigation"><span /><span /></summary><nav><Link href="/">All templates</Link><Link href="/?price=free">Free templates</Link><AccountActions mobile /></nav></details></div>
    </header>
  </>;
}
