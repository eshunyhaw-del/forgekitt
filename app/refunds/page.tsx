import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage, type LegalSection } from "@/components/legal-page";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Refund policy", description: "When Forge offers refunds for digital template purchases." };

const highlights = [
  { title: "Generally final", text: "Templates are digital files that can be copied once downloaded, so we do not refund a change of mind." },
  { title: "Genuine problems are fixed", text: "Corrupt files, a template that is not as described, or a double charge: contact us within 7 days." },
  { title: "Paid back to you", text: "Approved refunds return to the original payment method through Paystack." },
];

const sections: LegalSection[] = [
  {
    id: "general-rule",
    title: "General rule",
    body: (
      <p>When you buy a template you receive immediate access to the source files. Because they can be copied the moment they are downloaded, we do not offer refunds for change of mind, because you no longer need the template, or because it is not what you imagined. Please review the preview, page list and stack before buying. Free templates are not sold and are not refundable.</p>
    ),
  },
  {
    id: "when-we-help",
    title: "When we will help",
    body: (
      <>
        <p>Contact us within <strong>7 days</strong> of purchase and we will repair, replace or refund (refunding where we cannot fix it) if:</p>
        <ul>
          <li>the files are corrupt, incomplete or will not download;</li>
          <li>the template is materially different from how we described it on its page;</li>
          <li>you were charged more than once for the same template, or were charged but did not get access.</li>
        </ul>
        <p>Please tell us the template name, the email on your account, your payment reference, and what went wrong. We will usually reply within two business days.</p>
      </>
    ),
  },
  {
    id: "no-refund",
    title: "When a refund is not available",
    body: (
      <ul>
        <li>Problems caused by your hosting, changes you made, third-party tools, or browser and device limits.</li>
        <li>Requests for customisation, installation or support beyond what was described.</li>
        <li>Accounts suspended for breaking our <Link href="/terms">Terms</Link> or <Link href="/license">Licence</Link>.</li>
      </ul>
    ),
  },
  {
    id: "how-refunds-are-paid",
    title: "How refunds are paid",
    body: (
      <p>Approved refunds go back to the original payment method through Paystack and may take several business days to appear. Refunded templates must no longer be used, and access may be removed.</p>
    ),
  },
  {
    id: "legal-rights",
    title: "Your legal rights",
    body: (
      <p>This policy does not limit any consumer rights you have under the law that cannot be excluded.</p>
    ),
  },
];

export default function RefundsPage() {
  return (
    <LegalPage
      current="/refunds"
      eyebrow={`Legal · Updated ${site.updated}`}
      title="Refund policy"
      intro="Templates are digital files that cannot be returned once downloaded, so purchases are generally final. We do fix genuine problems."
      highlights={highlights}
      sections={sections}
      contactTitle="Need to ask for a refund?"
      contact={<>Email <a href={`mailto:${site.email}`}>{site.email}</a> with your template name, account email and payment reference.</>}
    />
  );
}
