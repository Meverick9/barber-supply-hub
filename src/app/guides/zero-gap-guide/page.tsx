import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Zero-Gap Your Clipper — Safe Step by Step 2026',
  description: 'Zero-gapping gives you the closest possible cut. Safe step-by-step instructions for Wahl, Andis, and BaByliss clippers.',
}

const content = `
<p>Zero-gapping moves the top blade forward until it's flush with the bottom blade. The result: skin-close cuts without switching to a balding clipper.</p>
<h2>Warning</h2>
<p>Zero-gapped blades are razor sharp. Never touch the blade edge. Never use on sensitive skin without testing first.</p>
<h2>What You Need</h2>
<ul>
<li>Your clipper (Wahl Magic Clip, Andis Master, or BaByliss FX870)</li>
<li>Small flathead screwdriver</li>
<li>Clipper oil</li>
<li>Clean cloth</li>
</ul>
<h2>Step by Step</h2>
<p><strong>Step 1.</strong> Turn off the clipper. Remove the blade assembly by pressing the release tab.</p>
<p><strong>Step 2.</strong> Loosen the two blade screws — do not remove them fully. Just enough to slide the blade.</p>
<p><strong>Step 3.</strong> Slide the top blade forward until it aligns flush with the bottom blade. The teeth should be perfectly level.</p>
<p><strong>Step 4.</strong> Retighten the screws. Do not overtighten — this cracks the blade rail.</p>
<p><strong>Step 5.</strong> Oil the blade. Run the clipper for 30 seconds. Check alignment again.</p>
<h2>Clipper-Specific Notes</h2>
<p><strong>Wahl Magic Clip</strong> — has a built-in zero-gap lever. Pull it down instead of adjusting screws.</p>
<p><strong>Andis Master</strong> — requires the screw method above. Takes practice to get perfect alignment.</p>
<p><strong>BaByliss FX870</strong> — zero-gaps via the taper lever. Push lever to closed position.</p>
<h2>When to Zero-Gap</h2>
<p>Use zero-gap for skin fades below the occipital bone and for cleaning up hairlines. Return to normal gap for bulk cutting — zero-gap on coarse hair causes blade drag and heat.</p>
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
        ZERO-GAP · ADVANCED · BLADE ADJUSTMENT
      </span>
      <h1 style={{ fontFamily: 'var(--f-display)', fontSize: 'clamp(36px,6vw,72px)', lineHeight: .93, margin: '16px 0 32px' }}>
        HOW TO ZERO-GAP YOUR CLIPPER
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