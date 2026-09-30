"use client";

import { useEffect } from "react";

// Keeps the header on screen while scrolling. The light header is sticky in CSS;
// the transparent header on dark pages gets a solid background once the page scrolls.
export function StickyHeader() {
  useEffect(() => {
    const header = document.querySelector<HTMLElement>(".site-header-dark");
    if (!header) return;
    const update = () => header.classList.toggle("header-stuck", window.scrollY > 60);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => { window.removeEventListener("scroll", update); header.classList.remove("header-stuck"); };
  }, []);
  return null;
}
