import picks from "@/lib/picks-data.json";
import SeoPickPage from "@/app/components/SeoPickPage";

export const metadata = {
  title: "Best Hair Trimmers for Barbers (2026) — Detail & Line-Up",
  description:
    "Compare the best barber trimmers for precision line-ups, detailing, and beard shaping. BaByliss, Andis, Wahl, StyleCraft reviewed.",
  openGraph: {
    title: "Best Hair Trimmers for Barbers (2026) | Barber Supply Hub",
    description: "Compare the best professional trimmers for line-ups and detail work.",
    url: "https://barber-supply-hub.vercel.app/picks/best-trimmers",
    images: [{ url: "/og-trimmers.svg", width: 1200, height: 630, alt: "Best Hair Trimmers for Barbers" }],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Hair Trimmers for Barbers (2026)",
    description: "Compare the best professional trimmers for barbers.",
    images: ["/og-trimmers.svg"],
  },
  alternates: { canonical: "https://barber-supply-hub.vercel.app/picks/best-trimmers" },
};

export default function BestTrimmersPage() {
  const data = (picks as any)["best-trimmers"];

  return (
    <SeoPickPage
      slug="best-trimmers"
      title={data.title}
      intro={data.description}
      products={data.products || []}
      comparison={data.comparison || []}
      faq={data.faq || []}
    />
  );
}
