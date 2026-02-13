import picks from "@/lib/picks-data.json";
import Link from "next/link";

export const metadata = {
  title: "Compare Barber Tools — Side by Side",
  description:
    "Side-by-side comparison of professional barber clippers and trimmers. Motor, blade, power, weight, rating, and price.",
  openGraph: {
    title: "Compare Barber Tools | Barber Supply Hub",
    description: "Side-by-side comparison of professional barber clippers and trimmers.",
    url: "https://barber-supply-hub.vercel.app/compare",
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: "Compare Barber Tools" }],
    type: "website",
  },
  alternates: { canonical: "https://barber-supply-hub.vercel.app/compare" },
};

export default function ComparePage() {
  const clippers = (picks as any)["best-clippers"];
  const trimmers = (picks as any)["best-trimmers"];
  const clipperProducts = clippers?.products || [];
  const trimmerProducts = trimmers?.products || [];

  return (
    <>
      <section className="hero">
        <h1 className="h1" style={{ fontSize: 36 }}>Compare Barber Tools</h1>
        <p className="lead">Side-by-side comparison of top-rated professional clippers and trimmers.</p>
      </section>

      {clipperProducts.length > 0 && (
        <div className="card">
          <h2 style={{ marginTop: 0 }}>Clippers</h2>
          <div style={{ overflowX: "auto" }}>
            <table className="table">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Motor</th>
                  <th>Blade</th>
                  <th>Power</th>
                  <th>Weight</th>
                  <th>Rating</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {clipperProducts.map((p: any) => (
                  <tr key={p.id}>
                    <td style={{ fontWeight: 600 }}>
                      <Link href={`/reviews/${p.id}`} style={{ borderBottom: "1px solid #333" }}>{p.name}</Link>
                    </td>
                    <td className="small">{p.motor}</td>
                    <td className="small">{p.blade}</td>
                    <td className="small">{p.power}</td>
                    <td className="small">{p.weight}</td>
                    <td>&star; {p.rating}</td>
                    <td className="price">${p.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {trimmerProducts.length > 0 && (
        <div className="card" style={{ marginTop: 16 }}>
          <h2 style={{ marginTop: 0 }}>Trimmers</h2>
          <div style={{ overflowX: "auto" }}>
            <table className="table">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Motor</th>
                  <th>Blade</th>
                  <th>Power</th>
                  <th>Weight</th>
                  <th>Rating</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {trimmerProducts.map((p: any) => (
                  <tr key={p.id}>
                    <td style={{ fontWeight: 600 }}>
                      <Link href={`/reviews/${p.id}`} style={{ borderBottom: "1px solid #333" }}>{p.name}</Link>
                    </td>
                    <td className="small">{p.motor}</td>
                    <td className="small">{p.blade}</td>
                    <td className="small">{p.power}</td>
                    <td className="small">{p.weight}</td>
                    <td>&star; {p.rating}</td>
                    <td className="price">${p.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      <div className="row" style={{ marginTop: 16 }}>
        <Link className="btn" href="/picks/best-clippers">Best Clippers</Link>
        <Link className="btn" href="/picks/best-trimmers">Best Trimmers</Link>
        <Link className="btn" href="/picks/starter-kit">Starter Kits</Link>
        <Link className="btn" href="/">Home</Link>
      </div>
    </>
  );
}
