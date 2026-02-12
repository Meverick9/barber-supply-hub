import Link from "next/link";

export const metadata = {
  title: "BaBylissPRO GoldFX Trimmer Review (2026) | Barber Supply Hub",
  description: "In-depth review of the BaBylissPRO GoldFX Outlining Trimmer — the #1 bestselling professional trimmer for line-ups and detail work.",
};

const product = {
  name: "BaBylissPRO GoldFX Outlining Trimmer",
  price: 79.99,
  rating: 4.7,
  reviews: 12450,
  amazonLink: "https://www.amazon.com/dp/B07T2L4V3V?tag=barbersupp044-20",
  motor: "High-Torque Rotary",
  blade: "Titanium T-Blade",
  power: "Cord/Cordless (2hr)",
  weight: "9.2 oz",
};

export default function BabylissTrimmerReview() {
  return (
    <>
      <section className="hero">
        <h1 className="h1" style={{ fontSize: 36 }}>{product.name} &mdash; Full Review</h1>
        <p className="lead">
          The #1 bestselling professional trimmer. All-metal build, exposed T-blade, 360&deg; visibility for the crispiest lines.
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
          <li style={{ marginBottom: 8 }}>Exposed T-blade with 360&deg; view &mdash; you see exactly where you&apos;re cutting</li>
          <li style={{ marginBottom: 8 }}>All-metal body feels premium and professional</li>
          <li style={{ marginBottom: 8 }}>Knurled barbell grip prevents slipping during detail work</li>
          <li style={{ marginBottom: 8 }}>Cord/cordless &mdash; never stuck with a dead battery mid-lineup</li>
          <li style={{ marginBottom: 8 }}>Zero-gap capable for the closest possible edge-up</li>
          <li style={{ marginBottom: 8 }}>Under $80 &mdash; best price-to-quality ratio in the trimmer market</li>
        </ul>
      </div>

      <div className="card" style={{ marginTop: 16 }}>
        <h2 style={{ marginTop: 0 }}>What Could Be Better</h2>
        <ul style={{ paddingLeft: 18, margin: 0 }}>
          <li style={{ marginBottom: 8 }}>2-hour battery life is shorter than the FX+ (4hr) &mdash; fine for trimming, tight for busy days</li>
          <li style={{ marginBottom: 8 }}>No USB-C charging &mdash; uses older charging method</li>
          <li style={{ marginBottom: 8 }}>Blade can nick if you don&apos;t zero-gap carefully</li>
        </ul>
      </div>

      <div className="card" style={{ marginTop: 16 }}>
        <h2 style={{ marginTop: 0 }}>Verdict</h2>
        <p>
          The BaBylissPRO GoldFX is the trimmer that made BaByliss a barbershop staple. At $79.99, it
          delivers professional-grade line-ups and edge-ups at a price that doesn&apos;t hurt. The exposed T-blade
          gives you surgical precision, and the all-metal build will survive years of daily use. If you want
          longer battery life and USB-C, step up to the FX+ for $109.99. But for pure value, the GoldFX is
          hard to beat.
        </p>
        <div style={{ marginTop: 16 }}>
          <a href={product.amazonLink} target="_blank" rel="noopener noreferrer" className="btn btnAccent" style={{ padding: "14px 24px", fontSize: 16 }}>
            Check Price on Amazon &rarr;
          </a>
        </div>
      </div>

      <div className="row" style={{ marginTop: 16, marginBottom: 40 }}>
        <Link className="btn" href="/picks/best-trimmers">All Trimmers</Link>
        <Link className="btn" href="/reviews/babyliss-fx-plus-trimmer">vs FX+ Trimmer</Link>
        <Link className="btn" href="/reviews/babyliss-goldfx-clipper">GoldFX Clipper Review</Link>
      </div>
    </>
  );
}
