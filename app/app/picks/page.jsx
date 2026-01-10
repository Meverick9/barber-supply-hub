export default function PicksPage() {
  const product = {
    name: "Wahl 5-Star Cordless Magic Clip",
    img: "/picks/magic-clip.jpg",
    url: "https://www.amazon.com/dp/B00UK8WFQO?tag=barbersupp044-20",
    note: "Best all-round clipper for fades",
  };

  return (
    <main style={{ padding: 32, maxWidth: 480, margin: "0 auto" }}>
      <h1 style={{ marginBottom: 24 }}>Top Barber Pick</h1>

      <div
        style={{
          border: "1px solid #eaeaea",
          borderRadius: 16,
          padding: 20,
          display: "flex",
          flexDirection: "column",
          gap: 14,
        }}
      >
        <img
          src={product.img}
          alt={product.name}
          style={{
            width: "100%",
            height: 260,
            objectFit: "contain",
            borderRadius: 12,
            background: "#fafafa",
          }}
        />

        <strong style={{ fontSize: 18 }}>{product.name}</strong>

        <span style={{ fontSize: 14, color: "#555" }}>
          {product.note}
        </span>

        <a
          href={product.url}
          target="_blank"
          rel="nofollow noopener"
          style={{
            marginTop: 12,
            padding: "12px 16px",
            background: "black",
            color: "white",
            borderRadius: 12,
            textAlign: "center",
            fontWeight: 600,
            textDecoration: "none",
          }}
        >
          Buy on Amazon
        </a>

        <div style={{ fontSize: 12, color: "#777", lineHeight: 1.4 }}>
          Tip: open link in a new tab to check current price & availability.
        </div>
      </div>
    </main>
  );
}
