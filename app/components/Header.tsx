import Link from "next/link";

export default function Header() {
  return (
    <header
      style={{
        background: "#0a0a0a",
        borderBottom: "1px solid #333",
        padding: "20px 40px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link
          href="/"
          style={{
            color: "#facc15",
            fontSize: "24px",
            fontWeight: "700",
            textDecoration: "none",
          }}
        >
          Barber Supply Hub
        </Link>

        <nav style={{ display: "flex", gap: "30px" }}>
          <Link href="/picks/best-clippers" style={{ color: "white", textDecoration: "none", opacity: 0.8 }}>
            Clippers
          </Link>
          <Link href="/picks/best-trimmers" style={{ color: "white", textDecoration: "none", opacity: 0.8 }}>
            Trimmers
          </Link>
          <Link href="/picks/starter-kit" style={{ color: "white", textDecoration: "none", opacity: 0.8 }}>
            Starter Kit
          </Link>
          <Link href="/barbers" style={{ color: "white", textDecoration: "none", opacity: 0.8 }}>
            Barber Profile
          </Link>
          <Link href="/compare" style={{ color: "white", textDecoration: "none", opacity: 0.8 }}>
            Compare
          </Link>
        </nav>
      </div>
    </header>
  );
}