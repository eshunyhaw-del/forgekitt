import type { Metadata } from "next";
import { ContentPage } from "@/components/content-page";

export const metadata: Metadata = { title: "About", description: "Why Forge builds complete, production-ready website templates for real businesses." };
export default function AboutPage() { return <ContentPage eyebrow="About Forge" title="About Forge." intro="Forge sells website templates for businesses. You buy a template once, download the source code, and build your site from it."><h2>What you get</h2><p>Each template is made for one type of business, such as a restaurant, a clinic or a real estate developer, and includes the pages that business usually needs.</p><h2>How it works</h2><p>You get the source code and a licence to use it for one project. There is no monthly fee.</p></ContentPage>; }
