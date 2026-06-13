import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/drucken/"],
    },
    sitemap: "https://ausmalnest.vercel.app/sitemap.xml",
  };
}
