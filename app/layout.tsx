import type { Metadata } from "next";
import localFont from "next/font/local";
import { site } from "@/lib/site";
import "./globals.css";

const inter = localFont({
  src: "../Assets/font/Inter-4.1/web/InterVariable.woff2",
  variable: "--font-inter",
  display: "swap",
  weight: "100 900",
});

const interDisplay = localFont({
  src: "../Assets/font/Inter-4.1/web/InterDisplay-Regular.woff2",
  variable: "--font-display",
  display: "swap",
  weight: "400",
});

const fallbackSiteUrl = process.env.NODE_ENV === "production" ? "https://forgekitt.com" : "http://localhost:3000";
const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
const siteUrl = configuredSiteUrl || fallbackSiteUrl;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Forge | Website templates", template: "%s | Forge" },
  description: "Website templates for businesses. Preview a template, buy it once, and download the source code.",
  applicationName: "Forge",
  manifest: "/manifest.webmanifest",
  openGraph: { type: "website", siteName: "Forge", title: "Forge | Website templates", description: "Website templates for businesses.", url: "/" },
  twitter: { card: "summary_large_image", title: "Forge | Website templates", description: "Website templates for businesses." },
};

export const viewport = { width: "device-width", initialScale: 1, themeColor: [{ media: "(prefers-color-scheme: light)", color: "#f3f3ef" }, { media: "(prefers-color-scheme: dark)", color: "#170101" }] };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${interDisplay.variable}`}>
      <head><script dangerouslySetInnerHTML={{ __html: `(function(){try{var t=localStorage.getItem('forge-theme');if(t!=='light'&&t!=='dark'){t=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}document.documentElement.dataset.theme=t}catch(e){document.documentElement.dataset.theme='light'}})();` }} /></head>
      <body>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Organization", name: "Forge", url: siteUrl, sameAs: [site.youtube, site.x], description: "Website templates for businesses." }) }} /></body>
    </html>
  );
}
