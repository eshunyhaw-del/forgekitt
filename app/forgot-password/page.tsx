import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "@/components/icons";
import { AuthForm } from "@/components/auth-form";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = { title: "Reset your password", description: "Request a secure password reset link for your Forge account.", robots: { index: false, follow: false } };

export default function ForgotPasswordPage() {
  return <main className="auth-page dark-section"><SiteHeader tone="dark" /><div className="auth-grid"><section><span className="eyebrow"><i /> Account recovery</span><h1>Reset your<br />password.</h1><p>Enter the email linked to your library and we’ll prepare a secure reset link.</p></section><AuthForm mode="reset"><div><span className="section-number">[ RESET PASSWORD ]</span><h2>Find your account.</h2></div><label htmlFor="reset-email">Email address<input id="reset-email" type="email" name="email" autoComplete="email" inputMode="email" placeholder="you@company.com" required /></label><button className="button button-primary button-wide" type="submit">Send reset link <ArrowRight /></button><p className="auth-note">Remembered it? <Link href="/signin">Return to login</Link></p></AuthForm></div></main>;
}
