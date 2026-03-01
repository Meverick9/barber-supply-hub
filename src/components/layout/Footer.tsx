'use client'
import Link from 'next/link'
import { useApp } from '@/components/ui/ThemeProvider'
import { THEMES } from '@/lib/data'

const LINKS = {
  en: {
    picks: [['Best Clippers','/picks/best-clippers'],['Best Trimmers','/picks/best-trimmers'],['Starter Kit','/picks/starter-kit'],['Cordless Picks','/picks/cordless']],
    guides:[['How to Fade','/guides/how-to-fade'],['Wahl vs Andis','/guides/wahl-vs-andis'],['Blade Care','/guides/blade-care'],['Starter Guide','/guides/starter']],
    co:    [['About Us','/about'],['How We Test','/methodology'],['Advertise','/advertise'],['Privacy Policy','/privacy']],
    desc:'Independent barber tool reviews by professional barbers. Tested in real shops. Updated monthly since 2021.',
    disc:'⚠ Affiliate links never cost you extra and never affect our editorial ratings.',
    copy:'Amazon Associates affiliate disclosure: links may earn commissions.',
    ph:['Picks','Guides','Company'],
  },
  es: {
    picks: [['Mejores Cortadoras','/picks/best-clippers'],['Mejores Recortadoras','/picks/best-trimmers'],['Kit Inicial','/picks/starter-kit'],['Inalámbricas','/picks/cordless']],
    guides:[['Cómo hacer un Fade','/guides/how-to-fade'],['Wahl vs Andis','/guides/wahl-vs-andis'],['Cuidado de Cuchillas','/guides/blade-care'],['Guía Inicial','/guides/starter']],
    co:    [['Sobre Nosotros','/about'],['Cómo Probamos','/methodology'],['Publicidad','/advertise'],['Privacidad','/privacy']],
    desc:'Reseñas independientes de herramientas por barberos profesionales. Actualizado mensualmente desde 2021.',
    disc:'⚠ Los enlaces de afiliado nunca te cuestan más y nunca afectan nuestras valoraciones.',
    copy:'Divulgación de afiliados de Amazon: los enlaces pueden generar comisiones.',
    ph:['Selecciones','Guías','Empresa'],
  },
  de: {
    picks: [['Beste Haarschneider','/picks/best-clippers'],['Beste Trimmer','/picks/best-trimmers'],['Starter-Set','/picks/starter-kit'],['Kabellose','/picks/cordless']],
    guides:[['Wie man Fades macht','/guides/how-to-fade'],['Wahl vs Andis','/guides/wahl-vs-andis'],['Klingenpflege','/guides/blade-care'],['Einsteiger-Guide','/guides/starter']],
    co:    [['Über uns','/about'],['Wie wir testen','/methodology'],['Werbung','/advertise'],['Datenschutz','/privacy']],
    desc:'Unabhängige Barbier-Tool-Tests von Profi-Barbieren. In echten Shops getestet. Seit 2021.',
    disc:'⚠ Affiliate-Links kosten dich nie mehr und beeinflussen nie unsere Bewertungen.',
    copy:'Amazon-Affiliate-Hinweis: Links können Provisionen erzeugen.',
    ph:['Empfehlungen','Ratgeber','Unternehmen'],
  },
}

export default function Footer() {
  const { lang, theme, setTheme } = useApp()
  const L = LINKS[lang]

  return (
    <footer style={{ background:'var(--dark)', borderTop:'1px solid var(--border)', padding:'56px 0 28px' }}>
      <div className="container">
        <div style={{ display:'grid', gridTemplateColumns:'2fr 1fr 1fr 1fr', gap:44, marginBottom:44 }}>

          <div>
            <div style={{ fontFamily:'var(--f-display)', fontSize:24, marginBottom:14 }}>
              BARBER<span style={{ color:'var(--accent)' }}>●</span>SUPPLY
            </div>
            <p style={{ fontSize:12, color:'var(--white-60)', lineHeight:1.65, marginBottom:16 }}>{L.desc}</p>
            {/* Theme swatches in footer */}
            <div style={{ display:'flex', gap:6, flexWrap:'wrap' }}>
              {THEMES.map(th => (
                <button key={th.key} onClick={() => setTheme(th.key)} title={th.label}
                  style={{ width:14, height:14, borderRadius:'50%', background:th.swatch,
                    border:`2px solid ${theme===th.key?'var(--white)':'transparent'}`,
                    transition:'all .2s' }} />
              ))}
            </div>
          </div>

          {([L.picks, L.guides, L.co] as [string, string][][]).map((links, gi) => (
            <div key={gi}>
              <div style={{ fontSize:10, fontWeight:700, letterSpacing:'.12em', textTransform:'uppercase', color:'var(--white)', marginBottom:14 }}>
                {L.ph[gi]}
              </div>
              <ul style={{ listStyle:'none', display:'flex', flexDirection:'column', gap:7 }}>
                {links.map(([label, href]) => (
                  <li key={href}>
                    <Link href={href} style={{ fontSize:12, color:'var(--white-60)', transition:'color .2s' }}
                      onMouseEnter={e => ((e.target as HTMLElement).style.color = 'var(--accent)')}
                      onMouseLeave={e => ((e.target as HTMLElement).style.color = 'var(--white-60)')}>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{ paddingTop:22, borderTop:'1px solid var(--border)', display:'flex', alignItems:'flex-start', justifyContent:'space-between', gap:14, flexWrap:'wrap' }}>
          <div style={{ fontSize:10, color:'var(--white-60)', opacity:.45, lineHeight:1.65 }}>
            © 2026 BarberSuplyHub. {L.copy}
          </div>
          <div style={{ fontSize:10, color:'var(--accent)', opacity:.6, textAlign:'right', maxWidth:320 }}>{L.disc}</div>
        </div>
      </div>
    </footer>
  )
}
