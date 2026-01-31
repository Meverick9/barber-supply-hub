import picks from "@/lib/picks-data.json";
import ProductCard from "./components/ProductCard";

export default function HomePage() {
  const bestClippers = (picks as any)["best-clippers"];
  const heroProduct = bestClippers.products[0];

  return (
    <>
      <section className="hero">
        <div className="heroGrid">
          <div>
            <h1 className="h1">Find The Best Barber Tools — Chosen By Pros</h1>
            <p className="lead">
              Not a store. A recommendation engine: quick picks, honest comparisons, and barber-first guidance.
            </p>

            <div className="row">
              <a className="btn btnAccent" href="/picks/best-clippers">Start with Picks →</a>
              <span className="badge">✅ Used by barbers worldwide</span>
              <span className="badge">🔍 Comparison-first</span>
            </div>

            <hr className="hr" />

            <div className="kpi">
              <span className="chip">⭐ “Best Value” transparent scoring</span>
              <span className="chip">⬇ Price drop badges</span>
              <span className="chip">⚡ Trending timer</span>
              <span className="chip">📈 GA4 click + scroll tracking</span>
            </div>
          </div>

          <div className="card">
            <div className="badge">Editor’s quick pick</div>
            <div style={{ marginTop: 10 }}>
              <ProductCard product={heroProduct} placement="home_hero" />
            </div>
            <p className="small" style={{ marginBottom: 0 }}>
              Tip: don’t overpromise price accuracy. Use “Check price” / “Mid-range”.
            </p>
          </div>
        </div>
      </section>

      <section className="grid2" style={{ marginTop: 16 }}>
        <div className="card">
          <h2 style={{ marginTop: 0 }}>Picks</h2>
          <p className="small">SEO magnets: one query → one best page.</p>
          <div className="row">
            <a className="btn" href="/picks/best-clippers">Best Clippers</a>
            <a className="btn" href="/picks/best-trimmers">Best Trimmers</a>
            <a className="btn" href="/picks/starter-kit">Starter Kit</a>
          </div>
        </div>

        <div className="card">
          <h2 style={{ marginTop: 0 }}>Trust signals</h2>
          <ul className="small" style={{ margin: 0, paddingLeft: 18 }}>
            <li>Clear scoring rubric</li>
            <li>Affiliate disclosure</li>
            <li>Internal links between picks</li>
            <li>Barber profiles & tool stacks</li>
          </ul>
        </div>
      </section>
    </>
  );
}
