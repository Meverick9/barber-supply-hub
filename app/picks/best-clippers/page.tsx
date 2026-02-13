import picks from "@/lib/picks-data.json";
import SeoPickPage from "@/app/components/SeoPickPage";

export const metadata = {
  title: "Best Hair Clippers for Barbers (2026)",
  description:
    "Top-rated professional barber clippers compared by power, blade quality, durability, battery life, and value. Wahl vs Andis vs BaByliss.",
  openGraph: {
    title: "Best Hair Clippers for Barbers (2026) | Barber Supply Hub",
    description: "Top-rated professional barber clippers compared. Wahl, Andis, BaByliss, Oster reviewed.",
    url: "https://barber-supply-hub.vercel.app/picks/best-clippers",
    images: [{ url: "/og-clippers.svg", width: 1200, height: 630, alt: "Best Hair Clippers for Barbers" }],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Hair Clippers for Barbers (2026)",
    description: "Top-rated professional barber clippers compared.",
    images: ["/og-clippers.svg"],
  },
  alternates: { canonical: "https://barber-supply-hub.vercel.app/picks/best-clippers" },
};

export default function BestClippersPage() {
  const data = (picks as any)["best-clippers"];

  return (
    <SeoPickPage
      slug="best-clippers"
      title={data.title}
      intro={data.description}
      products={data.products || []}
      comparison={data.comparison || []}
      faq={data.faq || []}
    />
  );
}
