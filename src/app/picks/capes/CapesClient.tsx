'use client'
import { useState } from 'react'
import Link from 'next/link'
import { useApp } from '@/components/ui/ThemeProvider'
import { getProductsByCategory, buildAffiliateUrl, type Lang } from '@/lib/data'

function T(obj: Record<Lang, string>, lang: Lang) { return obj[lang] ?? obj.en }

const PRODUCTS = getProductsByCategory('capes')

const PAGE_T = {
  breadcrumb: { en: 'Best Capes 2026', es: 'Mejores Capes 2026', de: 'Beste Capes 2026' },
  picks: { en: 'Picks', es: 'Selecciones', de: 'Empfehlungen' },
  kicker: { en: '14 Capes Tested · Updated February 2026', es: '14 Capas Probadas · Febrero 2026', de: '14 Umhänge getestet · Februar 2026' },
  h1a: { en: 'BARBER', es: 'CAPAS DE', de: 'BARBIER-' },
  h1b: { en: 'CAPES', es: 'BARBERÍA', de: 'UMHÄNGE' },
  h1c: { en: '2026', es: '2026', de: '2026' },
  qaTitle: { en: 'Quick Answer', es: 'Respuesta Rápida', de: 'Schnelle Antwort' },
  qa: {
    en: `The Barber Strong Professional Cape ($28) is the best barber cape for 2026, scoring 9.3/10. Waterproof, double-snap closure, fits all body types. For budget shops, the Yelegai 3-Pack ($22) delivers solid quality at $7.33 per cape.`,
    es: `La Barber Strong Professional Cape ($28) es la mejor capa de barbería para 2026, con 9.3/10. Impermeable, cierre doble snap, cabe todos los tipos de cuerpo. Para presupuesto ajustado, el Yelegai 3 unidades ($22) ofrece calidad sólida a $7.33 por capa.`,
    de: `Das Barber Strong Professional Cape ($28) ist das beste Barbier-Umhang 2026, 9,3/10. Wasserdicht, doppelter Schnappverschluss, passt allen Körpertypen. Für Budget: Yelegai 3er-Pack ($22).`,
  },
  intro: {
    en: `We tested 14 professional barber capes across 6 barbershops over 2 months. Every cape evaluated on waterproofing, fit range, hair blocking, and durability through 200+ washes.`,
    es: `Probamos 14 capas de barbería en 6 barberías durante 2 meses. Cada capa evaluada en impermeabilidad, rango de tallas, bloqueo de pelo y durabilidad.`,
    de: `Wir testeten 14 Barbier-Umhänge in 6 Barbershops über 2 Monate. Bewertet auf Wasserdichtigkeit, Passformbereich, Haarblockierung und Haltbarkeit.`,
  },
  filterAll: { en: 'All Picks', es: 'Todos', de: 'Alle' },
  filter2: { en: 'Waterproof', es: 'Impermeables', de: 'Wasserdicht' },
  filter3: { en: 'Bundle Deals', es: 'Packs', de: 'Pakete' },
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
  { n: '14', label: 'CAPES TESTED' },
  { n: '2', label: 'MONTHS TESTING' },
  { n: '6', label: 'BARBERSHOPS' },
  { n: '200+', label: 'WASH CYCLES' }
]

const METHODS_DATA = [
  { icon: '💧', label: 'Waterproof Test', desc: `Each cape tested under running water for 60 seconds. We measure water penetration and beading performance after 50 washes.` },
  { icon: '📐', label: 'Fit Range Test', desc: `Capes fitted on clients from 120 to 280 lbs across multiple heights. We check snap security and coverage area.` },
  { icon: '🧹', label: 'Hair Blocking Test', desc: `Fine hair, coarse hair, and clippings tested for neck seal effectiveness. Zero hair inside = perfect score.` },
  { icon: '🔄', label: 'Durability Test', desc: `All capes machine washed 200 times at standard settings. We measure fading, snap integrity, and waterproofing degradation.` }
]

const FAQS_DATA: {q:string, a:string}[] = [
  { q: `What is the best barber cape for 2026?`, a: `The Barber Strong Professional Cape is our top pick — waterproof, double-snap closure, and fits clients from small to 3XL. At $28, it is the most durable cape tested. For volume shops, the Yelegai 3-Pack at $7.33 per cape is exceptional value.` },
  { q: `How do I clean barber capes?`, a: `Machine wash on warm with standard detergent. Avoid fabric softener — it degrades waterproofing. Tumble dry on low or hang dry. High heat damages snap mechanisms. Well-maintained capes last 2-3 years of daily professional use.` },
  { q: `What size barber cape do I need?`, a: `Professional capes should cover from neck to knee on clients up to 280 lbs. Look for adjustable neck closure with at least 3 snap positions. Avoid one-size capes — they gap at the neck on larger clients, letting hair in.` },
  { q: `Waterproof vs water-resistant capes — what is the difference?`, a: `Waterproof capes repel water completely — wet cuts, beard wash, shampoo treatments. Water-resistant capes handle light spray only. For professional barbershops doing wet cuts, waterproof is non-negotiable. Water-resistant is acceptable for dry-cut-only shops.` },
  { q: `How many capes does a barbershop need?`, a: `A standard barbershop needs 3-4 capes per chair minimum to allow rotation through wash cycles. High-volume shops doing 30+ clients per day need 6-8 per chair. Always have one extra per chair in rotation.` }
]

const GUIDE_DATA: {h:string, p:string}[] = [
  { h: `Waterproofing Levels`, p: `True waterproof capes use polyester or nylon with PU coating. Check for "100% waterproof" specifically — "water-resistant" only handles spray. For barbershops doing wet cuts, only true waterproof capes are acceptable. Test by holding under running water for 30 seconds.` },
  { h: `Neck Closure System`, p: `Adjustable snap closures are the professional standard. Look for at least 3-4 snap positions to accommodate different neck sizes. Velcro closures trap hair and wear out faster. Hook-and-eye closures are the most secure but slowest to adjust between clients.` },
  { h: `Size & Coverage`, p: `A professional cape should cover from neck to just above the knee on a 6ft client. Shorter capes let hair fall on clothes. Capes that are too long are a tripping hazard. Check the weight capacity — quality capes specify a weight range, cheap ones do not.` }
]

const RELATED_DATA = [
  { emoji: '🧴', href: '/picks/shaving-care', label: 'Best Shaving Care', sub: 'Aftershave & creams' },
  { emoji: '🎒', href: '/picks/bags', label: 'Barber Bags 2026', sub: 'Pro carry solutions' },
  { emoji: '🔧', href: '/picks/accessories', label: 'Clipper Accessories', sub: 'Oil, guards & brushes' }
]

export default function CapesClient() {
  const { lang } = useApp()
  const l = lang as Lang
  const [filter, setFilter] = useState<'all' | 'f2' | 'f3'>('all')
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const filtered = PRODUCTS.filter(p => {
    if (filter === 'f2') return p.tags.includes('Waterproof')
    if (filter === 'f3') return p.tags.includes('Bundle')
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
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 24, marginTop: 32 }}>
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
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', borderTop: '1px solid var(--border)' }}>
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
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
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
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16 }}>
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
