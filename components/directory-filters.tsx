"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const industries = [
  "Restaurants & Food", "Bakery & Pastry", "Agriculture & Farming", "Real Estate & Land", "Home, Water & Sanitation",
  "Retail & E-commerce", "Marketing & Advertising", "Construction & Trades", "Transport & Logistics",
  "Hotels & Hospitality", "Beauty & Fashion", "Health & Wellness", "Education & Training",
  "Financial Services", "Legal Services", "Professional Services", "Technology & SaaS",
  "Media & Publishing", "Photography & Film", "Architecture & Interiors", "Creative & Portfolio",
  "Automotive Services", "Events & Entertainment", "Nonprofits & NGOs", "Religious Organizations",
  "Oil & Gas", "Import & Export", "Coaching & Consulting", "Energy & Solar", "Security Services", "Cleaning & Maintenance", "Manufacturing & Production",
];

const stacks = ["Next.js · TypeScript · Tailwind", "React · Vite · Tailwind", "Astro · Tailwind", "Vanilla JS", "Vue · Nuxt · Tailwind"];

const templateTypes = ["SaaS", "Portfolio", "E-commerce", "Studio", "Editorial", "Agency"];

const slugify = (value: string) => value.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export function DirectoryFilters({ active = {}, basePath = "/templates" }: { active?: Record<string, string | undefined>; basePath?: "/" | "/templates" }) {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const triggerRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  useEffect(() => {
    const closeOnOutsideClick = (event: PointerEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) setOpenMenu(null);
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape" || !openMenu) return;
      const trigger = triggerRefs.current[openMenu];
      setOpenMenu(null);
      trigger?.focus();
    };
    document.addEventListener("pointerdown", closeOnOutsideClick);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closeOnOutsideClick);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [openMenu]);

  return <nav ref={navRef} className="directory-filters" aria-label="Template filters"><div>
    <FilterMenu label="Industry" param="industry" items={industries} active={active.industry} wide open={openMenu === "industry"} onToggle={() => setOpenMenu(openMenu === "industry" ? null : "industry")} triggerRef={(node) => { triggerRefs.current.industry = node; }} basePath={basePath} />
    <FilterMenu label="Tech stack" param="stack" items={stacks} active={active.stack} open={openMenu === "stack"} onToggle={() => setOpenMenu(openMenu === "stack" ? null : "stack")} triggerRef={(node) => { triggerRefs.current.stack = node; }} basePath={basePath} />
    <FilterMenu label="Template type" param="category" items={templateTypes} active={active.category} open={openMenu === "category"} onToggle={() => setOpenMenu(openMenu === "category" ? null : "category")} triggerRef={(node) => { triggerRefs.current.category = node; }} basePath={basePath} />
    <FilterMenu label="Price" param="price" items={["Free", "Paid"]} active={active.price} open={openMenu === "price"} onToggle={() => setOpenMenu(openMenu === "price" ? null : "price")} triggerRef={(node) => { triggerRefs.current.price = node; }} basePath={basePath} />
  </div><Link className="filter-reset" href={basePath}>Reset filters ↺</Link>{openMenu && <button className="filter-dismiss-layer" type="button" aria-label="Close filter menu" onClick={() => setOpenMenu(null)} />}</nav>;
}

function FilterMenu({ label, param, items, active, wide = false, open, onToggle, triggerRef, basePath }: { label: string; param: string; items: string[]; active?: string; wide?: boolean; open: boolean; onToggle: () => void; triggerRef: (node: HTMLButtonElement | null) => void; basePath: "/" | "/templates" }) {
  const [query, setQuery] = useState("");
  const selected = items.find((item) => slugify(item) === active);
  const visibleItems = query ? items.filter((item) => item.toLowerCase().includes(query.toLowerCase().trim())) : items;
  const allLabel = label === "Industry" ? "All industries" : `All ${label.toLowerCase()}s`;
  const menuId = `filter-${param}`;
  return <div className={`filter-menu${wide ? " filter-menu-wide" : ""}`} data-open={open}>
    <button ref={triggerRef} className="filter-menu-trigger" type="button" aria-expanded={open} aria-controls={menuId} onClick={onToggle}><span>{selected ?? label}</span><i aria-hidden="true">⌄</i></button>
    {open && <div id={menuId} className="filter-popover">
      {wide && <label className="filter-search"><span className="sr-only">Search industries</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search industries…" /></label>}
      <Link className={`filter-all${!active ? " active" : ""}`} href={basePath}>{allLabel}</Link>
      {visibleItems.map((item) => <Link key={item} className={active === slugify(item) ? "active" : ""} href={`${basePath}?${param}=${slugify(item)}`}>{item}</Link>)}
      {wide && visibleItems.length === 0 && <span className="filter-empty">No matching industries</span>}
    </div>}
  </div>;
}
