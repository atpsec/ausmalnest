import type { MetadataRoute } from "next";
import { categories, coloringPages } from "@/lib/content";

const baseUrl = "https://ausmalnest.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/ausmalbilder`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...categories.map((category) => ({
      url: `${baseUrl}/ausmalbilder/${category.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    ...coloringPages.map((page) => ({
      url: `${baseUrl}/ausmalbilder/${page.categorySlug}/${page.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}

