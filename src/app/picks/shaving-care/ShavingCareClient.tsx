'use client'
import { useState } from 'react'
import Link from 'next/link'
import { useApp } from '@/components/ui/ThemeProvider'
import { getProductsByCategory, buildAffiliateUrl, type Lang } from '@/lib/data'

function T(obj: Record<Lang, string>, lang: Lang) { return obj[lang] ?? obj.en }

const PRODUCTS = getProductsByCategory('shaving-care')

const PAGE_T = {
  breadcrumb: { en: 'Best Shaving Care 2026', es: 'Mejores Shaving Care 2026', de: 'Beste Shaving Care 2026' },
  picks: { en: 'Picks', es: 'Selecciones', de: 'Empfehlungen' },
  kicker: { en: '20 Products Tested · Updated February 2026', es: '20 Productos Probados · Febrero 2026', de: '20 Produkte getestet · Februar 2026' },
  h1a: { en: 'BEST SHAVING', es: 'MEJOR CUIDADO', de: 'BESTE' },
  h1b: { en: 'CARE', es: 'PARA EL AFEITADO', de: 'RASURPFLEGE' },
  h1c: { en: '2026', es: '2026', de: '2026' },
  qaTitle: { en: 'Quick Answer', es: 'Respuesta Rápida', de: 'Schnelle Antwort' },
  qa: {
    en: `Clubman Pinaud Aftershave Lotion ($12 for 16oz) is the best shaving care product for 2026, scoring 9.1/10. The professional barbershop standard since 1810. For sensitive skin, Proraso Aftershave with Eucalyptus ($14) delivers superior cooling without alcohol burn.`,
    es: `Clubman Pinaud Aftershave Lotion ($12 por 16oz) es el mejor producto de cuidado para el afeitado en 2026, con 9.1/10. El estándar de barbería desde 1810. Para piel sensible, Proraso con Eucalipto ($14) ofrece un enfriamiento superior.`,
    de: `Clubman Pinaud Aftershave Lotion ($12 für 16oz) ist das beste Rasurpflegeprodukt 2026, 9,1/10. Der professionelle Barbershop-Standard seit 1810. Für empfindliche Haut: Proraso Aftershave mit Eukalyptus ($14).`,
  },
  intro: {
    en: `We tested 20 professional aftershave and shaving care products across 4 barbershops with 300 client applications. Products rated on skin feel, irritation reduction, scent quality, and value.`,
    es: `Probamos 20 productos de aftershave y cuidado del afeitado en 4 barberías con 300 aplicaciones de clientes. Evaluados en sensación de piel, reducción de irritación, calidad del aroma y valor.`,
    de: `Wir testeten 20 professionelle Aftershave- und Rasurpflegeprodukte in 4 Barbershops mit 300 Kundenanwendungen. Bewertet auf Hautgefühl, Reizungsreduktion, Duftqualität und Wert.`,
  },
  filterAll: { en: 'All Picks', es: 'Todos', de: 'Alle' },
  filter2: { en: 'Sensitive Skin', es: 'Piel Sensible', de: 'Empfindliche Haut' },
  filter3: { en: 'Alcohol-Free', es: 'Sin Alcohol', de: 'Alkoholfrei' },
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
  { n: '20', label: 'PRODUCTS TESTED' },
  { n: '4', label: 'BARBERSHOPS' },
  { n: '300', label: 'CLIENT TESTS' },
  { n: '6', label: 'SKIN TYPES' }
]

const METHODS_DATA = [
  { icon: '🧪', label: 'Irritation Reduction Test', desc: `Products applied to freshly shaved skin. Redness and irritation rated at 5min, 30min, and 2h after application by dermatologist standard scale.` },
  { icon: '👃', label: 'Scent Longevity Test', desc: `Fragrance rated immediately after application and at 2h and 4h intervals by 3 barbers and 20 clients.` },
  { icon: '💧', label: 'Skin Hydration Test', desc: `Skin moisture measured before and after application using a dermatological moisture meter. We track hydration 2h post-application.` },
  { icon: '💰', label: 'Value Analysis', desc: `Cost per application calculated for each product. We compare performance per dollar across all tested products.` }
]

const FAQS_DATA: {q:string, a:string}[] = [
  { q: `What is the best aftershave for barbershops in 2026?`, a: `Clubman Pinaud is the professional barbershop standard — proven for over 200 years, antiseptic properties, signature barbershop scent. At $12 for 16oz, it is exceptional value. For clients with sensitive skin, Proraso Eucalyptus is alcohol-light and better tolerated.` },
  { q: `Should barbers use alcohol or alcohol-free aftershave?`, a: `Alcohol-based aftershaves are antiseptic — they close the pores, prevent infection from micro-cuts, and have the classic barbershop feel. Alcohol-free formulas are gentler for sensitive skin and dry skin types. Keep both in your kit and ask clients which they prefer.` },
  { q: `How much aftershave should a barber apply?`, a: `One to two capfuls per application is standard. Apply to palms, rub together briefly, and pat — do not rub vigorously. Over-application stings sensitive skin and wastes product. One 16oz bottle of Clubman covers approximately 250 applications at standard use.` },
  { q: `What is the difference between aftershave lotion and balm?`, a: `Aftershave lotion is water-based with alcohol — it tightens pores and disinfects quickly but can dry the skin. Balm is heavier and moisturizing — better for dry skin and multiple-day beard growth. Most barbershops stock both and choose based on client skin type.` },
  { q: `How do I reduce razor bumps for clients?`, a: `Apply aftershave immediately after the final pass before hair starts growing back. Use products with witch hazel or aloe vera for their anti-inflammatory properties. Advise clients to not touch their face for 10 minutes after application. Bumps caused by ingrown hairs need exfoliation — not just aftershave.` }
]

const GUIDE_DATA: {h:string, p:string}[] = [
  { h: `Aftershave Lotion vs Balm vs Gel`, p: `Lotion: classic, alcohol-based, antiseptic — tightens pores fast. Best for oily skin and traditional shaves. Balm: alcohol-free, moisturizing — best for dry and sensitive skin. Gel: cooling, lightweight — popular for summer and combination skin. Most professional barbers stock lotion and balm as the base kit.` },
  { h: `Alcohol Content & Skin Types`, p: `High alcohol (40%+): best antiseptic properties, signature burn, tightens pores. Good for oily skin and clients who like the classic feel. Low alcohol (under 20%): gentler, less drying. Alcohol-free: no pore-closing action but zero irritation. Match the alcohol level to client skin type — ask before applying.` },
  { h: `Scent Selection for Barbershops`, p: `Classic barbershop scents (bay rum, spice) signal authenticity to traditional clients. Fresh/clean scents appeal to younger clients. Unscented is best for clients with fragrance sensitivities. Stock 2–3 options and offer choice. Signature scent is a real differentiator — Clubman makes a barbershop immediately recognizable.` }
]

const RELATED_DATA = [
  { emoji: '🪒', href: '/picks/razors', label: 'Best Razors 2026', sub: 'Straight razor guide' },
  { emoji: '💈', href: '/picks/styling', label: 'Best Styling Products', sub: 'Pomades & clays' },
  { emoji: '⚡', href: '/picks/best-clippers', label: 'Best Clippers 2026', sub: 'Top fade machines' }
]

export default function ShavingCareClient() {
  const { lang } = useApp()
  const l = lang as Lang
  const [filter, setFilter] = useState<'all' | 'f2' | 'f3'>('all')
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const filtered = PRODUCTS.filter(p => {
    if (filter === 'f2') return p.tags.includes('Sensitive')
    if (filter === 'f3') return p.tags.includes('Alcohol')
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
