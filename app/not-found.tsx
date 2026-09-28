import Link from "next/link";
import { ArrowRight } from "@/components/icons";

export default function NotFound() {
  return <main className="not-found dark-section"><span>404</span><h1>Wrong turn.<br />Good recovery.</h1><p>The page you wanted has moved or never shipped.</p><Link className="button button-primary" href="/">Return home <ArrowRight /></Link></main>;
}
