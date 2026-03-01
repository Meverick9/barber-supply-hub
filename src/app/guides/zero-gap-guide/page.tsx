import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Zero-Gap Your Clipper — Safe Step by Step 2026',
  description: 'Zero-gapping gives you the closest possible cut. Safe step-by-step instructions for Wahl, Andis, and BaByliss clippers.',
}

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
        dangerouslySetInnerHTML={{ __html: $(System.Collections.Hashtable.content) }} />
      <div style={{ marginTop: 64, paddingTop: 32, borderTop: '1px solid var(--border)' }}>
        <Link href="/guides" style={{ color: 'var(--accent)', fontWeight: 700, fontSize: 13, letterSpacing: '.08em', textTransform: 'uppercase' }}>
          ← Back to All Guides
        </Link>
      </div>
    </main>
  )
}
