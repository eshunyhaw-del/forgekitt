import type { Metadata } from "next";
import Link from "next/link";
import { ContentPage } from "@/components/content-page";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Refund policy", description: "When Forge offers refunds for digital template purchases." };

export default function RefundsPage() {
  return (
    <ContentPage eyebrow={`Legal · Updated ${site.updated}`} title="Refund policy" intro="Templates are digital files that cannot be returned once downloaded, so purchases are generally final. We do fix genuine problems.">
      <h2>General rule</h2>
      <p>When you buy a template you receive immediate access to the source files. Because they can be copied the moment they are downloaded, we do not offer refunds for change of mind, because you no longer need the template, or because it is not what you imagined. Please review the preview, page list and stack before buying. Free templates are not sold and are not refundable.</p>

      <h2>When we will help</h2>
      <p>Contact us within <strong>7 days</strong> of purchase and we will repair, replace or refund (refunding where we cannot fix it) if:</p>
      <ul>
        <li>the files are corrupt, incomplete or will not download;</li>
        <li>the template is materially different from how we described it on its page;</li>
        <li>you were charged more than once for the same template, or were charged but did not get access.</li>
      </ul>
      <p>Please tell us the template name, the email on your account, your payment reference, and what went wrong. We will usually reply within two business days.</p>

      <h2>When a refund is not available</h2>
      <ul>
        <li>Problems caused by your hosting, changes you made, third-party tools, or browser and device limits.</li>
        <li>Requests for customisation, installation or support beyond what was described.</li>
        <li>Accounts suspended for breaking our <Link href="/terms">Terms</Link> or <Link href="/license">Licence</Link>.</li>
      </ul>

      <h2>How refunds are paid</h2>
      <p>Approved refunds go back to the original payment method through Paystack and may take several business days to appear. Refunded templates must no longer be used, and access may be removed.</p>

      <h2>Your legal rights</h2>
      <p>This policy does not limit any consumer rights you have under the law that cannot be excluded.</p>

      <h2>Contact</h2>
      <p><a href={`mailto:${site.email}`}>{site.email}</a></p>
    </ContentPage>
  );
}
