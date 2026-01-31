import picks from "@/lib/picks-data.json";
import SeoPickPage from "@/app/components/SeoPickPage";
import { calcWeightedScore, toComparisonRows } from "@/lib/scoring";

export function generateStaticParams() {
  return Object.keys(picks as any).map((slug) => ({ slug }));
}

export default function PickPage({ params }: { params: { slug: string } }) {
  const data: any = (picks as any)[params.slug];
  if (!data) return <div>Not found</div>;

  const products = data.products.map((p: any) => ({ ...p, bestValue: false }));
  const best = products.reduce((a: any, b: any) =>
    calcWeightedScore(b.score) > calcWeightedScore(a.score) ? b : a
  );
  best.bestValue = true;

  const comparison = toComparisonRows(products);

  return (
    <SeoPickPage
      slug={params.slug}
      title={data.title}
      intro={data.intro}
      products={products}
      comparison={comparison}
      faq={data.faq}
    />
  );
}
