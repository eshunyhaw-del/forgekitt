import type { Metadata } from "next";
import { ContentPage } from "@/components/content-page";

export const metadata: Metadata = { title: "Template licence", description: "The commercial licence included with Forge website templates." };
export default function LicensePage() { return <ContentPage eyebrow="Commercial licence" title="Build for yourself or a client." intro="Each download includes a practical commercial licence designed for shipping real websites."><h2>What is allowed</h2><p>Use and modify a template for your own business or for one client project. Publish the resulting website commercially and adapt the design and code.</p><h2>What is not allowed</h2><p>Do not resell the source files, redistribute them publicly, create a competing template product from them, or claim the original template as your own work.</p><h2>Need broader coverage?</h2><p>Contact Forge before using one purchase across multiple unrelated client projects.</p></ContentPage>; }
