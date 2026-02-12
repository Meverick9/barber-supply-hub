import Link from "next/link";

export const metadata = {
  title: "BaBylissPRO GoldFX Clipper Review (2026) | Barber Supply Hub",
  description: "In-depth review of the BaBylissPRO GoldFX Clipper — the premium Italian-designed brushless clipper for heavy fading.",
};

const product = {
  name: "BaBylissPRO GoldFX Clipper",
  price: 199.99,
  rating: 4.7,
  reviews: 8934,
  amazonLink: "https://www.amazon.com/dp/B07L67KL81?tag=barbersupp044-20",
  motor: "Brushless (Italian-designed)",
  blade: "Gold Titanium",
  power: "Cord/Cordless",
  weight: "9.5 oz",
};

export default function BabylissClipperReview() {
  return (
    <>
      <section className="hero">
        <h1 className="h1" style={{ fontSize: 36 }}>{product.name} &mdash; Full Review</h1>
        <p className="lead">
          Ferrari-designed brushless motor meets gold titanium blade. The premium choice for high-volume fading.
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
          <li style={{ marginBottom: 8 }}>Brushless motor delivers unmatched torque &mdash; cuts through thick, coarse hair like butter</li>
          <li style={{ marginBottom: 8 }}>Gold titanium blade stays cool during marathon fade sessions and holds zero-gap without drift</li>
          <li style={{ marginBottom: 8 }}>Cord/cordless versatility &mdash; never stranded by a dead battery mid-cut</li>
          <li style={{ marginBottom: 8 }}>Barbers report 3+ years of daily use without motor degradation</li>
          <li style={{ marginBottom: 8 }}>9.5 oz weight provides stability for precision work without excessive fatigue</li>
        </ul>
      </div>

      <div className="card" style={{ marginTop: 16 }}>
        <h2 style={{ marginTop: 0 }}>What Could Be Better</h2>
        <ul style={{ paddingLeft: 18, margin: 0 }}>
          <li style={{ marginBottom: 8 }}>Premium price at $199.99 &mdash; more than double the Wahl Magic Clip</li>
          <li style={{ marginBottom: 8 }}>All-metal body can feel cold during early morning sessions</li>
          <li style={{ marginBottom: 8 }}>5-detent taper control is less precise than Wahl&apos;s continuous lever</li>
        </ul>
      </div>

      <div className="card" style={{ marginTop: 16 }}>
        <h2 style={{ marginTop: 0 }}>Verdict</h2>
        <p>
          The BaBylissPRO GoldFX is the clipper you graduate to. If you&apos;re doing 10+ fades per day
          on thick hair and need a motor that won&apos;t bog down, nothing else comes close. The premium price
          pays for itself in durability &mdash; this clipper outlasts two rounds of cheaper alternatives.
          Pair it with the GoldFX Trimmer for the ultimate matching setup.
        </p>
        <div style={{ marginTop: 16 }}>
          <a href={product.amazonLink} target="_blank" rel="noopener noreferrer" className="btn btnAccent" style={{ padding: "14px 24px", fontSize: 16 }}>
            Check Price on Amazon &rarr;
          </a>
        </div>
      </div>

      <div className="row" style={{ marginTop: 16, marginBottom: 40 }}>
        <Link className="btn" href="/picks/best-clippers">All Clippers</Link>
        <Link className="btn" href="/reviews/babyliss-goldfx-trimmer">GoldFX Trimmer Review</Link>
        <Link className="btn" href="/compare">Compare</Link>
      </div>
    </>
  );
}
