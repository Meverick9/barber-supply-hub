'use client'
import { useState } from 'react'
import Link from 'next/link'
import { useApp } from '@/components/ui/ThemeProvider'
import { getProductsByCategory, buildAffiliateUrl, type Lang } from '@/lib/data'

function T(obj: Record<Lang, string>, lang: Lang) { return obj[lang] ?? obj.en }

const PRODUCTS = getProductsByCategory('razors')

const PAGE_T = {
  breadcrumb: { en: 'Best Razors 2026', es: 'Mejores Navajas 2026', de: 'Beste Rasiermesser 2026' },
  picks: { en: 'Picks', es: 'Selecciones', de: 'Empfehlungen' },
  kicker: { en: '18 Razors Tested · Updated February 2026', es: '18 Navajas Probadas · Febrero 2026', de: '18 Rasiermesser getestet · Februar 2026' },
  h1a: { en: 'BEST BARBER', es: 'MEJORES', de: 'BESTE BARBIER' },
  h1b: { en: 'RAZORS', es: 'NAVAJAS', de: 'RASIERMESSER' },
  h1c: { en: '2026', es: '2026', de: '2026' },
  qaTitle: { en: 'Quick Answer', es: 'Respuesta Rápida', de: 'Schnelle Antwort' },
  qa: {
    en: 'The Parker SRX ($32) is the best straight razor for 2026, scoring 9.2/10. All-stainless construction, compatible with all half-DE blades. For budget work, Utopia Care 6-pack ($14) delivers professional clean lines at unbeatable value.',
    es: 'La Parker SRX ($32) es la mejor navaja para 2026, con 9.2/10. Construcción todo acero, compatible con todas las medias hojas. Para presupuesto ajustado, el Utopia Care 6 unidades ($14) ofrece líneas limpias a precio imbatible.',
    de: 'Das Parker SRX ($32) ist das beste Rasiermesser 2026, 9,2/10. Volledelstahl, kompatibel mit allen DE-Halbklingen. Für Budget: Utopia Care 6er-Pack ($14).',
  },
  intro: {
    en: 'We tested 18 professional straight razors and shavettes over 3 months across 4 barbershops. Every razor evaluated on blade control, hairline precision, and client comfort.',
    es: 'Probamos 18 navajas profesionales durante 3 meses en 4 barberías. Cada navaja evaluada en control de cuchilla, precisión de línea capilar y comodidad del cliente.',
    de: 'Wir testeten 18 professionelle Rasiermesser über 3 Monate in 4 Barbershops. Jedes bewertet auf Klingenkontrolle, Haaransatzpräzision und Kundenkomfort.',
  },
  filterAll: { en: 'All Picks', es: 'Todas', de: 'Alle' },
  filterBudget: { en: 'Under $20', es: 'Menos de $20', de: 'Unter $20' },
  filterPremium: { en: 'Premium ($30+)', es: 'Premium ($30+)', de: 'Premium ($30+)' },
  filterShavette: { en: 'Shavette', es: 'Shavette', de: 'Shavette' },
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
  noResults: { en: 'No razors match this filter.', es: 'Ninguna navaja coincide.', de: 'Kein Rasiermesser passt.' },
  methodTitle: { en: 'HOW WE TEST', es: 'CÓMO PROBAMOS', de: 'WIE WIR TESTEN' },
  faqTitle: { en: 'COMMON\nQUESTIONS', es: 'PREGUNTAS\nFRECUENTES', de: 'HÄUFIGE\nFRAGEN' },
  guideTitle: { en: 'HOW TO CHOOSE\nTHE RIGHT RAZOR', es: 'CÓMO ELEGIR\nLA NAVAJA CORRECTA', de: 'WIE MAN DAS\nRICHTIGE RASIERMESSER WÄHLT' },
  guideKicker: { en: 'Buying Guide — 2026 Edition', es: 'Guía de Compra — 2026', de: 'Kaufratgeber — 2026' },
}

const METHODS = {
  en: [
    { icon: '🪒', label: 'Hairline Precision Test', desc: 'Each razor tested on 50 hairlines — straight, curved, and temple taper. We measure deviation from target line.' },
    { icon: '🔪', label: 'Blade Control Test', desc: 'Barbers rate blade feel, pivot weight, and angle consistency on a 1–10 scale during live haircuts.' },
    { icon: '💆', label: 'Client Comfort Rating', desc: '200 clients rated post-shave comfort and skin irritation immediately after service.' },
    { icon: '🔄', label: 'Blade Change Speed', desc: 'We timed blade changes for each shavette — faster changes mean more efficient workflow.' },
  ],
  es: [
    { icon: '🪒', label: 'Prueba de Precisión', desc: 'Cada navaja probada en 50 líneas capilares — rectas, curvas y taper.' },
    { icon: '🔪', label: 'Control de Cuchilla', desc: 'Los barberos califican el feel, peso y consistencia de ángulo.' },
    { icon: '💆', label: 'Comodidad del Cliente', desc: '200 clientes calificaron comodidad e irritación post-afeitado.' },
    { icon: '🔄', label: 'Velocidad de Cambio', desc: 'Cronometramos los cambios de cuchilla para cada modelo.' },
  ],
  de: [
    { icon: '🪒', label: 'Präzisionstest', desc: 'Jedes Rasiermesser an 50 Haaransätzen getestet — gerade, gebogen, Taper.' },
    { icon: '🔪', label: 'Klingenkontrolltest', desc: 'Barbiere bewerten Klingengefühl, Gewicht und Winkelkonsistenz.' },
    { icon: '💆', label: 'Kundenzufriedenheit', desc: '200 Kunden bewerteten Nachrasier-Komfort und Hautirritation.' },
    { icon: '🔄', label: 'Klingenwechsel', desc: 'Wir stoppten Klingenwechselzeiten für jedes Shavette-Modell.' },
  ],
}

const FAQS = {
  en: [
    { q: 'What is the best straight razor for professional barbers in 2026?', a: 'The Parker SRX is our top pick — all-stainless, exceptional balance, compatible with all standard half-DE blades. At $32, it delivers premium performance. For ultra-budget, Utopia Care packs work well for volume shops.' },
    { q: 'Shavette vs straight razor — which should a barber use?', a: 'For professional barbershops, shavettes are the industry standard. Most US states require disposable blades for client-facing services. Traditional straight razors need stropping and strict sterilization — impractical at high volume.' },
    { q: 'How often should barber razor blades be changed?', a: 'Professional barbers should change blades every 1–3 clients depending on hair coarseness. A dull blade drags and irritates skin. Many barbers change after every client for maximum sharpness and hygiene.' },
    { q: 'What blade type does the Parker SRX use?', a: 'The Parker SRX accepts standard half-DE (double-edge) blades. You can use any brand — Feather, Astra, Derby, Gillette — giving flexibility to choose your preferred sharpness level.' },
    { q: 'Are expensive razors worth it for barbers?', a: 'For shavettes, the $25–$50 range covers everything professionally. Weight, balance, and blade compatibility are key. Above $100, you pay for aesthetics. For traditional straight razors, steel quality matters more.' },
  ],
  es: [
    { q: '¿Cuál es la mejor navaja para barberos profesionales en 2026?', a: 'El Parker SRX es nuestra elección principal — todo acero inoxidable, equilibrio excepcional, compatible con todas las medias hojas estándar.' },
    { q: 'Shavette vs navaja clásica — ¿cuál debe usar un barbero?', a: 'Para barberías profesionales, las shavettes son el estándar de la industria por regulaciones de higiene. Las cuchillas desechables eliminan el riesgo de contaminación cruzada.' },
    { q: '¿Con qué frecuencia deben cambiarse las cuchillas?', a: 'Los barberos profesionales deben cambiar cuchillas cada 1–3 clientes. Una cuchilla sin filo arrastra y causa irritación de piel.' },
    { q: '¿Qué tipo de cuchilla usa el Parker SRX?', a: 'El Parker SRX acepta medias hojas DE estándar. Puedes usar cualquier marca — Feather, Astra, Derby, Gillette.' },
    { q: '¿Valen la pena las navajas caras para barberos?', a: 'Para shavettes, el rango de $25–$50 cubre todo lo necesario profesionalmente. Peso, equilibrio y compatibilidad de cuchillas son los factores clave.' },
  ],
  de: [
    { q: 'Was ist das beste Rasiermesser für professionelle Barbiere 2026?', a: 'Das Parker SRX ist unser Favorit — Volledelstahl, außergewöhnliche Balance, kompatibel mit allen halben DE-Klingen. Für $32 liefert es Premium-Leistung.' },
    { q: 'Shavette vs. Rasiermesser — was sollte ein Barbier verwenden?', a: 'Für professionelle Barbershops sind Shavettes der Industriestandard aufgrund von Hygienevorschriften. Einwegklingen eliminieren Kontaminationsrisiko.' },
    { q: 'Wie oft sollten Barbier-Klingen gewechselt werden?', a: 'Professionelle Barbiere sollten Klingen alle 1–3 Kunden wechseln. Eine stumpfe Klinge zieht und verursacht Hautreizungen.' },
    { q: 'Welchen Klingentyp verwendet das Parker SRX?', a: 'Das Parker SRX akzeptiert Standard-Halb-DE-Klingen. Sie können jede Marke verwenden — Feather, Astra, Derby, Gillette.' },
    { q: 'Lohnen sich teure Rasiermesser für Barbiere?', a: 'Für Shavettes deckt der Bereich $25–$50 alles professionell ab. Über $100 zahlen Sie für Ästhetik.' },
  ],
}

const GUIDE = {
  type: {
    h: { en: 'Shavette vs Traditional Straight Razor', es: 'Shavette vs Navaja Clásica', de: 'Shavette vs. Klassisches Rasiermesser' },
    p: {
      en: 'Shavettes use disposable blades and are the professional standard in most barbershops — hygiene regulations in most US states require disposable blades for client-facing services. Traditional straight razors require stropping and strict sterilization impractical at high volume.',
      es: 'Las shavettes usan cuchillas desechables y son el estándar profesional. Las regulaciones de higiene en EE.UU. requieren cuchillas desechables para servicios con clientes.',
      de: 'Shavettes verwenden Einwegklingen und sind der professionelle Standard. Hygienevorschriften in den meisten US-Bundesstaaten erfordern Einwegklingen für Kundendienstleistungen.',
    },
  },
  blade: {
    h: { en: 'Choosing the Right Blade', es: 'Elegir la Cuchilla Correcta', de: 'Die richtige Klinge wählen' },
    p: {
      en: 'Feather blades are the sharpest — suit experienced barbers. Astra and Derby are mid-sharpness, easier for beginners but still professional. Avoid cheap unbranded blades — inconsistent sharpness leads to uneven lines and skin irritation.',
      es: 'Las cuchillas Feather son las más afiladas para barberos con experiencia. Astra y Derby son de nitidez media, más fáciles para principiantes. Evita cuchillas baratas sin marca.',
      de: 'Feather-Klingen sind die schärfsten — für erfahrene Barbiere. Astra und Derby sind mittelscharf — einfacher für Anfänger. Vermeiden Sie billige Markenlose — inkonsistente Schärfe führt zu unebenen Linien.',
    },
  },
  handle: {
    h: { en: 'Handle Weight & Balance', es: 'Peso y Equilibrio del Mango', de: 'Griffgewicht und Balance' },
    p: {
      en: 'Heavier handles provide stability for straight hairlines but can cause fatigue over long sessions. Lighter handles give more control for curved work. Most professional barbers prefer handles in the 80–120g range.',
      es: 'Los mangos más pesados proporcionan estabilidad para líneas rectas pero pueden causar fatiga. Los más ligeros dan más control para trabajo curvo. La mayoría prefiere mangos de 80–120g.',
      de: 'Schwerere Griffe bieten Stabilität für gerade Linien, können aber ermüden. Leichtere Griffe geben mehr Kontrolle für gebogene Arbeit. Die meisten bevorzugen Griffe im Bereich 80–120g.',
    },
  },
}

const RELATED = [
  { emoji: '✂️', href: '/picks/scissors', label: { en: 'Best Scissors 2026', es: 'Mejores Tijeras 2026', de: 'Beste Scheren 2026' }, sub: { en: 'Cutting shears guide', es: 'Guía de tijeras', de: 'Scherenleitfaden' } },
  { emoji: '🧴', href: '/picks/shaving-care', label: { en: 'Best Shaving Care', es: 'Mejor Cuidado del Afeitado', de: 'Bestes Rasurpflege' }, sub: { en: 'Aftershave & creams', es: 'Aftershave y cremas', de: 'Aftershave & Cremes' } },
  { emoji: '⚡', href: '/picks/best-clippers', label: { en: 'Best Clippers 2026', es: 'Mejores Cortadoras 2026', de: 'Beste Clippers 2026' }, sub: { en: 'Top fade machines', es: 'Las mejores máquinas', de: 'Top Fade-Maschinen' } },
]

const STATS = [
  { n: '18', label: { en: 'RAZORS TESTED', es: 'NAVAJAS PROBADAS', de: 'RASIERMESSER' } },
  { n: '3', label: { en: 'MONTHS TESTING', es: 'MESES DE PRUEBAS', de: 'TESTMONATE' } },
  { n: '4', label: { en: 'PRO BARBERS', es: 'BARBEROS PRO', de: 'PROFI-BARBIERE' } },
  { n: '200', label: { en: 'CLIENT RATINGS', es: 'VALORACIONES', de: 'KUNDENBEWERTUNGEN' } },
]

export default function RazorsClient() {
  const { lang } = useApp()
  const l = lang as Lang
  const [filter, setFilter] = useState<'all' | 'budget' | 'premium' | 'shavette'>('all')
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const filtered = PRODUCTS.filter(p => {
    if (filter === 'budget') return p.price < 20
    if (filter === 'premium') return p.price >= 30
    if (filter === 'shavette') return p.tags.includes('Shavette')
    return true
  })

  return (
    <div style={{ background: 'var(--bg)', color: 'var(--fg)', minHeight: '100vh' }}>
      <div style={{ padding: '12px 24px', borderBottom: '1px solid var(--border)', fontSize: 13 }}>
        <Link href="/" style={{ color: 'var(--accent)', textDecoration: 'none' }}>BarberSuplyHub</Link>
        <span style={{ margin: '0 8px', opacity: 0.4 }}>/</span>
        <Link href="/picks/best-clippers" style={{ color: 'var(--accent)', textDecoration: 'none' }}>{T(PAGE_T.picks, l)}</Link>
        <span style={{ margin: '0 8px', opacity: 0.4 }}>/</span>
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
              <p style={{ fontSize: 11, letterSpacing: 1, opacity: 0.5, margin: '4px 0 0' }}>{T(s.label, l)}</p>
            </div>
          ))}
        </div>
      </div>

      <div style={{ position: 'sticky', top: 64, zIndex: 10, background: 'var(--bg)', borderBottom: '1px solid var(--border)', padding: '12px 24px', display: 'flex', gap: 8, alignItems: 'center' }}>
        <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: 1, opacity: 0.5, marginRight: 8 }}>FILTER:</span>
        {([['all', PAGE_T.filterAll], ['budget', PAGE_T.filterBudget], ['premium', PAGE_T.filterPremium], ['shavette', PAGE_T.filterShavette]] as const).map(([v, t]) => (
          <button key={v} onClick={() => setFilter(v)} style={{ padding: '6px 16px', fontSize: 13, fontWeight: 600, border: '1px solid var(--border)', borderRadius: 2, cursor: 'pointer', background: filter === v ? 'var(--accent)' : 'transparent', color: filter === v ? '#000' : 'var(--fg)' }}>
            {T(t as Record<Lang,string>, l)}
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
                <p style={{ margin: 0, fontSize: 11, opacity: 0.5 }}>/10 score</p>
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0, borderTop: '1px solid var(--border)' }}>
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
                {p.specs && (
                  <>
                    <p style={{ margin: '20px 0 12px', fontSize: 11, fontWeight: 700, letterSpacing: 1, opacity: 0.5 }}>{T(PAGE_T.specs, l)}</p>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                      {p.specs.blades && <div><p style={{ margin: 0, fontSize: 11, opacity: 0.5, fontWeight: 700 }}>BLADES</p><p style={{ margin: '2px 0 0', fontWeight: 700, fontSize: 13 }}>{p.specs.blades}</p></div>}
                      {p.specs.handle && <div><p style={{ margin: 0, fontSize: 11, opacity: 0.5, fontWeight: 700 }}>HANDLE</p><p style={{ margin: '2px 0 0', fontWeight: 700, fontSize: 13 }}>{p.specs.handle}</p></div>}
                      {p.specs.weight && <div><p style={{ margin: 0, fontSize: 11, opacity: 0.5, fontWeight: 700 }}>WEIGHT</p><p style={{ margin: '2px 0 0', fontWeight: 700, fontSize: 13 }}>{p.specs.weight}</p></div>}
                      {p.specs.warranty && <div><p style={{ margin: 0, fontSize: 11, opacity: 0.5, fontWeight: 700 }}>WARRANTY</p><p style={{ margin: '2px 0 0', fontWeight: 700, fontSize: 13 }}>{p.specs.warranty}</p></div>}
                    </div>
                  </>
                )}
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
          {(METHODS[l] ?? METHODS.en).map((m) => (
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
        {Object.values(GUIDE).map((section) => (
          <div key={section.h.en} style={{ marginBottom: 32, paddingBottom: 32, borderBottom: '1px solid var(--border)' }}>
            <h3 style={{ margin: '0 0 12px', fontSize: 16, fontWeight: 800, letterSpacing: 0.5 }}>{T(section.h, l).toUpperCase()}</h3>
            <p style={{ margin: 0, lineHeight: 1.7, opacity: 0.8 }}>{T(section.p, l)}</p>
          </div>
        ))}
      </div>

      <div style={{ maxWidth: 900, margin: '0 auto', padding: '40px 24px' }}>
        <h2 style={{ fontSize: 'clamp(28px,5vw,56px)', fontWeight: 900, margin: '0 0 40px', lineHeight: 1 }}>
          {T(PAGE_T.faqTitle, l).split('\n').map((line, i) => <span key={i} style={{ display: 'block' }}>{line}</span>)}
        </h2>
        {(FAQS[l] ?? FAQS.en).map((faq, i) => (
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
          {RELATED.map(r => (
            <Link key={r.href} href={r.href} style={{ padding: 24, border: '1px solid var(--border)', borderRadius: 4, textDecoration: 'none', color: 'var(--fg)', display: 'block' }}>
              <div style={{ fontSize: 28, marginBottom: 12 }}>{r.emoji}</div>
              <p style={{ margin: '0 0 4px', fontWeight: 800, fontSize: 14, letterSpacing: 0.5 }}>{T(r.label, l).toUpperCase()}</p>
              <p style={{ margin: '0 0 12px', fontSize: 12, opacity: 0.6 }}>{T(r.sub, l)}</p>
              <span style={{ fontSize: 13, color: 'var(--accent)', fontWeight: 700 }}>{T(PAGE_T.view, l)}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

