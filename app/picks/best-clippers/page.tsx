import Link from "next/link";

const products = [
  {
    id: "wahl-magic-clip",
    name: "Wahl 5-Star Cordless Magic Clip",
    price: 89.99,
    currency: "$",
    rating: 4.8,
    reviews: 22739,
    amazonLink: "https://www.amazon.com/dp/B00UK8WFQO?tag=barbersupp044-20",
    description: "Professional cordless clipper with crunch blade technology",
    badge: "Bestseller",
  },
  {
    id: "andis-master",
    name: "Andis Master Cordless",
    price: 149.99,
    currency: "$",
    rating: 4.9,
    reviews: 15234,
    amazonLink: "https://www.amazon.com/dp/B0BJL7W4HP?tag=barbersupp044-20",
    description: "Premium adjustable blade clipper with lithium-ion battery",
    badge: "Pro Choice",
  },
  {
    id: "babyliss-goldfx",
    name: "BaBylissPRO GoldFX",
    price: 199.99,
    currency: "$",
    rating: 4.7,
    reviews: 8934,
    amazonLink: "https://www.amazon.com/dp/B09TCN6BHL?tag=barbersupp044-20",
    description: "High-torque brushless motor with gold titanium blade",
    badge: "Premium",
  },
  {
    id: "wahl-senior",
    name: "Wahl Professional 5-Star Senior",
    price: 109.99,
    currency: "$",
    rating: 4.8,
    reviews: 18765,
    amazonLink: "https://www.amazon.com/dp/B000VVT94G?tag=barbersupp044-20",
    description: "Powerful V9000 motor for precision cutting",
  },
  {
    id: "oster-76",
    name: "Oster Classic 76",
    price: 129.99,
    currency: "$",
    rating: 4.6,
    reviews: 9876,
    amazonLink: "https://www.amazon.com/dp/B0009XH5OG?tag=barbersupp044-20",
    description: "Heavy-duty detachable blade clipper",
  },
  {
    id: "wahl-elite",
    name: "Wahl Elite Pro",
    price: 59.99,
    currency: "$",
    rating: 4.5,
    reviews: 12543,
    amazonLink: "https://www.amazon.com/dp/B01MRXK4YH?tag=barbersupp044-20",
    description: "High-performance corded clipper for home and professional use",
  },
];

export default function BestClippersPage() {
  return (
    <main style={{ background: "#0a0a0a", color: "white", minHeight: "100vh", fontFamily: "sans-serif" }}>
      {/* Hero */}
      <div style={{ background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)", padding: "80px 20px", textAlign: "center", borderBottom: "1px solid #333" }}>
        <h1 style={{ fontSize: "48px", fontWeight: "800", marginBottom: "16px" }}>Professional Hair Clippers</h1>
        <p style={{ fontSize: "20px", opacity: 0.8, maxWidth: "600px", margin: "0 auto 30px" }}>
          Compare top-rated clippers. Read reviews from 120k+ barbers.
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: "30px", flexWrap: "wrap", opacity: 0.7, fontSize: "14px" }}>
          <span>✓ 120k+ Reviews</span>
          <span>✓ Expert Picks</span>
          <span>✓ Best Prices</span>
        </div>
      </div>

      {/* Products */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "40px 20px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {products.map((product) => (
            <div key={product.id} style={{ background: "#1a1a1a", borderRadius: "16px", overflow: "hidden", border: "1px solid #333", display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
              {/* Image */}
              <div style={{ position: "relative", width: "100%", maxWidth: "400px", height: "300px", background: "#2a2a2a", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "80px" }}>
                ✂️
                {product.badge && (
                  <div style={{ position: "absolute", top: "15px", left: "15px", background: "#facc15", color: "black", padding: "6px 12px", borderRadius: "4px", fontSize: "12px", fontWeight: "700" }}>
                    {product.badge}
                  </div>
                )}
                <div style={{ position: "absolute", bottom: "15px", left: "15px", background: "rgba(0,0,0,0.8)", padding: "8px 12px", borderRadius: "8px", display: "flex", alignItems: "center", gap: "5px" }}>
                  <span style={{ color: "#facc15", fontSize: "18px" }}>★</span>
                  <span style={{ fontWeight: "700" }}>{product.rating}</span>
                  <span style={{ opacity: 0.7, fontSize: "14px" }}>({product.reviews.toLocaleString()})</span>
                </div>
              </div>

              {/* Info */}
              <div style={{ flex: "1", padding: "25px", minWidth: "300px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div>
                  <h3 style={{ fontSize: "24px", marginBottom: "8px", fontWeight: "700" }}>{product.name}</h3>
                  <p style={{ opacity: 0.7, fontSize: "16px", marginBottom: "15px" }}>{product.description}</p>
                  <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "15px" }}>
                    <span style={{ background: "#0a0a0a", padding: "6px 12px", borderRadius: "4px", fontSize: "13px" }}>✓ Cordless</span>
                    <span style={{ background: "#0a0a0a", padding: "6px 12px", borderRadius: "4px", fontSize: "13px" }}>✓ Professional</span>
                  </div>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "15px", paddingTop: "20px", borderTop: "1px solid #333" }}>
                  <div>
                    <p style={{ opacity: 0.6, fontSize: "14px", marginBottom: "4px" }}>Price on Amazon</p>
                    <p style={{ color: "#facc15", fontSize: "32px", fontWeight: "800" }}>{product.currency}{product.price.toFixed(2)}</p>
                  </div>
                  <a href={product.amazonLink} target="_blank" rel="noopener noreferrer" style={{ background: "#facc15", color: "black", padding: "16px 32px", borderRadius: "8px", textDecoration: "none", fontWeight: "700", fontSize: "16px" }}>
                    Check Price →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}