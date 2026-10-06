import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "@/components/icons";
import { SiteHeader } from "@/components/site-header";
import { AuthForm, GoogleAuthButton } from "@/components/auth-form";
import { PasswordField } from "@/components/password-field";
import { getReturnTemplate, safeNextPath } from "@/lib/templates";

export const metadata: Metadata = { title: "Log in", description: "Log in to access your purchased and free website templates.", robots: { index: false, follow: false } };

export default async function SignInPage({ searchParams }: { searchParams: Promise<{ next?: string }> }) {
  const { next } = await searchParams;
  const target = getReturnTemplate(next);
  const query = safeNextPath(next) ? `?next=${encodeURIComponent(safeNextPath(next)!)}` : "";
  return <main className="auth-page dark-section"><SiteHeader tone="dark" /><div className="auth-grid"><section><span className="eyebrow"><i /> Your Forge library</span>{target ? <><h1>Log in to<br />continue.</h1><p>Log in to get {target.title}. You&apos;ll come straight back to it.</p></> : <><h1>Pick up where<br />you left off.</h1><p>Log in to download your templates. Each ZIP includes a README with the link to the source code.</p></>}</section><AuthForm mode="signin"><div><span className="section-number">Log in</span><h2>Welcome back.</h2></div><GoogleAuthButton /><div className="auth-divider"><span>or use email</span></div><label htmlFor="signin-email">Email address<input id="signin-email" type="email" name="email" autoComplete="email" inputMode="email" placeholder="you@company.com" required /></label><PasswordField id="signin-password" label="Password" autoComplete="current-password" placeholder="••••••••" minLength={8} /><div className="form-meta"><label className="checkbox"><input type="checkbox" name="remember" /> Keep me signed in</label><Link href="/forgot-password">Forgot password?</Link></div><button className="button button-primary button-wide" type="submit">Log in <ArrowRight /></button><p className="auth-note">New to Forge? <Link href={`/signup${query}`}>Create an account</Link></p></AuthForm></div></main>;
}
