import type { Metadata } from "next";
import { TemplateDirectoryPage, type DirectorySearchParams } from "@/components/template-directory-page";

export const metadata: Metadata = { title: "Business website templates", description: "Browse complete, conversion-ready website templates for restaurants, property companies, shops, coaches, and more.", alternates: { canonical: "/templates" } };

export default function TemplatesPage({ searchParams }: { searchParams: Promise<DirectorySearchParams> }) {
  return <TemplateDirectoryPage searchParams={searchParams} basePath="/templates" />;
}
