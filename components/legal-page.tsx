import Link from "next/link";
import type { ReactNode } from "react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export type LegalSection = { id: string; title: string; body: ReactNode };
export type LegalHighlight = { title: string; text: string };

const legalLinks = [
  { href: "/terms", label: "Terms" },
  { href: "/privacy", label: "Privacy" },
  { href: "/license", label: "Licence" },
  { href: "/refunds", label: "Refunds" },
];

export function LegalPage({
  eyebrow,
  title,
  intro,
  highlights,
  sections,
  current,
  contact,
  contactTitle = "Questions about this page?",
}: {
  eyebrow: string;
  title: string;
  intro: string;
  highlights?: LegalHighlight[];
  sections: LegalSection[];
  current: string;
  contact: ReactNode;
  contactTitle?: string;
}) {
  return (
    <main className="content-page legal-page">
      <SiteHeader />
      <header className="content-hero">
        <span>{eyebrow}</span>
        <h1>{title}</h1>
        <p>{intro}</p>
        <nav className="legal-tabs" aria-label="Legal documents">
          {legalLinks.map((l) => (
            <Link key={l.href} href={l.href} aria-current={l.href === current ? "page" : undefined}>
              {l.label}
            </Link>
          ))}
        </nav>
      </header>

      <div className="legal-layout">
        <aside className="legal-toc" aria-label="On this page">
          <p>On this page</p>
          <ol>
            {sections.map((s, i) => (
              <li key={s.id}>
                <a href={`#${s.id}`}>
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  {s.title}
                </a>
              </li>
            ))}
          </ol>
        </aside>

        <div className="legal-main">
          {highlights && (
            <section className="legal-summary" aria-labelledby="legal-summary-title">
              <h2 id="legal-summary-title">The short version</h2>
              <ul>
                {highlights.map((h) => (
                  <li key={h.title}>
                    <strong>{h.title}</strong>
                    <span>{h.text}</span>
                  </li>
                ))}
              </ul>
              <small>This summary is for convenience. The full terms below are what apply.</small>
            </section>
          )}

          {sections.map((s, i) => (
            <section key={s.id} id={s.id} className="legal-section">
              <h2>
                <span>{String(i + 1).padStart(2, "0")}</span>
                {s.title}
              </h2>
              <div className="legal-section-body">{s.body}</div>
            </section>
          ))}

          <section className="legal-contact">
            <h2>{contactTitle}</h2>
            <p>{contact}</p>
          </section>
        </div>
      </div>
      <SiteFooter />
    </main>
  );
}
