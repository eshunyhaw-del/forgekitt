import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return { name: "Forge | Website Templates", short_name: "Forge", description: "Website templates for businesses.", start_url: "/", display: "standalone", background_color: "#f3f3ef", theme_color: "#cd0407", icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }] };
}
