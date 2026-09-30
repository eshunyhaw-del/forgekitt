import type { Metadata } from "next";
import Link from "next/link";
import { ContentPage } from "@/components/content-page";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Template licence", description: "What you may and may not do with Forge website templates." };

export default function LicensePage() {
  return (
    <ContentPage eyebrow={`Commercial licence · Updated ${site.updated}`} title="Build for yourself or a client." intro="Each purchase gives you a licence to use a template for one live website project. Here is exactly what that means.">
      <h2>What you get</h2>
      <p>When you buy or download a template, we grant you a personal, non-exclusive, non-transferable, worldwide licence to use and modify it for <strong>one (1) end project</strong>: either your own business website or one website for one client. You may publish that website commercially and adapt the design, code and content.</p>

      <h2>What you may not do</h2>
      <ul>
        <li>Resell, sublicense, share, publish or redistribute the template or its source files, modified or not, including on marketplaces, repositories, or as a &ldquo;template pack&rdquo;.</li>
        <li>Use one licence for more than one project, client or website. Buy one licence per project.</li>
        <li>Create or sell a competing template, theme, builder or design product from it.</li>
        <li>Claim the original template design or code as your own creation in a way that misleads others about its origin.</li>
        <li>Use it for unlawful, deceptive, hateful, or infringing purposes.</li>
        <li>Give your account, login or download links to anyone else.</li>
      </ul>

      <h2>Client work</h2>
      <p>You may build one website for one client using a template. You may hand the finished website to that client, but the template remains licensed only for that single project. The client may not reuse the original template files for another project without their own licence.</p>

      <h2>Third-party materials</h2>
      <p>Templates may include third-party fonts, icons, libraries or placeholder images that have their own licences. Placeholder photos, text, names, logos and products shown in previews are for demonstration only. Replace them with content you have the right to use. We are not responsible for content you add.</p>

      <h2>Ownership</h2>
      <p>We keep all ownership of the templates. You own the website content you add, such as your text, logo and photos.</p>

      <h2>No warranty and liability</h2>
      <p>Templates are provided &ldquo;as is&rdquo; without warranty. Our liability is limited as set out in our <Link href="/terms">Terms of service</Link>. You are responsible for the website you build, including its legal notices, privacy and cookie disclosures, accessibility, and compliance with the laws that apply to you.</p>

      <h2>Ending the licence</h2>
      <p>The licence ends automatically if you breach it. You must then stop using and delete the template files, and we may suspend your account. Breaches may also give us the right to claim damages.</p>

      <h2>Need broader coverage?</h2>
      <p>Need to use a template across several sites, or want an extended or agency licence? Email <a href={`mailto:${site.email}`}>{site.email}</a> before you start.</p>
    </ContentPage>
  );
}
