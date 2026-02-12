import Link from "next/link";

export const metadata = {
  title: "Andis Master Cordless Review (2026) | Barber Supply Hub",
  description: "In-depth review of the Andis Master Cordless — the premium cordless clipper trusted by professional barbers worldwide.",
};

const product = {
  name: "Andis Master Cordless",
  price: 149.99,
  rating: 4.9,
  reviews: 15234,
  amazonLink: "https://www.amazon.com/dp/B0BJL7W4HP?tag=barbersupp044-20",
  motor: "Magnetic",
  blade: "Carbon Steel",
  power: "Cordless (80min)",
  weight: "1 lb",
};

export default function AndisReview() {
  return (
    <>
      <section className="hero">
        <h1 className="h1" style={{ fontSize: 36 }}>{product.name} &mdash; Full Review</h1>
        <p className="lead">
          The premium cordless clipper with 4.9&star; from {product.reviews.toLocaleString()} reviews. Built for barbers who demand the best.
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
          <li style={{ marginBottom: 8 }}>Magnetic motor runs cooler and quieter than rotary alternatives &mdash; ideal for all-day use</li>
          <li style={{ marginBottom: 8 }}>Carbon steel blade holds sharpness through thousands of cuts without frequent replacement</li>
          <li style={{ marginBottom: 8 }}>Adjustable blade (000-1) covers zero-gap to standard length without swapping blades</li>
          <li style={{ marginBottom: 8 }}>Premium metal housing feels solid and professional in hand</li>
          <li style={{ marginBottom: 8 }}>4.9/5 rating &mdash; highest-rated cordless clipper in our lineup</li>
        </ul>
      </div>

      <div className="card" style={{ marginTop: 16 }}>
        <h2 style={{ marginTop: 0 }}>What Could Be Better</h2>
        <ul style={{ paddingLeft: 18, margin: 0 }}>
          <li style={{ marginBottom: 8 }}>80-minute battery is shorter than Wahl Magic Clip (90min) &mdash; tight for busy days</li>
          <li style={{ marginBottom: 8 }}>At 1 lb, it&apos;s heavier than competitors &mdash; some barbers feel fatigue after 6+ hours</li>
          <li style={{ marginBottom: 8 }}>Premium price at $149.99 &mdash; almost double the Wahl Magic Clip</li>
        </ul>
      </div>

      <div className="card" style={{ marginTop: 16 }}>
        <h2 style={{ marginTop: 0 }}>Verdict</h2>
        <p>
          The Andis Master Cordless is the Rolls Royce of cordless clippers. If you cut 8+ heads
          a day and value blade longevity and build quality over price, this is your tool. The magnetic
          motor stays cool all day, and the carbon steel blade keeps its edge longer than any competitor.
          For budget-conscious barbers, the Wahl Magic Clip at $89.99 delivers 90% of the performance at 60% of the price.
        </p>
        <div style={{ marginTop: 16 }}>
          <a href={product.amazonLink} target="_blank" rel="noopener noreferrer" className="btn btnAccent" style={{ padding: "14px 24px", fontSize: 16 }}>
            Check Price on Amazon &rarr;
          </a>
        </div>
      </div>

      <div className="row" style={{ marginTop: 16, marginBottom: 40 }}>
        <Link className="btn" href="/picks/best-clippers">All Clippers</Link>
        <Link className="btn" href="/reviews/wahl-magic-clip">vs Wahl Magic Clip</Link>
        <Link className="btn" href="/compare">Compare</Link>
      </div>
    </>
  );
}
