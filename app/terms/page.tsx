import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage, type LegalSection } from "@/components/legal-page";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Terms of service", description: "The terms that govern using Forge, buying templates, and downloading files." };

const highlights = [
  { title: "Digital and final", text: "Templates are downloads, so purchases are generally final. See the Refund policy for the exceptions." },
  { title: "Licensed, not sold", text: "You get a licence to use a template for your project. We keep ownership of the template." },
  { title: "Your website, your duty", text: "You are responsible for everything you publish: content, legal pages, security and compliance." },
  { title: "Fonts are on you", text: "Buy the original licence for every font you keep, or replace it. If you do not, you alone are responsible." },
];

const sections: LegalSection[] = [
  {
    id: "who-we-are",
    title: "Who we are and these terms",
    body: (
      <p>Forge is operated by {site.legalName} in {site.location} (&ldquo;we&rdquo;, &ldquo;us&rdquo;). These terms, together with our <Link href="/license">Licence</Link>, <Link href="/privacy">Privacy policy</Link> and <Link href="/refunds">Refund policy</Link>, form the agreement between you and us. By creating an account, buying or downloading from Forge, you agree to them. If you do not agree, do not use the site.</p>
    ),
  },
  {
    id: "accounts",
    title: "Eligibility and accounts",
    body: (
      <p>You must be 18 or older (or have the legal capacity to contract where you live). If you buy for a business, you confirm you are authorised to bind it. Keep your login details secret and give us accurate information. You are responsible for activity on your account. Tell us immediately if you suspect unauthorised use.</p>
    ),
  },
  {
    id: "what-we-sell",
    title: "What we sell",
    body: (
      <p>We sell and distribute downloadable website templates (source files). They are digital products delivered by download from your library. We describe each template as accurately as we can, but screenshots and previews are illustrative. You are responsible for checking a template suits your needs before buying.</p>
    ),
  },
  {
    id: "prices-and-payment",
    title: "Prices and payment",
    body: (
      <>
        <p>Prices are shown in the currency displayed on the page (Ghana cedis, GHS, unless stated) and are charged once per template. You are responsible for any taxes that apply to you.</p>
        <p>Payments are processed by Paystack, which has its own terms. We do not store your card or mobile-money details. We may correct pricing errors and cancel and refund an order placed at a mistaken price. Access to a paid template begins once Paystack confirms your payment.</p>
      </>
    ),
  },
  {
    id: "licence",
    title: "Licence",
    body: (
      <p>Templates are licensed, not sold. Your rights to use them are set out in our <Link href="/license">Licence</Link>. We and our licensors keep all ownership of the templates. If you break the licence, it ends automatically.</p>
    ),
  },
  {
    id: "delivery-and-refunds",
    title: "Digital delivery and refunds",
    body: (
      <p>Because templates are delivered digitally and can be copied once downloaded, purchases are generally final. By buying, you ask for immediate access and acknowledge that you lose any right to cancel once the download is available, except as set out in our <Link href="/refunds">Refund policy</Link> or as required by law.</p>
    ),
  },
  {
    id: "acceptable-use",
    title: "Acceptable use",
    body: (
      <>
        <p>You must not:</p>
        <ul>
          <li>resell, share, publish or redistribute template files except as the Licence allows;</li>
          <li>share your account or download links;</li>
          <li>attempt to bypass payment or access controls;</li>
          <li>scrape, overload or probe the site for weaknesses;</li>
          <li>upload malware, use the site for anything unlawful, or impersonate anyone.</li>
        </ul>
        <p>We may suspend or close accounts that break these rules, without refund where the breach is serious.</p>
      </>
    ),
  },
  {
    id: "third-party",
    title: "Third-party content, fonts and services",
    body: (
      <>
        <p>Templates may include or reference third-party fonts, images, icons, libraries and services that have their own licences and terms. You are responsible for complying with them and for obtaining any rights you need for content you add (logos, text, photos, music). Links to other websites are provided for convenience; we do not control them and are not responsible for them.</p>
        <div className="legal-callout">
          <strong>Fonts</strong>
          <p>No font in a template is covered by your template licence. Before you publish a website built with a template, you must buy the original licence for every font you keep, or replace it with a font you are licensed to use. This applies to every font, including fonts released under open licences, whose terms you must also check and follow.</p>
          <p>Fonts supplied with a template are included for preview and demonstration only. If you do not obtain the correct licences or replace the fonts, you alone are responsible for any claim, fee, penalty or takedown that results, and we accept no responsibility or liability for it.</p>
        </div>
      </>
    ),
  },
  {
    id: "your-responsibility",
    title: "Your responsibility for your website",
    body: (
      <p>You are solely responsible for the website you build with a template, including its content, legal notices, privacy and cookie disclosures, accessibility, security, hosting, and compliance with laws that apply to your business and customers. This includes the licensing of fonts, images and any other third-party material on your website. Templates are design and code starting points. They are not legal, financial or compliance advice.</p>
    ),
  },
  {
    id: "previews-and-trademarks",
    title: "Templates, previews and trademarks",
    body: (
      <p>Templates are provided as-is for you to adapt. Previews use sample content and third-party names or images for demonstration only, and no affiliation or endorsement is implied. Product and company names belong to their owners. You are responsible for the website you build.</p>
    ),
  },
  {
    id: "availability",
    title: "Availability and changes",
    body: (
      <p>We work to keep the site and downloads available, but we do not promise uninterrupted or error-free service. We may update, change, withdraw or stop selling a template or feature. If we permanently remove a template you have bought, you keep the files you already downloaded. Any updates or new versions we choose to provide are offered at our discretion and are not guaranteed.</p>
    ),
  },
  {
    id: "warranties",
    title: "Disclaimer of warranties",
    body: (
      <p>To the fullest extent the law allows, the site and templates are provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo;. We give no warranty that templates will be free of bugs, meet your requirements, be compatible with every device, browser, hosting setup or third-party tool, be secure, or produce any particular business result. Nothing in these terms limits any legal right you have that cannot be excluded.</p>
    ),
  },
  {
    id: "liability",
    title: "Limitation of liability",
    body: (
      <>
        <p>To the fullest extent the law allows:</p>
        <ul>
          <li>we are not liable for indirect or consequential loss, or for lost profit, revenue, data, goodwill or business opportunity, arising from use of the site or any template; and</li>
          <li>our total liability to you for any claim relating to the site or a template is limited to the amount you paid us for that template in the 12 months before the claim.</li>
        </ul>
        <p>Nothing excludes liability that cannot lawfully be excluded, including for fraud, or for death or personal injury caused by negligence.</p>
      </>
    ),
  },
  {
    id: "indemnity",
    title: "Indemnity",
    body: (
      <p>You agree to compensate us for losses, claims and reasonable legal costs that result from your breach of these terms or the Licence, your misuse of a template, or the website or content you create with it, to the extent permitted by law.</p>
    ),
  },
  {
    id: "ip-complaints",
    title: "Intellectual property complaints",
    body: (
      <p>If you believe content on Forge infringes your rights, email <a href={`mailto:${site.email}`}>{site.email}</a> with details of the work, where it appears, and your contact information. We will review it promptly and may remove content while we do.</p>
    ),
  },
  {
    id: "ending-your-account",
    title: "Ending your account",
    body: (
      <p>You may stop using Forge and request deletion of your account at any time. We may suspend or end your access if you breach these terms. Sections that by their nature should survive (including licence restrictions, disclaimers, liability limits and governing law) survive termination.</p>
    ),
  },
  {
    id: "governing-law",
    title: "Governing law and disputes",
    body: (
      <p>These terms are governed by the laws of the Republic of Ghana. Please contact us first at <a href={`mailto:${site.email}`}>{site.email}</a> so we can try to resolve any dispute informally. If we cannot, the courts of Ghana have jurisdiction, unless mandatory consumer law where you live gives you the right to go elsewhere.</p>
    ),
  },
  {
    id: "changes",
    title: "Changes to these terms",
    body: (
      <p>We may update these terms. The date at the top shows the latest version. Changes apply to purchases and use after they are posted. Continuing to use Forge after a change means you accept it.</p>
    ),
  },
  {
    id: "general",
    title: "General",
    body: (
      <p>If any part of these terms is found unenforceable, the rest stays in force. Our failure to enforce a right is not a waiver of it. You may not transfer your rights under these terms without our consent. These terms are the entire agreement between you and us about Forge.</p>
    ),
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      current="/terms"
      eyebrow={`Legal · Updated ${site.updated}`}
      title="Terms of service"
      intro="Please read these terms. By creating an account, buying or downloading from Forge, you agree to them."
      highlights={highlights}
      sections={sections}
      contactTitle="Questions about these terms?"
      contact={<>{site.legalName}, {site.location} · <a href={`mailto:${site.email}`}>{site.email}</a></>}
    />
  );
}
