import type { Metadata } from "next";
import Link from "next/link";
import { ContentPage } from "@/components/content-page";

export const metadata: Metadata = { title: "Contact", description: "Contact Forge about templates, licences, purchases, or partnerships." };
export default function ContactPage() { return <ContentPage eyebrow="Contact" title="How can we help?" intro="Questions about a template, licence, or purchase? Send us a note and include the template name where relevant."><h2>Customer support</h2><p>Email <a href="mailto:hello@forge.example">hello@forge.example</a>. We aim to reply within two business days.</p><h2>Before you write</h2><p>Purchased files will live in <Link href="/dashboard">My library</Link>. Licence coverage is explained on the <Link href="/license">licence page</Link>.</p></ContentPage>; }
