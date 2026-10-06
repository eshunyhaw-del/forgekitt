import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage, type LegalSection } from "@/components/legal-page";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Privacy policy", description: "What personal information Forge collects, why, who sees it, and your rights." };

const highlights = [
  { title: "Very little collected", text: "Browsing needs no personal information. Accounts keep your email, purchases and download records." },
  { title: "No tracking", text: "No advertising, analytics or tracking cookies, so there is no cookie banner." },
  { title: "Never sold", text: "We do not sell your data or use it for advertising, profiling or automated decisions." },
  { title: "Your rights", text: "Ask to see, correct or delete your data any time. We reply within 30 days." },
];

const sections: LegalSection[] = [
  {
    id: "who-we-are",
    title: "Who we are",
    body: (
      <p>{site.legalName} (&ldquo;{site.name}&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) operates this website and sells downloadable website templates from {site.location}. We are the data controller for the personal information described here. Contact us at <a href={`mailto:${site.email}`}>{site.email}</a>.</p>
    ),
  },
  {
    id: "what-we-collect",
    title: "What we collect",
    body: (
      <>
        <ul>
          <li><strong>Account details:</strong> your email address and a password (stored only in scrambled, hashed form, we cannot read it). If you use Google sign-in, we receive your email address and basic profile name from Google.</li>
          <li><strong>Purchase records:</strong> which template you bought, the amount, currency, date and payment reference. We never see or store your card or mobile-money details, payment is handled entirely by Paystack.</li>
          <li><strong>Download records:</strong> which template you downloaded and when, plus a one-way scrambled (hashed) version of your IP address used to prevent abuse. We cannot turn it back into your IP address.</li>
          <li><strong>Messages you send us:</strong> anything you include when you email support.</li>
          <li><strong>Technical data:</strong> your IP address and browser details appear briefly in security and server logs and are used for rate limiting (blocking floods of requests).</li>
        </ul>
        <p>Browsing the site without an account requires no personal information from you.</p>
      </>
    ),
  },
  {
    id: "why-we-use-it",
    title: "Why we use it, and our legal basis",
    body: (
      <>
        <ul>
          <li>To create and secure your account and deliver what you bought (legal basis: performing our contract with you).</li>
          <li>To process payments, keep financial records and meet tax and accounting duties (legal basis: legal obligation).</li>
          <li>To prevent fraud, abuse and unauthorised downloads, and to keep the service running (legal basis: our legitimate interests).</li>
          <li>To reply to your questions (legal basis: your request).</li>
        </ul>
        <p>We do not sell your personal information. We do not use it for advertising, profiling, or automated decisions about you. We only send emails that are needed for your account (confirmation, password reset, purchase receipts). We send no marketing email unless you separately ask for it.</p>
      </>
    ),
  },
  {
    id: "cookies",
    title: "Cookies and similar technologies",
    body: (
      <>
        <p>We do not use advertising, analytics or tracking cookies, and we do not load third-party trackers, so there is no cookie banner to accept. The only things stored on your device are:</p>
        <ul>
          <li><strong>A sign-in session cookie:</strong> set only when you log in, so we know it&apos;s you. It is strictly necessary to provide the service and is removed when you log out or it expires.</li>
          <li><strong>A theme preference</strong> (light or dark) saved in your browser&apos;s local storage. It never leaves your device.</li>
        </ul>
        <p>When you pay, you are taken to Paystack&apos;s secure checkout, and when you choose Google sign-in you are taken to Google. Those companies operate on their own websites and may set their own cookies under their own policies. You can block or delete cookies in your browser settings, but you will not be able to stay logged in.</p>
      </>
    ),
  },
  {
    id: "who-we-share-with",
    title: "Who we share it with",
    body: (
      <>
        <p>Only service providers that we need in order to run the site, each bound to use data only for that purpose:</p>
        <ul>
          <li><strong>Supabase:</strong> database, authentication and file storage.</li>
          <li><strong>Paystack:</strong> payment processing. Paystack is an independent controller of your payment details; see its privacy policy.</li>
          <li><strong>Google:</strong> only if you choose &ldquo;Continue with Google&rdquo;.</li>
          <li><strong>Upstash:</strong> temporary rate-limit counters.</li>
          <li><strong>Our hosting provider:</strong> serves the website.</li>
        </ul>
        <p>We may also disclose information where the law requires it, to respond to valid legal requests, or to protect our rights and users. These providers may process data outside Ghana. Where they do, we rely on their contractual and security safeguards.</p>
      </>
    ),
  },
  {
    id: "how-long",
    title: "How long we keep it",
    body: (
      <>
        <ul>
          <li>Account and library data: for as long as your account exists.</li>
          <li>Purchase and payment records: up to 7 years, for tax and accounting.</li>
          <li>Download logs: up to 12 months.</li>
          <li>Support emails: up to 2 years after the last message.</li>
        </ul>
        <p>When you delete your account we remove or anonymise your personal data, except records we must legally keep.</p>
      </>
    ),
  },
  {
    id: "your-rights",
    title: "Your rights",
    body: (
      <p>Under Ghana&apos;s Data Protection Act, 2012 (Act 843), and similar laws that may apply to you, you may ask us to: tell you what we hold about you, correct it, delete it, limit or object to how we use it, or give you a copy. To use any of these rights, email <a href={`mailto:${site.email}`}>{site.email}</a> from the address on your account. We will respond within 30 days. If you are unhappy with our response, you may complain to the Data Protection Commission of Ghana.</p>
    ),
  },
  {
    id: "security",
    title: "Security",
    body: (
      <p>We use encrypted connections (HTTPS), access controls, hashed passwords, and short-lived download links. No system is perfectly secure. If a breach affects your personal information, we will notify you and the regulator as the law requires.</p>
    ),
  },
  {
    id: "children",
    title: "Children",
    body: (
      <p>Forge is for people aged 18 and over (or the age of majority where you live). We do not knowingly collect information from children. If you believe a child has given us information, tell us and we will delete it.</p>
    ),
  },
  {
    id: "changes",
    title: "Changes",
    body: (
      <p>We may update this policy. The date at the top shows when it last changed. See also our <Link href="/terms">Terms of service</Link> and <Link href="/refunds">Refund policy</Link>.</p>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      current="/privacy"
      eyebrow={`Legal · Updated ${site.updated}`}
      title="Privacy policy"
      intro="We collect as little as we can. No advertising, no tracking, no analytics cookies. This page explains exactly what we do keep."
      highlights={highlights}
      sections={sections}
      contactTitle="Questions about your data?"
      contact={<>{site.legalName}, {site.location} · <a href={`mailto:${site.email}`}>{site.email}</a></>}
    />
  );
}
