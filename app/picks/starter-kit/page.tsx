import picks from "@/lib/picks-data.json";
import SeoPickPage from "@/app/components/SeoPickPage";

export const metadata = {
  title: "Best Barber Starter Kits (2026) — Everything You Need",
  description:
    "The essential tools every new barber needs. Curated clipper + trimmer kits at three price points: $160, $230, and $310.",
  openGraph: {
    title: "Best Barber Starter Kits (2026) | Barber Supply Hub",
    description: "Complete barber starter kits at three price points for students and professionals.",
    url: "https://barber-supply-hub.vercel.app/picks/starter-kit",
    images: [{ url: "/og-starter.svg", width: 1200, height: 630, alt: "Barber Starter Kits" }],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Barber Starter Kits (2026)",
    description: "Complete barber starter kits at three price points.",
    images: ["/og-starter.svg"],
  },
  alternates: { canonical: "https://barber-supply-hub.vercel.app/picks/starter-kit" },
};

export default function StarterKitPage() {
  const data = (picks as any)["starter-kit"];

  return (
    <SeoPickPage
      slug="starter-kit"
      title={data.title}
      intro={data.description}
      products={data.products || []}
      comparison={data.comparison || []}
      faq={data.faq || []}
    />
  );
}
