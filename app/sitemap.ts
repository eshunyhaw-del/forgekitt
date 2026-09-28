import type { MetadataRoute } from "next";
import { templates } from "@/lib/templates";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  const staticPages = ["", "/templates", "/about", "/contact", "/privacy", "/terms", "/license"];
  return [
    ...staticPages.map((path) => ({ url: `${base}${path}`, lastModified: new Date(), changeFrequency: path === "" ? "weekly" as const : "monthly" as const, priority: path === "" ? 1 : .7 })),
    ...templates.map((template) => ({ url: `${base}/templates/${template.slug}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: .8 })),
  ];
}
