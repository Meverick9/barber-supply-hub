import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Wahl Magic Clip vs Andis Master (2025 Comparison)",
  description:
    "Side-by-side comparison of Wahl Magic Clip vs Andis Master. Which is better for fades, thick hair, and professionals?",
  alternates: {
    canonical:
      "https://barbersupplyhub.com/compare/wahl-magic-clip-vs-andis-master",
  },
};

export default function ComparisonPage() {
  return (
    <main style={{ maxWidth: 900, margin: "60px auto", padding: "0 20px" }}>
      <h1>Wahl Magic Clip vs Andis Master</h1>

      <table style={{ width: "100%", marginBottom: 40 }}>
        <tbody>
          <tr>
            <td><strong>Motor</strong></td>
            <td>Rotary</td>
            <td>Magnetic</td>
          </tr>
          <tr>
            <td><strong>Best For</strong></td>
            <td>Fades</td>
            <td>Precision work</td>
          </tr>
          <tr>
            <td><strong>Build</strong></td>
            <td>Plastic</td>
            <td>Aluminum</td>
          </tr>
        </tbody>
      </table>

      <p>
        Both are professional-grade tools. Magic Clip is better for soft
        blending, while Andis Master offers stronger durability.
      </p>

      <p>
        Read full reviews:
        <br />
        <Link href="/reviews/wahl-magic-clip">Wahl Magic Clip Review</Link>
        <br />
        <Link href="/reviews/andis-master">Andis Master Review</Link>
      </p>
    </main>
  );
}
