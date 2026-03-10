import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Perfect Lineup and Edge-Up Guide 2026',
  description: 'Achieve crisp, symmetrical lineups every time. Temple angle, hairline mapping, T-blade technique and fixing common errors.',
}

const content = `
<p>A clean lineup is the signature of a skilled barber. Clients judge your work by the edges — make them sharp.</p>
<h2>Tools You Need</h2>
<ul>
<li>T-outliner (Andis T-Outliner Cordless is the gold standard)</li>
<li>Straight razor for cleanup</li>
<li>Pomade or edge control to lay down flyaways</li>
</ul>
<h2>Step 1 — Map the Natural Hairline</h2>
<p>Never cut where the hair doesn't grow. Follow the natural hairline. Use your fingers to find the edges before you touch the trimmer to skin.</p>
<h2>Step 2 — Temples</h2>
<p>Hold the trimmer horizontally. Work from the corner of the forehead down. Keep the angle consistent on both sides. Check symmetry constantly.</p>
<h2>Step 3 — Forehead Line</h2>
<p>Work in short strokes. Never drag the blade across the forehead in one pass. Multiple short passes = cleaner line.</p>
<h2>Step 4 — Sideburns</h2>
<p>Define where the sideburn ends. Keep both sides at the same level — use the ears as reference points.</p>
<h2>Step 5 — Razor Cleanup</h2>
<p>Use a straight razor to remove stray hairs outside the line. Apply aftershave immediately after.</p>
<h2>Common Errors</h2>
<ul>
<li>Cutting into the natural hairline — makes it look receded</li>
<li>Uneven temple angles — always compare both sides</li>
<li>Too much pressure — let the blade do the work</li>
</ul>
`

export default function GuidePage() {
  return (
    <main style={{ maxWidth: 760, margin: '0 auto', padding: '48px 24px 80px' }}>
      <div style={{ marginBottom: 24, fontSize: 13 }}>
        <Link href="/" style={{ color: 'var(--accent)' }}>Home</Link>
        <span style={{ margin: '0 8px', opacity: .4 }}>/</span>
        <Link href="/guides" style={{ color: 'var(--accent)' }}>Guides</Link>
      </div>
      <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--accent)' }}>
        LINEUPS · T-BLADE · PRECISION
      </span>
      <h1 style={{ fontFamily: 'var(--f-display)', fontSize: 'clamp(36px,6vw,72px)', lineHeight: .93, margin: '16px 0 32px' }}>
        PERFECT LINEUP AND EDGE-UP GUIDE
      </h1>
      <div style={{ fontSize: 15, lineHeight: 1.8, color: 'var(--white-60)' }}
        dangerouslySetInnerHTML={{ __html: content }} />
      <div style={{ marginTop: 64, paddingTop: 32, borderTop: '1px solid var(--border)' }}>
        <Link href="/guides" style={{ color: 'var(--accent)', fontWeight: 700, fontSize: 13, letterSpacing: '.08em', textTransform: 'uppercase' }}>
          ← Back to All Guides
        </Link>
      </div>
    </main>
  )
}