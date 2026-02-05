import Link from "next/link";

export default function HomePage() {
  return (
    <main style={{ background: "#0a0a0a", color: "white", minHeight: "100vh", fontFamily: "sans-serif" }}>
      {/* Hero */}
      <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "40px 20px", textAlign: "center" }}>
        <h1 style={{ fontSize: "52px", fontWeight: "800", marginBottom: "20px", maxWidth: "800px" }}>
          Find The Best Barber Tools — Chosen By Pros
        </h1>
        <p style={{ fontSize: "20px", opacity: 0.7, marginBottom: "40px" }}>
          Used by 120k+ barbers worldwide
        </p>
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center" }}>
          <Link href="/picks/best-clippers" style={{ background: "#facc15", color: "black", padding: "16px 32px", borderRadius: "8px", textDecoration: "none", fontWeight: "700", fontSize: "18px" }}>
            View Best Clippers
          </Link>
          <Link href="/compare" style={{ background: "transparent", color: "#facc15", padding: "16px 32px", borderRadius: "8px", textDecoration: "none", fontWeight: "700", fontSize: "18px", border: "2px solid #facc15" }}>
            Compare All
          </Link>
        </div>
      </div>
    </main>
  );
}