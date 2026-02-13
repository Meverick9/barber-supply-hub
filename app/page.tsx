import Link from "next/link";

export const metadata = {
  title: "Barber Supply Hub — Best Barber Tools Chosen By Pros",
  description:
    "Not a store. A recommendation engine: quick picks, honest comparisons, and barber-first guidance for professional barber tools.",
  openGraph: {
    title: "Barber Supply Hub — Best Barber Tools Chosen By Pros",
    description: "Expert picks and comparisons of pro barber tools.",
    url: "https://barber-supply-hub.vercel.app",
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: "Barber Supply Hub" }],
  },
  alternates: { canonical: "https://barber-supply-hub.vercel.app" },
};

export default function HomePage() {
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
              <Link className="btn btnAccent" href="/picks/best-clippers">
                Start with Picks &rarr;
              </Link>
              <span className="badge">&check; Used by barbers worldwide</span>
              <span className="badge">&#x1F50D; Comparison-first</span>
            </div>

            <hr className="hr" />

            <div className="kpi">
              <span className="chip">&star; Transparent scoring</span>
              <span className="chip">&darr; Price drop badges</span>
              <span className="chip">&#9889; Trending timer</span>
              <span className="chip">&#x1F4C8; GA4 tracking</span>
            </div>
          </div>

          <div className="card">
            <div className="badge">Editor&apos;s quick pick</div>
            <div style={{ marginTop: 16 }}>
              <div style={{ background: "#1a1a1e", borderRadius: 12, padding: 20, textAlign: "center" }}>
                <h3 style={{ margin: "0 0 8px" }}>Wahl 5-Star Magic Clip</h3>
                <p className="small" style={{ margin: "0 0 6px" }}>
                  #1 Bestseller &mdash; 4.8&star; from 22,739 reviews
                </p>
                <p style={{ margin: "0 0 12px", fontWeight: 800, color: "#ffd400" }}>$89.99</p>
                <a
                  className="btn btnAccent"
                  href="https://www.amazon.com/dp/B00UK8WFQO?tag=barbersupp044-20"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Check Price on Amazon &rarr;
                </a>
              </div>
            </div>
            <p className="small" style={{ marginTop: 10, marginBottom: 0 }}>
              Click &quot;Start with Picks&quot; for our full ranked list.
            </p>
          </div>
        </div>
      </section>

      <section className="grid2" style={{ marginTop: 16 }}>
        <div className="card">
          <h2 style={{ marginTop: 0 }}>Picks</h2>
          <p className="small">SEO magnets: one query, one best page.</p>
          <div className="row">
            <Link className="btn" href="/picks/best-clippers">Best Clippers</Link>
            <Link className="btn" href="/picks/best-trimmers">Best Trimmers</Link>
            <Link className="btn" href="/picks/starter-kit">Starter Kit</Link>
          </div>
        </div>

        <div className="card">
          <h2 style={{ marginTop: 0 }}>Trust Signals</h2>
          <ul className="small" style={{ margin: 0, paddingLeft: 18 }}>
            <li>Clear scoring rubric</li>
            <li>Affiliate disclosure</li>
            <li>Internal links between picks</li>
            <li>Barber profiles &amp; tool stacks</li>
          </ul>
        </div>
      </section>
    </>
  );
}
