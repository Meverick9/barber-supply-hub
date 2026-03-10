import Link from "next/link"

export default function Page() {

  const content = `
  <p>
  Proper blade maintenance is essential for every barber. Clean and well-oiled blades
  cut better, last longer, and prevent irritation or infection.
  </p>

  <h2>Why Blade Maintenance Matters</h2>

  <p>
  Clippers and trimmers are used constantly in barbershops. Without proper maintenance,
  blades become dull, overheat, and may pull hair instead of cutting smoothly.
  </p>

  <h2>Basic Blade Maintenance Steps</h2>

  <ul>
  <li>Brush hair off the blade after every haircut</li>
  <li>Disinfect blades regularly with clipper spray</li>
  <li>Oil the blade before and after use</li>
  <li>Check blade alignment</li>
  <li>Store clippers in a clean, dry environment</li>
  </ul>

  <h2>How Often to Oil Clippers</h2>

  <p>
  Professional barbers oil their clippers several times per day depending on usage.
  A few drops of clipper oil dramatically extend blade life and reduce heat.
  </p>

  <h2>Signs Your Blade Needs Maintenance</h2>

  <ul>
  <li>Hair pulling</li>
  <li>Uneven cutting</li>
  <li>Excessive heat</li>
  <li>Strange noise or vibration</li>
  </ul>

  <p>
  Proper blade care ensures smooth haircuts and protects your investment in professional tools.
  </p>
  `

  return (
    <main style={{ maxWidth: 900, margin: "0 auto", padding: "64px 24px" }}>
      <h1 style={{ fontSize: 42, fontWeight: 800, marginBottom: 32 }}>
        Clipper Blade Maintenance Guide
      </h1>

      <div
        style={{ fontSize: 15, lineHeight: 1.8 }}
        dangerouslySetInnerHTML={{ __html: content }}
      />

      <div style={{ marginTop: 64, paddingTop: 32, borderTop: "1px solid var(--border)" }}>
        <Link
          href="/guides"
          style={{
            color: "var(--accent)",
            fontWeight: 700,
            fontSize: 13,
            letterSpacing: ".08em",
            textTransform: "uppercase"
          }}
        >
          ← Back to All Guides
        </Link>
      </div>
    </main>
  )
}