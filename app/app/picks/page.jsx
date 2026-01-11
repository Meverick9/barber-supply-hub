export default function PicksPage() {
  const product = {
    name: "Wahl 5-Star Cordless Magic Clip",
    sub: "Cordless clipper for fades & tapers",
    note:
      "If you want cleaner fades without overthinking, this is the one. Proven in real barbershops for years.",
    bullets: [
      "Fade-friendly blade (easy to blend)",
      "Strong motor (no snagging/pulling)",
      "Reliable battery for regular use",
    ],
    img: "/picks/magic-clip.jpg",
    url: "https://www.amazon.com/dp/B00UK8WFQO?tag=barbersupp044-20",
  };

  const s = {
    page: {
      minHeight: "100vh",
      background:
        "radial-gradient(900px 500px at 50% 0%, rgba(0,0,0,0.06), transparent 55%), #fff",
      padding: "72px 18px",
      fontFamily:
        'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji"',
    },
    wrap: { maxWidth: 980, margin: "0 auto" },

    hero: { textAlign: "center", marginBottom: 28 },
    eyebrow: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      padding: "8px 12px",
      borderRadius: 999,
      border: "1px solid rgba(0,0,0,0.10)",
      background: "rgba(0,0,0,0.03)",
      fontSize: 12,
      fontWeight: 800,
      letterSpacing: 0.3,
    },
    h1: {
      fontSize: 52,
      lineHeight: 1.03,
      letterSpacing: -1.2,
      margin: "14px 0 12px",
      fontWeight: 900,
    },
    sub: {
      fontSize: 18,
      color: "#2f2f2f",
      maxWidth: 740,
      margin: "0 auto",
      lineHeight: 1.6,
    },

    card: {
      margin: "26px auto 0",
      maxWidth: 860,
      borderRadius: 22,
      border: "1px solid rgba(0,0,0,0.08)",
      background: "rgba(255,255,255,0.9)",
      boxShadow: "0 18px 60px rgba(0,0,0,0.10)",
      overflow: "hidden",
      display: "grid",
      gridTemplateColumns: "1.1fr 1fr",
    },

    imgArea: {
      background:
        "linear-gradient(180deg, rgba(0,0,0,0.035), rgba(0,0,0,0.015))",
      padding: 26,
      display: "grid",
      placeItems: "center",
    },
    img: {
      width: "100%",
      maxWidth: 420,
      height: 360,
      objectFit: "contain",
    },

    body: { padding: 28, textAlign: "left" },
    badge: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      padding: "7px 10px",
      borderRadius: 999,
      background: "rgba(0,0,0,0.04)",
      border: "1px solid rgba(0,0,0,0.10)",
      fontSize: 12,
      fontWeight: 800,
      marginBottom: 12,
    },
    name: { fontSize: 22, fontWeight: 900, margin: "0 0 6px" },
    mini: { fontSize: 14, color: "#444", margin: "0 0 14px" },
    note: { fontSize: 15, color: "#222", lineHeight: 1.6, margin: "0 0 14px" },

    ul: {
      margin: "0 0 18px 18px",
      padding: 0,
      color: "#111",
      fontSize: 14,
      lineHeight: 1.7,
    },

    ctas: { display: "flex", flexDirection: "column", gap: 10, marginTop: 12 },
    btn: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 10,
      background: "#000",
      color: "#fff",
      padding: "16px 16px",
      borderRadius: 14,
      fontSize: 18,
      fontWeight: 900,
      textDecoration: "none",
      letterSpacing: 0.2,
    },
    micro: { fontSize: 12, color: "#666", lineHeight: 1.5, marginTop: 6 },

    trustRow: {
      display: "grid",
      gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
      gap: 10,
      marginTop: 18,
    },
    trust: {
      border: "1px solid rgba(0,0,0,0.08)",
      borderRadius: 14,
      padding: 12,
      background: "rgba(0,0,0,0.02)",
      fontSize: 12,
      color: "#333",
      lineHeight: 1.4,
    },

    footer: {
      textAlign: "center",
      marginTop: 18,
      fontSize: 12,
      color: "#666",
      lineHeight: 1.6,
    },

    // mobile
    mobile: {
      "@media (max-width: 880px)": {},
    },
  };

  return (
    <main style={s.page}>
      <div style={s.wrap}>
        <header style={s.hero}>
          <div style={s.eyebrow}>🏆 Barbershop Standard</div>
          <h1 style={s.h1}>The One Clipper Most Barbers Actually Use</h1>
          <p style={s.sub}>
            No hype. No lists of 20 tools. Just the cordless clipper trusted in
            real barbershops — and the easiest “safe buy” if you want clean
            fades.
          </p>
        </header>

        <section style={s.card}>
          <div style={s.imgArea}>
            <img src={product.img} alt={product.name} style={s.img} />
          </div>

          <div style={s.body}>
            <div style={s.badge}>🔥 Best for fades & everyday cuts</div>

            <h2 style={s.name}>{product.name}</h2>
            <p style={s.mini}>{product.sub}</p>

            <p style={s.note}>{product.note}</p>

            <ul style={s.ul}>
              {product.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>

            <div style={s.ctas}>
              <a
                href={product.url}
                target="_blank"
                rel="nofollow noopener"
                style={s.btn}
              >
                Check price on Amazon →
              </a>
              <div style={s.micro}>
                Tip: price & availability change часто — Amazon покажет актуально.
              </div>
            </div>

            <div style={s.trustRow}>
              <div style={s.trust}>
                <b>Why this one?</b>
                <br />
                It’s the “default” choice in many barbershops.
              </div>
              <div style={s.trust}>
                <b>Not for:</b>
                <br />
                People who only do quick trims once a month.
              </div>
              <div style={s.trust}>
                <b>Bottom line:</b>
                <br />
                If you want fades, this is the least risky pick.
              </div>
            </div>

            <p style={s.micro}>
              As an Amazon Associate I earn from qualifying purchases.
            </p>
          </div>
        </section>

        <div style={s.footer}>
          You click → you see the real price → you decide. Simple.
        </div>
      </div>

      <style>{`
        @media (max-width: 880px) {
          .card { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  );
}
