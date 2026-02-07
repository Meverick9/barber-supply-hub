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
      
      {/* Header */}
      <div style={{ background: "#1a1a2e", padding: "60px 20px", textAlign: "center", borderBottom: "1px solid #333" }}>
        <h1 style={{ fontSize: "42px", fontWeight: "800", marginBottom: "16px" }}>
          Compare Hair Clippers
        </h1>
        <p style={{ fontSize: "18px", opacity: 0.8, maxWidth: "700px", margin: "0 auto" }}>
          Side-by-side comparison of top professional clippers. Click any product to check current price on Amazon.
        </p>
      </div>

      <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "40px 20px" }}>
        
        {/* Table Container */}
        <div style={{ overflowX: "auto", background: "#1a1a1a", borderRadius: "16px", border: "1px solid #333" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", minWidth: "1000px" }}>
            
            {/* Header Row */}
            <thead>
              <tr style={{ background: "#0a0a0a" }}>
                <th style={{ padding: "20px", textAlign: "left", fontSize: "14px", opacity: 0.7, fontWeight: "600" }}>Product</th>
                <th style={{ padding: "20px", textAlign: "center", fontSize: "14px", opacity: 0.7, fontWeight: "600" }}>Price</th>
                <th style={{ padding: "20px", textAlign: "center", fontSize: "14px", opacity: 0.7, fontWeight: "600" }}>Rating</th>
                <th style={{ padding: "20px", textAlign: "center", fontSize: "14px", opacity: 0.7, fontWeight: "600" }}>Type</th>
                <th style={{ padding: "20px", textAlign: "center", fontSize: "14px", opacity: 0.7, fontWeight: "600" }}>Battery</th>
                <th style={{ padding: "20px", textAlign: "center", fontSize: "14px", opacity: 0.7, fontWeight: "600" }}>Motor</th>
                <th style={{ padding: "20px", textAlign: "center", fontSize: "14px", opacity: 0.7, fontWeight: "600" }}>Weight</th>
                <th style={{ padding: "20px", textAlign: "center", fontSize: "14px", opacity: 0.7, fontWeight: "600" }}>Best For</th>
                <th style={{ padding: "20px", textAlign: "center", fontSize: "14px", opacity: 0.7, fontWeight: "600" }}>Action</th>
              </tr>
            </thead>

            {/* Body */}
            <tbody>
              {products.map((product, index) => (
                <tr 
                  key={product.id} 
                  style={{ 
                    borderTop: "1px solid #333",
                    background: index % 2 === 0 ? "#1a1a1a" : "#151515"
                  }}
                >
                  {/* Product Name */}
                  <td style={{ padding: "20px" }}>
                    <a 
                      href={product.amazonLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      <div style={{ fontWeight: "700", fontSize: "16px", marginBottom: "4px", color: "#facc15" }}>
                        {product.name}
                      </div>
                      <div style={{ fontSize: "12px", opacity: 0.6 }}>{product.warranty} warranty</div>
                    </a>
                  </td>

                  {/* Price */}
                  <td style={{ padding: "20px", textAlign: "center" }}>
                    <div style={{ color: "#facc15", fontSize: "24px", fontWeight: "800" }}>
                      ${product.price.toFixed(2)}
                    </div>
                    <div style={{ fontSize: "11px", opacity: 0.5, marginTop: "4px" }}>on Amazon</div>
                  </td>

                  {/* Rating */}
                  <td style={{ padding: "20px", textAlign: "center" }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "4px", marginBottom: "4px" }}>
                      <span style={{ color: "#facc15", fontSize: "16px" }}>★</span>
                      <span style={{ fontWeight: "700", fontSize: "16px" }}>{product.rating}</span>
                    </div>
                    <div style={{ fontSize: "12px", opacity: 0.6 }}>{product.reviews.toLocaleString()} reviews</div>
                  </td>

                  {/* Type */}
                  <td style={{ padding: "20px", textAlign: "center" }}>
                    <span style={{ 
                      background: product.cordless ? "#22c55e" : "#6366f1",
                      color: "white",
                      padding: "6px 12px",
                      borderRadius: "20px",
                      fontSize: "12px",
                      fontWeight: "600"
                    }}>
                      {product.cordless ? "Cordless" : "Corded"}
                    </span>
                  </td>

                  {/* Battery */}
                  <td style={{ padding: "20px", textAlign: "center", fontSize: "14px" }}>
                    {product.battery}
                  </td>

                  {/* Motor */}
                  <td style={{ padding: "20px", textAlign: "center", fontSize: "14px" }}>
                    {product.motor}
                  </td>

                  {/* Weight */}
                  <td style={{ padding: "20px", textAlign: "center", fontSize: "14px" }}>
                    {product.weight}
                  </td>

                  {/* Best For */}
                  <td style={{ padding: "20px", textAlign: "center", fontSize: "14px", opacity: 0.9 }}>
                    {product.bestFor}
                  </td>

                  {/* CTA Button */}
                  <td style={{ padding: "20px", textAlign: "center" }}>
                    <a 
                      href={product.amazonLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        background: "#facc15",
                        color: "black",
                        padding: "12px 20px",
                        borderRadius: "6px",
                        textDecoration: "none",
                        fontWeight: "700",
                        fontSize: "13px",
                        display: "inline-block"
                      }}
                    >
                      View Deal
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Legend */}
        <div style={{ marginTop: "30px", display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ background: "#22c55e", padding: "4px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: "600" }}>Cordless</span>
            <span style={{ opacity: 0.7, fontSize: "14px" }}>Battery powered</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ background: "#6366f1", padding: "4px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: "600" }}>Corded</span>
            <span style={{ opacity: 0.7, fontSize: "14px" }}>Plug-in power</span>
          </div>
        </div>

        {/* Bottom Info */}
        <div style={{ marginTop: "40px", textAlign: "center", padding: "30px", background: "#1a1a1a", borderRadius: "12px" }}>
          <h3 style={{ marginBottom: "16px", fontSize: "20px" }}>Why trust our comparison?</h3>
          <div style={{ display: "flex", justifyContent: "center", gap: "40px", flexWrap: "wrap", opacity: 0.8 }}>
            <div>✓ Real user reviews</div>
            <div>✓ Hands-on testing</div>
            <div>✓ Updated weekly</div>
            <div>✓ Affiliate links disclosed</div>
          </div>
        </div>

        {/* Back Link */}
        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <Link href="/picks/best-clippers" style={{ color: "#facc15", textDecoration: "none", fontSize: "16px" }}>
            ← Back to detailed view
          </Link>
        </div>
      </div>
    </main>
  );
}