import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "@/components/icons";
import { SiteHeader } from "@/components/site-header";
import { AuthForm, GoogleAuthButton } from "@/components/auth-form";

export const metadata: Metadata = { title: "Log in", description: "Log in to access your purchased and free website templates.", robots: { index: false, follow: false } };

export default function SignInPage() {
  return <main className="auth-page dark-section"><SiteHeader tone="dark" /><div className="auth-grid"><section><span className="eyebrow"><i /> Your Forge library</span><h1>Pick up where<br />you left off.</h1><p>Access your downloads, repositories, and product updates in one quiet place.</p></section><AuthForm mode="signin"><div><span className="section-number">[ LOG IN ]</span><h2>Welcome back.</h2></div><GoogleAuthButton /><div className="auth-divider"><span>or use email</span></div><label htmlFor="signin-email">Email address<input id="signin-email" type="email" name="email" autoComplete="email" inputMode="email" placeholder="you@company.com" required /></label><label htmlFor="signin-password">Password<input id="signin-password" type="password" name="password" autoComplete="current-password" placeholder="••••••••" minLength={8} required /></label><div className="form-meta"><label className="checkbox"><input type="checkbox" name="remember" /> Keep me signed in</label><Link href="/forgot-password">Forgot password?</Link></div><button className="button button-primary button-wide" type="submit">Log in <ArrowRight /></button><p className="auth-note">New to Forge? <Link href="/signup">Create an account</Link></p></AuthForm></div></main>;
}
