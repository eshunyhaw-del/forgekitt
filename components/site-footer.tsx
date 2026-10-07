import Link from "next/link";
import { Logo } from "@/components/logo";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div>
          <Link className="brand brand-footer" href="/">
            <Logo className="logo-on-dark" />
          </Link>
          <p>Website templates for businesses.</p>
        </div>
        <div className="footer-links">
          <div><span>Explore</span><Link href="/">All templates</Link><Link href="/?price=free">Free templates</Link><Link href="/?price=paid">Premium templates</Link></div>
          <div><span>Company</span><Link href="/about">About</Link><Link href="/academy">Academy</Link><Link href="/contact">Contact</Link><Link href="/dashboard">My library</Link></div>
          <div><span>Follow</span><a href={site.youtube} target="_blank" rel="noopener noreferrer me">YouTube</a><a href={site.x} target="_blank" rel="noopener noreferrer me">X (Twitter)</a></div>
          <div><span>Legal</span><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link><Link href="/license">Licence</Link><Link href="/refunds">Refunds</Link></div>
        </div>
      </div>
      <div className="footer-bottom"><span>© 2026 Forge. All rights reserved.</span><span>One-time price, no subscription.</span><div><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link><Link href="/license">Licence</Link><Link href="/refunds">Refunds</Link></div></div>
    </footer>
  );
}
