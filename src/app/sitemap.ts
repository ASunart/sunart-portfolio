import type { MetadataRoute } from "next";
import { SITE_URL } from "./constants/site";
import { CASES } from "./content/cases";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: `${SITE_URL}/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...CASES.map((study) => ({
      url: `${SITE_URL}/work/${study.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
