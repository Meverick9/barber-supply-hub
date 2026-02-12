import Link from "next/link";

export const metadata = {
  title: "Wahl 5-Star Magic Clip Review (2026) | Barber Supply Hub",
  description: "In-depth review of the Wahl 5-Star Cordless Magic Clip — the best-selling professional clipper for barbers.",
};

const product = {
  name: "Wahl 5-Star Cordless Magic Clip",
  price: 89.99,
  rating: 4.8,
  reviews: 22739,
  amazonLink: "https://www.amazon.com/dp/B00UK8WFQO?tag=barbersupp044-20",
  motor: "Electromagnetic",
  blade: "Crunch Blade",
  power: "Cordless (90min)",
  weight: "8 oz",
};

export default function WahlMagicClipReview() {
  return (
    <>
      <section className="hero">
        <h1 className="h1" style={{ fontSize: 36 }}>{product.name} — Full Review</h1>
        <p className="lead">
          The #1 bestselling cordless clipper with 22,739+ reviews. Here&apos;s our honest take.
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
          <li style={{ marginBottom: 8 }}>Crunch blade technology delivers smooth, snag-free cuts on all hair textures</li>
          <li style={{ marginBottom: 8 }}>90+ minutes of battery life — enough for a full day of fades</li>
          <li style={{ marginBottom: 8 }}>Adjustable taper lever for seamless blending without guard changes</li>
          <li style={{ marginBottom: 8 }}>Lightweight at 8 oz — reduces hand fatigue during long sessions</li>
          <li style={{ marginBottom: 8 }}>Best value in its class at $89.99</li>
        </ul>
      </div>

      <div className="card" style={{ marginTop: 16 }}>
        <h2 style={{ marginTop: 0 }}>What Could Be Better</h2>
        <ul style={{ paddingLeft: 18, margin: 0 }}>
          <li style={{ marginBottom: 8 }}>Blade can run warm after 45+ minutes of continuous use</li>
          <li style={{ marginBottom: 8 }}>Charging stand not included — requires separate purchase</li>
          <li style={{ marginBottom: 8 }}>Some barbers prefer heavier clippers for stability</li>
        </ul>
      </div>

      <div className="card" style={{ marginTop: 16 }}>
        <h2 style={{ marginTop: 0 }}>Verdict</h2>
        <p>
          The Wahl Magic Clip earns its bestseller status. At $89.99, it&apos;s the best value
          cordless clipper for professional barbers. The crunch blade handles every hair type,
          the battery lasts a full shift, and the weight is perfect for all-day fading.
          If you&apos;re buying your first professional clipper or upgrading from a budget model,
          this is the one.
        </p>
        <div style={{ marginTop: 16 }}>
          <a
            href={product.amazonLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btnAccent"
            style={{ padding: "14px 24px", fontSize: 16 }}
          >
            Check Price on Amazon &rarr;
          </a>
        </div>
      </div>

      <div className="row" style={{ marginTop: 16, marginBottom: 40 }}>
        <Link className="btn" href="/picks/best-clippers">See All Clippers</Link>
        <Link className="btn" href="/compare">Compare Tools</Link>
        <Link className="btn" href="/">Home</Link>
      </div>
    </>
  );
}
