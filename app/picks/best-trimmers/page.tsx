import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Professional Hair Trimmers 2025",
  description:
    "Discover the best barber trimmers for lining, edging, and precision work. Compare top-rated professional models.",
  alternates: {
    canonical: "https://barbersupplyhub.com/picks/best-trimmers",
  },
};
import Link from "next/link";

const products = [
  {
    id: "wahl-detailer",
    name: "Wahl Detailer Li",
    price: 79.99,
    currency: "$",
    rating: 4.8,
    reviews: 15432,
    amazonLink: "https://www.amazon.com/dp/B07W4M5F4Q?tag=barbersupp044-20",
    description: "Cordless T-blade trimmer with lithium-ion battery",
  },
  {
    id: "andis-t-outliner",
    name: "Andis T-Outliner Cordless",
    price: 119.99,
    currency: "$",
    rating: 4.9,
    reviews: 22109,
    amazonLink: "https://www.amazon.com/dp/B0BJL7W4HP?tag=barbersupp044-20",
    description: "Professional cordless T-blade outliner for crisp outlines",
  },
  {
    id: "babyliss-silverfx",
    name: "BaBylissPRO SilverFX",
    price: 159.99,
    currency: "$",
    rating: 4.7,
    reviews: 7654,
    amazonLink: "https://www.amazon.com/dp/B07VZPCX8Q?tag=barbersupp044-20",
    description: "High-torque brushless motor with silver titanium blade",
  },
];

export default function BestTrimmersPage() {
  return (
    <main style={{ background: "#0a0a0a", color: "white", minHeight: "100vh", fontFamily: "sans-serif" }}>
      <div style={{ background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)", padding: "80px 20px", textAlign: "center", borderBottom: "1px solid #333" }}>
        <h1 style={{ fontSize: "48px", fontWeight: "800", marginBottom: "16px" }}>Professional Beard Trimmers</h1>
        <p style={{ fontSize: "20px", opacity: 0.8 }}>Precision trimmers for detailing and edging</p>
      </div>

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "40px 20px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "30px" }}>
          {products.map((product) => (
            <div key={product.id} style={{ background: "#1a1a1a", borderRadius: "12px", padding: "25px", textAlign: "center", border: "1px solid #333" }}>
              <div style={{ width: "100%", height: "220px", background: "#2a2a2a", borderRadius: "8px", marginBottom: "20px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "48px" }}>✂️</div>
              <h3 style={{ fontSize: "20px", marginBottom: "10px", fontWeight: "600" }}>{product.name}</h3>
              <p style={{ opacity: 0.6, fontSize: "14px", marginBottom: "15px" }}>{product.description}</p>
              <p style={{ color: "#facc15", fontSize: "28px", fontWeight: "700", marginBottom: "10px" }}>{product.currency}{product.price.toFixed(2)}</p>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "5px", marginBottom: "20px" }}>
                <span style={{ color: "#facc15" }}>★</span>
                <span>{product.rating}</span>
                <span style={{ opacity: 0.5 }}>({product.reviews.toLocaleString()})</span>
              </div>
              <a href={product.amazonLink} target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: "#facc15", color: "black", padding: "14px 28px", borderRadius: "8px", textDecoration: "none", fontWeight: "700" }}>
                View on Amazon →
              </a>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}