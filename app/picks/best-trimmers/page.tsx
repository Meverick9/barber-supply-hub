import picks from "@/lib/picks-data.json";
import SeoPickPage from "@/app/components/SeoPickPage";

export const metadata = {
  title: "Best Hair Trimmers for Barbers (2026) | Barber Supply Hub",
  description: "Compare the best barber trimmers for precision work, line-ups, detailing, and beard shaping.",
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
