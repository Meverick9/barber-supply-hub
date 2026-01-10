export default function PicksPage() {
  const product = {
    name: "Wahl 5-Star Cordless Magic Clip",
    note: "The industry standard for fades. Trusted by barbers across the U.S.",
    bullets: [
      "Designed for smooth fades",
      "Powerful & reliable motor",
      "Used daily in real barbershops",
    ],
    img: "/picks/magic-clip.jpg",
    url: "https://www.amazon.com/dp/B00UK8WFQO?tag=barbersupp044-20",
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#fff",
        padding: "64px 18px",
      }}
    >
      <div style={{ maxWidth: 820, margin: "0 auto", textAlign: "center" }}>
        <h1 style={{ fontSize: 48, letterSpacing: -1, marginBottom: 12 }}>
          The One Clipper Most Barbers Trust
        </h1>

        <p style={{ fontSize: 18, color: "#333", marginBottom: 36 }}>
          If you want clean fades without overthinking — this is it.
        </p>

        <div
          style={{
            border: "1px solid #eee",
            borderRadius: 20,
            padding: 32,
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
              marginBottom: 24,
            }}
          />

          <h2 style={{ fontSize: 22, marginBottom: 8 }}>
            {product.name}
          </h2>

          <p style={{ color: "#444", marginBottom: 16 }}>
            {product.note}
          </p>

          <ul
            style={{
              listStyle: "disc",
              textAlign: "left",
              maxWidth: 360,
              margin: "0 auto 28px",
              color: "#222",
              lineHeight: 1.6,
            }}
          >
            {product.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>

          <a
            href={product.url}
            target="_blank"
            rel="nofollow noopener"
            style={{
              display: "block",
              background: "#000",
              color: "#fff",
              padding: "16px 20px",
              borderRadius: 14,
              fontSize: 18,
              fontWeight: 700,
              textDecoration: "none",
            }}
          >
            Check today’s price on Amazon →
          </a>

          <p style={{ fontSize: 12, color: "#666", marginTop: 14 }}>
            As an Amazon Associate I earn from qualifying purchases.
          </p>
        </div>
      </div>
    </main>
  );
}
