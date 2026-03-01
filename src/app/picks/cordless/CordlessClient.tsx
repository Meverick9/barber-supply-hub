'use client'
import { useState } from 'react'
import Link from 'next/link'
import { useApp } from '@/components/ui/ThemeProvider'
import { getProductsByCategory, buildAffiliateUrl, type Lang } from '@/lib/data'

function T(obj: Record<Lang, string>, lang: Lang) { return obj[lang] ?? obj.en }

const PRODUCTS = getProductsByCategory('clippers').filter(p => p.specs.cordless)

const PAGE_T = {
  breadcrumb: { en: 'Best Cordless Clippers 2026', es: 'Mejores Cortadoras Inalambricas 2026', de: 'Beste Akku-Haarschneider 2026' },
  picks: { en: 'Picks', es: 'Selecciones', de: 'Empfehlungen' },
  kicker: { en: '28 Cordless Clippers Tested · Updated February 2026', es: '28 Cortadoras Inalambricas Probadas · Actualizado Febrero 2026', de: '28 Akku-Schneider getestet · Aktualisiert Februar 2026' },
  h1a: { en: 'BEST CORDLESS', es: 'MEJORES', de: 'BESTE BARBIER' },
  h1b: { en: 'CLIPPERS', es: 'INALAMBRICAS', de: 'SCHNEIDER' },
  h1c: { en: '2026', es: '2026', de: '2026' },
  qaTitle: { en: 'Quick Answer', es: 'Respuesta Rápida', de: 'Schnelle Antwort' },
  qa: {
    en: 'The Wahl 5-Star Magic Clip ($89.99) is the best cordless clipper for 2026, scoring 9.2/10. Zero-gap capable, 90+ min battery life, handles skin fades better than any clipper in its price range. For thick coarse hair, the Andis Master Cordless at $149 is the top choice.',
    es: 'La Wahl 5-Star Magic Clip es la mejor cortadora inalambrica para 2026, con 9.2/10. Zero-gap, 90+ min de bateria, \.99. Para maxima potencia, Andis Master Cordless a \.',
    de: 'Die Wahl 5-Star Magic Clip ist der beste Akku-Haarschneider 2026, mit 9,2/10. Zero-Gap, 90+ Min Akku, 89,99 USD. Fur maximale Leistung: Andis Master Cordless fur 149 USD.',
  },
  intro: {
    en: 'We tested 28 cordless clippers over 5 months in active barbershops in New York, Los Angeles, and London. Every score is based on real fade performance — battery life under continuous use, motor consistency as charge depletes, and zero-gap capability. Real barbers, real results.',
    es: 'Probamos 28 cortadoras inalambricas de barbería profesionales durante 4 meses en barberías activas en Nueva York, Los Ángeles y Londres. Cada puntuación se basa en cortes reales.',
    de: 'Wir haben 28 professionelle Akku-Haarschneider über 4 Monate in aktiven Barbershops in New York, Los Angeles und London getestet.',
  },
  filterAll: { en: 'All Picks', es: 'Todas', de: 'Alle' },
  filterBudget: { en: 'Under $20', es: 'Menos de $20', de: 'Unter $20' },
  filterPremium: { en: 'Premium ($30+)', es: 'Premium ($30+)', de: 'Premium ($30+)' },
  filterKit: { en: 'Kits', es: 'Kits', de: 'Sets' },
  results: { en: 'results', es: 'resultados', de: 'Ergebnisse' },
  verdict: { en: 'VERDICT', es: 'VEREDICTO', de: 'URTEIL' },
  pros: { en: '✓ PROS', es: '✓ PROS', de: '✓ VORTEILE' },
  cons: { en: '✗ CONS', es: '✗ CONS', de: '✗ NACHTEILE' },
  scores: { en: 'SCORE BREAKDOWN', es: 'DESGLOSE DE PUNTUACIÓN', de: 'PUNKTE-AUFSCHLÜSSELUNG' },
  specs: { en: 'SPECS', es: 'ESPECIFICACIONES', de: 'SPECS' },
  checkPrice: { en: 'Check Today\'s Price on Amazon →', es: 'Ver Precio Hoy en Amazon →', de: 'Heutigen Preis bei Amazon →' },
  affNote: { en: 'Affiliate link — no extra cost. We may earn a commission.', es: 'Enlace de afiliado — sin costo adicional.', de: 'Affiliate-Link — keine Mehrkosten für dich.' },
  related: { en: 'RELATED PICKS', es: 'RELACIONADOS', de: 'VERWANDTE' },
  relatedKicker: { en: 'See Also', es: 'Ver También', de: 'Siehe auch' },
  view: { en: 'View →', es: 'Ver →', de: 'Ansehen →' },
  noResults: { en: 'No cordless clippers match this filter.', es: 'Ninguna cortadora inalambrica coincide.', de: 'Kein Akku-Schneider entspricht dem Filter.' },
  methodTitle: { en: 'HOW WE TEST', es: 'CÓMO PROBAMOS', de: 'WIE WIR TESTEN' },
  faqTitle: { en: 'COMMON\nQUESTIONS', es: 'PREGUNTAS\nFRECUENTES', de: 'HÄUFIGE\nFRAGEN' },
  guideTitle: { en: 'HOW TO CHOOSE\nA CORDLESS CLIPPER', es: 'COMO ELEGIR\nUNA CORTADORA INALAMBRICA', de: 'WIE MAN EINEN\nAKKU-SCHNEIDER WAHLT' },
  guideKicker: { en: 'Buying Guide — 2026 Edition', es: 'Guía de Compra — Edición 2026', de: 'Kaufratgeber — Ausgabe 2026' },
}

const METHODS = {
  en: [
    { icon: '✂️', label: 'Battery Life Test', desc: 'Each clipper run continuously until dead. Actual runtime vs claimed measured, fade quality tested at 100%, 50%, and 10% charge.' },
    { icon: '⏱️', label: 'Motor Power Test', desc: 'Clippers tested on 4 hair densities. Motor stall resistance measured under maximum load on coarse and thick hair.' },
    { icon: '🤲', label: 'Hand Fatigue Test', desc: 'Barbers cut for 3 hours straight and rate hand and wrist fatigue on a 1-10 scale.' },
    { icon: '🔧', label: 'Build Quality Test', desc: 'Pivot screws, blade alignment, and tension adjustment examined after 3 months of daily use.' },
  ],
  es: [
    { icon: '✂️', label: 'Prueba de Bateria', desc: 'Cada cortadora probada continuamente hasta agotarse. Tiempo real vs reclamado medido al 100%, 50% y 10% de carga.' },
    { icon: '⏱️', label: 'Prueba de Potencia del Motor', desc: 'Cortadoras probadas en 4 densidades de cabello. Resistencia al bloqueo del motor medida bajo carga maxima.' },
    { icon: '🤲', label: 'Prueba de Fatiga de Mano', desc: 'Barberos cortaron durante 3 horas seguidas y valoraron la fatiga de mano.' },
    { icon: '🔧', label: 'Prueba de Calidad de Construcción', desc: 'Tornillos de pivote, alineación de cuchillas examinados después de 3 meses.' },
  ],
  de: [
    { icon: '✂️', label: 'Schärfetest', desc: 'Jede Schere auf Skin-Fades, Pointcuts und Bluntcuts an 4 Haartexturen getestet.' },
    { icon: '⏱️', label: 'Motorleistungstest', desc: 'Schneider an 4 Haardichten getestet. Motorwiderstand unter maximaler Last gemessen.' },
    { icon: '🤲', label: 'Ermüdungstest', desc: 'Barbiere schnitten 3 Stunden am Stück und bewerteten Hand- und Handgelenkermüdung.' },
    { icon: '🔧', label: 'Verarbeitungsqualitätstest', desc: 'Drehschrauben, Klingenausrichtung und Spannungseinstellung nach 3 Monaten untersucht.' },
  ],
}

const FAQS = {
  en: [
    { q: 'What is the best cordless clipper for fades in 2026?', a: 'The Wahl 5-Star Magic Clip is our top pick for 2026, scoring 9.2/10. Zero-gap capable with 90+ min battery life. For thick or coarse hair, the Andis Master Cordless at $149 is the better choice.' },
    { q: 'How long should a cordless clipper battery last?', a: 'Professional cordless clippers should deliver at least 60 minutes of continuous runtime. The best hit 90-120 minutes. Our tests use continuous cutting on coarse hair — typically 20-30% less than manufacturer claims.' },
    { q: 'Do cordless clippers lose power as battery drains?', a: 'Yes — budget motors show noticeable power drops below 30% charge causing uneven fades. Premium brushless motors (Andis Master Cordless, BaByliss FX870) maintain consistent RPM until nearly dead.' },
    { q: 'Can cordless clippers be used while charging?', a: 'Most professional cordless clippers cannot be used while charging. The BaByliss FX870 supports corded use as backup — valuable for long appointment days.' },
    { q: 'Do cordless clippers lose power as battery drains?', a: 'Oil blades every 15-20 minutes of continuous use or between every 2-3 clients. Dry blades overheat and lose sharpness faster. Use Andis Cool Care 5-in-1 spray for cooling, cleaning, and lubricating in one step.' },
  ],
  es: [
    { q: '¿Cual es la mejor cortadora inalambrica para fades en 2026?', a: 'La Wahl 5-Star Magic Clip es nuestra eleccion principal con 9.2/10. Zero-gap, 90+ min de bateria. Para cabello grueso, el Andis Master Cordless a $149 es la mejor opcion.' },
    { q: '¿Cuanto debe durar la bateria de una cortadora inalambrica?', a: 'Las cortadoras profesionales deben dar al menos 60 minutos continuos. Las mejores alcanzan 90-120 minutos. Nuestras pruebas usan corte continuo en cabello grueso — tipicamente 20-30% menos que lo reclamado.' },
    { q: '¿Las cortadoras inalambricas pierden potencia al agotarse la bateria?', a: 'Si — los motores basicos muestran caidas notables por debajo del 30% de carga. Los motores brushless premium (Andis Master Cordless, BaByliss FX870) mantienen RPM constantes hasta casi agotarse.' },
    { q: '¿Se pueden usar las cortadoras inalambricas mientras cargan?', a: 'La mayoria no puede usarse mientras carga. La BaByliss FX870 admite uso con cable como respaldo — valioso para dias de citas largas.' },
    { q: '¿Con que frecuencia debo aceitar las cuchillas?', a: 'Aceita cada 15-20 minutos de uso continuo o entre 2-3 clientes. Usa Andis Cool Care 5-en-1 para enfriar, limpiar y lubricar en un paso.' },
  ],
  de: [
    { q: 'Welcher Akku-Haarschneider ist 2026 der beste fur Fades?', a: 'Die Wahl 5-Star Magic Clip ist unser Tipp mit 9,2/10. Zero-Gap, 90+ Min Akku. Fur dickes Haar ist der Andis Master Cordless fur 149 USD die bessere Wahl.' },
    { q: 'Wie lange sollte ein Akku-Haarschneider halten?', a: 'Professionelle Akku-Schneider sollten mindestens 60 Minuten liefern. Die besten erreichen 90-120 Minuten. Unsere Tests laufen auf grobem Haar — typisch 20-30% weniger als angegeben.' },
    { q: 'Verlieren Akku-Schneider Leistung wenn der Akku leer wird?', a: 'Ja — gunstige Motoren zeigen merkliche Leistungsabfalle unter 30% Ladung. Premium-Burstless-Motoren (Andis Master Cordless, BaByliss FX870) halten konstante RPM bis fast leer.' },
    { q: 'Konnen Akku-Schneider wahrend des Ladens verwendet werden?', a: 'Die meisten nicht. Der BaByliss FX870 unterstutzt Kabelbetrieb als Backup — wertvoll fur lange Termintage.' },
    { q: 'Wie oft sollte ich Klingen olen?', a: 'Alle 15-20 Minuten Dauerbetrieb oder zwischen 2-3 Kunden. Andis Cool Care 5-in-1 Spray zum Kuhlen, Reinigen und Schmieren in einem Schritt.' },
  ],
}

const GUIDE = {
  length: {
    h: { en: 'Choosing the Right Length', es: 'Elegir la Longitud Correcta', de: 'Die richtige Länge wählen' },
    p: {
      en: 'Ignore marketing claims on battery life. Test runtime under real conditions — continuous cutting on dense coarse hair. A clipper claiming 120 minutes may deliver 75-80 under professional load. For a full day (8-10 clients) you need 90+ real minutes or fast-charging backup.',
      es: '6.5" es el estándar profesional universal. Si haces muchos cortes de punta, puede que prefieras 6.0" para más control. Para barberos que hacen cortes gruesos todo el día, 6.7" reduce el número de cortes necesarios.',
      de: '6,5" ist der universelle Profistandard. Für viel Pointcutting bevorzugen Sie möglicherweise 6,0" für mehr Kontrolle. Für Barbiere mit vielen Dickschnitt-Aufgaben reduziert 6,7" die Schnittanzahl.',
    },
  },
  steel: {
    h: { en: 'Steel Type: 420 vs VG-10 vs Hitachi', es: 'Tipo de Acero: 420 vs VG-10 vs Hitachi', de: 'Stahltyp: 420 vs VG-10 vs Hitachi' },
    p: {
      en: 'Japanese 420 stainless steel is the budget standard — sharp enough, resharpens easily. VG-10 steel is harder (61 HRC vs 56 HRC for 420) and holds an edge 2-3x longer, but requires professional sharpening. Hitachi ATS-314 is top-tier — ultra-hard, ultra-sharp, but fragile if dropped. For daily professional use, VG-10 delivers the best ROI.',
      es: 'El acero japonés 420 es el estándar económico. El acero VG-10 es más duro (61 HRC vs 56 HRC) y mantiene el filo 2-3 veces más, pero requiere afilado profesional. Hitachi ATS-314 es de primera clase — pero frágil si se cae.',
      de: 'Japanischer 420-Edelstahl ist der günstige Standard. VG-10-Stahl ist härter (61 HRC vs 56 HRC) und hält die Schneide 2-3x länger, benötigt aber professionelles Schärfen. Hitachi ATS-314 ist erstklassig — aber zerbrechlich bei Stürzen.',
    },
  },
  handle: {
    h: { en: 'Handle Design: Offset vs Straight', es: 'Diseño del Mango: Offset vs Recto', de: 'Griffdesign: Offset vs Gerade' },
    p: {
      en: 'Offset handles position your thumb and fingers at a more natural angle, reducing elbow and shoulder strain over a full day of cutting. Straight handles are traditional but cause more fatigue. For barbers doing 10+ cuts daily, offset is non-negotiable for long-term joint health.',
      es: 'Los mangos offset posicionan el pulgar y los dedos en un ángulo más natural, reduciendo la tensión del codo y el hombro. Para barberos que hacen 10+ cortes diarios, el offset no es negociable para la salud articular a largo plazo.',
      de: 'Offset-Griffe positionieren Daumen und Finger in einem natürlicheren Winkel, reduzieren Ellbogen- und Schulterbelastung. Für Barbiere mit 10+ Schnitten täglich ist Offset für die langfristige Gelenkgesundheit unverzichtbar.',
    },
  },
}

const RELATED = {
  en: [
    { href: '/picks/best-clippers', icon: '✂️', title: 'Best Clippers 2026', sub: 'Top fade machines' },
    { href: '/picks/accessories', icon: '🔧', title: 'Clipper Accessories', sub: 'Oil, guards & brushes' },
    { href: '/picks/razors', icon: '🪒', title: 'Best Razors 2026', sub: 'Straight razor guide' },
  ],
  es: [
    { href: '/picks/best-clippers', icon: '✂️', title: 'Mejores Cortadoras 2026', sub: 'Mejores máquinas de fade' },
    { href: '/picks/accessories', icon: '🔧', title: 'Accesorios para Cortadoras', sub: 'Aceite, guardias y cepillos' },
    { href: '/picks/razors', icon: '🪒', title: 'Mejores Navajas 2026', sub: 'Guía de navaja recta' },
  ],
  de: [
    { href: '/picks/best-clippers', icon: '✂️', title: 'Beste Clipper 2026', sub: 'Top Fade-Maschinen' },
    { href: '/picks/accessories', icon: '🔧', title: 'Clipper-Zubehör', sub: 'Öl, Wächter & Bürsten' },
    { href: '/picks/razors', icon: '🪒', title: 'Beste Rasiermesser 2026', sub: 'Rasiermesser-Guide' },
  ],
}

export default function CordlessClient() {
  const { lang } = useApp()
  const [filter, setFilter] = useState<'all' | 'budget' | 'premium' | 'kit'>('all')
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const L = (obj: Record<Lang, string>) => T(obj, lang)

  const filtered = PRODUCTS.filter(p => {
    if (filter === 'budget') return p.price < 80
    if (filter === 'premium') return p.price >= 120
    if (filter === 'kit') return p.tags.includes('Cutting + Thinning') || p.tags.includes('Kit')
    return true
  })

  const faqs = FAQS[lang]
  const methods = METHODS[lang]
  const guide = GUIDE
  const related = RELATED[lang]

  return (
    <main>
      {/* BREADCRUMB */}
      <div style={{ background: 'var(--dark)', borderBottom: '1px solid var(--border)', padding: '12px 0' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: 8, alignItems: 'center', fontSize: 11, color: 'var(--white-60)' }}>
            <Link href="/" style={{ color: 'var(--accent)' }}>BarberSuplyHub</Link>
            <span>/</span>
            <Link href="/picks" style={{ color: 'var(--white-60)' }}>{L(PAGE_T.picks)}</Link>
            <span>/</span>
            <span style={{ color: 'var(--white)' }}>{L(PAGE_T.breadcrumb)}</span>
          </div>
        </div>
      </div>

      {/* PAGE HERO */}
      <section style={{ paddingTop: 64, paddingBottom: 48, background: 'linear-gradient(180deg,var(--dark) 0%,var(--black) 100%)' }}>
        <div className="container-sm">
          <span className="kicker">{L(PAGE_T.kicker)}</span>
          <h1 style={{ fontFamily: 'var(--f-display)', fontSize: 'clamp(48px,8vw,96px)', lineHeight: .9, marginBottom: 20 }}>
            <span style={{ display: 'block' }}>{L(PAGE_T.h1a)}</span>
            <span style={{ display: 'block' }}>{L(PAGE_T.h1b)}</span>
            <span style={{ display: 'block', color: 'var(--accent)' }}>{L(PAGE_T.h1c)}</span>
          </h1>

          {/* Quick Answer */}
          <div style={{ background: 'var(--dark-2)', border: '1px solid var(--accent)', borderRadius: 4, padding: 20, marginBottom: 24 }}>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 8 }}>
              {L(PAGE_T.qaTitle)}
            </div>
            <p style={{ fontSize: 14, color: 'var(--white)', lineHeight: 1.75, fontWeight: 500 }}>{L(PAGE_T.qa)}</p>
          </div>

          <p style={{ fontSize: 15, color: 'var(--white-60)', lineHeight: 1.8, marginBottom: 24 }}>{L(PAGE_T.intro)}</p>

          {/* Stats */}
          <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
            {[
              { n: '28', en: 'Clippers Tested', es: 'Cortadoras Probadas', de: 'Schneider getestet' },
              { n: '4', en: 'Months of Testing', es: 'Meses de Prueba', de: 'Monate Tests' },
              { n: '3', en: 'Pro Barbers', es: 'Barberos Pro', de: 'Profi-Barbiere' },
              { n: '4', en: 'Hair Types', es: 'Tipos de Cabello', de: 'Haartypen' },
            ].map(({ n, ...labels }) => (
              <div key={n} style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <div style={{ fontFamily: 'var(--f-display)', fontSize: 40, color: 'var(--accent)', lineHeight: 1 }}>{n}</div>
                <div style={{ fontSize: 11, color: 'var(--white-60)', textTransform: 'uppercase', letterSpacing: '.08em' }}>
                  {lang === 'es' ? labels.es : lang === 'de' ? labels.de : labels.en}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FILTER BAR */}
      <div style={{ background: 'var(--dark)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '16px 0', position: 'sticky', top: 62, zIndex: 200 }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--white-60)', marginRight: 4 }}>Filter:</span>
          {([
            ['all', PAGE_T.filterAll],
            ['budget', PAGE_T.filterBudget],
            ['premium', PAGE_T.filterPremium],
            ['kit', PAGE_T.filterKit],
          ] as [string, Record<Lang, string>][]).map(([key, label]) => (
            <button key={key} onClick={() => setFilter(key as typeof filter)}
              style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', padding: '6px 14px', borderRadius: 'var(--radius)',
                background: filter === key ? 'var(--accent)' : 'var(--dark-2)',
                color: filter === key ? 'var(--black)' : 'var(--white-60)',
                border: `1px solid ${filter === key ? 'var(--accent)' : 'var(--border)'}`,
                transition: 'all .2s' }}>
              {L(label)}
            </button>
          ))}
          <span style={{ marginLeft: 'auto', fontSize: 11, color: 'var(--white-60)' }}>
            {filtered.length} {L(PAGE_T.results)}
          </span>
        </div>
      </div>

      {/* PRODUCT LIST */}
      <section>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {filtered.length === 0 && (
            <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--white-60)' }}>{L(PAGE_T.noResults)}</div>
          )}
          {filtered.map((p, i) => (
            <article key={p.id} className="card" style={{ padding: 0, overflow: 'hidden', animationDelay: `${i * 0.08}s` }}
              itemScope itemType="https://schema.org/Product">

              {/* Header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '20px 24px', borderBottom: '1px solid var(--border)', background: 'var(--dark-3)' }}>
                <div style={{ fontFamily: 'var(--f-display)', fontSize: 48, color: 'var(--accent)', width: 56, flexShrink: 0, lineHeight: 1 }}>
                  {String(p.rank).padStart(2, '0')}
                </div>
                <div style={{ flex: 1 }}>
                  {p.badge && (
                    <div style={{ display: 'inline-block', background: 'var(--accent)', color: 'var(--black)', fontSize: 9, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', padding: '2px 8px', borderRadius: 2, marginBottom: 6 }}>
                      {p.badge[lang]}
                    </div>
                  )}
                  <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 3 }}>{p.brand}</div>
                  <h2 style={{ fontFamily: 'var(--f-display)', fontSize: 28, lineHeight: 1 }} itemProp="name">{p.name}</h2>
                </div>
                <div style={{ textAlign: 'right', flexShrink: 0 }}>
                  <div style={{ fontFamily: 'var(--f-display)', fontSize: 48, lineHeight: 1 }}>{p.score}</div>
                  <div style={{ fontSize: 11, color: 'var(--white-60)' }}>/10 score</div>
                </div>
              </div>

              {/* Body */}
              <div style={{ padding: 24, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
                {/* Left */}
                <div>
                  <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--white-60)', marginBottom: 10 }}>{L(PAGE_T.verdict)}</div>
                  <p style={{ fontSize: 13, color: 'var(--white-60)', lineHeight: 1.75, marginBottom: 20 }} itemProp="description">
                    {T(p.verdict, lang)}
                  </p>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                    <div>
                      <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--green)', marginBottom: 8 }}>{L(PAGE_T.pros)}</div>
                      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 5 }}>
                        {p.pros[lang].map((pro, j) => (
                          <li key={j} style={{ fontSize: 12, color: 'var(--white-60)', paddingLeft: 14, position: 'relative' }}>
                            <span style={{ position: 'absolute', left: 0, color: 'var(--green)' }}>+</span>{pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--red)', marginBottom: 8 }}>{L(PAGE_T.cons)}</div>
                      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 5 }}>
                        {p.cons[lang].map((con, j) => (
                          <li key={j} style={{ fontSize: 12, color: 'var(--white-60)', paddingLeft: 14, position: 'relative' }}>
                            <span style={{ position: 'absolute', left: 0, color: 'var(--red)' }}>–</span>{con}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Right */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                  {/* Score bars */}
                  <div>
                    <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--white-60)', marginBottom: 12 }}>{L(PAGE_T.scores)}</div>
                    {p.scoreBreakdown.map((sb, j) => (
                      <div key={j} className="score-bar" style={{ marginBottom: 7 }}>
                        <span className="score-bar__label">{T(sb.label, lang)}</span>
                        <div className="score-bar__track"><div className="score-bar__fill" style={{ width: `${sb.score * 10}%` }} /></div>
                        <span className="score-bar__val">{sb.score}</span>
                      </div>
                    ))}
                  </div>

                  {/* Specs */}
                  <div>
                    <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--white-60)', marginBottom: 10 }}>{L(PAGE_T.specs)}</div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px 16px' }}>
                      {[
                        ['Material', p.specs.material],
                        ['Length', p.specs.length],
                        ['Type', p.specs.type],
                        ['Warranty', p.specs.warranty],
                      ].filter(([, v]) => v).map(([label, val]) => (
                        <div key={label}>
                          <div style={{ fontSize: 9, fontWeight: 700, color: 'var(--white-60)', letterSpacing: '.1em', textTransform: 'uppercase' }}>{label}</div>
                          <div style={{ fontSize: 13, color: 'var(--white)', fontWeight: 500 }}>{val}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <a href={buildAffiliateUrl(p.asin)} target="_blank" rel="noopener noreferrer sponsored"
                    style={{ display: 'block', background: 'var(--accent)', color: 'var(--black)', fontWeight: 700, fontSize: 13, letterSpacing: '.05em', textTransform: 'uppercase', padding: '14px 20px', borderRadius: 'var(--radius)', textAlign: 'center', textDecoration: 'none' }}
                    itemProp="url">
                    {L(PAGE_T.checkPrice)}
                  </a>
                  <p style={{ fontSize: 10, color: 'var(--white-60)', textAlign: 'center' }}>{L(PAGE_T.affNote)}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* HOW WE TEST */}
      <section style={{ paddingTop: 80, paddingBottom: 80, background: 'var(--dark)' }}>
        <div className="container">
          <div className="sec-hd">
            <div><span className="kicker">{L(PAGE_T.methodTitle)}</span></div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 16 }}>
            {methods.map((m, i) => (
              <div key={i} style={{ background: 'var(--dark-2)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: 24 }}>
                <div style={{ fontSize: 28, marginBottom: 12 }}>{m.icon}</div>
                <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--white)', marginBottom: 8 }}>{m.label}</div>
                <div style={{ fontSize: 12, color: 'var(--white-60)', lineHeight: 1.7 }}>{m.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BUYING GUIDE */}
      <section style={{ paddingTop: 80, paddingBottom: 80 }}>
        <div className="container">
          <div className="sec-hd">
            <div>
              <span className="kicker">{L(PAGE_T.guideKicker)}</span>
              <h2 className="sec-title" style={{ whiteSpace: 'pre-line' }}>{L(PAGE_T.guideTitle)}</h2>
            </div>
          </div>
          {Object.values(guide).map((section, i) => (
            <div key={i} style={{ marginBottom: 32, paddingBottom: 32, borderBottom: i < Object.values(guide).length - 1 ? '1px solid var(--border)' : 'none' }}>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: 'var(--white)', marginBottom: 12 }}>{T(section.h, lang)}</h3>
              <p style={{ fontSize: 14, color: 'var(--white-60)', lineHeight: 1.8 }}>{T(section.p, lang)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section style={{ paddingTop: 80, paddingBottom: 80, background: 'var(--dark)' }}>
        <div className="container">
          <div className="sec-hd">
            <div>
              <h2 className="sec-title" style={{ whiteSpace: 'pre-line' }}>{L(PAGE_T.faqTitle)}</h2>
            </div>
          </div>
          {faqs.map((faq, i) => (
            <div key={i} style={{ borderBottom: '1px solid var(--border)' }}>
              <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                style={{ width: '100%', textAlign: 'left', padding: '20px 0', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16 }}>
                <span style={{ fontSize: 15, fontWeight: 600, color: 'var(--white)' }}>{faq.q}</span>
                <span style={{ color: 'var(--accent)', fontSize: 20, flexShrink: 0 }}>{openFaq === i ? '−' : '+'}</span>
              </button>
              {openFaq === i && (
                <div style={{ paddingBottom: 20, fontSize: 14, color: 'var(--white-60)', lineHeight: 1.8 }}>{faq.a}</div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* RELATED */}
      <section>
        <div className="container">
          <div className="sec-hd">
            <div>
              <span className="kicker">{L(PAGE_T.relatedKicker)}</span>
              <h2 className="sec-title">{L(PAGE_T.related)}</h2>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 14 }}>
            {related.map(item => (
              <Link key={item.href} href={item.href}
                style={{ display: 'flex', flexDirection: 'column', gap: 10, padding: 24, background: 'var(--dark-2)', border: '1px solid var(--border)', borderRadius: 4, transition: 'border-color .3s' }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = 'var(--accent)'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'}>
                <div style={{ fontSize: 32 }}>{item.icon}</div>
                <div style={{ fontFamily: 'var(--f-display)', fontSize: 20 }}>{item.title}</div>
                <div style={{ fontSize: 12, color: 'var(--white-60)' }}>{item.sub}</div>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', marginTop: 'auto', color: 'var(--accent)' }}>{L(PAGE_T.view)}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}






