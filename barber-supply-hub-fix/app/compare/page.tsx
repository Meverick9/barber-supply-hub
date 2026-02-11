import picks from "@/lib/picks-data.json";
import Link from "next/link";

export const metadata = {
  title: "Compare Barber Tools | Barber Supply Hub",
  description: "Side-by-side comparison of the best professional barber tools.",
};

export default function ComparePage() {
  const clippers = (picks as any)["best-clippers"];
  const products = clippers?.products || [];

  return (
    <>
      <section className="hero">
        <h1 className="h1" style={{ fontSize: 36 }}>Compare Barber Tools</h1>
        <p className="lead">Side-by-side comparison of top-rated professional tools.</p>
      </section>

      {products.length > 0 ? (
        <div className="card">
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
                {products.map((p: any) => (
                  <tr key={p.id}>
                    <td style={{ fontWeight: 600 }}>
                      <a href={p.amazonUrl} target="_blank" rel="noopener noreferrer">
                        {p.name}
                      </a>
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
      ) : (
        <div className="card" style={{ textAlign: "center" }}>
          <p className="muted">Full comparison coming soon.</p>
        </div>
      )}

      <div className="row" style={{ marginTop: 16 }}>
        <Link className="btn" href="/picks/best-clippers">Best Clippers</Link>
        <Link className="btn" href="/picks/best-trimmers">Best Trimmers</Link>
        <Link className="btn" href="/">Home</Link>
      </div>
    </>
  );
}
