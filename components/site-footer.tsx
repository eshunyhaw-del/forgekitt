import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div>
          <Link className="brand brand-footer" href="/">
            <span className="brand-mark" aria-hidden="true"><i /><i /><i /></span>
            <span>FORGE</span>
          </Link>
          <p>Complete websites for people who are ready to ship.</p>
        </div>
        <div className="footer-links">
          <div><span>Explore</span><Link href="/">All templates</Link><Link href="/?price=free">Free templates</Link><Link href="/?price=paid">Premium templates</Link></div>
          <div><span>Company</span><Link href="/about">About</Link><Link href="/contact">Contact</Link><Link href="/dashboard">My library</Link></div>
          <div><span>Legal</span><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link><Link href="/license">Licence</Link></div>
        </div>
      </div>
      <div className="footer-bottom"><span>© 2026 Forge</span><span>Build less. Launch more.</span><div><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link><Link href="/license">Licence</Link></div></div>
    </footer>
  );
}
