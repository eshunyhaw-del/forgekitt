"use client";

import { useState } from "react";

export function DownloadButton({ slug }: { slug: string }) {
  const [pending, setPending] = useState(false);
  async function download() {
    setPending(true);
    try {
      const response = await fetch(`/api/download/${slug}`);
      const body = await response.json().catch(() => ({}));
      if (!response.ok) { alert(body.error || "This download isn't available right now. Please try again."); return; }
      location.assign(body.url);
    } catch { alert("Something went wrong. Please try again."); }
    finally { setPending(false); }
  }
  return <button className="button button-small button-dark" type="button" onClick={download} disabled={pending}>{pending ? "Preparing…" : "Download ZIP"}</button>;
}
