import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckIcon } from "@/components/icons";
import { SiteHeader } from "@/components/site-header";
import { AuthForm, GoogleAuthButton } from "@/components/auth-form";

export const metadata: Metadata = {
  title: "Create your account",
  description: "Create a free Forge account to download templates and access your library.",
  robots: { index: false, follow: false },
};

export default function SignUpPage() {
  return (
    <main className="auth-page dark-section">
      <SiteHeader tone="dark" />
      <div className="auth-grid">
        <section>
          <span className="eyebrow"><i /> Free to start</span>
          <h1>Create your<br />Forge account.</h1>
          <p>Grab free templates instantly and keep every purchase in one library — yours forever.</p>
          <ul className="pricing-cards" style={{ display: "grid", gap: ".8rem", marginTop: "2rem", listStyle: "none", padding: 0 }}>
            <li style={{ display: "flex", gap: ".55rem", alignItems: "center", fontSize: ".82rem", color: "rgba(255,255,255,.8)" }}><CheckIcon /> Instant downloads, no card required</li>
            <li style={{ display: "flex", gap: ".55rem", alignItems: "center", fontSize: ".82rem", color: "rgba(255,255,255,.8)" }}><CheckIcon /> Full source code &amp; commercial license</li>
            <li style={{ display: "flex", gap: ".55rem", alignItems: "center", fontSize: ".82rem", color: "rgba(255,255,255,.8)" }}><CheckIcon /> One library for every template</li>
          </ul>
        </section>
        <AuthForm mode="signup">
          <div>
            <span className="section-number">[ SIGN UP ]</span>
            <h2>Get started.</h2>
          </div>
          <GoogleAuthButton />
          <div className="auth-divider"><span>or use email</span></div>
          <label htmlFor="signup-email">Email address<input id="signup-email" type="email" name="email" autoComplete="email" inputMode="email" placeholder="you@company.com" required /></label>
          <label htmlFor="signup-password">Password<input id="signup-password" type="password" name="password" autoComplete="new-password" placeholder="At least 8 characters" minLength={8} required /></label>
          <div className="form-meta">
            <label className="checkbox"><input type="checkbox" required /> I agree to the <Link href="/terms">Terms</Link> and <Link href="/privacy">Privacy Policy</Link></label>
          </div>
          <button className="button button-primary button-wide" type="submit">Create account <ArrowRight /></button>
          <p className="auth-note">Already have an account? <Link href="/signin">Log in</Link></p>
        </AuthForm>
      </div>
    </main>
  );
}
