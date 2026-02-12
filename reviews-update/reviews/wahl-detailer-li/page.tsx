import Link from "next/link";

export const metadata = {
  title: "Wahl 5-Star Detailer Li Review (2026) | Barber Supply Hub",
  description: "In-depth review of the Wahl Detailer Li — the compact, budget-friendly cordless trimmer for detail work and tight areas.",
};

const product = {
  name: "Wahl 5-Star Detailer Li Cordless",
  price: 69.99,
  rating: 4.5,
  reviews: 9340,
  amazonLink: "https://www.amazon.com/dp/B08JYLKYDR?tag=barbersupp044-20",
  motor: "Rotary",
  blade: "T-Wide Blade",
  power: "Cordless (100min)",
  weight: "4.6 oz",
};

export default function WahlDetailerReview() {
  return (
    <>
      <section className="hero">
        <h1 className="h1" style={{ fontSize: 36 }}>{product.name} &mdash; Full Review</h1>
        <p className="lead">
          The lightest, most compact pro trimmer at 4.6 oz. Best value for detail work under $70.
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
          <li style={{ marginBottom: 8 }}>At 4.6 oz, it&apos;s the most compact trimmer in our lineup &mdash; perfect for tight spaces</li>
          <li style={{ marginBottom: 8 }}>100-minute cordless runtime beats many trimmers costing twice as much</li>
          <li style={{ marginBottom: 8 }}>T-Wide blade excels at ear work, necklines, and small detail areas</li>
          <li style={{ marginBottom: 8 }}>$69.99 &mdash; cheapest pro-grade trimmer in our lineup, incredible value</li>
          <li style={{ marginBottom: 8 }}>Wahl quality and parts availability &mdash; replacement blades are cheap and everywhere</li>
        </ul>
      </div>

      <div className="card" style={{ marginTop: 16 }}>
        <h2 style={{ marginTop: 0 }}>What Could Be Better</h2>
        <ul style={{ paddingLeft: 18, margin: 0 }}>
          <li style={{ marginBottom: 8 }}>Motor is less powerful than BaByliss or Andis &mdash; not ideal for thick beard work</li>
          <li style={{ marginBottom: 8 }}>Lightweight build can feel insubstantial if you prefer heavier tools</li>
          <li style={{ marginBottom: 8 }}>Can be uncomfortable for extended sessions due to smaller grip</li>
        </ul>
      </div>

      <div className="card" style={{ marginTop: 16 }}>
        <h2 style={{ marginTop: 0 }}>Verdict</h2>
        <p>
          The Wahl Detailer Li is the best trimmer under $70. Period. It won&apos;t overpower a BaByliss
          GoldFX or Andis GTX-EXO, but for ears, necklines, and light detail work, it&apos;s all you need.
          Perfect as a second trimmer, a barber school starter, or a travel backup. Pair it with the
          Wahl Magic Clip ($89.99) for a complete budget setup under $160.
        </p>
        <div style={{ marginTop: 16 }}>
          <a href={product.amazonLink} target="_blank" rel="noopener noreferrer" className="btn btnAccent" style={{ padding: "14px 24px", fontSize: 16 }}>
            Check Price on Amazon &rarr;
          </a>
        </div>
      </div>

      <div className="row" style={{ marginTop: 16, marginBottom: 40 }}>
        <Link className="btn" href="/picks/best-trimmers">All Trimmers</Link>
        <Link className="btn" href="/reviews/wahl-magic-clip">Wahl Magic Clip Review</Link>
        <Link className="btn" href="/picks/starter-kit">Starter Kits</Link>
      </div>
    </>
  );
}
