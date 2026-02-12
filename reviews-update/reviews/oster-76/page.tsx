import Link from "next/link";

export const metadata = {
  title: "Oster Classic 76 Review (2026) | Barber Supply Hub",
  description: "In-depth review of the Oster Classic 76 — the tank-like detachable blade clipper that lasts 10+ years.",
};

const product = {
  name: "Oster Classic 76",
  price: 129.99,
  rating: 4.6,
  reviews: 9876,
  amazonLink: "https://www.amazon.com/dp/B0009XH5OG?tag=barbersupp044-20",
  motor: "Universal",
  blade: "Detachable",
  power: "Corded",
  weight: "1.2 lb",
};

export default function Oster76Review() {
  return (
    <>
      <section className="hero">
        <h1 className="h1" style={{ fontSize: 36 }}>{product.name} &mdash; Full Review</h1>
        <p className="lead">
          The industry-standard detachable blade clipper. Built like a tank, lasts a decade.
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
          <li style={{ marginBottom: 8 }}>Universal motor delivers brute force &mdash; cuts through any hair type without hesitation</li>
          <li style={{ marginBottom: 8 }}>Detachable blade system allows instant switching between sizes (000 to 3&frac34;)</li>
          <li style={{ marginBottom: 8 }}>Built to last &mdash; many barbers use the same Classic 76 for 10+ years</li>
          <li style={{ marginBottom: 8 }}>Massive blade ecosystem &mdash; compatible with all Oster A5-style detachable blades</li>
          <li style={{ marginBottom: 8 }}>Ideal for bulk hair removal before fading with a second clipper</li>
        </ul>
      </div>

      <div className="card" style={{ marginTop: 16 }}>
        <h2 style={{ marginTop: 0 }}>What Could Be Better</h2>
        <ul style={{ paddingLeft: 18, margin: 0 }}>
          <li style={{ marginBottom: 8 }}>At 1.2 lb, it&apos;s the heaviest clipper in our lineup &mdash; hand fatigue is real</li>
          <li style={{ marginBottom: 8 }}>No taper lever &mdash; you need to swap blades for different lengths</li>
          <li style={{ marginBottom: 8 }}>Corded only with no cordless option available</li>
          <li style={{ marginBottom: 8 }}>Runs hotter than competitors during extended use</li>
        </ul>
      </div>

      <div className="card" style={{ marginTop: 16 }}>
        <h2 style={{ marginTop: 0 }}>Verdict</h2>
        <p>
          The Oster Classic 76 is the clipper your mentor used, and their mentor before them. It&apos;s not
          the most refined tool &mdash; it&apos;s heavy, corded, and doesn&apos;t have a taper lever. But nothing
          matches its raw cutting power and the versatility of detachable blades. Best used as a
          dedicated bulk-removal tool alongside a fade clipper like the Magic Clip or Andis Master.
        </p>
        <div style={{ marginTop: 16 }}>
          <a href={product.amazonLink} target="_blank" rel="noopener noreferrer" className="btn btnAccent" style={{ padding: "14px 24px", fontSize: 16 }}>
            Check Price on Amazon &rarr;
          </a>
        </div>
      </div>

      <div className="row" style={{ marginTop: 16, marginBottom: 40 }}>
        <Link className="btn" href="/picks/best-clippers">All Clippers</Link>
        <Link className="btn" href="/reviews/wahl-senior">vs Wahl Senior</Link>
        <Link className="btn" href="/compare">Compare</Link>
      </div>
    </>
  );
}
