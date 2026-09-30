import type { Metadata } from "next";
import { ArrowRight } from "@/components/icons";
import { AuthForm } from "@/components/auth-form";
import { PasswordField } from "@/components/password-field";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = { title: "Choose a new password", robots: { index: false, follow: false } };
export default function UpdatePasswordPage() {
  return <main className="auth-page dark-section"><SiteHeader tone="dark" /><div className="auth-grid"><section><span className="eyebrow"><i /> Password reset</span><h1>Choose a new<br />password.</h1><p>Use at least eight characters and avoid a password you use elsewhere.</p></section><AuthForm mode="update"><div><span className="section-number">New password</span><h2>New password.</h2></div><PasswordField id="new-password" label="New password" autoComplete="new-password" minLength={8} /><button className="button button-primary button-wide" type="submit">Update password <ArrowRight /></button></AuthForm></div></main>;
}
