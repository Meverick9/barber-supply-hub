export default function PicksPage() {
  const products = [
    {
      badge: "Best Overall",
      name: "Wahl 5-Star Cordless Magic Clip",
      note: "The go-to clipper for fades. Fast, reliable, barbershop proven.",
      bullets: ["Great for fades", "Solid battery life", "Durable & easy to maintain"],
      img: "/picks/magic-clip.jpg",
      primary: { label: "Check today’s price", href: "https://www.amazon.com/dp/B00UK8WFQO?tag=barbersupp044-20" },
      other: [
        { label: "AliExpress", href: "https://www.aliexpress.com/wholesale?SearchText=Wahl+Magic+Clip" },
        { label: "eBay", href: "https://www.ebay.com/sch/i.html?_nkw=Wahl+Magic+Clip+cordless" },
      ],
    },
    {
      badge: "Quiet / Light",
      name: "Wahl Lithium Cordless Clipper",
      note: "A quieter, lightweight option for simple cuts and home use.",
      bullets: ["Lightweight", "Quiet operation", "Easy for beginners"],
      img: "https://m.media-amazon.com/images/I/61eKxKxg1zL._AC_SL1500_.jpg",
      primary: { label: "Check today’s price", href: "https://www.amazon.com/dp/B09XLX656Z?tag=barbersupp044-20" },
      other: [
        { label: "AliExpress", href: "https://www.aliexpress.com/wholesale?SearchText=Wahl+Lithium+Cordless+Clipper" },
        { label: "eBay", href: "https://www.ebay.com/sch/i.html?_nkw=Wahl+Lithium+Cordless+Clipper" },
      ],
    },
    {
      badge: "Premium Pick",
      name: "BaBylissPRO GoldFX Boost+",
      note: "Premium build and power. For people who want “top shelf” gear.",
      bullets: ["Premium feel", "Strong motor", "Great ergonomics"],
      img: "https://m.media-amazon.com/images/I/71s6Y2F9NXL._AC_SL1500_.jpg",
      primary: { label: "Check today’s price", href: "https://www.amazon.com/dp/B09TCN6BHL?tag=barbersupp044-20" },
      other: [
        { label: "AliExpress", href: "https://www.aliexpress.com/wholesale?SearchText=BaBylissPRO+GoldFX+Boost" },
        { label: "eBay", href: "https://www.ebay.com/sch/i.html?_nkw=BaBylissPRO+GoldFX+Boost" },
      ],
    },
  ];

  const styles = {
    page: {
      minHeight: "100vh",
      background:
        "radial-gradient(1200px 600px at 15% 10%, rgba(0,0,0,0.08), transparent 60%), radial-gradient(1000px 500px at 85% 0%, rgba(0,0,0,0.06), transparent 55%), #ffffff",
      padding: "44px 18px",
    },
    wrap: { maxWidth: 1100, margin: "0 auto" },
    header: { marginBottom: 22 },
    h1: { fontSize: 44, lineHeight: 1.05, margin: 0, letterSpacing: -0.6 },
    sub: { marginTop: 10, fontSize: 16, color: "#333", maxWidth: 720, lineHeight: 1.5 },

    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
      gap: 18,
      marginTop: 18,
    },

    card: {
      border: "1px solid rgba(0,0,0,0.08)",
      borderRadius: 18,
      padding: 18,
      background: "rgba(255,255,255,0.9)",
      boxShadow: "0 12px 35px rgba(0,0,0,0.08)",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      overflow: "hidden",
    },

    badge: {
      display: "inline-flex",
      alignSelf: "flex-start",
      padding: "6px 10px",
      borderRadius: 999,
      border: "1px solid rgba(0,0,0,0.12)",
      background: "rgba(0,0,0,0.03)",
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: 0.2,
    },

    imgWrap: {
      borderRadius: 14,
      background: "linear-gradient(180deg, rgba(0,0,0,0.04), rgba(0,0,0,0.02))",
      padding: 14,
      display: "grid",
      placeItems: "center",
      minHeight: 240,
    },

    img: { width: "100%", height: 210, objectFit: "contain" },

    name: { fontSize: 18, margin: 0, letterSpacing: -0.2 },
    note: { fontSize: 14, color: "#333", lineHeight: 1.45, margin: 0 },

    ul: { margin: "6px 0 0 18px", padding: 0, color: "#222", fontSize: 14, lineHeight: 1.6 },

    cta: {
      marginTop: "auto",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      paddingTop: 6,
    },

    primaryBtn: {
      display: "block",
      textAlign: "center",
      padding: "12px 14px",
      borderRadius: 12,
      background: "black",
      color: "white",
      fontWeight: 800,
      textDecoration: "none",
      letterSpacing: 0.2,
    },

    smallRow: { display: "flex", gap: 12, flexWrap: "wrap", fontSize: 12, color: "#444" },
    smallLink: { color: "#111", textDecoration: "underline" },

    footer: { marginTop: 18, fontSize: 12, color: "#666", lineHeight: 1.5 },
  };

  return (
    <main style={styles.page}>
      <div style={styles.wrap}>
        <header style={styles.header}>
          <h1 style={styles.h1}>Top Barber Picks</h1>
          <p style={styles.sub}>
            3 clear choices. Pick the one that matches your style — and check the latest price.
          </p>
        </header>

        <section style={styles.grid}>
          {products.map((p) => (
            <article key={p.name} style={styles.card}>
              <div style={styles.badge}>{p.badge}</div>

              <div style={styles.imgWrap}>
                <img src={p.img} alt={p.name} style={styles.img} loading="lazy" decoding="async" />
              </div>

              <h2 style={styles.name}>{p.name}</h2>
              <p style={styles.note}>{p.note}</p>

              <ul style={styles.ul}>
                {p.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>

              <div style={styles.cta}>
                <a href={p.primary.href} target="_blank" rel="nofollow noopener" style={styles.primaryBtn}>
                  {p.primary.label}
                </a>

                <div style={styles.smallRow}>
                  <span>Other stores:</span>
                  {p.other.map((s) => (
                    <a key={s.label} href={s.href} target="_blank" rel="nofollow noopener" style={styles.smallLink}>
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </section>

        <div style={styles.footer}>
          Tip: open links in a new tab to compare current price & availability. <br />
          As an Amazon Associate I earn from qualifying purchases.
        </div>
      </div>
    </main>
  );
}
