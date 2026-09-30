import Link from "next/link";
import { ArrowRight } from "@/components/icons";

export default function NotFound() {
  return <main className="not-found dark-section"><span>404</span><h1>Page not found.</h1><p>This page doesn’t exist or has moved.</p><Link className="button button-primary" href="/">Return home <ArrowRight /></Link></main>;
}
