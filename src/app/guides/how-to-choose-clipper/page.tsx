import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Choose Your First Professional Clipper 2026',
  description: 'Rotary vs electromagnetic motor, cordless vs corded, zero-gap — everything you need to know before buying your first professional clipper.',
}

const content = `
<p>Choosing your first professional clipper is one of the most important decisions you make as a barber. The wrong tool costs you clients. The right one lasts a decade.</p>
<h2>Motor Types</h2>
<p><strong>Rotary motors</strong> are quieter, lighter, and better for fades. The Wahl Magic Clip uses a rotary motor — ideal for blending.</p>
<p><strong>Electromagnetic motors</strong> are more powerful, better for thick and coarse hair. The Andis Master is the EM standard.</p>
<h2>Cordless vs Corded</h2>
<p>Cordless gives you freedom of movement — essential for fades. Look for 90+ minute battery life. Corded gives unlimited runtime — best for the Wahl Balding Clipper used for skin-close work.</p>
<h2>Zero-Gap Capability</h2>
<p>If you do fades, you need zero-gap. The Wahl Magic Clip and BaByliss FX870 both zero-gap out of the box. The Andis Master requires a blade swap.</p>
<h2>Our Recommendation</h2>
<p>Start with the Wahl Magic Clip ($89.99). Add the Wahl Balding Clipper ($44.99) for bald fades. This two-clipper setup covers 95% of professional barbershop work.</p>
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
        BUYING GUIDE · MOTORS · CORDLESS
      </span>
      <h1 style={{ fontFamily: 'var(--f-display)', fontSize: 'clamp(36px,6vw,72px)', lineHeight: .93, margin: '16px 0 32px' }}>
        HOW TO CHOOSE YOUR FIRST CLIPPER
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