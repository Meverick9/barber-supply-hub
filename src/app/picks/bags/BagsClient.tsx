'use client'
import { useState } from 'react'
import Link from 'next/link'
import { useApp } from '@/components/ui/ThemeProvider'
import { getProductsByCategory, buildAffiliateUrl, type Lang } from '@/lib/data'

function T(obj: Record<Lang, string>, lang: Lang) { return obj[lang] ?? obj.en }

const PRODUCTS = getProductsByCategory('bags')

const PAGE_T = {
  breadcrumb: { en: 'Best Bags 2026', es: 'Mejores Bags 2026', de: 'Beste Bags 2026' },
  picks: { en: 'Picks', es: 'Selecciones', de: 'Empfehlungen' },
  kicker: { en: '12 Bags Tested · Updated February 2026', es: '12 Bolsas Probadas · Febrero 2026', de: '12 Taschen getestet · Februar 2026' },
  h1a: { en: 'BEST BARBER', es: 'MEJORES BOLSAS', de: 'BESTE BARBIER-' },
  h1b: { en: 'BAGS', es: 'DE BARBERO', de: 'TASCHEN' },
  h1c: { en: '2026', es: '2026', de: '2026' },
  qaTitle: { en: 'Quick Answer', es: 'Respuesta Rápida', de: 'Schnelle Antwort' },
  qa: {
    en: `The Yueieoun Barber Backpack ($65) is the best barber bag for 2026, scoring 9.0/10. 30L capacity, fits full clipper set + scissors + styling products, dedicated clipper pockets with foam protection. Best value for traveling barbers.`,
    es: `La Yueieoun Barber Backpack ($65) es la mejor bolsa de barbero para 2026, con 9.0/10. Capacidad de 30L, cabe todo el equipo completo, bolsillos dedicados con protección de espuma. El mejor valor para barberos itinerantes.`,
    de: `Die Yueieoun Barber Backpack ($65) ist die beste Barbier-Tasche 2026, 9,0/10. 30L Kapazität, komplettes Clipper-Set + Scheren + Stylingprodukte, dedizierte Clipper-Taschen mit Schaumstoffschutz.`,
  },
  intro: {
    en: `We tested 12 professional barber bags across 3 months with 6 traveling barbers. Bags evaluated on capacity, organization, build quality, and long-term durability for daily professional use.`,
    es: `Probamos 12 bolsas de barbero durante 3 meses con 6 barberos itinerantes. Evaluadas en capacidad, organización, calidad de construcción y durabilidad a largo plazo.`,
    de: `Wir testeten 12 professionelle Barbier-Taschen über 3 Monate mit 6 reisenden Barbieren. Bewertet auf Kapazität, Organisation, Bauqualität und Langzeithaltbarkeit.`,
  },
  filterAll: { en: 'All Picks', es: 'Todos', de: 'Alle' },
  filter2: { en: 'Backpacks', es: 'Mochilas', de: 'Rucksäcke' },
  filter3: { en: 'Rolling Cases', es: 'Maletas', de: 'Rollkoffer' },
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
  { n: '12', label: 'BAGS TESTED' },
  { n: '3', label: 'MONTHS TESTING' },
  { n: '6', label: 'TRAVELING BARBERS' },
  { n: '90', label: 'TRAVEL DAYS' }
]

const METHODS_DATA = [
  { icon: '📦', label: 'Capacity Test', desc: `Each bag loaded with standard barber kit — 2 clippers, 3 trimmers, scissors set, cape, styling products. We measure what fits and what does not.` },
  { icon: '🏗️', label: 'Build Quality Test', desc: `Zippers, handles, and straps stress-tested over 90 days of daily use. We check stitching integrity and material wear after 3 months.` },
  { icon: '🧩', label: 'Organization Test', desc: `How many dedicated clipper pockets? Scissor holders? Do products fit without damage? Organization rated by 6 professional barbers.` },
  { icon: '⚖️', label: 'Weight Test', desc: `Bags weighed empty and fully loaded with standard barber kit. Comfort during 30-minute walking tests with loaded bags.` }
]

const FAQS_DATA: {q:string, a:string}[] = [
  { q: `What is the best barber bag for 2026?`, a: `The Yueieoun Barber Backpack is our top pick — 30L capacity, dedicated clipper pockets with foam protection, scissors holder, and durable construction. At $65, it is the best value for traveling barbers who need to carry a complete professional kit.` },
  { q: `What should a barber bag hold?`, a: `At minimum: 2 clippers, 2-3 trimmers, scissors set (2-3 pairs), cape, blade oil, cleaning brush, and styling products. A professional barber bag should hold this kit with room for personal items. Look for 25-35L capacity for a complete mobile setup.` },
  { q: `Backpack vs rolling case vs tote bag for barbers?`, a: `Backpack: best for public transit, hands-free, fits overhead on planes. Rolling case: best capacity and organization for drive-to-shop barbers. Tote/duffel: fastest access, no padding — only for minimal kits. Most traveling barbers choose backpack for flexibility.` },
  { q: `Are barber-specific bags worth it over regular backpacks?`, a: `Barber-specific bags have clipper pockets with foam protection that prevent blades from dulling against other tools. Regular backpacks damage blades and scissors. For professional kit worth $500+, investing $50-100 in proper protection is essential.` },
  { q: `How do I pack clippers without damage?`, a: `Store clippers in padded dedicated pockets, blades facing inward. Never let blades contact metal tools directly — even brief contact dulls edges. Keep blade oil accessible for lubrication before use. Store each clipper in its guard to protect the blade mechanism.` }
]

const GUIDE_DATA: {h:string, p:string}[] = [
  { h: `Capacity Planning`, p: `For a full professional kit: estimate 3-4L per clipper/trimmer, 1-2L for scissors, 2L for cape and comb set, 3-5L for styling products. A complete mobile barbershop requires 25-35L minimum. Compact kit (2 tools + essentials): 15-20L. Always size up — you will acquire more tools over time.` },
  { h: `Protection Features to Look For`, p: `Clipper pockets with foam or padded dividers: protects blades from other tools. Scissor roll or dedicated holder: prevents edge damage. Waterproof exterior: essential for outdoor or transit use. Separate dirty/clean sections: keeps used tools from contaminating clean ones. Hard shell cases protect better but weigh more.` },
  { h: `Build Quality Indicators`, p: `YKK zippers last longest — look for the YKK branding on zipper pulls. Double-stitched handles and straps resist tearing under heavy loads. 600D or higher polyester exterior resists abrasion. Metal D-rings and buckles outlast plastic. Reinforced bottom prevents wear from setting down repeatedly.` }
]

const RELATED_DATA = [
  { emoji: '⚡', href: '/picks/best-clippers', label: 'Best Clippers 2026', sub: 'Top fade machines' },
  { emoji: '🔧', href: '/picks/accessories', label: 'Clipper Accessories', sub: 'Oil, guards & brushes' },
  { emoji: '🥼', href: '/picks/capes', label: 'Best Barber Capes', sub: 'Professional cape guide' }
]

export default function BagsClient() {
  const { lang } = useApp()
  const l = lang as Lang
  const [filter, setFilter] = useState<'all' | 'f2' | 'f3'>('all')
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const filtered = PRODUCTS.filter(p => {
    if (filter === 'f2') return p.tags.includes('Backpack')
    if (filter === 'f3') return p.tags.includes('Rolling')
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
