export default function PicksPage() {
  const product = {
    name: "Wahl 5-Star Cordless Magic Clip",
    img: "/picks/magic-clip.jpg",
    url: "https://www.amazon.com/dp/B00UK8WFQO?tag=barbersupp044-20",
    bullets: [
      "The clipper most barbers actually use",
      "Clean fades, consistent power",
      "Trusted in real U.S. barbershops",
      "No gimmicks. No hype.",
    ],
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#ffffff",
        padding: "72px 20px",
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont",
      }}
    >
      <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center" }}>
        {/* HERO */}
        <h1
          style={{
            fontSize: 46,
            fontWeight: 800,
            letterSpacing: "-1px",
            marginBottom: 14,
          }}
        >
          The One Clipper Most Barbers Actually Use
        </h1>

        <p
          style={{
            fontSize: 18,
            color: "#333",
            marginBottom: 40,
            maxWidth: 560,
            marginInline: "auto",
          }}
        >
          No hype. No lists of 20 tools.  
          Just the cordless clipper trusted in real barbershops.
        </p>

        {/* PRODUCT CARD */}
        <div
          style={{
            border: "1px solid #eaeaea",
            borderRadius: 22,
            padding: 36,
          }}
        >
          <img
            src={product.img}
            alt={product.name}
            style={{
              width: "100%",
              maxWidth: 320,
              height: 260,
              objectFit: "contain",
              marginBottom: 28,
            }}
          />

          <h2 style={{ fontSize: 24, marginBottom: 18 }}>
            {product.name}
          </h2>

          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: "0 auto 32px",
              maxWidth: 420,
              textAlign: "left",
              fontSize: 16,
              lineHeight: 1.7,
              color: "#111",
            }}
          >
            {product.bullets.map((b) => (
              <li key={b} style={{ marginBottom: 10 }}>
                ✓ {b}
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a
            href={product.url}
            target="_blank"
            rel="nofollow noopener"
            style={{
              display: "block",
              background: "#000",
              color: "#fff",
              padding: "18px 22px",
              borderRadius: 16,
              fontSize: 18,
              fontWeight: 700,
              textDecoration: "none",
            }}
          >
            Check today’s price on Amazon →
          </a>

          <p style={{ fontSize: 12, color: "#666", marginTop: 16 }}>
            As an Amazon Associate I earn from qualifying purchases.
          </p>
        </div>
      </div>
    </main>
  );
}
