import type { Metadata } from "next";
import { ContentPage } from "@/components/content-page";

export const metadata: Metadata = { title: "About", description: "Why Forge builds complete, production-ready website templates for real businesses." };
export default function AboutPage() { return <ContentPage eyebrow="About Forge" title="Websites built for real businesses." intro="Forge turns strong design systems into complete websites that founders and teams can adapt, own, and launch."><h2>Complete beats complicated.</h2><p>Every template is organised around a real business category, clear customer journeys, and the pages a credible company needs. The goal is a useful starting point, not a decorative homepage.</p><h2>Designed to be owned.</h2><p>Customers receive source code, a commercial licence, and a reusable system without recurring platform lock-in.</p></ContentPage>; }
