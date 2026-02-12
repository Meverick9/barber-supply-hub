import picks from "@/lib/picks-data.json";
import SeoPickPage from "@/app/components/SeoPickPage";

export const metadata = {
  title: "Best Hair Clippers for Barbers (2026) | Barber Supply Hub",
  description: "Top-rated professional barber clippers compared by power, blade quality, durability, battery life, and value.",
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
