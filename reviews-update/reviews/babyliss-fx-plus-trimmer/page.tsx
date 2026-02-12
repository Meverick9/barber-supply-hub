import Link from "next/link";

export const metadata = {
  title: "BaBylissPRO FX+ Trimmer Review (2026) | Barber Supply Hub",
  description: "In-depth review of the BaBylissPRO FX+ Trimmer — upgraded brushless motor, USB-C, and 4-hour runtime for serious barbers.",
};

const product = {
  name: "BaBylissPRO FX+ Trimmer",
  price: 109.99,
  rating: 4.8,
  reviews: 5670,
  amazonLink: "https://www.amazon.com/dp/B0CFSQ6GZ7?tag=barbersupp044-20",
  motor: "N1 Brushless",
  blade: "Exposed T-Blade",
  power: "Cord/Cordless (4hr)",
  weight: "9.0 oz",
};

export default function BabylissFxPlusReview() {
  return (
    <>
      <section className="hero">
        <h1 className="h1" style={{ fontSize: 36 }}>{product.name} &mdash; Full Review</h1>
        <p className="lead">
          The upgraded GoldFX with N1 brushless motor, USB-C charging, and 4 hours of runtime.
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
          <li style={{ marginBottom: 8 }}>N1 brushless motor with dual ball bearings &mdash; more efficient and longer-lasting than rotary</li>
          <li style={{ marginBottom: 8 }}>4-hour runtime &mdash; double the GoldFX, enough for 2+ full days of trimming</li>
          <li style={{ marginBottom: 8 }}>USB-C charging &mdash; modern, fast, and uses the same cable as your phone</li>
          <li style={{ marginBottom: 8 }}>Same knurled grip and exposed T-blade as the GoldFX &mdash; proven ergonomics</li>
          <li style={{ marginBottom: 8 }}>Cord/cordless operation for zero downtime</li>
        </ul>
      </div>

      <div className="card" style={{ marginTop: 16 }}>
        <h2 style={{ marginTop: 0 }}>What Could Be Better</h2>
        <ul style={{ paddingLeft: 18, margin: 0 }}>
          <li style={{ marginBottom: 8 }}>$30 more than the GoldFX &mdash; the upgrades are real but not essential for everyone</li>
          <li style={{ marginBottom: 8 }}>Fewer reviews (5,670) since it&apos;s a newer model &mdash; less field-tested than the classic GoldFX</li>
          <li style={{ marginBottom: 8 }}>3-hour initial charge required before first use</li>
        </ul>
      </div>

      <div className="card" style={{ marginTop: 16 }}>
        <h2 style={{ marginTop: 0 }}>Verdict</h2>
        <p>
          The FX+ is the GoldFX evolved. If you&apos;re buying your first BaByliss trimmer, go straight to
          the FX+ &mdash; the brushless motor and 4-hour battery justify the $30 premium. If you already own
          a GoldFX that works fine, the upgrade is nice but not urgent. Pair with the GoldFX Clipper for
          the ultimate BaByliss stack ($310 total).
        </p>
        <div style={{ marginTop: 16 }}>
          <a href={product.amazonLink} target="_blank" rel="noopener noreferrer" className="btn btnAccent" style={{ padding: "14px 24px", fontSize: 16 }}>
            Check Price on Amazon &rarr;
          </a>
        </div>
      </div>

      <div className="row" style={{ marginTop: 16, marginBottom: 40 }}>
        <Link className="btn" href="/picks/best-trimmers">All Trimmers</Link>
        <Link className="btn" href="/reviews/babyliss-goldfx-trimmer">vs GoldFX Trimmer</Link>
        <Link className="btn" href="/picks/starter-kit">Starter Kits</Link>
      </div>
    </>
  );
}
