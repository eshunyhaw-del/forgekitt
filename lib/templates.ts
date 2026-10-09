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
  /** Live demo URL (a Cloudflare Pages or Workers site). Falls back to https://forgekitt-<slug>.netlify.app. */
  previewUrl?: string;
};

export const templates: Template[] = [
  {
    slug: "land-construction", title: "Land & Construction Company", category: "Agency", industry: "Real Estate & Land", stack: "Astro · Tailwind", price: 999,
    description: "A WhatsApp-first website for land sales, serviced plots, surveying, building construction and equipment rentals.",
    image: "/previews/land-construction.jpg", video: "/previews/land-construction.mp4", accent: "#10b981",
    pages: ["Home", "Land & locations", "Services", "How to buy", "Diaspora buyers", "About", "Contact", "FAQ"],
    featured: true, new: true,
    previewUrl: "https://forgekitt-land-construction.pages.dev/",
  },
  {
    slug: "luxury-hotel", title: "Luxury Hotel", category: "Editorial", industry: "Hotels & Hospitality", stack: "Astro", price: 999,
    description: "An editorial hotel website with rooms and suites, dining, wellness, experiences and a reservation request panel.",
    image: "/previews/luxury-hotel.jpg", video: "/previews/luxury-hotel.mp4", accent: "#c9a56a",
    pages: ["Home", "Stay", "Dining", "Wellness", "Experiences", "Contact"],
    featured: true, new: true,
    previewUrl: "https://forgekitt-luxury-hotel.pages.dev/",
  },
  {
    slug: "bakery-cafe", title: "Bakery & Cafe", category: "E-commerce", industry: "Bakery & Pastry", stack: "Vanilla JS", price: 0,
    description: "A four-page website for cakes, pastries, bread and custom orders, in plain HTML, CSS and JavaScript.",
    image: "/previews/bakery-cafe.jpg", video: "/previews/bakery-cafe.mp4", accent: "#c08457",
    pages: ["Home", "Menu", "About", "Contact"],
    new: true,
    previewUrl: "https://forgekitt-bakery-cafe.pages.dev/",
  },
  {
    slug: "law-practice", title: "Law Practice", category: "Agency", industry: "Legal Services", stack: "Astro · Tailwind", price: 999,
    description: "A confidential, credibility-first website for barristers, solicitors and boutique law practices.",
    image: "/previews/law-practice.jpg", video: "/previews/law-practice.mp4", accent: "#b91c1c",
    pages: ["Home", "About", "Credibility", "Philosophy", "Practice areas", "Insights", "Enquire", "FAQ"],
    previewUrl: "https://forgekitt-law-practice.pages.dev/",
  },
  {
    slug: "architecture-studio", title: "Architecture Studio", category: "Studio", industry: "Architecture & Interiors", stack: "Astro · Tailwind", price: 999,
    description: "A multi-page architecture practice website with projects, materials library, journal and careers.",
    image: "/previews/architecture-studio.jpg", video: "/previews/architecture-studio.mp4", accent: "#a8a29e",
    pages: ["Home", "Selected works", "Project detail", "Materiality", "Studio", "Journal", "Careers", "Contact"],
    previewUrl: "https://forgekitt-architecture-studio.pages.dev/",
  },
  {
    slug: "residential-architect", title: "Residential Architect", category: "Studio", industry: "Architecture & Interiors", stack: "Astro", price: 499,
    description: "A single-page, image-led website for residential architects and design studios.",
    image: "/previews/residential-architect.jpg", video: "/previews/residential-architect.mp4", accent: "#8d7b68",
    pages: ["Home"],
    previewUrl: "https://forgekitt-residential-architect.eshunyhaw.workers.dev/",
  },
  {
    slug: "joinery-furniture", title: "Joinery & Furniture Studio", category: "Studio", industry: "Manufacturing & Production", stack: "Astro · Tailwind", price: 999,
    description: "A multi-page site for joiners, furniture makers and cabinet makers, with projects, timber guide and careers.",
    image: "/previews/joinery-furniture.jpg", video: "/previews/joinery-furniture.mp4", accent: "#a16207",
    pages: ["Home", "Services", "Projects", "Materials", "Process", "About", "Journal", "Careers", "Contact"],
    previewUrl: "https://forgekitt-joinery-furniture.pages.dev/",
  },
  {
    slug: "furniture-maker", title: "Furniture Maker", category: "Studio", industry: "Architecture & Interiors", stack: "Astro", price: 499,
    description: "A calm showroom website for made-to-order furniture, collections and showrooms.",
    image: "/previews/furniture-maker.jpg", video: "/previews/furniture-maker.mp4", accent: "#b8a98f",
    pages: ["Home", "Collection", "Our craft", "Showrooms", "Journal", "Contact"],
    previewUrl: "https://forgekitt-furniture-maker.pages.dev/",
  },
  {
    slug: "film-studio", title: "Film Studio", category: "Studio", industry: "Photography & Film", stack: "Astro", price: 499,
    description: "A dark, cinematic site for a director-led film company, with a loader, showreel hero and scroll sections.",
    image: "/previews/film-studio.jpg", video: "/previews/film-studio.mp4", accent: "#e5e5e5",
    pages: ["Home", "Contact"],
    previewUrl: "https://forgekitt-film-studio.pages.dev/",
  },
  {
    slug: "cybersecurity-company", title: "Cybersecurity Company", category: "Agency", industry: "Technology & SaaS", stack: "Astro", price: 999,
    description: "A calm, editorial corporate site for security companies, with solutions, products, divisions and team.",
    image: "/previews/cybersecurity-company.jpg", video: "/previews/cybersecurity-company.mp4", accent: "#2563eb",
    pages: ["Home", "About", "Team", "Solutions", "Divisions", "Products", "Legal pages"],
    previewUrl: "https://forgekitt-cybersecurity-company.pages.dev/",
  },
  {
    slug: "electrical-contractor", title: "Electrical Contractor", category: "Agency", industry: "Construction & Trades", stack: "Astro", price: 499,
    description: "A complete site for electrical contractors serving residential, commercial, industrial and solar clients.",
    image: "/previews/electrical-contractor.jpg", video: "/previews/electrical-contractor.mp4", accent: "#facc15",
    pages: ["Home", "Services", "Projects", "About", "Contact"],
    previewUrl: "https://forgekitt-electrical-contractor.pages.dev/",
  },
  {
    slug: "independent-pharmacy", title: "Independent Pharmacy", category: "Agency", industry: "Health & Wellness", stack: "Astro", price: 999,
    description: "A clean, editorial website for independent pharmacies, with services, shop-by-need pages and quality information.",
    image: "/previews/independent-pharmacy.jpg", video: "/previews/independent-pharmacy.mp4", accent: "#16a34a",
    pages: ["Home", "Services", "Shop by need", "About", "Quality & safety", "Contact", "Legal pages"],
    previewUrl: "https://forgekitt-independent-pharmacy.pages.dev/",
  },
  {
    slug: "web-design-agency", title: "Web Design Agency", category: "Agency", industry: "Marketing & Advertising", stack: "Astro", price: 499,
    description: "A two-track (dark and light) website for web design agencies, with work, services, pricing and WhatsApp contact.",
    image: "/previews/web-design-agency.jpg", video: "/previews/web-design-agency.mp4", accent: "#a3e635",
    pages: ["Home", "Work", "Services", "About", "Pricing", "Contact"],
    previewUrl: "https://forgekitt-web-design-agency.pages.dev/",
  },
  {
    slug: "agency-portfolio", title: "Agency Portfolio", category: "Portfolio", industry: "Creative & Portfolio", stack: "React · Vite · Tailwind", price: 499,
    description: "A six-page portfolio and services site for design, web and marketing agencies, with a filterable work grid.",
    image: "/previews/agency-portfolio.jpg", video: "/previews/agency-portfolio.mp4", accent: "#6366f1",
    pages: ["Home", "About", "Services", "Pricing", "Our work", "Contact"],
    previewUrl: "https://forgekitt-agency-portfolio.pages.dev/",
  },
  {
    slug: "developer-portfolio", title: "Developer Portfolio", category: "Portfolio", industry: "Technology & SaaS", stack: "React · Vite", price: 499,
    description: "A four-page personal portfolio for full-stack developers and digital strategists.",
    image: "/previews/developer-portfolio.jpg", video: "/previews/developer-portfolio.mp4", accent: "#c7ff35",
    pages: ["Home", "Work", "About", "Contact"],
    previewUrl: "https://forgekitt-developer-portfolio.pages.dev/",
  },
  {
    slug: "software-dev-portfolio", title: "Software Developer Portfolio", category: "Portfolio", industry: "Technology & SaaS", stack: "Astro · Tailwind", price: 499,
    description: "A portfolio and freelance-services site for developers, with case studies, writing and a resume page.",
    image: "/previews/software-dev-portfolio.jpg", video: "/previews/software-dev-portfolio.mp4", accent: "#5eead4",
    pages: ["Home", "Work", "Case study", "Services", "About", "Resume", "Writing", "Contact"],
    previewUrl: "https://forgekitt-software-dev-portfolio.eshunyhaw.workers.dev/",
  },
  {
    slug: "interior-design-studio", title: "Interior Design Studio", category: "Studio", industry: "Architecture & Interiors", stack: "Astro", price: 499,
    description: "A typographic interior design studio website for hospitality and residential projects.",
    image: "/previews/interior-design-studio.jpg", video: "/previews/interior-design-studio.mp4", accent: "#6b5d4a",
    pages: ["Home", "About us", "Projects", "Gallery", "Contact"],
    new: true,
    previewUrl: "https://forgekitt-interior-design-studio.eshunyhaw.workers.dev/",
  },
  {
    slug: "creative-developer-portfolio", title: "Creative Developer Portfolio", category: "Portfolio", industry: "Creative & Portfolio", stack: "Astro", price: 499,
    description: "An immersive WebGL portfolio for a creative developer with animated project pages.",
    image: "/previews/creative-developer-portfolio.jpg", video: "/previews/creative-developer-portfolio.mp4", accent: "#ff5a1f",
    pages: ["One immersive scroll with project pages"],
    new: true,
    previewUrl: "https://forgekitt-creative-developer-portfolio.eshunyhaw.workers.dev/",
  },
  {
    slug: "software-studio", title: "Software Studio", category: "Studio", industry: "Technology & SaaS", stack: "Astro", price: 499,
    description: "A one-page software studio website with a halftone hero, services, process and a project enquiry section.",
    image: "/previews/software-studio.jpg", video: "/previews/software-studio.mp4", accent: "#6d3df5",
    pages: ["One long scroll page"],
    new: true,
    previewUrl: "https://forgekitt-software-studio.eshunyhaw.workers.dev/",
  },
  {
    slug: "headphone-product-launch", title: "Headphone Product Launch", category: "E-commerce", industry: "Retail & E-commerce", stack: "Astro", price: 999,
    description: "A product launch page with a drag-to-rotate 3D headphone viewer, feature callouts and a reservation form.",
    image: "/previews/headphone-product-launch.jpg", video: "/previews/headphone-product-launch.mp4", accent: "#c97a3a",
    pages: ["One 3D scroll page"],
    new: true,
    previewUrl: "https://forgekitt-headphone-product-launch.eshunyhaw.workers.dev/",
  },
  {
    slug: "architect-portfolio", title: "Architect Portfolio", category: "Studio", industry: "Architecture & Interiors", stack: "Astro", price: 999,
    description: "A hand-drawn architect portfolio with a blueprint hover effect, nine project pages and a contact page.",
    image: "/previews/architect-portfolio.jpg", video: "/previews/architect-portfolio.mp4", accent: "#2f3bff",
    pages: ["Home", "Selected work", "9 project pages", "Contact"],
    new: true,
    previewUrl: "https://forgekitt-architect-portfolio.eshunyhaw.workers.dev/",
  },
  {
    slug: "photography-portfolio", title: "Photography Portfolio", category: "Portfolio", industry: "Photography & Film", stack: "Astro", price: 499,
    description: "A landscape photographer portfolio with a 3D scroll gallery of tilted photo panels, an about page and a contact form.",
    image: "/previews/photography-portfolio.jpg", video: "/previews/photography-portfolio.mp4", accent: "#8a8578",
    pages: ["Home (3D gallery)", "About", "Contact"],
    new: true,
    previewUrl: "https://forgekitt-photography-portfolio.eshunyhaw.workers.dev/",
  },
  {
    slug: "golf-resort", title: "Golf Resort & Members' Club", category: "Editorial", industry: "Hotels & Hospitality", stack: "Astro", price: 999,
    description: "An eleven-page golf resort website with the course, clubhouse, dining and stays, academy, membership, events and booking.",
    image: "/previews/golf-resort.jpg", video: "/previews/golf-resort.mp4", accent: "#3f5a46",
    pages: ["Home", "Course", "Clubhouse", "Dining & stays", "Academy", "Membership", "Events", "Nature", "Gallery", "Visit & book", "Contact"],
    new: true,
    previewUrl: "https://forgekitt-golf-resort.eshunyhaw.workers.dev/",
  },
  {
    slug: "glass-lens-studio", title: "Glass Lens Studio", category: "Studio", industry: "Creative & Portfolio", stack: "Astro", price: 499,
    description: "A type and design studio site built around a glass lens that magnifies the giant headline, with about and contact pages.",
    image: "/previews/glass-lens-studio.jpg", video: "/previews/glass-lens-studio.mp4", accent: "#8ce04a",
    pages: ["Home", "About", "Contact"],
    new: true,
    previewUrl: "https://forgekitt-glass-lens-studio.pages.dev/",
  },
  {
    slug: "brand-motion-designer", title: "Brand & Motion Designer", category: "Portfolio", industry: "Creative & Portfolio", stack: "Astro", price: 999,
    description: "A bold designer portfolio with a showreel, project case studies, a blog, a small shop with a cart and a contact page.",
    image: "/previews/brand-motion-designer.jpg", video: "/previews/brand-motion-designer.mp4", accent: "#111111",
    pages: ["Home", "About", "Projects", "Blog", "Shop", "Contact"],
    new: true,
    previewUrl: "https://forgekitt-brand-motion-designer.eshunyhaw.workers.dev/",
  },
  {
    slug: "fintech-card-showcase", title: "Fintech Card Showcase", category: "SaaS", industry: "Financial Services", stack: "Astro", price: 499,
    description: "A card product landing page where six debit cards somersault on a draggable wheel, with an email signup box.",
    image: "/previews/fintech-card-showcase.jpg", video: "/previews/fintech-card-showcase.mp4", accent: "#e4f222",
    pages: ["One interactive page"],
    new: true,
    previewUrl: "https://forgekitt-fintech-card-showcase.eshunyhaw.workers.dev/",
  },
  {
    slug: "aurora-ribbon-hero", title: "Aurora Animated Hero", category: "SaaS", industry: "Technology & SaaS", stack: "Astro", price: 499,
    description: "A WebGL iridescent ribbon hero with a typed headline, five style presets and a live tune panel.",
    image: "/previews/aurora-ribbon-hero.jpg", video: "/previews/aurora-ribbon-hero.mp4", accent: "#a855f7",
    pages: ["One animated hero page"],
    new: true,
    previewUrl: "https://forgekitt-aurora-ribbon-hero.eshunyhaw.workers.dev/",
  },
  {
    slug: "fashion-clothing-store", title: "Fashion Clothing Store", category: "E-commerce", industry: "Beauty & Fashion", stack: "Astro", price: 999,
    description: "A clothing store with product and category pages, a blog with authors, policy pages and an animated cart drawer.",
    image: "/previews/fashion-clothing-store.jpg", video: "/previews/fashion-clothing-store.mp4", accent: "#d8b27a",
    pages: ["Home", "Products", "Categories", "Product pages", "Blog", "About", "Contact", "Shipping & returns"],
    new: true,
    previewUrl: "https://forgekitt-fashion-clothing-store.eshunyhaw.workers.dev/",
  },
  {
    slug: "tech-consulting-studio", title: "Tech Consulting Studio", category: "Agency", industry: "Professional Services", stack: "Astro", price: 999,
    description: "A technology and AI consulting website with services, case-study showcases, an insights blog and contact pages.",
    image: "/previews/tech-consulting-studio.jpg", video: "/previews/tech-consulting-studio.mp4", accent: "#2563eb",
    pages: ["Home", "What we do", "Who we are", "Showcases", "Insights", "Contact", "Privacy"],
    new: true,
    previewUrl: "https://forgekitt-tech-consulting-studio.eshunyhaw.workers.dev/",
  },
  {
    slug: "fashion-lookbook", title: "Fashion Lookbook", category: "E-commerce", industry: "Beauty & Fashion", stack: "Astro", price: 499,
    description: "An interactive lookbook where eighteen cut-out models drift around the page and open a magnified shop-the-look view.",
    image: "/previews/fashion-lookbook.jpg", video: "/previews/fashion-lookbook.mp4", accent: "#1a1a1a",
    pages: ["One interactive page"],
    new: true,
    previewUrl: "https://forgekitt-fashion-lookbook.eshunyhaw.workers.dev/",
  },
  {
    slug: "architecture-archive-studio", title: "Architecture Archive Studio", category: "Studio", industry: "Architecture & Interiors", stack: "Astro", price: 999,
    description: "A restrained architecture practice website with a project archive, journal, practice pages and an enquiry form.",
    image: "/previews/architecture-archive-studio.jpg", video: "/previews/architecture-archive-studio.mp4", accent: "#8a7a68",
    pages: ["Home", "About", "Archive (10 projects)", "Journal", "Practice (4 pages)", "Enquiries", "Legal"],
    new: true,
    previewUrl: "https://forgekitt-architecture-archive-studio.eshunyhaw.workers.dev/",
  },
  {
    slug: "balm-product-showcase", title: "Skincare Balm Product Site", category: "E-commerce", industry: "Beauty & Fashion", stack: "Astro", price: 999,
    description: "A six-page single-product skincare site with a scroll-driven 3D balm tube, a draggable 3D drop, e-mail sign-up and a contact form.",
    image: "/previews/balm-product-showcase.jpg", video: "/previews/balm-product-showcase.mp4", accent: "#e9a37c",
    pages: ["Home", "Shop", "Hands", "How it works", "About & contact", "Terms"],
    new: true,
    previewUrl: "https://forgekitt-balm-product-showcase.eshunyhaw.workers.dev/",
  },
  {
    slug: "cinematic-video-landing", title: "Cinematic Video Landing Page", category: "Studio", industry: "Media & Publishing", stack: "Astro", price: 499,
    description: "A one-page landing page with a full-screen looping hero video, an animated headline and a night-sky mood, ready for a newsletter, label or creative project.",
    image: "/previews/cinematic-video-landing.jpg", video: "/previews/cinematic-video-landing.mp4", accent: "#e8743b",
    pages: ["One page"],
    new: true,
    previewUrl: "https://forgekitt-cinematic-video-landing.eshunyhaw.workers.dev/",
  },
  {
    slug: "building-intelligence-studio", title: "Architecture & Building Data Studio", category: "Studio", industry: "Architecture & Interiors", stack: "Astro", price: 999,
    description: "A technical studio website with an interactive 3D point-cloud building, a live model viewer, ten project pages, field reports and a project brief form.",
    image: "/previews/building-intelligence-studio.jpg", video: "/previews/building-intelligence-studio.mp4", accent: "#6aa4ff",
    pages: ["Home", "Platform", "Projects (10 project pages)", "Live 3D model", "Field reports (6 reports)", "Practice", "Atlas", "Process", "Materials", "Studio", "Recognition", "Contact"],
    new: true,
    previewUrl: "https://forgekitt-building-intelligence-studio.eshunyhaw.workers.dev/",
  },
  {
    slug: "digital-artist-portfolio", title: "Digital Artist Portfolio", category: "Portfolio", industry: "Creative & Portfolio", stack: "Astro", price: 999,
    description: "A bold dark portfolio for a digital or motion artist with a giant name over the hero, five project pages, a journal of articles and a contact form.",
    image: "/previews/digital-artist-portfolio.jpg", video: "/previews/digital-artist-portfolio.mp4", accent: "#8c8c8c",
    pages: ["Home", "Work (5 projects)", "About", "Thoughts (5 articles)", "Contact", "Privacy policy", "Terms of use"],
    new: true,
    previewUrl: "https://forgekitt-digital-artist-portfolio.eshunyhaw.workers.dev/",
  },
  {
    slug: "minimal-skincare-brand", title: "Minimal Skincare Brand Site", category: "E-commerce", industry: "Beauty & Fashion", stack: "Astro", price: 999,
    description: "A calm, editorial skincare brand website with a shop page, ingredients and results sections, a journal of six articles, a support form and e-mail sign-up.",
    image: "/previews/minimal-skincare-brand.jpg", video: "/previews/minimal-skincare-brand.mp4", accent: "#a3b18a",
    pages: ["Home", "Shop", "About", "Journal (6 articles)", "Support", "Privacy policy", "Terms", "Payment methods"],
    new: true,
    previewUrl: "https://forgekitt-minimal-skincare-brand.eshunyhaw.workers.dev/",
  },
  {
    slug: "art-direction-studio", title: "Art Direction Studio", category: "Studio", industry: "Creative & Portfolio", stack: "Astro", price: 999,
    description: "A dark editorial site for an art direction or branding studio with a loading counter, a hero reel, six case studies and a project brief form.",
    image: "/previews/art-direction-studio.jpg", video: "/previews/art-direction-studio.mp4", accent: "#e8e3da",
    pages: ["Home", "Work (6 case studies)", "Studio", "Services", "Contact", "Privacy policy", "Cookie policy", "Terms"],
    new: true,
    previewUrl: "https://forgekitt-art-direction-studio.eshunyhaw.workers.dev/",
  },
  {
    slug: "conference-event-website", title: "Conference Event Website", category: "Editorial", industry: "Events & Entertainment", stack: "Astro", price: 999,
    description: "A multi-page conference website with a three-day programme, eight speaker pages, twelve session pages, travel info, a contact form and newsletter sign-up.",
    image: "/previews/conference-event-website.jpg", video: "/previews/conference-event-website.mp4", accent: "#e4572e",
    pages: ["Home", "Speakers (8 pages)", "Sessions (12 pages)", "Travel", "Contact", "Privacy policy", "Terms"],
    new: true,
    previewUrl: "https://forgekitt-conference-event-website.eshunyhaw.workers.dev/",
  },
  {
    slug: "infinite-photography-reel", title: "Infinite Photography Reel", category: "Portfolio", industry: "Photography & Film", stack: "Astro", price: 499,
    description: "A one-page photography portfolio with an infinite, draggable 3D reel of photos, hover tilt and a full-size slideshow viewer.",
    image: "/previews/infinite-photography-reel.jpg", video: "/previews/infinite-photography-reel.mp4", accent: "#c9b79c",
    pages: ["One page"],
    new: true,
    previewUrl: "https://forgekitt-infinite-photography-reel.eshunyhaw.workers.dev/",
  },
  {
    slug: "ai-automation-consultancy", title: "AI & Automation Consultancy", category: "Agency", industry: "Technology & SaaS", stack: "Astro", price: 999,
    description: "A refined consultancy website for AI agents and workflow automation, with solutions, services, six case studies and a contact brief form.",
    image: "/previews/ai-automation-consultancy.jpg", video: "/previews/ai-automation-consultancy.mp4", accent: "#4f6df5",
    pages: ["Home", "About", "Solutions", "Services", "Case studies (6 pages)", "Contact"],
    new: true,
    previewUrl: "https://forgekitt-ai-automation-consultancy.eshunyhaw.workers.dev/",
  },
  {
    slug: "sneaker-fan-carousel", title: "Product Fan-Stack Carousel", category: "E-commerce", industry: "Retail & E-commerce", stack: "Astro", price: 499,
    description: "A one-page product showcase with an interactive fan-stack carousel: drag or glide through the cards and they snap into place.",
    image: "/previews/sneaker-fan-carousel.jpg", video: "/previews/sneaker-fan-carousel.mp4", accent: "#f26b3a",
    pages: ["One page"],
    new: true,
    previewUrl: "https://forgekitt-sneaker-fan-carousel.eshunyhaw.workers.dev/",
  },
  {
    slug: "private-ai-company", title: "Private AI Company Website", category: "SaaS", industry: "Technology & SaaS", stack: "Astro", price: 999,
    description: "A four-page website for an enterprise AI company, with a bold hero, features, showcase, team and insights sections, a contact form and e-mail sign-up.",
    image: "/previews/private-ai-company.jpg", video: "/previews/private-ai-company.mp4", accent: "#e9a56b",
    pages: ["Home", "Features", "About", "Contact"],
    new: true,
    previewUrl: "https://forgekitt-private-ai-company.eshunyhaw.workers.dev/",
  },
];

/** The template a visitor was looking at, from a ?next=/templates/<slug> sign-in redirect. */
export function getReturnTemplate(next?: string) {
  const match = next?.match(/^\/templates\/([a-z0-9-]+)\/?$/);
  return match ? getTemplate(match[1]) : undefined;
}

/** Same-site path to return to after signing in, or undefined. */
export function safeNextPath(next?: string) {
  return next && next.startsWith("/") && !next.startsWith("//") ? next : undefined;
}

/** Live demo of the real template, hosted on Netlify as forgekitt-<slug>. */
export function getPreviewUrl(slug: string) {
  return getTemplate(slug)?.previewUrl ?? `https://forgekitt-${slug}.netlify.app`;
}

export function getTemplate(slug: string) {
  return templates.find((template) => template.slug === slug);
}

export function formatPrice(price: number) {
  if (price === 0) return "Free";
  const currency = process.env.NEXT_PUBLIC_STORE_CURRENCY || "GHS";
  return new Intl.NumberFormat("en-GH", { style: "currency", currency, maximumFractionDigits: 0 }).format(price);
}
