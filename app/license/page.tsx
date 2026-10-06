import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage, type LegalSection } from "@/components/legal-page";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Template licence", description: "What you may and may not do with Forge website templates." };

const highlights = [
  { title: "One licence, one project", text: "Use a template for your own business site or for one client's site." },
  { title: "No reselling", text: "You may not resell, share or redistribute the template files, modified or not." },
  { title: "Fonts and media", text: "Fonts and placeholder media are not covered. Buy the licences or replace them." },
  { title: "Need more?", text: "Several sites or an agency licence? Email us before you start." },
];

const sections: LegalSection[] = [
  {
    id: "what-you-get",
    title: "What you get",
    body: (
      <p>When you buy or download a template, we grant you a personal, non-exclusive, non-transferable, worldwide licence to use and modify it for <strong>one (1) end project</strong>: either your own business website or one website for one client. You may publish that website commercially and adapt the design, code and content.</p>
    ),
  },
  {
    id: "what-you-may-not-do",
    title: "What you may not do",
    body: (
      <ul>
        <li>Resell, sublicense, share, publish or redistribute the template or its source files, modified or not, including on marketplaces, repositories, or as a &ldquo;template pack&rdquo;.</li>
        <li>Use one licence for more than one project, client or website. Buy one licence per project.</li>
        <li>Create or sell a competing template, theme, builder or design product from it.</li>
        <li>Claim the original template design or code as your own creation in a way that misleads others about its origin.</li>
        <li>Use it for unlawful, deceptive, hateful, or infringing purposes.</li>
        <li>Give your account, login or download links to anyone else.</li>
      </ul>
    ),
  },
  {
    id: "client-work",
    title: "Client work",
    body: (
      <p>You may build one website for one client using a template. You may hand the finished website to that client, but the template remains licensed only for that single project. The client may not reuse the original template files for another project without their own licence.</p>
    ),
  },
  {
    id: "third-party",
    title: "Third-party materials",
    body: (
      <>
        <p>Templates may include third-party fonts, icons, libraries or placeholder images that have their own licences. Placeholder photos, text, names, logos and products shown in previews are for demonstration only. Replace them with content you have the right to use. We are not responsible for content you add.</p>
        <div className="legal-callout">
          <strong>Fonts</strong>
          <p>No font in a template is covered by this Licence. You must buy the original licence for every font you keep, or replace it with a font you are licensed to use, before you publish. If you do not, you alone are responsible and we accept no responsibility. See our <Link href="/terms">Terms of service</Link>.</p>
        </div>
      </>
    ),
  },
  {
    id: "ownership",
    title: "Ownership",
    body: (
      <p>We keep all ownership of the templates. You own the website content you add, such as your text, logo and photos.</p>
    ),
  },
  {
    id: "warranty",
    title: "No warranty and liability",
    body: (
      <p>Templates are provided &ldquo;as is&rdquo; without warranty. Our liability is limited as set out in our <Link href="/terms">Terms of service</Link>. You are responsible for the website you build, including its legal notices, privacy and cookie disclosures, accessibility, and compliance with the laws that apply to you.</p>
    ),
  },
  {
    id: "ending",
    title: "Ending the licence",
    body: (
      <p>The licence ends automatically if you breach it. You must then stop using and delete the template files, and we may suspend your account. Breaches may also give us the right to claim damages.</p>
    ),
  },
];

export default function LicensePage() {
  return (
    <LegalPage
      current="/license"
      eyebrow={`Commercial licence · Updated ${site.updated}`}
      title="Build for yourself or a client."
      intro="Each purchase gives you a licence to use a template for one live website project. Here is exactly what that means."
      highlights={highlights}
      sections={sections}
      contactTitle="Need broader coverage?"
      contact={<>Need to use a template across several sites, or want an extended or agency licence? Email <a href={`mailto:${site.email}`}>{site.email}</a> before you start.</>}
    />
  );
}
