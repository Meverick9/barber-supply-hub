import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Do a Bald Fade — Step by Step 2026',
  description: 'Step-by-step bald fade technique from a 14-year NYC barber. The 3-pass method, blade selection, and common mistakes.',
}

const content = `
<p>The bald fade is the most requested cut in professional barbershops. Mastering it separates good barbers from great ones.</p>
<h2>What You Need</h2>
<ul>
<li>Cordless clipper (Wahl Magic Clip or Andis Master)</li>
<li>Wahl Balding Clipper for skin-close work</li>
<li>T-outliner for lineup cleanup</li>
<li>Guards: #1, #1.5, #2, #3</li>
</ul>
<h2>The 3-Pass Method</h2>
<p><strong>Pass 1 — Bulk removal.</strong> Use #2 or #3 guard from the bottom up to the occipital bone. Remove the bulk.</p>
<p><strong>Pass 2 — Blend.</strong> Drop to #1, work the transition zone with scooping motions. Never drag straight up.</p>
<p><strong>Pass 3 — Skin.</strong> Zero-gap or balding clipper on bare skin. Work in short strokes against the grain.</p>
<h2>Common Mistakes</h2>
<ul>
<li>Starting too high — the fade line should be low</li>
<li>Skipping guard sizes — always blend adjacent sizes</li>
<li>Rushing the transition — slow passes = clean lines</li>
<li>Not checking in natural light — shadows hide blending errors</li>
</ul>
<h2>Finishing</h2>
<p>Use T-outliner for the hairline. Clean up the neckline with a razor. Apply aftershave. Check the blend from all angles before the client leaves the chair.</p>
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
        TECHNIQUE · BEGINNER FRIENDLY · BALD FADES
      </span>
      <h1 style={{ fontFamily: 'var(--f-display)', fontSize: 'clamp(36px,6vw,72px)', lineHeight: .93, margin: '16px 0 32px' }}>
        HOW TO DO A BALD FADE
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