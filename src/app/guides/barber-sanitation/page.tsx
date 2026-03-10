import Link from "next/link"

export default function Page() {

  const content = `
  <p>
  Proper sanitation is essential in every professional barbershop. 
  Clean tools, disinfected surfaces, and safe hygiene practices protect both the barber and the client.
  </p>

  <h2>Why Barber Sanitation Matters</h2>

  <p>
  Barbers work in close contact with skin and hair. Without proper sanitation, bacteria and fungi can easily spread.
  Professional hygiene also builds trust with clients and keeps your shop compliant with regulations.
  </p>

  <h2>Essential Sanitation Rules</h2>

  <ul>
  <li>Disinfect clippers and trimmers after every client</li>
  <li>Use barber-grade disinfectant solutions</li>
  <li>Wash hands between clients</li>
  <li>Use clean capes and neck strips</li>
  <li>Keep your workstation organized and clean</li>
  </ul>

  <h2>Tools That Must Be Disinfected</h2>

  <ul>
  <li>Hair clippers</li>
  <li>Trimmers</li>
  <li>Scissors</li>
  <li>Combs and brushes</li>
  <li>Razors</li>
  </ul>

  <p>
  Maintaining strict sanitation standards protects your reputation and ensures a safe environment for everyone.
  </p>
  `

  return (
    <main style={{ maxWidth: 900, margin: "0 auto", padding: "64px 24px" }}>
      <h1 style={{ fontSize: 42, fontWeight: 800, marginBottom: 32 }}>
        Barber Sanitation Guide
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