export type Template = {
  slug: string;
  title: string;
  category: "SaaS" | "Portfolio" | "E-commerce" | "Studio" | "Editorial" | "Agency";
  industry: string;
  stack: "React · Vite" | "React · Vite · Tailwind" | "Astro" | "Astro · Tailwind" | "Vanilla JS";
  price: number;
  description: string;
  /** Poster image shown before the preview video plays. */
  image: string;
  /** Short silent preview clip (mp4) recorded from the real template. */
  video: string;
  accent: string;
  pages: string[];
  featured?: boolean;
  new?: boolean;
};

export const templates: Template[] = [
  {
    slug: "land-construction", title: "Land & Construction Company", category: "Agency", industry: "Real Estate & Land", stack: "Astro · Tailwind", price: 999,
    description: "A WhatsApp-first website for land sales, serviced plots, surveying, building construction and equipment rentals.",
    image: "/previews/land-construction.jpg", video: "/previews/land-construction.mp4", accent: "#10b981",
    pages: ["Home", "Land & locations", "Services", "How to buy", "Diaspora buyers", "About", "Contact", "FAQ"],
    featured: true,
  },
  {
    slug: "luxury-hotel", title: "Luxury Hotel", category: "Editorial", industry: "Hotels & Hospitality", stack: "Astro", price: 999,
    description: "An editorial hotel website with rooms and suites, dining, wellness, experiences and a reservation request panel.",
    image: "/previews/luxury-hotel.jpg", video: "/previews/luxury-hotel.mp4", accent: "#c9a56a",
    pages: ["Home", "Stay", "Dining", "Wellness", "Experiences", "Contact"],
    featured: true,
  },
  {
    slug: "home-energy", title: "Home Energy Company", category: "Agency", industry: "Energy & Solar", stack: "Astro", price: 999,
    description: "A scroll-choreographed landing page for home batteries, solar and energy products.",
    image: "/previews/home-energy.jpg", video: "/previews/home-energy.mp4", accent: "#f5c518",
    pages: ["One long scroll page"],
    featured: true,
  },
  {
    slug: "bakery-cafe", title: "Bakery & Cafe", category: "E-commerce", industry: "Bakery & Pastry", stack: "Vanilla JS", price: 0,
    description: "A four-page website for cakes, pastries, bread and custom orders, in plain HTML, CSS and JavaScript.",
    image: "/previews/bakery-cafe.jpg", video: "/previews/bakery-cafe.mp4", accent: "#c08457",
    pages: ["Home", "Menu", "About", "Contact"],
    new: true,
  },
  {
    slug: "law-practice", title: "Law Practice", category: "Agency", industry: "Legal Services", stack: "Astro · Tailwind", price: 999,
    description: "A confidential, credibility-first website for barristers, solicitors and boutique law practices.",
    image: "/previews/law-practice.jpg", video: "/previews/law-practice.mp4", accent: "#b91c1c",
    pages: ["Home", "About", "Credibility", "Philosophy", "Practice areas", "Insights", "Enquire", "FAQ"],
  },
  {
    slug: "architecture-studio", title: "Architecture Studio", category: "Studio", industry: "Architecture & Interiors", stack: "Astro · Tailwind", price: 999,
    description: "A multi-page architecture practice website with projects, materials library, journal and careers.",
    image: "/previews/architecture-studio.jpg", video: "/previews/architecture-studio.mp4", accent: "#a8a29e",
    pages: ["Home", "Selected works", "Project detail", "Materiality", "Studio", "Journal", "Careers", "Contact"],
  },
  {
    slug: "residential-architect", title: "Residential Architect", category: "Studio", industry: "Architecture & Interiors", stack: "Astro", price: 499,
    description: "A single-page, image-led website for residential architects and design studios.",
    image: "/previews/residential-architect.jpg", video: "/previews/residential-architect.mp4", accent: "#8d7b68",
    pages: ["Home"],
  },
  {
    slug: "joinery-furniture", title: "Joinery & Furniture Studio", category: "Studio", industry: "Manufacturing & Production", stack: "Astro · Tailwind", price: 999,
    description: "A multi-page site for joiners, furniture makers and cabinet makers, with projects, timber guide and careers.",
    image: "/previews/joinery-furniture.jpg", video: "/previews/joinery-furniture.mp4", accent: "#a16207",
    pages: ["Home", "Services", "Projects", "Materials", "Process", "About", "Journal", "Careers", "Contact"],
  },
  {
    slug: "furniture-maker", title: "Furniture Maker", category: "Studio", industry: "Architecture & Interiors", stack: "Astro", price: 499,
    description: "A calm showroom website for made-to-order furniture, collections and showrooms.",
    image: "/previews/furniture-maker.jpg", video: "/previews/furniture-maker.mp4", accent: "#b8a98f",
    pages: ["Home", "Collection", "Our craft", "Showrooms", "Journal", "Contact"],
  },
  {
    slug: "film-studio", title: "Film Studio", category: "Studio", industry: "Photography & Film", stack: "Astro", price: 499,
    description: "A dark, cinematic site for a director-led film company, with a loader, showreel hero and scroll sections.",
    image: "/previews/film-studio.jpg", video: "/previews/film-studio.mp4", accent: "#e5e5e5",
    pages: ["Home", "Contact"],
  },
  {
    slug: "cybersecurity-company", title: "Cybersecurity Company", category: "Agency", industry: "Technology & SaaS", stack: "Astro", price: 999,
    description: "A calm, editorial corporate site for security companies, with solutions, products, divisions and team.",
    image: "/previews/cybersecurity-company.jpg", video: "/previews/cybersecurity-company.mp4", accent: "#2563eb",
    pages: ["Home", "About", "Team", "Solutions", "Divisions", "Products", "Legal pages"],
  },
  {
    slug: "electrical-contractor", title: "Electrical Contractor", category: "Agency", industry: "Construction & Trades", stack: "Astro", price: 499,
    description: "A complete site for electrical contractors serving residential, commercial, industrial and solar clients.",
    image: "/previews/electrical-contractor.jpg", video: "/previews/electrical-contractor.mp4", accent: "#facc15",
    pages: ["Home", "Services", "Projects", "About", "Contact"],
  },
  {
    slug: "independent-pharmacy", title: "Independent Pharmacy", category: "Agency", industry: "Health & Wellness", stack: "Astro", price: 999,
    description: "A clean, editorial website for independent pharmacies, with services, shop-by-need pages and quality information.",
    image: "/previews/independent-pharmacy.jpg", video: "/previews/independent-pharmacy.mp4", accent: "#16a34a",
    pages: ["Home", "Services", "Shop by need", "About", "Quality & safety", "Contact", "Legal pages"],
  },
  {
    slug: "web-design-agency", title: "Web Design Agency", category: "Agency", industry: "Marketing & Advertising", stack: "Astro", price: 499,
    description: "A two-track (dark and light) website for web design agencies, with work, services, pricing and WhatsApp contact.",
    image: "/previews/web-design-agency.jpg", video: "/previews/web-design-agency.mp4", accent: "#a3e635",
    pages: ["Home", "Work", "Services", "About", "Pricing", "Contact"],
  },
  {
    slug: "agency-portfolio", title: "Agency Portfolio", category: "Portfolio", industry: "Creative & Portfolio", stack: "React · Vite · Tailwind", price: 499,
    description: "A six-page portfolio and services site for design, web and marketing agencies, with a filterable work grid.",
    image: "/previews/agency-portfolio.jpg", video: "/previews/agency-portfolio.mp4", accent: "#6366f1",
    pages: ["Home", "About", "Services", "Pricing", "Our work", "Contact"],
  },
  {
    slug: "developer-portfolio", title: "Developer Portfolio", category: "Portfolio", industry: "Technology & SaaS", stack: "React · Vite", price: 499,
    description: "A four-page personal portfolio for full-stack developers and digital strategists.",
    image: "/previews/developer-portfolio.jpg", video: "/previews/developer-portfolio.mp4", accent: "#c7ff35",
    pages: ["Home", "Work", "About", "Contact"],
  },
  {
    slug: "software-dev-portfolio", title: "Software Developer Portfolio", category: "Portfolio", industry: "Technology & SaaS", stack: "Astro · Tailwind", price: 499,
    description: "A portfolio and freelance-services site for developers, with case studies, writing and a resume page.",
    image: "/previews/software-dev-portfolio.jpg", video: "/previews/software-dev-portfolio.mp4", accent: "#5eead4",
    pages: ["Home", "Work", "Case study", "Services", "About", "Resume", "Writing", "Contact"],
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
