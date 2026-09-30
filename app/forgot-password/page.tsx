import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "@/components/icons";
import { AuthForm } from "@/components/auth-form";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = { title: "Reset your password", description: "Request a secure password reset link for your Forge account.", robots: { index: false, follow: false } };

export default function ForgotPasswordPage() {
  return <main className="auth-page dark-section"><SiteHeader tone="dark" /><div className="auth-grid"><section><span className="eyebrow"><i /> Forgot your password?</span><h1>Reset your<br />password.</h1><p>Enter the email on your account and we’ll send you a link to reset your password.</p></section><AuthForm mode="reset"><div><span className="section-number">Reset password</span><h2>Enter your email.</h2></div><label htmlFor="reset-email">Email address<input id="reset-email" type="email" name="email" autoComplete="email" inputMode="email" placeholder="you@company.com" required /></label><button className="button button-primary button-wide" type="submit">Send reset link <ArrowRight /></button><p className="auth-note">Remembered it? <Link href="/signin">Return to login</Link></p></AuthForm></div></main>;
}
