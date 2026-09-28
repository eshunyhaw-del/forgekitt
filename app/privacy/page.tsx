import type { Metadata } from "next";
import { ContentPage } from "@/components/content-page";

export const metadata: Metadata = { title: "Privacy policy", description: "How Forge handles account, purchase, and website usage information." };
export default function PrivacyPage() { return <ContentPage eyebrow="Legal · Updated September 2026" title="Privacy policy" intro="A concise overview of the information Forge uses to provide accounts, purchases, and customer support."><h2>Information we collect</h2><p>We may collect account details, purchase records, support messages, and basic usage information needed to operate and improve the service.</p><h2>How information is used</h2><p>Information is used to provide downloads, maintain account security, process purchases, respond to support requests, and understand service performance.</p><h2>Your choices</h2><p>You may request access, correction, or deletion of your account information by contacting customer support.</p></ContentPage>; }
