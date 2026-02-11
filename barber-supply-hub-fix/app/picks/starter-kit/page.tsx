import picks from "@/lib/picks-data.json";
import SeoPickPage from "@/app/components/SeoPickPage";

export const metadata = {
  title: "Best Barber Starter Kits (2026) | Barber Supply Hub",
  description: "Complete barber kits including clippers, trimmers, guards, and essential tools for professionals.",
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
