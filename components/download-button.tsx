"use client";

import { useState } from "react";

export function DownloadButton({ slug }: { slug: string }) {
  const [pending, setPending] = useState(false);
  async function download() {
    setPending(true);
    try {
      const response = await fetch(`/api/download/${slug}`);
      const body = await response.json();
      if (!response.ok) throw new Error(body.error || "Download unavailable.");
      location.assign(body.url);
    } catch (error) { alert(error instanceof Error ? error.message : "Download unavailable."); }
    finally { setPending(false); }
  }
  return <button className="button button-small button-dark" type="button" onClick={download} disabled={pending}>{pending ? "Preparing…" : "Download ZIP"}</button>;
}
