'use client'
import { useState } from 'react'
import Link from 'next/link'
import { useApp } from '@/components/ui/ThemeProvider'
import { THEMES, LANGUAGES } from '@/lib/data'

const NAV = {
  en: { clippers:'Clippers', trimmers:'Trimmers', shavers:'Shavers', scissors:'Scissors', guides:'Guides', kit:'Starter Kit', picks:'All Picks' },
  es: { clippers:'Cortadoras', trimmers:'Recortadoras', shavers:'Afeitadoras', scissors:'Tijeras', guides:'Guías', kit:'Kit Inicial', picks:'Ver Todo' },
  de: { clippers:'Haarschneider', trimmers:'Trimmer', shavers:'Rasierer', scissors:'Scheren', guides:'Guides', kit:'Starter-Set', picks:'Alle Picks' },
}

export default function Navbar() {
  const { lang, setLang, theme, setTheme } = useApp()
  const [open, setOpen] = useState(false)
  const n = NAV[lang]

  const links = [
    { href:'/picks/best-clippers', label:n.clippers },
    { href:'/picks/best-trimmers', label:n.trimmers },
    { href:'/picks/shavers',       label:n.shavers },
    { href:'/picks/scissors',      label:n.scissors },
    { href:'/guides',              label:n.guides },
  ]

  return (
    <>
      <nav style={{ position:'sticky', top:0, zIndex:500, background:'rgba(8,8,8,.96)', backdropFilter:'blur(16px)', borderBottom:'1px solid var(--border)' }}>
        <div className="container" style={{ display:'flex', alignItems:'center', justifyContent:'space-between', height:62, gap:12 }}>

          {/* Logo */}
          <Link href="/" onClick={() => setOpen(false)}
            style={{ fontFamily:'var(--f-display)', fontSize:22, letterSpacing:'.05em', display:'flex', alignItems:'center', gap:2, flexShrink:0 }}>
            BARBER<span style={{ color:'var(--accent)' }}>●</span>SUPPLY
          </Link>

          {/* Desktop nav links */}
          <ul style={{ display:'flex', gap:2, listStyle:'none', flex:1, justifyContent:'center' }} className="hide-mob">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link href={href}
                  style={{ fontSize:11, fontWeight:600, letterSpacing:'.1em', textTransform:'uppercase', color:'var(--white-60)', padding:'7px 11px', borderRadius:'var(--radius)', display:'block', transition:'all .2s' }}
                  onMouseEnter={e => { const el = e.target as HTMLElement; el.style.color='var(--white)'; el.style.background='var(--white-08)' }}
                  onMouseLeave={e => { const el = e.target as HTMLElement; el.style.color='var(--white-60)'; el.style.background='transparent' }}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right controls */}
          <div style={{ display:'flex', alignItems:'center', gap:8, flexShrink:0 }}>

            {/* Language switcher */}
            <div style={{ display:'flex', gap:2, background:'var(--dark-2)', border:'1px solid var(--border)', borderRadius:'var(--radius)', padding:2 }}>
              {LANGUAGES.map(({ code, label }) => (
                <button key={code} onClick={() => setLang(code)}
                  style={{ fontSize:10, fontWeight:700, letterSpacing:'.08em', textTransform:'uppercase', padding:'5px 8px', borderRadius:2,
                    background: lang === code ? 'var(--accent)' : 'transparent',
                    color: lang === code ? 'var(--black)' : 'var(--white-60)',
                    transition:'all .2s' }}>
                  {label}
                </button>
              ))}
            </div>

            {/* Theme swatches — desktop only */}
            <div style={{ display:'flex', gap:5, alignItems:'center' }} className="hide-mob">
              {THEMES.map(th => (
                <button key={th.key} onClick={() => setTheme(th.key)} title={th.label} aria-label={th.label}
                  style={{ width:16, height:16, borderRadius:'50%', background:th.swatch, flexShrink:0,
                    border: `2px solid ${theme === th.key ? 'var(--white)' : 'transparent'}`,
                    transform: theme === th.key ? 'scale(1.2)' : 'scale(1)',
                    transition:'all .25s' }} />
              ))}
            </div>

            {/* Desktop CTA */}
            <Link href="/picks/starter-kit"
              style={{ fontSize:11, fontWeight:700, letterSpacing:'.1em', textTransform:'uppercase', background:'var(--accent)', color:'var(--black)', padding:'7px 14px', borderRadius:'var(--radius)', display:'block', transition:'background .3s', whiteSpace:'nowrap' }}
              className="hide-mob">
              {n.kit}
            </Link>

            {/* Hamburger — mobile only */}
            <button
              onClick={() => setOpen(!open)}
              aria-label="Menu"
              style={{ display:'none', flexDirection:'column', gap:5, padding:'8px 6px', background:'transparent', border:'1px solid var(--border)', borderRadius:'var(--radius)', cursor:'pointer' }}
              className="show-mob">
              <span style={{ display:'block', width:20, height:2, background: open ? 'var(--accent)' : 'var(--white)', transition:'all .3s',
                transform: open ? 'rotate(45deg) translate(5px,5px)' : 'none' }} />
              <span style={{ display:'block', width:20, height:2, background:'var(--white)', transition:'all .3s',
                opacity: open ? 0 : 1 }} />
              <span style={{ display:'block', width:20, height:2, background: open ? 'var(--accent)' : 'var(--white)', transition:'all .3s',
                transform: open ? 'rotate(-45deg) translate(5px,-5px)' : 'none' }} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu drawer */}
      {open && (
        <div style={{ position:'fixed', top:62, left:0, right:0, bottom:0, zIndex:490, background:'rgba(8,8,8,.98)', backdropFilter:'blur(20px)', overflowY:'auto', borderTop:'1px solid var(--border)' }}>
          <div className="container" style={{ paddingTop:24, paddingBottom:48 }}>

            {/* Nav links */}
            <ul style={{ listStyle:'none', display:'flex', flexDirection:'column', gap:2, marginBottom:32 }}>
              {links.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} onClick={() => setOpen(false)}
                    style={{ display:'block', fontSize:24, fontFamily:'var(--f-display)', color:'var(--white)', padding:'14px 0', borderBottom:'1px solid var(--border)', letterSpacing:'.05em' }}>
                    {label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/picks" onClick={() => setOpen(false)}
                  style={{ display:'block', fontSize:24, fontFamily:'var(--f-display)', color:'var(--accent)', padding:'14px 0', borderBottom:'1px solid var(--border)', letterSpacing:'.05em' }}>
                  {n.picks} →
                </Link>
              </li>
            </ul>

            {/* CTA */}
            <Link href="/picks/starter-kit" onClick={() => setOpen(false)}
              className="btn btn-primary"
              style={{ width:'100%', justifyContent:'center', fontSize:14, padding:'18px 24px', marginBottom:32 }}>
              {n.kit}
            </Link>

            {/* Theme swatches */}
            <div style={{ display:'flex', gap:12, alignItems:'center', justifyContent:'center' }}>
              {THEMES.map(th => (
                <button key={th.key} onClick={() => setTheme(th.key)} title={th.label} aria-label={th.label}
                  style={{ width:28, height:28, borderRadius:'50%', background:th.swatch, flexShrink:0,
                    border: `3px solid ${theme === th.key ? 'var(--white)' : 'transparent'}`,
                    transform: theme === th.key ? 'scale(1.15)' : 'scale(1)',
                    transition:'all .25s' }} />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
