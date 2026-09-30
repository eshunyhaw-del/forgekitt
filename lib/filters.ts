export const industries = [
  "Restaurants & Food", "Bakery & Pastry", "Agriculture & Farming", "Real Estate & Land", "Home, Water & Sanitation",
  "Retail & E-commerce", "Marketing & Advertising", "Construction & Trades", "Transport & Logistics",
  "Hotels & Hospitality", "Beauty & Fashion", "Health & Wellness", "Education & Training",
  "Financial Services", "Legal Services", "Professional Services", "Technology & SaaS",
  "Media & Publishing", "Photography & Film", "Architecture & Interiors", "Creative & Portfolio",
  "Automotive Services", "Events & Entertainment", "Nonprofits & NGOs", "Religious Organizations",
  "Oil & Gas", "Import & Export", "Coaching & Consulting", "Energy & Solar", "Security Services", "Cleaning & Maintenance", "Manufacturing & Production",
];

export const stacks = ["Next.js · TypeScript · Tailwind", "React · Vite · Tailwind", "Astro · Tailwind", "Vanilla JS", "Vue · Nuxt · Tailwind"];

export const templateTypes = ["SaaS", "Portfolio", "E-commerce", "Studio", "Editorial", "Agency"];

export const slugify = (value: string) => value.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
