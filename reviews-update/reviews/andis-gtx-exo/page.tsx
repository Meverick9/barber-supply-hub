import Link from "next/link";

export const metadata = {
  title: "Andis GTX-EXO Cordless Trimmer Review (2026) | Barber Supply Hub",
  description: "In-depth review of the Andis GTX-EXO — the lightweight cordless trimmer with deep-tooth blade for sharp outlines and design work.",
};

const product = {
  name: "Andis GTX-EXO Cordless Trimmer",
  price: 129.99,
  rating: 4.6,
  reviews: 7890,
  amazonLink: "https://www.amazon.com/dp/B08XXJF8KN?tag=barbersupp044-20",
  motor: "Rotary",
  blade: "GTX Deep-Tooth",
  power: "Cordless (2hr)",
  weight: "7.2 oz",
};

export default function AndisGtxReview() {
  return (
    <>
      <section className="hero">
        <h1 className="h1" style={{ fontSize: 36 }}>{product.name} &mdash; Full Review</h1>
        <p className="lead">
          The lightest trimmer in our lineup at 7.2 oz with a deep-tooth blade built for razor-sharp outlines.
        </p>
        <div className="row">
          <span className="badge">&star; {product.rating}/5</span>
          <span className="badge">{product.reviews.toLocaleString()} reviews</span>
          <span className="badge" style={{ color: "#ffd400" }}>${product.price}</span>
        </div>
      </section>

      <div className="card" style={{ marginTop: 16 }}>
        <h2 style={{ marginTop: 0 }}>Quick Specs</h2>
        <table className="table">
          <tbody>
            <tr><td className="small" style={{ fontWeight: 600 }}>Motor</td><td>{product.motor}</td></tr>
            <tr><td className="small" style={{ fontWeight: 600 }}>Blade</td><td>{product.blade}</td></tr>
            <tr><td className="small" style={{ fontWeight: 600 }}>Power</td><td>{product.power}</td></tr>
            <tr><td className="small" style={{ fontWeight: 600 }}>Weight</td><td>{product.weight}</td></tr>
          </tbody>
        </table>
      </div>

      <div className="card" style={{ marginTop: 16 }}>
        <h2 style={{ marginTop: 0 }}>What We Like</h2>
        <ul style={{ paddingLeft: 18, margin: 0 }}>
          <li style={{ marginBottom: 8 }}>GTX deep-tooth blade cuts closer than standard T-blades &mdash; razor-sharp lines every time</li>
          <li style={{ marginBottom: 8 }}>At 7.2 oz, lightest trimmer in our lineup &mdash; zero hand fatigue</li>
          <li style={{ marginBottom: 8 }}>Exposed blade design gives maximum visibility for design work and creative cuts</li>
          <li style={{ marginBottom: 8 }}>Lithium-ion battery with 2-hour runtime and quick-charge support</li>
          <li style={{ marginBottom: 8 }}>Charging stand included &mdash; keeps your station organized</li>
        </ul>
      </div>

      <div className="card" style={{ marginTop: 16 }}>
        <h2 style={{ marginTop: 0 }}>What Could Be Better</h2>
        <ul style={{ paddingLeft: 18, margin: 0 }}>
          <li style={{ marginBottom: 8 }}>$129.99 is premium for a trimmer &mdash; $50 more than the BaByliss GoldFX</li>
          <li style={{ marginBottom: 8 }}>Deep-tooth blade can be aggressive on sensitive skin if not zero-gapped carefully</li>
          <li style={{ marginBottom: 8 }}>Cordless only &mdash; no cord fallback if battery dies</li>
        </ul>
      </div>

      <div className="card" style={{ marginTop: 16 }}>
        <h2 style={{ marginTop: 0 }}>Verdict</h2>
        <p>
          The Andis GTX-EXO is the specialist&apos;s trimmer. If you do a lot of design work, creative
          lines, or need the absolute sharpest edge-ups, the deep-tooth blade delivers. The lightweight
          build makes it a pleasure to use all day. But at $129.99, it&apos;s a premium pick &mdash; the BaByliss
          GoldFX at $79.99 handles standard line-ups just as well for $50 less.
        </p>
        <div style={{ marginTop: 16 }}>
          <a href={product.amazonLink} target="_blank" rel="noopener noreferrer" className="btn btnAccent" style={{ padding: "14px 24px", fontSize: 16 }}>
            Check Price on Amazon &rarr;
          </a>
        </div>
      </div>

      <div className="row" style={{ marginTop: 16, marginBottom: 40 }}>
        <Link className="btn" href="/picks/best-trimmers">All Trimmers</Link>
        <Link className="btn" href="/reviews/babyliss-goldfx-trimmer">vs BaByliss GoldFX</Link>
        <Link className="btn" href="/compare">Compare</Link>
      </div>
    </>
  );
}
