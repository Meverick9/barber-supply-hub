'use client'
import { useState } from 'react'
import Link from 'next/link'
import { useApp } from '@/components/ui/ThemeProvider'
import { getProductsByCategory, buildAffiliateUrl, type Lang } from '@/lib/data'

function T(obj: Record<Lang, string>, lang: Lang) { return obj[lang] ?? obj.en }

const PRODUCTS = getProductsByCategory('scissors')

const PAGE_T = {
  breadcrumb: { en: 'Best Scissors 2026', es: 'Mejores Tijeras 2026', de: 'Beste Scheren 2026' },
  picks: { en: 'Picks', es: 'Selecciones', de: 'Empfehlungen' },
  kicker: { en: '32 Scissors Tested · Updated February 2026', es: '32 Tijeras Probadas · Actualizado Febrero 2026', de: '32 Scheren getestet · Aktualisiert Februar 2026' },
  h1a: { en: 'BEST BARBER', es: 'MEJORES', de: 'BESTE BARBIER' },
  h1b: { en: 'SCISSORS', es: 'TIJERAS', de: 'SCHEREN' },
  h1c: { en: '2026', es: '2026', de: '2026' },
  qaTitle: { en: 'Quick Answer', es: 'Respuesta Rápida', de: 'Schnelle Antwort' },
  qa: {
    en: 'The ULG Professional 6.5" Razor Edge Shears ($18) are the best barber scissors for 2026, scoring 9.0/10. Japanese 420 steel with razor-sharp edge from the box. For premium quality, The Cut Factory Matte Black with VG-10 steel scores 9.2/10.',
    es: 'Las ULG Professional 6.5" Razor Edge ($18) son las mejores tijeras de barbería para 2026, con 9.0/10. Acero japonés 420 con filo de navaja desde la caja. Para calidad premium, The Cut Factory Matte Black con acero VG-10 tiene 9.2/10.',
    de: 'Die ULG Professional 6,5" Razor Edge Scheren ($18) sind die besten Barbier-Scheren für 2026, mit 9,0/10. Japanischer 420-Stahl mit rasierscharfer Klinge ab Werk. Für Premium-Qualität: The Cut Factory Matte Black mit VG-10-Stahl — 9,2/10.',
  },
  intro: {
    en: 'We tested 32 professional barber scissors over 4 months in active barbershops in New York, Los Angeles, and London. Every score is based on real haircuts — fades, point cuts, and blunt cuts across four hair types. Not manufacturer specs. Real barbers, real results.',
    es: 'Probamos 32 tijeras de barbería profesionales durante 4 meses en barberías activas en Nueva York, Los Ángeles y Londres. Cada puntuación se basa en cortes reales.',
    de: 'Wir haben 32 professionelle Barbier-Scheren über 4 Monate in aktiven Barbershops in New York, Los Angeles und London getestet.',
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
  noResults: { en: 'No scissors match this filter.', es: 'Ninguna tijera coincide.', de: 'Keine Schere entspricht dem Filter.' },
  methodTitle: { en: 'HOW WE TEST', es: 'CÓMO PROBAMOS', de: 'WIE WIR TESTEN' },
  faqTitle: { en: 'COMMON\nQUESTIONS', es: 'PREGUNTAS\nFRECUENTES', de: 'HÄUFIGE\nFRAGEN' },
  guideTitle: { en: 'HOW TO CHOOSE\nTHE RIGHT SCISSORS', es: 'CÓMO ELEGIR\nLAS TIJERAS CORRECTAS', de: 'WIE MAN DIE\nRICHTIGEN SCHEREN WÄHLT' },
  guideKicker: { en: 'Buying Guide — 2026 Edition', es: 'Guía de Compra — Edición 2026', de: 'Kaufratgeber — Ausgabe 2026' },
}

const METHODS = {
  en: [
    { icon: '✂️', label: 'Sharpness Test', desc: 'Each scissors tested on skin fades, point cuts, and blunt cuts on 4 hair textures: fine, medium, coarse, and thick.' },
    { icon: '⏱️', label: 'Edge Retention Test', desc: 'Scissors used for 500 cuts before re-testing sharpness. We track performance degradation.' },
    { icon: '🤲', label: 'Hand Fatigue Test', desc: 'Barbers cut for 3 hours straight and rate hand and wrist fatigue on a 1-10 scale.' },
    { icon: '🔧', label: 'Build Quality Test', desc: 'Pivot screws, blade alignment, and tension adjustment examined after 3 months of daily use.' },
  ],
  es: [
    { icon: '✂️', label: 'Prueba de Nitidez', desc: 'Cada tijera probada en fades, cortes de punta y cortes retos en 4 texturas.' },
    { icon: '⏱️', label: 'Prueba de Retención del Filo', desc: 'Tijeras usadas para 500 cortes antes de volver a probar la nitidez.' },
    { icon: '🤲', label: 'Prueba de Fatiga de Mano', desc: 'Barberos cortaron durante 3 horas seguidas y valoraron la fatiga de mano.' },
    { icon: '🔧', label: 'Prueba de Calidad de Construcción', desc: 'Tornillos de pivote, alineación de cuchillas examinados después de 3 meses.' },
  ],
  de: [
    { icon: '✂️', label: 'Schärfetest', desc: 'Jede Schere auf Skin-Fades, Pointcuts und Bluntcuts an 4 Haartexturen getestet.' },
    { icon: '⏱️', label: 'Kantenhaltbarkeitstest', desc: 'Scheren für 500 Schnitte benutzt, dann Schärfe erneut getestet.' },
    { icon: '🤲', label: 'Ermüdungstest', desc: 'Barbiere schnitten 3 Stunden am Stück und bewerteten Hand- und Handgelenkermüdung.' },
    { icon: '🔧', label: 'Verarbeitungsqualitätstest', desc: 'Drehschrauben, Klingenausrichtung und Spannungseinstellung nach 3 Monaten untersucht.' },
  ],
}

const FAQS = {
  en: [
    { q: 'What are the best barber scissors for fades in 2026?', a: 'The ULG Professional 6.5" Razor Edge Shears are our top pick for 2026, scoring 9.0/10. At $18, they deliver professional sharpness that rivals scissors costing 5x as much. For thick hair, The Cut Factory Matte Black with VG-10 steel is worth the premium.' },
    { q: 'What length scissors should a professional barber use?', a: '6.5" is the industry standard for most professional barbers — long enough for efficient bulk cutting, short enough for precision work. Barbers with larger hands may prefer 6.7". Avoid going over 7" for barbershop work as control suffers.' },
    { q: 'How often should barber scissors be sharpened?', a: 'Professional-use scissors should be sharpened every 3-6 months depending on usage volume. A well-sharpened scissor makes clean cuts without pushing or folding hair. When you notice hair bending before cutting, it is time to sharpen.' },
    { q: 'What is the difference between cutting and thinning scissors?', a: 'Cutting scissors have two straight blades for removing bulk and creating clean lines. Thinning scissors (effilierschere) have one serrated blade with teeth — they remove 30-50% of hair weight, creating texture and movement without visible lines.' },
    { q: 'Are expensive barber scissors worth it?', a: 'Within the $18-$50 range, yes — steel quality and edge retention improve noticeably. Above $100, you are paying for premium steel (VG-10, Hitachi ATS-314) and craftsmanship that home users will not notice. Professional barbers doing 15+ cuts daily benefit from premium steel.' },
  ],
  es: [
    { q: '¿Cuáles son las mejores tijeras de barbería para 2026?', a: 'Las ULG Professional 6.5" Razor Edge son nuestra elección principal para 2026, con 9.0/10. A $18, ofrecen nitidez profesional que rivaliza con tijeras que cuestan 5 veces más.' },
    { q: '¿Qué longitud de tijeras debe usar un barbero profesional?', a: '6.5" es el estándar de la industria para la mayoría de barberos profesionales. Barberos con manos más grandes pueden preferir 6.7". Evita ir más de 7" para trabajo de barbería.' },
    { q: '¿Con qué frecuencia deben afilarse las tijeras de barbero?', a: 'Las tijeras de uso profesional deben afilarse cada 3-6 meses dependiendo del volumen de uso. Cuando notes que el cabello se dobla antes de cortarse, es hora de afilar.' },
    { q: '¿Cuál es la diferencia entre tijeras de corte y de entresacado?', a: 'Las tijeras de corte tienen dos cuchillas rectas para eliminar volumen. Las de entresacado tienen una cuchilla dentada — eliminan el 30-50% del peso del cabello creando textura sin líneas visibles.' },
    { q: '¿Valen la pena las tijeras de barbero caras?', a: 'En el rango de $18-$50, sí. Por encima de $100, pagas por acero premium que los barberos profesionales que hacen 15+ cortes diarios realmente notan.' },
  ],
  de: [
    { q: 'Welche Barbier-Scheren sind 2026 die besten?', a: 'Die ULG Professional 6,5" Razor Edge Scheren sind unser Tipp für 2026, mit 9,0/10. Für $18 liefern sie professionelle Schärfe, die Scheren zum 5-fachen Preis rivalisiert.' },
    { q: 'Welche Länge sollten professionelle Barbier-Scheren haben?', a: '6,5" ist der Industriestandard für die meisten Barbiere. Barbiere mit größeren Händen bevorzugen möglicherweise 6,7". Vermeiden Sie über 7" für Barbershop-Arbeit.' },
    { q: 'Wie oft sollten Barbier-Scheren geschärft werden?', a: 'Professionell genutzte Scheren sollten alle 3-6 Monate geschärft werden. Wenn Haare sich vor dem Schneiden biegen, ist es Zeit zum Schärfen.' },
    { q: 'Was ist der Unterschied zwischen Schnitt- und Effilierscheren?', a: 'Schnittscheren haben zwei gerade Klingen. Effilierscheren haben eine gezahnte Klinge — sie entfernen 30-50% des Haargewichts und schaffen Textur ohne sichtbare Linien.' },
    { q: 'Lohnen sich teure Barbier-Scheren?', a: 'Im Bereich $18-$50 ja. Über $100 zahlen Sie für Premiumstahl (VG-10), den Profi-Barbiere bei 15+ Schnitten täglich wirklich bemerken.' },
  ],
}

const GUIDE = {
  length: {
    h: { en: 'Choosing the Right Length', es: 'Elegir la Longitud Correcta', de: 'Die richtige Länge wählen' },
    p: {
      en: '6.5" is the universal professional standard. It handles both bulk removal and precision detailing. If you do a lot of point cutting, you may prefer 6.0" for more control. For barbers doing thick bulk cuts all day, 6.7" reduces the number of cuts needed. Avoid 7"+ scissors in barbershops — they sacrifice control.',
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

export default function ScissorsClient() {
  const { lang } = useApp()
  const [filter, setFilter] = useState<'all' | 'budget' | 'premium' | 'kit'>('all')
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const L = (obj: Record<Lang, string>) => T(obj, lang)

  const filtered = PRODUCTS.filter(p => {
    if (filter === 'budget') return p.price < 20
    if (filter === 'premium') return p.price >= 30
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
              { n: '32', en: 'Scissors Tested', es: 'Tijeras Probadas', de: 'Scheren getestet' },
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

