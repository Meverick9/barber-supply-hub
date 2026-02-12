import Link from "next/link";

export const metadata = {
  title: "Wahl Professional 5-Star Senior Review (2026) | Barber Supply Hub",
  description: "In-depth review of the Wahl 5-Star Senior — the legendary corded workhorse with V9000 motor for high-volume shops.",
};

const product = {
  name: "Wahl Professional 5-Star Senior",
  price: 109.99,
  rating: 4.8,
  reviews: 18765,
  amazonLink: "https://www.amazon.com/dp/B000VVT94G?tag=barbersupp044-20",
  motor: "V9000",
  blade: "Adjustable",
  power: "Corded",
  weight: "10 oz",
};

export default function WahlSeniorReview() {
  return (
    <>
      <section className="hero">
        <h1 className="h1" style={{ fontSize: 36 }}>{product.name} &mdash; Full Review</h1>
        <p className="lead">
          The legendary V9000 motor that never dies. The corded workhorse trusted by high-volume barbershops.
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
          <li style={{ marginBottom: 8 }}>V9000 motor runs faster and cooler than standard electromagnetic motors</li>
          <li style={{ marginBottom: 8 }}>Zero battery anxiety &mdash; corded power means consistent performance all day</li>
          <li style={{ marginBottom: 8 }}>Adjustable blade lever covers taper range without changing guards</li>
          <li style={{ marginBottom: 8 }}>Zero-gap capable with lever adjustment for razor-close cuts</li>
          <li style={{ marginBottom: 8 }}>Best blade versatility in its price range &mdash; fades, tapers, and beard work</li>
        </ul>
      </div>

      <div className="card" style={{ marginTop: 16 }}>
        <h2 style={{ marginTop: 0 }}>What Could Be Better</h2>
        <ul style={{ paddingLeft: 18, margin: 0 }}>
          <li style={{ marginBottom: 8 }}>Corded only &mdash; the cord limits mobility around the chair</li>
          <li style={{ marginBottom: 8 }}>At 10 oz, slightly heavier than cordless competitors</li>
          <li style={{ marginBottom: 8 }}>Included guards are basic &mdash; most barbers upgrade to premium guards separately</li>
        </ul>
      </div>

      <div className="card" style={{ marginTop: 16 }}>
        <h2 style={{ marginTop: 0 }}>Verdict</h2>
        <p>
          The Wahl Senior is the tool you grab when you need zero compromises on power. It won&apos;t
          die mid-fade, it won&apos;t slow down on thick hair, and it won&apos;t break the bank at $109.99.
          If you work at a fixed station and value reliability over portability, this is your clipper.
          Many barbers use a corded Senior as their primary and a cordless Magic Clip for mobile work.
        </p>
        <div style={{ marginTop: 16 }}>
          <a href={product.amazonLink} target="_blank" rel="noopener noreferrer" className="btn btnAccent" style={{ padding: "14px 24px", fontSize: 16 }}>
            Check Price on Amazon &rarr;
          </a>
        </div>
      </div>

      <div className="row" style={{ marginTop: 16, marginBottom: 40 }}>
        <Link className="btn" href="/picks/best-clippers">All Clippers</Link>
        <Link className="btn" href="/reviews/wahl-magic-clip">vs Magic Clip</Link>
        <Link className="btn" href="/compare">Compare</Link>
      </div>
    </>
  );
}
