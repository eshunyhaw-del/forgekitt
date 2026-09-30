import type { Metadata } from "next";
import Link from "next/link";
import { ContentPage } from "@/components/content-page";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Terms of service", description: "The terms that govern using Forge, buying templates, and downloading files." };

export default function TermsPage() {
  return (
    <ContentPage eyebrow={`Legal · Updated ${site.updated}`} title="Terms of service" intro="Please read these terms. By creating an account, buying or downloading from Forge, you agree to them.">
      <h2>1. Who we are and these terms</h2>
      <p>Forge is operated by {site.legalName} in {site.location} (&ldquo;we&rdquo;, &ldquo;us&rdquo;). These terms, together with our <Link href="/license">Licence</Link>, <Link href="/privacy">Privacy policy</Link> and <Link href="/refunds">Refund policy</Link>, form the agreement between you and us. If you do not agree, do not use the site.</p>

      <h2>2. Eligibility and accounts</h2>
      <p>You must be 18 or older (or have the legal capacity to contract where you live). If you buy for a business, you confirm you are authorised to bind it. Keep your login details secret and give us accurate information. You are responsible for activity on your account. Tell us immediately if you suspect unauthorised use.</p>

      <h2>3. What we sell</h2>
      <p>We sell and distribute downloadable website templates (source files). They are digital products delivered by download from your library. We describe each template as accurately as we can, but screenshots and previews are illustrative. You are responsible for checking a template suits your needs before buying.</p>

      <h2>4. Prices and payment</h2>
      <p>Prices are shown in the currency displayed on the page (Ghana cedis, GHS, unless stated) and are charged once per template. You are responsible for any taxes that apply to you. Payments are processed by Paystack, which has its own terms. We do not store your card or mobile-money details. We may correct pricing errors and cancel and refund an order placed at a mistaken price. Access to a paid template begins once Paystack confirms your payment.</p>

      <h2>5. Licence</h2>
      <p>Templates are licensed, not sold. Your rights to use them are set out in our <Link href="/license">Licence</Link>. We and our licensors keep all ownership of the templates. If you break the licence, it ends automatically.</p>

      <h2>6. Digital delivery and refunds</h2>
      <p>Because templates are delivered digitally and can be copied once downloaded, purchases are generally final. By buying, you ask for immediate access and acknowledge that you lose any right to cancel once the download is available, except as set out in our <Link href="/refunds">Refund policy</Link> or as required by law.</p>

      <h2>7. Acceptable use</h2>
      <p>You must not: resell, share, publish or redistribute template files except as the Licence allows; share your account or download links; attempt to bypass payment or access controls; scrape, overload or probe the site for weaknesses; upload malware; use the site for anything unlawful; or impersonate anyone. We may suspend or close accounts that break these rules, without refund where the breach is serious.</p>

      <h2>8. Third-party content and services</h2>
      <p>Templates may include or reference third-party fonts, images, icons, libraries and services that have their own licences and terms. You are responsible for complying with them and for obtaining any rights you need for content you add (logos, text, photos, music). Links to other websites are provided for convenience; we do not control them and are not responsible for them.</p>

      <h2>9. Your responsibility for your website</h2>
      <p>You are solely responsible for the website you build with a template, including its content, legal notices, privacy and cookie disclosures, accessibility, security, hosting, and compliance with laws that apply to your business and customers. Templates are design and code starting points. They are not legal, financial or compliance advice.</p>

      <h2>10. Templates, previews and trademarks</h2>
      <p>Templates are provided as-is for you to adapt. Previews use sample content and third-party names or images for demonstration only, and no affiliation or endorsement is implied. Product and company names belong to their owners. You are responsible for the website you build.</p>

      <h2>11. Availability and changes</h2>
      <p>We work to keep the site and downloads available, but we do not promise uninterrupted or error-free service. We may update, change, withdraw or stop selling a template or feature. If we permanently remove a template you have bought, you keep the files you already downloaded. Any updates or new versions we choose to provide are offered at our discretion and are not guaranteed.</p>

      <h2>12. Disclaimer of warranties</h2>
      <p>To the fullest extent the law allows, the site and templates are provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo;. We give no warranty that templates will be free of bugs, meet your requirements, be compatible with every device, browser, hosting setup or third-party tool, be secure, or produce any particular business result. Nothing in these terms limits any legal right you have that cannot be excluded.</p>

      <h2>13. Limitation of liability</h2>
      <p>To the fullest extent the law allows: (a) we are not liable for indirect or consequential loss, or for lost profit, revenue, data, goodwill or business opportunity, arising from use of the site or any template; and (b) our total liability to you for any claim relating to the site or a template is limited to the amount you paid us for that template in the 12 months before the claim. Nothing excludes liability that cannot lawfully be excluded, including for fraud, or for death or personal injury caused by negligence.</p>

      <h2>14. Indemnity</h2>
      <p>You agree to compensate us for losses, claims and reasonable legal costs that result from your breach of these terms or the Licence, your misuse of a template, or the website or content you create with it, to the extent permitted by law.</p>

      <h2>15. Intellectual property complaints</h2>
      <p>If you believe content on Forge infringes your rights, email <a href={`mailto:${site.email}`}>{site.email}</a> with details of the work, where it appears, and your contact information. We will review it promptly and may remove content while we do.</p>

      <h2>16. Ending your account</h2>
      <p>You may stop using Forge and request deletion of your account at any time. We may suspend or end your access if you breach these terms. Sections that by their nature should survive (including licence restrictions, disclaimers, liability limits and governing law) survive termination.</p>

      <h2>17. Governing law and disputes</h2>
      <p>These terms are governed by the laws of the Republic of Ghana. Please contact us first at <a href={`mailto:${site.email}`}>{site.email}</a> so we can try to resolve any dispute informally. If we cannot, the courts of Ghana have jurisdiction, unless mandatory consumer law where you live gives you the right to go elsewhere.</p>

      <h2>18. Changes to these terms</h2>
      <p>We may update these terms. The date at the top shows the latest version. Changes apply to purchases and use after they are posted. Continuing to use Forge after a change means you accept it.</p>

      <h2>19. General</h2>
      <p>If any part of these terms is found unenforceable, the rest stays in force. Our failure to enforce a right is not a waiver of it. You may not transfer your rights under these terms without our consent. These terms are the entire agreement between you and us about Forge.</p>

      <h2>Contact</h2>
      <p>{site.legalName}, {site.location} · <a href={`mailto:${site.email}`}>{site.email}</a></p>
    </ContentPage>
  );
}
