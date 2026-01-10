export default function PicksPage() {
  const products = [
    {
      name: "Wahl 5-Star Cordless Magic Clip",
      // Лучше локально: /public/picks/magic-clip.jpg
      // Если локального нет — подставим Amazon и наоборот через fallback
      img: "/picks/magic-clip.jpg",
      fallbackImg:
        "https://m.media-amazon.com/images/I/61N8zZr9v0L._AC_SL1500_.jpg",
      url: "https://www.amazon.com/dp/B00UK8WFQO?tag=barbersupp044-20",
      note: "Best all-round clipper for fades",
      badge: "Top Pick",
    },

  ];
const Img = ({ src, fallback, alt }) => (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      onError={(e) => {
        if (fallback && e.currentTarget.src !== fallback) {
          e.currentTarget.src = fallback;
        }
      }}
      style={{
        width: "100%",
        height: 220,
        objectFit: "contain",
        borderRadius: 12,
        background: "#fafafa",
        border: "1px solid #eee",
      }}
    />
  );

  return (
    <main style={{ padding: 24, maxWidth: 1100, margin: "0 auto" }}>
      <header style={{ marginBottom: 16 }}>
        <h1 style={{ margin: 0, fontSize: 32, letterSpacing: "-0.02em" }}>
          Top Barber Picks
        </h1>

        <p style={{ margin: "10px 0 0", color: "#555", lineHeight: 1.5 }}>
          Quick shortlist of tools that cover 90% of real barbershop needs.
        </p>

        <div
          style={{
            marginTop: 12,
            padding: 12,
            borderRadius: 12,
            background: "#fff7e6",
            border: "1px solid #ffe2a8",
            color: "#5a3b00",
            fontSize: 13,
            lineHeight: 1.4,
          }}
        >
          <strong>Disclosure:</strong> This page contains affiliate links. If you
          buy through them, we may earn a commission at no extra cost to you.
        </div>
      </header>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 20,
        }}
      >
        {products.map((p) => (
          <div
            key={p.name}
            style={{
              border: "1px solid #eee",
              borderRadius: 16,
              padding: 16,
              display: "flex",
              flexDirection: "column",
              gap: 12,
              background: "white",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span
                style={{
                  fontSize: 12,
                  padding: "6px 10px",
                  borderRadius: 999,
                  background: "#f3f4f6",
                  border: "1px solid #e5e7eb",
                  color: "#111",
                  fontWeight: 600,
                }}
              >
                {p.badge}
              </span>
            </div>

            <Img src={p.img} fallback={p.fallbackImg} alt={p.name} />

            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <strong style={{ fontSize: 16, lineHeight: 1.2 }}>{p.name}</strong>
              <span style={{ fontSize: 14, color: "#555", lineHeight: 1.4 }}>
                {p.note}
              </span>
            </div>

            <a
              href={p.url}
              target="_blank"
              rel="nofollow noopener noreferrer"
              style={{
                marginTop: "auto",
                padding: "11px 14px",
                background: "black",
                color: "white",
                borderRadius: 12,
                textAlign: "center",
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              Check price on Amazon
            </a>

            <div style={{ fontSize: 12, color: "#777", lineHeight: 1.3 }}>
              Tip: Open link in a new tab, compare current price + availability.
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
