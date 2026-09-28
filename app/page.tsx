import type { Metadata } from "next";
import { TemplateDirectoryPage, type DirectorySearchParams } from "@/components/template-directory-page";

export const metadata: Metadata = { alternates: { canonical: "/" } };

export default function HomePage({ searchParams }: { searchParams: Promise<DirectorySearchParams> }) {
  return <TemplateDirectoryPage searchParams={searchParams} basePath="/" />;
}
