export default function PicksPage() {
  const product = {
    name: "Wahl 5-Star Cordless Magic Clip",
    img: "/picks/magic-clip.jpg",
    amazonUrl: "https://www.amazon.com/dp/B00UK8WFQO?tag=barbersupp044-20",
    aliexpressUrl: "", // вставишь позже если будет
    bullets: [
      "Best all-round clipper for fades (barbers’ classic).",
      "Cordless + strong motor, стабильный рез.",
      "Great first “pro” clipper: универсальная для большинства стрижек.",
    ],
    whoFor: "For: fades, tapers, everyday shop work. Not ideal if you only need a tiny trimmer for line-ups.",
  };

  const styles = {
    page: {
      minHeight: "100vh",
      padding: "48px 18px",
      background:
        "radial-gradient(1200px 700px at 50% 0%, #f4f4f5 0%, #ffffff 60%)",
      fontFamily:
        'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial',
      color: "#0b0b0f",
    },
    wrap: { maxWidth: 1100, margin: "0 auto" },
    header: { textAlign: "center", marginBottom: 26 },
    h1: { fontSize: 44, margin: 0, letterSpacing: -0.8 },
    sub: { marginTop: 10, color: "#3f3f46", fontSize: 16, lineHeight: 1.5 },
    grid: {
      display: "grid",
      gridTemplateColumns: "1.05fr 0.95fr",
      gap: 26,
      alignItems: "stretch",
    },
    card: {
      background: "rgba(255,255,255,0.9)",
      border: "1px solid #e5e7eb",
      borderRadius: 22,
      boxShadow: "0 18px 60px rgba(0,0,0,0.08)",
      padding: 22,
    },
    imgBox: {
      borderRadius: 18,
      background: "linear-gradient(180deg, #fafafa 0%, #f3f4f6 100%)",
      border: "1px solid #eee",
      display: "grid",
      placeItems: "center",
      padding: 22,
      minHeight: 420,
    },
    img: {
      width: "100%",
      maxWidth: 520,
      height: "auto",
      objectFit: "contain",
      filter: "drop-shadow(0 14px 22px rgba(0,0,0,0.18))",
    },
    title: { fontSize: 26, margin: "4px 0 10px 0", letterSpacing: -0.3 },
    bullets: { margin: "12px 0 16px 18px", color: "#111827", lineHeight: 1.6 },
    whoFor: {
      marginTop: 10,
      padding: 14,
      borderRadius: 14,
      background: "#fafafa",
      border: "1px solid #eee",
      color: "#3f3f46",
      lineHeight: 1.5,
      fontSize: 14,
    },
    ctas: { display: "grid", gap: 10, marginTop: 16 },
    btn: {
      display: "inline-flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "14px 16px",
      borderRadius: 14,
      fontWeight: 700,
      textDecoration: "none",
      border: "1px solid #0b0b0f",
      background: "#0b0b0f",
      color: "#fff",
      fontSize: 15,
    },
    btn2: {
      display: "inline-flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "14px 16px",
      borderRadius: 14,
      fontWeight: 700,
      textDecoration: "none",
      border: "1px solid #e5e7eb",
      background: "#fff",
      color: "#0b0b0f",
      fontSize: 15,
    },
    note: { marginTop: 12, color: "#6b7280", fontSize: 12, lineHeight: 1.4 },
    footer: {
      marginTop: 22,
      color: "#6b7280",
      fontSize: 12,
      lineHeight: 1.5,
      textAlign: "center",
    },
    smallLinks: { color: "#6b7280", textDecoration: "underline" },
    // mobile
    mobileGrid: {
      display: "grid",
      gridTemplateColumns: "1fr",
      gap: 18,
    },
  };

  const hasAlt = Boolean(product.aliexpressUrl);

  return (
    <main style={styles.page}>
      <div style={styles.wrap}>
        <header style={styles.header}>
          <h1 style={styles.h1}>Top Barber Pick</h1>
          <div style={styles.sub}>
            One реально сильный выбор. Без мусора. Нажал — купил.
          </div>
        </header>

        <div
          style={
            typeof window !== "undefined" && window.innerWidth < 900
              ? styles.mobileGrid
              : styles.grid
          }
        >
          <section style={styles.card}>
            <div style={styles.imgBox}>
              <img src={product.img} alt={product.name} style={styles.img} />
            </div>
          </section>

          <section style={styles.card}>
            <div style={styles.title}>{product.name}</div>

            <ul style={styles.bullets}>
              {product.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>

            <div style={styles.whoFor}>{product.whoFor}</div>

            <div style={styles.ctas}>
              <a
                href={product.amazonUrl}
                target="_blank"
                rel="nofollow noopener"
                style={styles.btn}
              >
                Buy on Amazon
              </a>

              {hasAlt ? (
                <a
                  href={product.aliexpressUrl}
                  target="_blank"
                  rel="nofollow noopener"
                  style={styles.btn2}
                >
                  Check on AliExpress
                </a>
              ) : null}
            </div>

            <div style={styles.note}>
              Tip: open link in a new tab to check current price & availability.
            </div>
          </section>
        </div>

        <div style={styles.footer}>
          As an Amazon Associate I earn from qualifying purchases.{" "}
          <a href="/quiz" style={styles.smallLinks}>
            Not sure? Take the 30-sec quiz
          </a>
        </div>
      </div>
    </main>
  );
}
