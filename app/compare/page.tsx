import Link from "next/link";

const products = [
  {
    id: "wahl-magic-clip",
    name: "Wahl 5-Star Magic Clip",
    price: 89.99,
    rating: 4.8,
    reviews: 22739,
    cordless: true,
    battery: "100 min",
    motor: "Rotary",
    weight: "10 oz",
    warranty: "1 year",
    amazonLink: "https://www.amazon.com/dp/B00UK8WFQO?tag=barbersupp044-20",
    bestFor: "Fades & Tapers",
  },
  {
    id: "andis-master",
    name: "Andis Master Cordless",
    price: 149.99,
    rating: 4.9,
    reviews: 15234,
    cordless: true,
    battery: "90 min",
    motor: "Magnetic",
    weight: "12 oz",
    warranty: "1 year",
    amazonLink: "https://www.amazon.com/dp/B0BJL7W4HP?tag=barbersupp044-20",
    bestFor: "Precision Work",
  },
  {
    id: "babyliss-goldfx",
    name: "BaBylissPRO GoldFX",
    price: 199.99,
    rating: 4.7,
    reviews: 8934,
    cordless: true,
    battery: "120 min",
    motor: "Brushless",
    weight: "9.5 oz",
    warranty: "2 years",
    amazonLink: "https://www.amazon.com/dp/B09TCN6BHL?tag=barbersupp044-20",
    bestFor: "Professional Use",
  },
  {
    id: "wahl-senior",
    name: "Wahl 5-Star Senior",
    price: 109.99,
    rating: 4.8,
    reviews: 18765,
    cordless: false,
    battery: "Corded",
    motor: "V9000",
    weight: "11 oz",
    warranty: "1 year",
    amazonLink: "https://www.amazon.com/dp/B000VVT94G?tag=barbersupp044-20",
    bestFor: "Heavy Duty",
  },
  {
    id: "oster-76",
    name: "Oster Classic 76",
    price: 129.99,
    rating: 4.6,
    reviews: 9876,
    cordless: false,
    battery: "Corded",
    motor: "Universal",
    weight: "14 oz",
    warranty: "1 year",
    amazonLink: "https://www.amazon.com/dp/B0009XH5OG?tag=barbersupp044-20",
    bestFor: "Detachable Blades",
  },
];

export default function ComparePage() {
  return (
    <main style={{ background: "#0a0a0a", color: "white", minHeight: "100vh", fontFamily: "sans-serif" }}>
      <div style={{ background: "#1a1a2e", padding: "60px 20px", textAlign: "center", borderBottom: "1px solid #333" }}>
        <h1 style={{ fontSize: "42px", fontWeight: "800", marginBottom: "16px" }}>Compare Hair Clippers</h1>
        <p style={{ fontSize: "18px", opacity: 0.8 }}>Side-by-side comparison of top professional clippers</p>
      </div>

      <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "40px 20px" }}>
        <div style={{ overflowX: "auto", background: "#1a1a1a", borderRadius: "16px", border: "1px solid #333" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", minWidth: "1000px" }}>
            <thead>
              <tr style={{ background: "#0a0a0a" }}>
                <th style={{ padding: "20px", textAlign: "left" }}>Product</th>
                <th style={{ padding: "20px", textAlign: "center" }}>Price</th>
                <th style={{ padding: "20px", textAlign: "center" }}>Rating</th>
                <th style={{ padding: "20px", textAlign: "center" }}>Type</th>
                <th style={{ padding: "20px", textAlign: "center" }}>Battery</th>
                <th style={{ padding: "20px", textAlign: "center" }}>Motor</th>
                <th style={{ padding: "20px", textAlign: "center" }}>Weight</th>
                <th style={{ padding: "20px", textAlign: "center" }}>Best For</th>
                <th style={{ padding: "20px", textAlign: "center" }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={product.id} style={{ borderTop: "1px solid #333", background: index % 2 === 0 ? "#1a1a1a" : "#151515" }}>
                  <td style={{ padding: "20px" }}>
                    <a href={product.amazonLink} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "#facc15", fontWeight: "700" }}>
                      {product.name}
                    </a>
                  </td>
                  <td style={{ padding: "20px", textAlign: "center", color: "#facc15", fontWeight: "800", fontSize: "20px" }}>
                    ${product.price.toFixed(2)}
                  </td>
                  <td style={{ padding: "20px", textAlign: "center" }}>
                    <span style={{ color: "#facc15" }}>★</span> {product.rating}
                    <div style={{ fontSize: "12px", opacity: 0.6 }}>({product.reviews.toLocaleString()})</div>
                  </td>
                  <td style={{ padding: "20px", textAlign: "center" }}>
                    <span style={{ background: product.cordless ? "#22c55e" : "#6366f1", padding: "4px 12px", borderRadius: "20px", fontSize: "12px" }}>
                      {product.cordless ? "Cordless" : "Corded"}
                    </span>
                  </td>
                  <td style={{ padding: "20px", textAlign: "center", fontSize: "14px" }}>{product.battery}</td>
                  <td style={{ padding: "20px", textAlign: "center", fontSize: "14px" }}>{product.motor}</td>
                  <td style={{ padding: "20px", textAlign: "center", fontSize: "14px" }}>{product.weight}</td>
                  <td style={{ padding: "20px", textAlign: "center", fontSize: "14px" }}>{product.bestFor}</td>
                  <td style={{ padding: "20px", textAlign: "center" }}>
                    <a href={product.amazonLink} target="_blank" rel="noopener noreferrer" style={{ background: "#facc15", color: "black", padding: "10px 20px", borderRadius: "6px", textDecoration: "none", fontWeight: "700", fontSize: "13px" }}>
                      View Deal
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}