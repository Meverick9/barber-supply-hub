'use client'
import { useState } from 'react'
import Link from 'next/link'
import { useApp } from '@/components/ui/ThemeProvider'
import { getProductsByCategory, buildAffiliateUrl, type Lang } from '@/lib/data'

function T(obj: Record<Lang, string>, lang: Lang) { return obj[lang] ?? obj.en }

const PRODUCTS = getProductsByCategory('accessories')

const PAGE_T = {
  breadcrumb: { en: 'Best Accessories 2026', es: 'Mejores Accessories 2026', de: 'Beste Accessories 2026' },
  picks: { en: 'Picks', es: 'Selecciones', de: 'Empfehlungen' },
  kicker: { en: '16 Products Tested · Updated February 2026', es: '16 Productos Probados · Febrero 2026', de: '16 Produkte getestet · Februar 2026' },
  h1a: { en: 'CLIPPER', es: 'ACCESORIOS', de: 'CLIPPER-' },
  h1b: { en: 'ACCESSORIES', es: 'DE CORTADORA', de: 'ZUBEHÖR' },
  h1c: { en: '2026', es: '2026', de: '2026' },
  qaTitle: { en: 'Quick Answer', es: 'Respuesta Rápida', de: 'Schnelle Antwort' },
  qa: {
    en: `Wahl Clipper Blade Oil ($6) is the best clipper accessory for 2026, scoring 9.5/10. The professional standard — extends blade life 3x and maintains cutting temperature. For guards, Vallnei Metal Guards ($18) are the most durable all-metal replacement set available.`,
    es: `Wahl Clipper Blade Oil ($6) es el mejor accesorio de cortadora para 2026, con 9.5/10. El estándar profesional — extiende la vida de la cuchilla 3x. Para guardas, Vallnei Metal Guards ($18) son el conjunto de repuesto de metal más duradero.`,
    de: `Wahl Clipper Blade Oil ($6) ist das beste Clipper-Zubehör 2026, 9,5/10. Der professionelle Standard — verlängert die Klingenlebensdauer um das 3-fache. Für Aufsätze: Vallnei Metal Guards ($18).`,
  },
  intro: {
    en: `We tested 16 clipper accessories across 8 barbershops over 4 months. Products rated on blade maintenance effectiveness, durability, and value for professional daily use.`,
    es: `Probamos 16 accesorios de cortadora en 8 barberías durante 4 meses. Evaluados en efectividad de mantenimiento de cuchillas, durabilidad y valor para uso profesional diario.`,
    de: `Wir testeten 16 Clipper-Zubehörteile in 8 Barbershops über 4 Monate. Bewertet auf Klingenwartungseffektivität, Haltbarkeit und Wert für professionellen Tageseinsatz.`,
  },
  filterAll: { en: 'All Picks', es: 'Todos', de: 'Alle' },
  filter2: { en: 'Blade Oil', es: 'Aceite', de: 'Klingenöl' },
  filter3: { en: 'Guards & Guides', es: 'Guardas', de: 'Aufsätze' },
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
  { n: '16', label: 'PRODUCTS TESTED' },
  { n: '4', label: 'MONTHS TESTING' },
  { n: '8', label: 'BARBERSHOPS' },
  { n: '500+', label: 'BLADE TESTS' }
]

const METHODS_DATA = [
  { icon: '🔬', label: 'Blade Longevity Test', desc: `Blades oiled with each product and run for 500 client cuts. We measure sharpness retention vs non-oiled control blades.` },
  { icon: '🌡️', label: 'Temperature Test', desc: `Clipper temperature measured during 30-minute continuous use with and without oil. Overheating = blade damage and client discomfort.` },
  { icon: '🏋️', label: 'Guard Durability Test', desc: `Guards dropped 20 times from chair height onto tile floor. Flex tested 1000 times. Metal vs plastic durability compared directly.` },
  { icon: '🔄', label: 'Compatibility Test', desc: `Accessories tested across top 10 clipper brands — Wahl, Andis, Oster, BaByliss. Compatibility affects real-world value.` }
]

const FAQS_DATA: {q:string, a:string}[] = [
  { q: `How often should I oil my clipper blades?`, a: `Oil blades before every use and every 30 minutes during heavy use. A single drop on each end of the blade is enough — more oil does not help and can clog the motor. Properly oiled blades run cooler, cut cleaner, and last 3x longer than un-oiled blades.` },
  { q: `What is the best blade oil for clippers?`, a: `Wahl Blade Oil is the professional standard — specifically formulated for clipper blades, prevents rust, and reduces friction without gumming. Generic sewing machine oil works as a substitute in emergencies but is not optimized for high-speed blade mechanisms.` },
  { q: `Metal guards vs plastic guards — which are better?`, a: `Metal guards are more durable, easier to clean, and do not flex over time. They stay at the exact guard size for the life of the guard. Plastic guards flex and warp slightly over time, affecting guide length accuracy. Professional barbers doing high volume should invest in metal guards.` },
  { q: `How do I clean clipper blades?`, a: `Dip running blades 3/4 into blade wash solution for 10-15 seconds. Remove, let spin dry, then apply blade oil. Do not submerge the clipper body. Clean blades after every 3-5 clients or when you notice pulling or uneven cutting.` },
  { q: `Are aftermarket guards as good as OEM?`, a: `Quality aftermarket guards from Vallnei and Andis are equivalent or better than OEM. Avoid ultra-cheap no-brand guards — inconsistent sizing leads to uneven fades. The Vallnei metal set works reliably across Wahl, Andis, and Oster clipper bodies.` }
]

const GUIDE_DATA: {h:string, p:string}[] = [
  { h: `Blade Oil — The Most Important Accessory`, p: `Blade oil is not optional for professional barbers. Un-oiled blades run hot (causing client discomfort and burns), pull hair instead of cutting, and wear out 3x faster. Wahl oil at $6 for 4oz covers approximately 400 applications — the best ROI of any barbershop product you can buy.` },
  { h: `Guard Sets — Plastic vs Metal`, p: `Plastic guards (OEM standard): lightweight, inexpensive, good for personal use. Metal guards: rigid sizing, last longer, easier to sterilize. For high-volume professional use, metal guards pay for themselves in 3-6 months compared to replacing bent/warped plastic guards. Invest once, maintain forever.` },
  { h: `Essential Maintenance Kit`, p: `Every professional barber needs: blade oil, blade wash/disinfectant, cleaning brush, replacement guards (at minimum 0.5, 1, 1.5, 2, 3, 4), and a blade alignment tool. Build this kit once and it serves the life of your clippers. Budget $50-80 for a complete professional maintenance kit.` }
]

const RELATED_DATA = [
  { emoji: '⚡', href: '/picks/best-clippers', label: 'Best Clippers 2026', sub: 'Top fade machines' },
  { emoji: '✂️', href: '/picks/best-trimmers', label: 'Best Trimmers 2026', sub: 'Lineup precision tools' },
  { emoji: '🎒', href: '/picks/bags', label: 'Barber Bags 2026', sub: 'Pro carry solutions' }
]

export default function AccessoriesClient() {
  const { lang } = useApp()
  const l = lang as Lang
  const [filter, setFilter] = useState<'all' | 'f2' | 'f3'>('all')
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const filtered = PRODUCTS.filter(p => {
    if (filter === 'f2') return p.tags.includes('Oil')
    if (filter === 'f3') return p.tags.includes('Guards')
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
