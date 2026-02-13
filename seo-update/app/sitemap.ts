import { MetadataRoute } from "next";

const BASE = "https://barber-supply-hub.vercel.app";

const reviewSlugs = [
  "wahl-magic-clip",
  "andis-master",
  "babyliss-goldfx-clipper",
  "wahl-senior",
  "oster-76",
  "babyliss-goldfx-trimmer",
  "babyliss-fx-plus-trimmer",
  "andis-gtx-exo",
  "wahl-detailer-li",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const staticPages = [
    { url: BASE, lastModified: now, changeFrequency: "weekly" as const, priority: 1.0 },
    { url: `${BASE}/compare`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${BASE}/barbers`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.5 },
  ];

  const picksPages = ["best-clippers", "best-trimmers", "starter-kit"].map((slug) => ({
    url: `${BASE}/picks/${slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  const reviewPages = reviewSlugs.map((slug) => ({
    url: `${BASE}/reviews/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...picksPages, ...reviewPages];
}
