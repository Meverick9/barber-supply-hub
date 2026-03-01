import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE_URL } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Best Barber Equipment 2026 — Expert Picks by Category',
  description: 'Professional barber equipment tested and ranked by working barbers. Clippers, trimmers, scissors, razors and more — updated February 2026.',
  alternates: { canonical: `${SITE_URL}/picks` },
}

const PICKS = [
  { href:'/picks/best-clippers', icon:'⚡', title:'Best Clippers', sub:'47 tested · Top rated for fades', badge:'Most Popular' },
  { href:'/picks/best-trimmers', icon:'✂️', title:'Best Trimmers', sub:'28 tested · Lineups & detail work', badge:null },
  { href:'/picks/cordless', icon:'🔋', title:'Best Cordless Clippers', sub:'Battery life & fade performance', badge:null },
  { href:'/picks/bald-fade-clippers', icon:'💈', title:'Bald Fade Clippers', sub:'Zero-gap specialists', badge:null },
  { href:'/picks/scissors', icon:'✂️', title:'Best Scissors', sub:'32 tested · Edge retention ranked', badge:null },
  { href:'/picks/razors', icon:'🪒', title:'Best Razors', sub:'Straight & safety razors', badge:null },
  { href:'/picks/shaving-care', icon:'🧴', title:'Shaving Care', sub:'Pre-shave, aftershave & balms', badge:null },
  { href:'/picks/styling', icon:'💈', title:'Styling Products', sub:'Pomades, clays & waxes', badge:null },
  { href:'/picks/accessories', icon:'🛠️', title:'Accessories', sub:'Oils, guards & maintenance', badge:null },
  { href:'/picks/capes', icon:'🦸', title:'Barber Capes', sub:'Professional & waterproof', badge:null },
  { href:'/picks/bags', icon:'🎒', title:'Barber Bags', sub:'Tool organization & travel', badge:null },
  { href:'/picks/starter-kit', icon:'🎯', title:'Starter Kit Guide', sub:'Everything a new barber needs', badge:'New Barbers' },
]

export default function PicksPage() {
  return (
    <main>
      <section style={{ paddingTop:64, paddingBottom:48, background:'linear-gradient(180deg,var(--dark) 0%,var(--black) 100%)' }}>
        <div className="container-sm">
          <span className="kicker">Expert Reviews · Updated February 2026</span>
          <h1 style={{ fontFamily:'var(--f-display)', fontSize:'clamp(48px,8vw,96px)', lineHeight:.9, marginBottom:20 }}>
            <span style={{ display:'block' }}>OUR BEST</span>
            <span style={{ display:'block', color:'var(--accent)' }}>PICKS</span>
          </h1>
          <p style={{ fontSize:15, color:'var(--white-60)', lineHeight:1.8, maxWidth:560 }}>
            Every product tested by working professional barbers in real shops. No sponsored rankings. No guesswork.
          </p>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="grid-3" style={{ gap:16 }}>
            {PICKS.map(item => (
              <Link key={item.href} href={item.href}
                style={{ display:'flex', flexDirection:'column', gap:12, padding:24, background:'var(--dark-2)', border:'1px solid var(--border)', borderRadius:4, textDecoration:'none', transition:'border-color .3s' }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor='var(--accent)'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor='var(--border)'}>
                {item.badge && (
                  <span style={{ display:'inline-block', background:'var(--accent)', color:'var(--black)', fontSize:9, fontWeight:700, letterSpacing:'.1em', textTransform:'uppercase', padding:'2px 8px', borderRadius:2, alignSelf:'flex-start' }}>
                    {item.badge}
                  </span>
                )}
                <div style={{ fontSize:32 }}>{item.icon}</div>
                <div style={{ fontFamily:'var(--f-display)', fontSize:22, color:'var(--white)' }}>{item.title}</div>
                <div style={{ fontSize:12, color:'var(--white-60)', lineHeight:1.6 }}>{item.sub}</div>
                <div style={{ fontSize:11, fontWeight:700, letterSpacing:'.08em', textTransform:'uppercase', color:'var(--accent)', marginTop:'auto' }}>
                  View Picks →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
