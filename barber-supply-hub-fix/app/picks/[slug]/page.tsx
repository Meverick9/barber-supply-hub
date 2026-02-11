import { notFound } from "next/navigation";
import picks from "@/lib/picks-data.json";
import SeoPickPage from "@/app/components/SeoPickPage";

const allPicks = picks as Record<string, any>;

export function generateStaticParams() {
  return Object.keys(allPicks).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const data = allPicks[params.slug];
  if (!data) return {};
  return {
    title: `${data.title} | Barber Supply Hub`,
    description: data.description,
  };
}

export default function PickPage({ params }: { params: { slug: string } }) {
  const data = allPicks[params.slug];
  if (!data) notFound();

  return (
    <SeoPickPage
      slug={params.slug}
      title={data.title}
      intro={data.description}
      products={data.products || []}
      comparison={data.comparison || []}
      faq={data.faq || []}
    />
  );
}
