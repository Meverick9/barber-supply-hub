import Link from "next/link";

export default function Home() {
  return (
    <main style={{ padding: 24, fontFamily: "system-ui", maxWidth: 900, margin: "0 auto" }}>
      <h1>Barber Supply Hub</h1>
      <p style={{ color: "#555" }}>
        Quick picks + a 60-second quiz to match the right tools.
      </p>

      <div style={{ display: "flex", gap: 12, marginTop: 12 }}>
        <Link href="/quiz">Start Quiz</Link>
        <Link href="/picks">See Picks</Link>
      </div>
    </main>
  );
}
