export type Template = {
  slug: string;
  title: string;
  category: "SaaS" | "Portfolio" | "E-commerce" | "Studio" | "Editorial" | "Agency";
  industry: string;
  stack: "Next.js · TypeScript · Tailwind" | "React · Vite · Tailwind" | "Astro · Tailwind" | "Vanilla JS" | "Vue · Nuxt · Tailwind";
  price: number;
  description: string;
  image: string;
  accent: string;
  pages: string[];
  featured?: boolean;
  new?: boolean;
};

export const templates: Template[] = [
  {
    slug: "relay",
    title: "Real Estate Developer",
    category: "Agency",
    industry: "Real Estate & Land",
    stack: "Next.js · TypeScript · Tailwind",
    price: 49,
    description: "A property website for estate developers selling homes, apartments, and serviced plots.",
    image: "/previews/relay.svg",
    accent: "#ff5a36",
    pages: ["Home", "Developments", "Property detail", "Land sales", "About", "Book a viewing"],
    featured: true,
  },
  {
    slug: "monument",
    title: "Sanitary Ware Store",
    category: "Studio",
    industry: "Home, Water & Sanitation",
    stack: "Astro · Tailwind",
    price: 39,
    description: "A catalogue for water closets, basins, showers, tiles, and bathroom accessories.",
    image: "/previews/monument.svg",
    accent: "#d7ff38",
    pages: ["Home", "Shop", "Product detail", "Brands", "Projects", "Request a quote"],
    featured: true,
  },
  {
    slug: "loam",
    title: "Lingerie Boutique",
    category: "E-commerce",
    industry: "Beauty & Fashion",
    stack: "Next.js · TypeScript · Tailwind",
    price: 59,
    description: "An online boutique for lingerie, sleepwear, shapewear, and intimate collections.",
    image: "/previews/loam.svg",
    accent: "#d7b894",
    pages: ["Home", "Collections", "Product", "Size guide", "Cart", "Our story"],
    featured: true,
    new: true,
  },
  {
    slug: "signal",
    title: "Bakery & Pastry",
    category: "E-commerce",
    industry: "Bakery & Pastry",
    stack: "Vanilla JS",
    price: 1,
    description: "A website for cakes, pastries, bread, catering, and custom orders.",
    image: "/previews/signal.svg",
    accent: "#e7ff56",
    pages: ["Home", "Menu", "Custom cakes", "Gallery", "Order", "Contact"],
  },
  {
    slug: "northstar",
    title: "Law Firm",
    category: "Agency",
    industry: "Legal Services",
    stack: "Astro · Tailwind",
    price: 29,
    description: "A legal website for chambers, solicitors, consultants, and specialist practices.",
    image: "/previews/northstar.svg",
    accent: "#89b6ff",
    pages: ["Home", "Practice areas", "Attorneys", "Insights", "About", "Consultation"],
  },
  {
    slug: "catalogue",
    title: "Online Coach",
    category: "Portfolio",
    industry: "Coaching & Consulting",
    stack: "Vanilla JS",
    price: 0,
    description: "A personal brand site for coaches, consultants, speakers, and course creators.",
    image: "/previews/catalogue.svg",
    accent: "#f0ff00",
    pages: ["Home", "Programmes", "About", "Success stories", "Resources", "Book a call"],
    new: true,
  },
  {
    slug: "afterlight", title: "Restaurant & Lounge", category: "E-commerce", industry: "Restaurants & Food", stack: "Astro · Tailwind", price: 34,
    description: "A restaurant website for menus, reservations, events, delivery, and private dining.", image: "/previews/afterlight.svg", accent: "#e8b9a6",
    pages: ["Home", "Menu", "Reservations", "Private dining", "Gallery", "Contact"],
  },
  {
    slug: "matter", title: "Oil & Gas Company", category: "Agency", industry: "Oil & Gas", stack: "React · Vite · Tailwind", price: 45,
    description: "A corporate website for petroleum, energy, engineering, supply, and downstream operations.", image: "/previews/matter.svg", accent: "#f06b35",
    pages: ["Home", "Operations", "Services", "Projects", "Sustainability", "Contact"],
  },
  {
    slug: "arc", title: "Import & Export", category: "Agency", industry: "Import & Export", stack: "Vanilla JS", price: 0,
    description: "A business website for traders, distributors, freight partners, and sourcing companies.", image: "/previews/arc.svg", accent: "#5e7cff",
    pages: ["Home", "Products", "Markets", "Logistics", "Company", "Request a quote"],
  },
  {
    slug: "fieldnotes", title: "Agribusiness", category: "Agency", industry: "Agriculture & Farming", stack: "Astro · Tailwind", price: 29,
    description: "A website for farms, processors, input suppliers, exporters, and agricultural projects.", image: "/previews/fieldnotes.svg", accent: "#71875a",
    pages: ["Home", "Products", "Farm operations", "Distribution", "Impact", "Contact"],
  },
  {
    slug: "unit", title: "Online Store", category: "E-commerce", industry: "Retail & E-commerce", stack: "Vue · Nuxt · Tailwind", price: 55,
    description: "An e-commerce storefront for fashion, electronics, beauty, homeware, and general retail.", image: "/previews/unit.svg", accent: "#cd0407",
    pages: ["Home", "Shop", "Product", "Collections", "Cart", "Account"],
  },
  {
    slug: "common", title: "Marketing Agency", category: "Agency", industry: "Marketing & Advertising", stack: "Next.js · TypeScript · Tailwind", price: 49,
    description: "An agency website for branding, social media, advertising, content, and campaign teams.", image: "/previews/common.svg", accent: "#c7a574",
    pages: ["Home", "Services", "Work", "Case study", "Agency", "Start a project"],
  },
  {
    slug: "dental-clinic", title: "Dental Clinic", category: "Agency", industry: "Health & Wellness", stack: "Next.js · TypeScript · Tailwind", price: 49,
    description: "A clinic website for dental services, specialists, appointments, and patient education.", image: "/previews/northstar.svg", accent: "#89b6ff",
    pages: ["Home", "Services", "Dentists", "Patient guide", "About", "Book appointment"],
  },
  {
    slug: "school-academy", title: "School & Academy", category: "Editorial", industry: "Education & Training", stack: "Astro · Tailwind", price: 39,
    description: "A website for schools, academies, training centres, and private tutors.", image: "/previews/fieldnotes.svg", accent: "#71875a",
    pages: ["Home", "Programmes", "Admissions", "Campus", "News", "Contact"],
  },
  {
    slug: "hotel-resort", title: "Hotel & Resort", category: "E-commerce", industry: "Hotels & Hospitality", stack: "Next.js · TypeScript · Tailwind", price: 59,
    description: "A hospitality website for rooms, dining, experiences, and direct bookings.", image: "/previews/afterlight.svg", accent: "#e8b9a6",
    pages: ["Home", "Rooms", "Room detail", "Dining", "Experiences", "Book now"],
    featured: true,
  },
  {
    slug: "logistics-company", title: "Logistics Company", category: "Agency", industry: "Transport & Logistics", stack: "React · Vite · Tailwind", price: 45,
    description: "A corporate website for freight, haulage, warehousing, delivery, and customs services.", image: "/previews/relay.svg", accent: "#ff5a36",
    pages: ["Home", "Services", "Fleet", "Tracking", "Company", "Request a quote"],
  },
  {
    slug: "solar-energy", title: "Solar Energy Company", category: "Agency", industry: "Energy & Solar", stack: "Next.js · TypeScript · Tailwind", price: 55,
    description: "A website for solar installations, batteries, inverters, and energy audits.", image: "/previews/matter.svg", accent: "#f0ff00",
    pages: ["Home", "Solutions", "Projects", "Savings calculator", "About", "Get a quote"],
    new: true,
  },
  {
    slug: "auto-dealership", title: "Auto Dealership", category: "E-commerce", industry: "Automotive Services", stack: "Vue · Nuxt · Tailwind", price: 59,
    description: "A vehicle catalogue for dealerships, importers, rentals, and auto marketplaces.", image: "/previews/catalogue.svg", accent: "#f0ff00",
    pages: ["Home", "Inventory", "Vehicle detail", "Financing", "Trade-in", "Contact"],
  },
  {
    slug: "construction-company", title: "Construction Company", category: "Agency", industry: "Construction & Trades", stack: "Astro · Tailwind", price: 45,
    description: "A website for contractors, engineers, quantity surveyors, and building firms.", image: "/previews/monument.svg", accent: "#d7ff38",
    pages: ["Home", "Projects", "Project detail", "Services", "Company", "Request a tender"],
  },
  {
    slug: "beauty-salon", title: "Beauty Salon & Spa", category: "Portfolio", industry: "Beauty & Fashion", stack: "Astro · Tailwind", price: 34,
    description: "A booking website for salons, spas, makeup artists, and wellness studios.", image: "/previews/loam.svg", accent: "#d7b894",
    pages: ["Home", "Treatments", "Pricing", "Gallery", "Team", "Book now"],
  },
  {
    slug: "event-planner", title: "Event Planner", category: "Portfolio", industry: "Events & Entertainment", stack: "Vanilla JS", price: 29,
    description: "A visual portfolio and enquiry website for weddings, corporate events, and production teams.", image: "/previews/signal.svg", accent: "#e7ff56",
    pages: ["Home", "Events", "Event detail", "Services", "About", "Plan an event"],
  },
  {
    slug: "ngo-charity", title: "NGO & Charity", category: "Editorial", industry: "Nonprofits & NGOs", stack: "Astro · Tailwind", price: 0,
    description: "A website for nonprofits, foundations, community groups, and social initiatives.", image: "/previews/fieldnotes.svg", accent: "#71875a",
    pages: ["Home", "Programmes", "Impact", "Stories", "About", "Donate"],
  },
  {
    slug: "pharmacy-health", title: "Pharmacy & Health Store", category: "E-commerce", industry: "Health & Wellness", stack: "Next.js · TypeScript · Tailwind", price: 49,
    description: "A product catalogue for pharmacies, wellness shops, and medical suppliers.", image: "/previews/common.svg", accent: "#c7a574",
    pages: ["Home", "Shop", "Product", "Health services", "Cart", "Contact"],
  },
  {
    slug: "security-company", title: "Security Company", category: "Agency", industry: "Security Services", stack: "React · Vite · Tailwind", price: 39,
    description: "A lead-generation website for guarding, CCTV, monitoring, and risk services.", image: "/previews/arc.svg", accent: "#5e7cff",
    pages: ["Home", "Services", "Industries", "Operations", "Company", "Security assessment"],
  },
];

export function getTemplate(slug: string) {
  return templates.find((template) => template.slug === slug);
}

export function formatPrice(price: number) {
  if (price === 0) return "Free";
  const currency = process.env.NEXT_PUBLIC_STORE_CURRENCY || "GHS";
  return new Intl.NumberFormat("en-GH", { style: "currency", currency, maximumFractionDigits: 0 }).format(price);
}
