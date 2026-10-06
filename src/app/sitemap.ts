import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";
import { practiceAreas } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const pages = [
    { path: "", changeFrequency: "monthly" as const, priority: 1 },
    { path: "/about", changeFrequency: "yearly" as const, priority: 0.8 },
    { path: "/our-people", changeFrequency: "yearly" as const, priority: 0.8 },
    { path: "/practice-areas", changeFrequency: "monthly" as const, priority: 0.9 },
    { path: "/faqs", changeFrequency: "yearly" as const, priority: 0.6 },
    { path: "/contact", changeFrequency: "yearly" as const, priority: 0.8 },
    { path: "/privacy", changeFrequency: "yearly" as const, priority: 0.2 },
    { path: "/terms", changeFrequency: "yearly" as const, priority: 0.2 },
  ];

  const areaPages = practiceAreas.map((a) => ({
    path: `/practice-areas/${a.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...pages, ...areaPages].map(({ path, changeFrequency, priority }) => ({
    url: `${siteUrl}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
