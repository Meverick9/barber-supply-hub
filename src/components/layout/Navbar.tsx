'use client'
import Link from 'next/link'
import { useApp } from '@/components/ui/ThemeProvider'
import { THEMES, LANGUAGES } from '@/lib/data'

const NAV = {
  en: { clippers:'Clippers', trimmers:'Trimmers', compare:'Compare', guides:'Guides', barbers:'Barbers', kit:'Starter Kit' },
  es: { clippers:'Cortadoras', trimmers:'Recortadoras', compare:'Comparar', guides:'Guías', barbers:'Barberos', kit:'Kit Inicial' },
  de: { clippers:'Haarschneider', trimmers:'Trimmer', compare:'Vergleich', guides:'Ratgeber', barbers:'Barbiere', kit:'Starter-Set' },
}

export default function Navbar() {
  const { lang, setLang, theme, setTheme } = useApp()
  const n = NAV[lang]

  return (
    <nav style={{ position:'sticky', top:0, zIndex:500, background:'rgba(8,8,8,.94)', backdropFilter:'blur(16px)', borderBottom:'1px solid var(--border)' }}>
      <div className="container" style={{ display:'flex', alignItems:'center', justifyContent:'space-between', height:62, gap:16 }}>

        {/* Logo */}
        <Link href="/" style={{ fontFamily:'var(--f-display)', fontSize:26, letterSpacing:'.05em', display:'flex', alignItems:'center', gap:2, flexShrink:0 }}>
          BARBER<span style={{ color:'var(--accent)' }}>●</span>SUPPLY
        </Link>

        {/* Nav links */}
        <ul style={{ display:'flex', gap:2, listStyle:'none' }} className="hide-mob">
          {[
            { href:'/picks/best-clippers', label:n.clippers },
            { href:'/picks/best-trimmers', label:n.trimmers },
            { href:'/compare', label:n.compare },
            { href:'/guides', label:n.guides },
            { href:'/barbers', label:n.barbers },
          ].map(({ href, label }) => (
            <li key={href}>
              <Link href={href} style={{ fontSize:11, fontWeight:600, letterSpacing:'.1em', textTransform:'uppercase', color:'var(--white-60)', padding:'7px 11px', borderRadius:'var(--radius)', display:'block', transition:'all .2s' }}
                onMouseEnter={e => { const el = e.target as HTMLElement; el.style.color='var(--white)'; el.style.background='var(--white-08)' }}
                onMouseLeave={e => { const el = e.target as HTMLElement; el.style.color='var(--white-60)'; el.style.background='transparent' }}>
                {label}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/picks/starter-kit" style={{ fontSize:11, fontWeight:700, letterSpacing:'.1em', textTransform:'uppercase', background:'var(--accent)', color:'var(--black)', padding:'7px 14px', borderRadius:'var(--radius)', display:'block', transition:'background .3s' }}>
              {n.kit}
            </Link>
          </li>
        </ul>

        {/* Controls */}
        <div style={{ display:'flex', alignItems:'center', gap:8, flexShrink:0 }}>

          {/* Language switcher */}
          <div style={{ display:'flex', gap:2, background:'var(--dark-2)', border:'1px solid var(--border)', borderRadius:'var(--radius)', padding:2 }}>
            {LANGUAGES.map(({ code, label }) => (
              <button key={code} onClick={() => setLang(code)}
                style={{ fontSize:10, fontWeight:700, letterSpacing:'.08em', textTransform:'uppercase', padding:'5px 10px', borderRadius:2,
                  background: lang === code ? 'var(--accent)' : 'transparent',
                  color: lang === code ? 'var(--black)' : 'var(--white-60)',
                  transition:'all .2s' }}>
                {label}
              </button>
            ))}
          </div>

          {/* Divider */}
          <div style={{ width:1, height:20, background:'var(--border)' }} className="hide-mob" />

          {/* Theme swatches — 6 colors */}
          <div style={{ display:'flex', gap:5, alignItems:'center' }} className="hide-mob">
            {THEMES.map(th => (
              <button key={th.key} onClick={() => setTheme(th.key)} title={th.label} aria-label={th.label}
                style={{ width:18, height:18, borderRadius:'50%', background:th.swatch, flexShrink:0,
                  border: `2px solid ${theme === th.key ? 'var(--white)' : 'transparent'}`,
                  transform: theme === th.key ? 'scale(1.2)' : 'scale(1)',
                  transition:'all .25s' }} />
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
