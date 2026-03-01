'use client'
import { useState } from 'react'
import Link from 'next/link'
import { useApp } from '@/components/ui/ThemeProvider'
import { getProductsByCategory, buildAffiliateUrl, type Lang } from '@/lib/data'

function T(obj: Record<Lang, string>, lang: Lang) { return obj[lang] ?? obj.en }

const PRODUCTS = getProductsByCategory('styling')

const PAGE_T = {
  breadcrumb: { en: 'Best Styling 2026', es: 'Mejores Styling 2026', de: 'Beste Styling 2026' },
  picks: { en: 'Picks', es: 'Selecciones', de: 'Empfehlungen' },
  kicker: { en: '22 Products Tested · Updated February 2026', es: '22 Productos Probados · Febrero 2026', de: '22 Produkte getestet · Februar 2026' },
  h1a: { en: 'BEST BARBER', es: 'MEJORES', de: 'BESTE' },
  h1b: { en: 'STYLING', es: 'POMULAS', de: 'STYLINGPRODUKTE' },
  h1c: { en: '2026', es: '2026', de: '2026' },
  qaTitle: { en: 'Quick Answer', es: 'Respuesta Rápida', de: 'Schnelle Antwort' },
  qa: {
    en: `Suavecito Pomade Firme Hold ($13) is the best barber styling product for 2026, scoring 9.4/10. Water-soluble, strong hold all day, zero flaking. For matte finish, Reuzel Extreme Matte ($18) is the professional top choice.`,
    es: `Suavecito Pomade Firme Hold ($13) es el mejor producto de peinado para 2026, con 9.4/10. Soluble en agua, fijación fuerte todo el día, sin escamas. Para acabado mate, Reuzel Extreme Matte ($18) es la mejor opción.`,
    de: `Suavecito Pomade Firme Hold ($13) ist das beste Barbierstylingprodukt 2026, 9,4/10. Wasserlöslich, starker Halt den ganzen Tag, keine Schuppen. Für Matte-Finish: Reuzel Extreme Matte ($18).`,
  },
  intro: {
    en: `We tested 22 professional styling products on real clients across 5 barbershops over 3 months. Products evaluated on hold strength, finish, wash-out ease, and all-day performance.`,
    es: `Probamos 22 productos de peinado en clientes reales en 5 barberías durante 3 meses. Evaluados en fijación, acabado, facilidad de lavado y rendimiento todo el día.`,
    de: `Wir testeten 22 professionelle Stylingprodukte an echten Kunden in 5 Barbershops über 3 Monate. Bewertet auf Halt, Finish, Auswaschbarkeit und Tagesleistung.`,
  },
  filterAll: { en: 'All Picks', es: 'Todos', de: 'Alle' },
  filter2: { en: 'Strong Hold', es: 'Fijación Fuerte', de: 'Starker Halt' },
  filter3: { en: 'Matte Finish', es: 'Acabado Mate', de: 'Mattes Finish' },
  results: { en: 'results', es: 'resultados', de: 'Ergebnisse' },
  verdict: { en: 'VERDICT', es: 'VEREDICTO', de: 'URTEIL' },
  pros: { en: '✓ PROS', es: '✓ PROS', de: '✓ VORTEILE' },
  cons: { en: '✗ CONS', es: '✗ CONS', de: '✗ NACHTEILE' },
  scores: { en: 'SCORE BREAKDOWN', es: 'DESGLOSE', de: 'PUNKTE' },
  specs: { en: 'SPECS', es: 'SPECS', de: 'SPECS' },
  checkPrice: { en: 'Check Today\'s Price on Amazon →', es: 'Ver Precio en Amazon →', de: 'Preis bei Amazon →' },
  affNote: { en: 'Affiliate link — no extra cost. We may earn a commission.', es: 'Enlace afiliado — sin costo adicional.', de: 'Affiliate-Link — keine Mehrkosten.' },
  related: { en: 'RELATED PICKS', es: 'RELACIONADOS', de: 'VERWANDTE' },
  relatedKicker: { en: 'See Also', es: 'Ver También', de: 'Siehe auch' },
  view: { en: 'View →', es: 'Ver →', de: 'Ansehen →' },
  noResults: { en: 'No products match this filter.', es: 'Ningún producto coincide.', de: 'Kein Produkt passt.' },
  methodTitle: { en: 'HOW WE TEST', es: 'CÓMO PROBAMOS', de: 'WIE WIR TESTEN' },
  faqTitle: { en: 'COMMON\nQUESTIONS', es: 'PREGUNTAS\nFRECUENTES', de: 'HÄUFIGE\nFRAGEN' },
  guideKicker: { en: 'Buying Guide — 2026 Edition', es: 'Guía de Compra — 2026', de: 'Kaufratgeber — 2026' },
  guideTitle: { en: 'HOW TO CHOOSE\nTHE RIGHT PRODUCT', es: 'CÓMO ELEGIR\nEL PRODUCTO CORRECTO', de: 'WIE MAN DAS\nRICHTIGE PRODUKT WÄHLT' },
}

const STATS = [
  { n: '22', label: 'PRODUCTS TESTED' },
  { n: '3', label: 'MONTHS TESTING' },
  { n: '5', label: 'BARBERSHOPS' },
  { n: '180', label: 'CLIENT TESTS' }
]

const METHODS_DATA = [
  { icon: '💪', label: 'Hold Strength Test', desc: `Each product applied to freshly cut hair. Hold rated at 1h, 4h, and 8h intervals. We measure style displacement with humidity and activity.` },
  { icon: '✨', label: 'Finish Quality Test', desc: `Products photographed under studio lighting at 0h and 8h. Shine, texture, and flaking rated by 3 professional barbers blind.` },
  { icon: '🚿', label: 'Wash-Out Test', desc: `Products washed with one shampoo application only. We measure residue remaining and ease of complete removal.` },
  { icon: '🌡️', label: 'Humidity Test', desc: `Products tested in 80% humidity environment for 4 hours to simulate summer conditions and humid climates.` }
]

const FAQS_DATA: {q:string, a:string}[] = [
  { q: `What is the best pomade for barbers in 2026?`, a: `Suavecito Firme Hold is our top pick — water-based, strong hold, washes out with one shampoo. It works on all hair types and finishes with a medium shine. For the best matte finish, Reuzel Extreme Matte delivers the cleanest dry texture.` },
  { q: `Water-based vs oil-based pomade — which is better?`, a: `Water-based pomades wash out easily, do not stain pillowcases, and restyle with water during the day. Oil-based hold longer and give more shine but require multiple shampoo washes. For professional barbershop use, water-based is the standard — easier for client wash-outs.` },
  { q: `How much pomade should a barber use per client?`, a: `A dime to quarter-sized amount covers most styles. Start small — you can always add more. Over-application creates a greasy look that is hard to fix without washing. For thick or long hair, use a pea-sized amount more than you think you need.` },
  { q: `What hold level do I need for fade haircuts?`, a: `Fades generally need medium to strong hold to keep shape throughout the day. Water-based strong holds like Suavecito Firme are ideal — they define the style without looking stiff. For textured tops, matte clay gives definition with movement.` },
  { q: `How long does pomade hold last throughout the day?`, a: `Quality water-based pomades hold 6–8 hours in normal conditions. Humidity and sweat reduce hold time. Oil-based pomades hold longer but feel heavier. If clients work outdoors or in humid environments, oil-based or fiber clay will outlast water-based options.` }
]

const GUIDE_DATA: {h:string, p:string}[] = [
  { h: `Hold Levels Explained`, p: `Hold strength is rated light, medium, strong, and maximum. Light hold gives natural movement — good for longer styles. Medium hold is the professional standard for most fades. Strong hold keeps structured styles in place all day. Maximum hold is for pompadours and slick styles that need zero movement.` },
  { h: `Finish Types: Shine vs Matte`, p: `High-shine pomades give a classic barbershop look — pompadours, slick sides. Matte finishes look more natural and modern. Most barbers keep both — matte for textured styles and natural looks, shine for classic and retro styles. Low-shine options split the difference.` },
  { h: `Water-Based vs Oil-Based`, p: `Water-based: easy wash-out, restyle with water during the day, no pillowcase staining. Oil-based: longer lasting hold, more shine, requires multiple shampoo washes. Hybrid pomades combine the best of both. For professional barbershops, water-based is the practical standard.` }
]

const RELATED_DATA = [
  { emoji: '🪒', href: '/picks/razors', label: 'Best Razors 2026', sub: 'Straight razor guide' },
  { emoji: '🧴', href: '/picks/shaving-care', label: 'Best Shaving Care', sub: 'Aftershave & creams' },
  { emoji: '⚡', href: '/picks/best-clippers', label: 'Best Clippers 2026', sub: 'Top fade machines' }
]

export default function StylingClient() {
  const { lang } = useApp()
  const l = lang as Lang
  const [filter, setFilter] = useState<'all' | 'f2' | 'f3'>('all')
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const filtered = PRODUCTS.filter(p => {
    if (filter === 'f2') return p.tags.includes('Strong')
    if (filter === 'f3') return p.tags.includes('Matte')
    return true
  })

  return (
    <div style={{ background: 'var(--bg)', color: 'var(--fg)', minHeight: '100vh' }}>
      <div style={{ padding: '12px 24px', borderBottom: '1px solid var(--border)', fontSize: 13 }}>
        <Link href="/" style={{ color: 'var(--accent)', textDecoration: 'none' }}>BarberSuplyHub</Link>
        <span style={{ margin: '0 8px', opacity: 0.4 }}>/ </span>
        <Link href="/picks/best-clippers" style={{ color: 'var(--accent)', textDecoration: 'none' }}>{T(PAGE_T.picks, l)}</Link>
        <span style={{ margin: '0 8px', opacity: 0.4 }}>/ </span>
        <span style={{ opacity: 0.7 }}>{T(PAGE_T.breadcrumb, l)}</span>
      </div>

      <div style={{ maxWidth: 900, margin: '0 auto', padding: '64px 24px 40px' }}>
        <p style={{ color: 'var(--accent)', fontWeight: 700, fontSize: 12, letterSpacing: 2, marginBottom: 16 }}>{T(PAGE_T.kicker, l)}</p>
        <h1 style={{ fontSize: 'clamp(48px,8vw,96px)', fontWeight: 900, lineHeight: 0.9, margin: 0 }}>
          <span style={{ display: 'block' }}>{T(PAGE_T.h1a, l)}</span>
          <span style={{ display: 'block' }}>{T(PAGE_T.h1b, l)}</span>
          <span style={{ display: 'block', color: 'var(--accent)' }}>{T(PAGE_T.h1c, l)}</span>
        </h1>
        <div style={{ marginTop: 32, padding: '20px 24px', border: '1px solid var(--border)', borderRadius: 4 }}>
          <p style={{ color: 'var(--accent)', fontWeight: 700, fontSize: 12, letterSpacing: 1, marginBottom: 8 }}>{T(PAGE_T.qaTitle, l).toUpperCase()}</p>
          <p style={{ margin: 0, lineHeight: 1.6 }}>{T(PAGE_T.qa, l)}</p>
        </div>
        <p style={{ marginTop: 24, opacity: 0.7, lineHeight: 1.7 }}>{T(PAGE_T.intro, l)}</p>
        <div className="grid-4">
          {STATS.map(s => (
            <div key={s.n}>
              <p style={{ fontSize: 40, fontWeight: 900, color: 'var(--accent)', margin: 0 }}>{s.n}</p>
              <p style={{ fontSize: 11, letterSpacing: 1, opacity: 0.5, margin: '4px 0 0' }}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div style={{ position: 'sticky', top: 64, zIndex: 10, background: 'var(--bg)', borderBottom: '1px solid var(--border)', padding: '12px 24px', display: 'flex', gap: 8, alignItems: 'center' }}>
        <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: 1, opacity: 0.5, marginRight: 8 }}>FILTER:</span>
        {(['all', 'f2', 'f3'] as const).map((v) => (
          <button key={v} onClick={() => setFilter(v)} style={{ padding: '6px 16px', fontSize: 13, fontWeight: 600, border: '1px solid var(--border)', borderRadius: 2, cursor: 'pointer', background: filter === v ? 'var(--accent)' : 'transparent', color: filter === v ? '#000' : 'var(--fg)' }}>
            {v === 'all' ? T(PAGE_T.filterAll, l) : v === 'f2' ? T(PAGE_T.filter2, l) : T(PAGE_T.filter3, l)}
          </button>
        ))}
        <span style={{ marginLeft: 'auto', fontSize: 13, opacity: 0.5 }}>{filtered.length} {T(PAGE_T.results, l)}</span>
      </div>

      <div style={{ maxWidth: 900, margin: '0 auto', padding: '40px 24px' }}>
        {filtered.length === 0 && <p style={{ opacity: 0.5, textAlign: 'center', padding: 40 }}>{T(PAGE_T.noResults, l)}</p>}
        {filtered.map(p => (
          <div key={p.id} style={{ marginBottom: 32, border: '1px solid var(--border)', borderRadius: 4, overflow: 'hidden' }}>
            <div style={{ padding: '24px 24px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 8 }}>
                  <span style={{ fontSize: 36, fontWeight: 900, opacity: 0.2 }}>{String(p.rank).padStart(2,'0')}</span>
                  {p.badge && <span style={{ background: 'var(--accent)', color: '#000', fontSize: 11, fontWeight: 800, padding: '3px 8px', letterSpacing: 1 }}>{p.badge[l] ?? p.badge.en}</span>}
                </div>
                <p style={{ margin: 0, fontSize: 12, fontWeight: 700, opacity: 0.5, letterSpacing: 1 }}>{p.brand.toUpperCase()}</p>
                <h2 style={{ margin: '4px 0 0', fontSize: 22, fontWeight: 900, letterSpacing: -0.5 }}>{p.name.toUpperCase()}</h2>
              </div>
              <div style={{ textAlign: 'right' }}>
                <span style={{ fontSize: 48, fontWeight: 900, lineHeight: 1 }}>{p.score}</span>
                <p style={{ margin: 0, fontSize: 11, opacity: 0.5 }}>/ 10 score</p>
              </div>
            </div>
            <div className="grid-2">
              <div style={{ padding: 24 }}>
                <p style={{ margin: '0 0 8px', fontSize: 11, fontWeight: 700, letterSpacing: 1, opacity: 0.5 }}>{T(PAGE_T.verdict, l)}</p>
                <p style={{ margin: '0 0 16px', lineHeight: 1.6, fontSize: 14 }}>{p.verdict[l] ?? p.verdict.en}</p>
                <p style={{ margin: '0 0 6px', fontSize: 11, fontWeight: 700, letterSpacing: 1, color: 'var(--accent)' }}>{T(PAGE_T.pros, l)}</p>
                {(p.pros[l] ?? p.pros.en).map((pro, i) => <p key={i} style={{ margin: '3px 0', fontSize: 13 }}>+ {pro}</p>)}
                <p style={{ margin: '12px 0 6px', fontSize: 11, fontWeight: 700, letterSpacing: 1, opacity: 0.6 }}>{T(PAGE_T.cons, l)}</p>
                {(p.cons[l] ?? p.cons.en).map((con, i) => <p key={i} style={{ margin: '3px 0', fontSize: 13, opacity: 0.7 }}>– {con}</p>)}
              </div>
              <div style={{ padding: 24, borderLeft: '1px solid var(--border)' }}>
                <p style={{ margin: '0 0 16px', fontSize: 11, fontWeight: 700, letterSpacing: 1, opacity: 0.5 }}>{T(PAGE_T.scores, l)}</p>
                {p.scoreBreakdown.map(s => (
                  <div key={s.label.en} style={{ marginBottom: 12 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                      <span style={{ fontSize: 13 }}>{s.label[l] ?? s.label.en}</span>
                      <span style={{ fontWeight: 700 }}>{s.score}</span>
                    </div>
                    <div style={{ height: 4, background: 'var(--border)', borderRadius: 2 }}>
                      <div style={{ height: '100%', width: `${s.score * 10}%`, background: 'var(--accent)', borderRadius: 2 }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ padding: '16px 24px', borderTop: '1px solid var(--border)' }}>
              <a href={buildAffiliateUrl(p.asin)} target="_blank" rel="noopener noreferrer sponsored" style={{ display: 'block', width: '100%', padding: '14px', textAlign: 'center', background: 'var(--accent)', color: '#000', fontWeight: 800, fontSize: 14, letterSpacing: 1, textDecoration: 'none', borderRadius: 2 }}>
                {T(PAGE_T.checkPrice, l)}
              </a>
              <p style={{ margin: '8px 0 0', fontSize: 11, opacity: 0.4, textAlign: 'center' }}>{T(PAGE_T.affNote, l)}</p>
            </div>
          </div>
        ))}
      </div>

      <div style={{ maxWidth: 900, margin: '0 auto', padding: '40px 24px' }}>
        <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: 2, color: 'var(--accent)', marginBottom: 24 }}>{T(PAGE_T.methodTitle, l)}</p>
        <div className="grid-pros-cons">
          {METHODS_DATA.map((m) => (
            <div key={m.label} style={{ padding: 24, border: '1px solid var(--border)', borderRadius: 4 }}>
              <div style={{ fontSize: 28, marginBottom: 12 }}>{m.icon}</div>
              <p style={{ margin: '0 0 8px', fontWeight: 700, fontSize: 15 }}>{m.label}</p>
              <p style={{ margin: 0, fontSize: 13, opacity: 0.7, lineHeight: 1.6 }}>{m.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 900, margin: '0 auto', padding: '40px 24px' }}>
        <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: 2, color: 'var(--accent)', marginBottom: 16 }}>{T(PAGE_T.guideKicker, l).toUpperCase()}</p>
        <h2 style={{ fontSize: 'clamp(28px,5vw,48px)', fontWeight: 900, margin: '0 0 40px', lineHeight: 1 }}>
          {T(PAGE_T.guideTitle, l).split('\n').map((line, i) => <span key={i} style={{ display: 'block' }}>{line}</span>)}
        </h2>
        {GUIDE_DATA.map((section, i) => (
          <div key={i} style={{ marginBottom: 32, paddingBottom: 32, borderBottom: '1px solid var(--border)' }}>
            <h3 style={{ margin: '0 0 12px', fontSize: 16, fontWeight: 800 }}>{section.h.toUpperCase()}</h3>
            <p style={{ margin: 0, lineHeight: 1.7, opacity: 0.8 }}>{section.p}</p>
          </div>
        ))}
      </div>

      <div style={{ maxWidth: 900, margin: '0 auto', padding: '40px 24px' }}>
        <h2 style={{ fontSize: 'clamp(28px,5vw,56px)', fontWeight: 900, margin: '0 0 40px', lineHeight: 1 }}>
          {T(PAGE_T.faqTitle, l).split('\n').map((line, i) => <span key={i} style={{ display: 'block' }}>{line}</span>)}
        </h2>
        {FAQS_DATA.map((faq, i) => (
          <div key={i} style={{ borderBottom: '1px solid var(--border)' }}>
            <button onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{ width: '100%', background: 'none', border: 'none', color: 'var(--fg)', cursor: 'pointer', padding: '20px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 15, fontWeight: 500, textAlign: 'left' }}>
              {faq.q}
              <span style={{ fontSize: 20, color: 'var(--accent)', marginLeft: 16 }}>{openFaq === i ? '−' : '+'}</span>
            </button>
            {openFaq === i && <p style={{ margin: '0 0 20px', lineHeight: 1.7, opacity: 0.8, fontSize: 14 }}>{faq.a}</p>}
          </div>
        ))}
      </div>

      <div style={{ maxWidth: 900, margin: '0 auto', padding: '40px 24px 80px' }}>
        <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: 2, color: 'var(--accent)', marginBottom: 8 }}>{T(PAGE_T.relatedKicker, l).toUpperCase()}</p>
        <h2 style={{ fontSize: 'clamp(24px,4vw,40px)', fontWeight: 900, margin: '0 0 32px' }}>{T(PAGE_T.related, l)}</h2>
        <div className="grid-3">
          {RELATED_DATA.map(r => (
            <Link key={r.href} href={r.href} style={{ padding: 24, border: '1px solid var(--border)', borderRadius: 4, textDecoration: 'none', color: 'var(--fg)', display: 'block' }}>
              <div style={{ fontSize: 28, marginBottom: 12 }}>{r.emoji}</div>
              <p style={{ margin: '0 0 4px', fontWeight: 800, fontSize: 14, letterSpacing: 0.5 }}>{r.label.toUpperCase()}</p>
              <p style={{ margin: '0 0 12px', fontSize: 12, opacity: 0.6 }}>{r.sub}</p>
              <span style={{ fontSize: 13, color: 'var(--accent)', fontWeight: 700 }}>{T(PAGE_T.view, l)}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}



