import Link from "next/link";

const kits = [
  {
    id: "beginner",
    name: "Beginner Barber Kit",
    price: 149.99,
    currency: "$",
    rating: 4.6,
    reviews: 5432,
    amazonLink: "https://www.amazon.com/dp/B07CKJ8F9C?tag=barbersupp044-20",
    description: "Complete kit with clipper, trimmer, shears, and accessories",
    items: ["Wahl Clipper", "Trimmer", "Cutting Shears", "Cape, Combs, Guards"],
  },
  {
    id: "professional",
    name: "Professional Barber Set",
    price: 299.99,
    currency: "$",
    rating: 4.8,
    reviews: 3210,
    amazonLink: "https://www.amazon.com/dp/B08N5WRWNW?tag=barbersupp044-20",
    description: "Premium tools for serious barbers and shop owners",
    items: ["Andis Clipper", "Detail Trimmer", "Shears Set", "Razor, Cape, Case"],
  },
];

export default function StarterKitPage() {
  return (
    <main style={{ background: "#0a0a0a", color: "white", minHeight: "100vh", fontFamily: "sans-serif" }}>
      <div style={{ background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)", padding: "80px 20px", textAlign: "center", borderBottom: "1px solid #333" }}>
        <h1 style={{ fontSize: "48px", fontWeight: "800", marginBottom: "16px" }}>Barber Starter Kits</h1>
        <p style={{ fontSize: "20px", opacity: 0.8 }}>Everything you need to start cutting hair professionally</p>
      </div>

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "40px 20px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "30px" }}>
          {kits.map((kit) => (
            <div key={kit.id} style={{ background: "#1a1a1a", borderRadius: "12px", padding: "25px", textAlign: "center", border: "1px solid #333" }}>
              <div style={{ width: "100%", height: "220px", background: "#2a2a2a", borderRadius: "8px", marginBottom: "20px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "48px" }}>🧰</div>
              <h3 style={{ fontSize: "22px", marginBottom: "10px", fontWeight: "600" }}>{kit.name}</h3>
              <p style={{ opacity: 0.6, fontSize: "14px", marginBottom: "15px" }}>{kit.description}</p>
              
              <div style={{ background: "#0a0a0a", borderRadius: "8px", padding: "15px", marginBottom: "15px", textAlign: "left" }}>
                <p style={{ fontSize: "12px", opacity: 0.5, marginBottom: "8px" }}>INCLUDES:</p>
                {kit.items.map((item, idx) => (
                  <div key={idx} style={{ fontSize: "14px", marginBottom: "5px", display: "flex", alignItems: "center", gap: "8px" }}>
                    <span style={{ color: "#facc15" }}>✓</span> {item}
                  </div>
                ))}
              </div>

              <p style={{ color: "#facc15", fontSize: "28px", fontWeight: "700", marginBottom: "10px" }}>{kit.currency}{kit.price.toFixed(2)}</p>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "5px", marginBottom: "20px" }}>
                <span style={{ color: "#facc15" }}>★</span>
                <span>{kit.rating}</span>
                <span style={{ opacity: 0.5 }}>({kit.reviews.toLocaleString()})</span>
              </div>
              <a href={kit.amazonLink} target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: "#facc15", color: "black", padding: "14px 28px", borderRadius: "8px", textDecoration: "none", fontWeight: "700" }}>
                View on Amazon →
              </a>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}