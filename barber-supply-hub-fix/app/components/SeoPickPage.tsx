import ProductCard, { Product } from "./ProductCard";
import ProductComparison from "./ProductComparison";
import StickyCTA from "./StickyCTA";
import InternalLinks from "./InternalLinks";

type ComparisonRow = {
  id: string;
  name: string;
  forWhat: string;
  weight: number;
  amazonUrl: string;
  priceText?: string;
  priceDropPercent?: number;
};

type Props = {
  slug: string;
  title: string;
  intro: string;
  products: Product[];
  comparison: ComparisonRow[];
  faq: { q: string; a: string }[];
};

export default function SeoPickPage({ slug, title, intro, products, comparison, faq }: Props) {
  const top = products[0];

  return (
    <>
      <section className="hero">
        <h1 className="h1" style={{ fontSize: 40 }}>{title}</h1>
        <p className="lead">{intro}</p>
        <div className="row">
          <span className="badge">Expert picks</span>
          <span className="badge">Comparison-first</span>
          <span className="badge">Affiliate disclosure</span>
        </div>
        <p className="small" style={{ marginTop: 10 }}>
          Score formula: Power (30%) + Ergonomics (25%) + Durability (25%) + Value (20%)
        </p>
      </section>

      {products.length > 0 ? (
        <section className="grid2">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} placement={`seo_pick_${slug}`} />
          ))}
        </section>
      ) : (
        <section className="card" style={{ marginTop: 16, textAlign: "center" }}>
          <p className="muted">Products coming soon. Check back for our expert picks.</p>
        </section>
      )}

      {comparison.length > 0 && (
        <div style={{ marginTop: 16 }}>
          <ProductComparison title="Quick comparison" rows={comparison} />
        </div>
      )}

      {faq.length > 0 && (
        <section className="card" style={{ marginTop: 16 }}>
          <h2 style={{ marginTop: 0 }}>FAQ</h2>
          {faq.map((f, i) => (
            <div key={i} style={{ marginBottom: 12 }}>
              <b>{f.q}</b>
              <p className="small" style={{ margin: "4px 0 0" }}>{f.a}</p>
            </div>
          ))}
        </section>
      )}

      <InternalLinks current={slug} />

      {top && <StickyCTA productId={top.id} productName={top.name} href={top.amazonUrl} />}
    </>
  );
}
