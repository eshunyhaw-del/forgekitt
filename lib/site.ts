// Business details shown on the legal pages. Set these in the environment so the
// pages always carry the real trading name, contact address and location.
export const site = {
  name: "Forge",
  legalName: process.env.NEXT_PUBLIC_LEGAL_NAME?.trim() || "Forge",
  email: process.env.NEXT_PUBLIC_SUPPORT_EMAIL?.trim() || "cradlepremiernetwork@gmail.com",
  location: process.env.NEXT_PUBLIC_BUSINESS_LOCATION?.trim() || "Accra, Ghana",
  // WhatsApp: `whatsapp` is the number as people read it, `whatsappLink` is the tap-to-chat link (digits only, no +).
  whatsapp: "+233 55 961 4253",
  whatsappLink: "https://wa.me/233559614253",
  youtube: "https://www.youtube.com/@supereasydevs",
  x: "https://x.com/eshunyhaw",
  updated: "6 October 2026",
};
