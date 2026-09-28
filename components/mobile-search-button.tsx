"use client";

import { useEffect, useRef, useState } from "react";

export function MobileSearchButton() {
  const [open, setOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", close);
    window.setTimeout(() => inputRef.current?.focus(), 50);
    return () => document.removeEventListener("keydown", close);
  }, [open]);

  return <><button className="mobile-search-button" type="button" aria-label="Search templates" aria-expanded={open} onClick={() => setOpen(true)}><span aria-hidden="true" /></button>{open && <div className="mobile-search-overlay"><button className="mobile-search-dismiss" type="button" aria-label="Close search" onClick={() => setOpen(false)} /><form className="mobile-search-panel" action="/"><label htmlFor="mobile-template-search">Search templates</label><div><input ref={inputRef} id="mobile-template-search" name="q" placeholder="Restaurant, lawyer, online store…" /><button type="submit">Search</button></div><button className="mobile-search-close" type="button" onClick={() => setOpen(false)}>Close</button></form></div>}</>;
}
