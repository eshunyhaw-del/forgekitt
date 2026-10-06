import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return { name: "Forge | Website Templates", short_name: "Forge", description: "Website templates for businesses.", start_url: "/", display: "standalone", background_color: "#f3f3ef", theme_color: "#cd0407", icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }, { src: "/icon-192.png", sizes: "192x192", type: "image/png" }, { src: "/icon-512.png", sizes: "512x512", type: "image/png" }] };
}
