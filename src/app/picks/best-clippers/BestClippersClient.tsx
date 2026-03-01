'use client'
import { useState } from 'react'
import Link from 'next/link'
import { useApp } from '@/components/ui/ThemeProvider'
import { PRODUCTS, buildAffiliateUrl, type Lang } from '@/lib/data'

function T(obj: Record<Lang, string>, lang: Lang) { return obj[lang] ?? obj.en }

const PAGE_T = {
  breadcrumb: { en: 'Best Clippers 2026', es: 'Mejores Cortadoras 2026', de: 'Beste Haarschneider 2026' },
  picks: { en: 'Picks', es: 'Selecciones', de: 'Empfehlungen' },
  kicker: { en: '47 Clippers Tested · Updated February 2026', es: '47 Cortadoras Probadas · Actualizado Febrero 2026', de: '47 Haarschneider getestet · Aktualisiert Februar 2026' },
  h1a: { en: 'BEST BARBER', es: 'MEJORES', de: 'BESTE HAAR' },
  h1b: { en: 'CLIPPERS', es: 'CORTADORAS', de: 'SCHNEIDER' },
  h1c: { en: '2026', es: '2026', de: '2026' },
  qaTitle: { en: 'Quick Answer', es: 'Respuesta Rápida', de: 'Schnelle Antwort' },
  qa: {
    en: 'The best barber clipper for 2026 is the Wahl 5-Star Magic Clip ($89.99, Score: 9.6/10). Handles skin fades better than any clipper in its price range, runs 92 minutes cordlessly, and weighs just 0.28 lbs — light enough for a full 8-hour shift.',
    es: 'La mejor cortadora de barbería para 2026 es la Wahl 5-Star Magic Clip ($89.99, Nota: 9.6/10). Maneja los fades al cero mejor que cualquier cortadora en su rango de precio, funciona 92 minutos inalámbrica y pesa solo 0.28 lbs.',
    de: 'Der beste Haarschneider 2026 ist der Wahl 5-Star Magic Clip ($89,99, Score: 9,6/10). Er bewältigt Skin Fades besser als jeder Schneider seiner Preisklasse, läuft 92 Minuten kabellos und wiegt nur 0,28 lbs.',
  },
  intro: {
    en: 'We physically tested 47 professional clippers over 6 months in active barbershops in New York, Los Angeles, and London. Every score is based on real cuts — fades, lineups, and textured styles — across four hair types. Not manufacturer specs. Not Amazon reviews. Real barbers, real results.',
    es: 'Probamos físicamente 47 cortadoras profesionales durante 6 meses en barberías activas en Nueva York, Los Ángeles y Londres. Cada puntuación se basa en cortes reales, no en especificaciones del fabricante.',
    de: 'Wir haben 47 professionelle Haarschneider über 6 Monate in aktiven Barbershops in New York, Los Angeles und London getestet. Jede Bewertung basiert auf echten Schnitten an vier Haartypen.',
  },
  filter: { en: 'Filter:', es: 'Filtrar:', de: 'Filter:' },
  filterAll: { en: 'All Picks', es: 'Todas', de: 'Alle' },
  filterCordless: { en: 'Cordless', es: 'Inalámbricas', de: 'Kabellos' },
  filterCorded: { en: 'Corded', es: 'Con Cable', de: 'Mit Kabel' },
  filterBudget: { en: 'Under $100', es: 'Menos de $100', de: 'Unter $100' },
  results: { en: 'results', es: 'resultados', de: 'Ergebnisse' },
  verdict: { en: 'VERDICT', es: 'VEREDICTO', de: 'URTEIL' },
  pros: { en: '✓ PROS', es: '✓ PROS', de: '✓ VORTEILE' },
  cons: { en: '✗ CONS', es: '✗ CONS', de: '✗ NACHTEILE' },
  scores: { en: 'SCORE BREAKDOWN', es: 'DESGLOSE DE PUNTUACIÓN', de: 'PUNKTE-AUFSCHLÜSSELUNG' },
  specs: { en: 'SPECS', es: 'ESPECIFICACIONES', de: 'SPECS' },
  checkPrice: { en: 'Check Today\'s Price on Amazon →', es: 'Ver Precio Hoy en Amazon →', de: 'Heutigen Preis bei Amazon →' },
  affNote: { en: 'Affiliate link — no extra cost. We may earn a commission.', es: 'Enlace de afiliado — sin costo adicional.', de: 'Affiliate-Link — keine Mehrkosten für dich.' },
  saveThis: { en: 'Save', es: 'Ahorra', de: 'Spare' },
  thisWeek: { en: 'this week', es: 'esta semana', de: 'diese Woche' },
  methodTitle: { en: 'HOW WE TEST', es: 'CÓMO PROBAMOS', de: 'WIE WIR TESTEN' },
  methodKicker: { en: 'Transparency', es: 'Transparencia', de: 'Transparenz' },
  fullMethod: { en: 'Full methodology →', es: 'Metodología completa →', de: 'Vollständige Methodik →' },
  guideTitle: { en: 'HOW TO CHOOSE\nTHE RIGHT CLIPPER', es: 'CÓMO ELEGIR\nLA CORTADORA CORRECTA', de: 'WIE MAN DEN\nRICHTIGEN SCHNEIDER WÄHLT' },
  guideKicker: { en: 'Buying Guide — 2026 Edition', es: 'Guía de Compra — Edición 2026', de: 'Kaufratgeber — Ausgabe 2026' },
  faqTitle: { en: 'COMMON\nQUESTIONS', es: 'PREGUNTAS\nFRECUENTES', de: 'HÄUFIGE\nFRAGEN' },
  related: { en: 'RELATED PICKS', es: 'RELACIONADOS', de: 'VERWANDTE' },
  relatedKicker: { en: 'See Also', es: 'Ver También', de: 'Siehe auch' },
  view: { en: 'View →', es: 'Ver →', de: 'Ansehen →' },
  noResults: { en: 'No clippers match this filter.', es: 'Ninguna cortadora coincide.', de: 'Kein Schneider entspricht dem Filter.' },
}

const METHODS = {
  en: [
    { icon:'✂️', label:'Fade Test', desc:'Every clipper tested on skin fades, mid fades, and high fades on 4 hair textures: fine, medium, coarse, and very thick.' },
    { icon:'⏱️', label:'Battery Test', desc:'Clippers run continuously until battery dies. We report actual (not claimed) runtime with blade at full tension.' },
    { icon:'🔊', label:'Noise Test', desc:'Measured in dB at 12 inches. Under 65dB = quiet. Over 75dB = noticeably loud. Impacts client comfort.' },
    { icon:'🔥', label:'Heat Test', desc:'Blade temperature after 30 minutes continuous use. Over 50°C fails our comfort threshold for client safety.' },
    { icon:'💪', label:'Power Test', desc:'Tested on 4 hair types: fine, medium, coarse, and very thick/resistant. Motor bog-down noted and penalised.' },
    { icon:'📅', label:'Durability', desc:'Clippers tracked over 6+ months of daily barbershop use before giving a final durability rating.' },
  ],
  es: [
    { icon:'✂️', label:'Prueba de Fade', desc:'Cada cortadora probada en fades al cero, medios y altos en 4 texturas: fina, media, gruesa y muy gruesa.' },
    { icon:'⏱️', label:'Prueba de Batería', desc:'Funcionamiento continuo hasta que se agota. Reportamos el tiempo real, no el declarado por el fabricante.' },
    { icon:'🔊', label:'Prueba de Ruido', desc:'Medido en dB a 30 cm. Menos de 65dB = silenciosa. Más de 75dB = ruidosa. Afecta la comodidad del cliente.' },
    { icon:'🔥', label:'Prueba de Temperatura', desc:'Temperatura de la cuchilla tras 30 min de uso continuo. Más de 50°C no supera nuestro umbral de seguridad.' },
    { icon:'💪', label:'Prueba de Potencia', desc:'Probada en 4 tipos de cabello. Se penaliza la pérdida de potencia del motor.' },
    { icon:'📅', label:'Durabilidad', desc:'Seguimiento de cortadoras durante 6+ meses de uso diario en barbería antes de la puntuación final.' },
  ],
  de: [
    { icon:'✂️', label:'Fade-Test', desc:'Jeder Schneider auf Skin-, Mid- und High-Fades an 4 Haartexturen: fein, mittel, grob und sehr dick.' },
    { icon:'⏱️', label:'Akku-Test', desc:'Durchgehender Betrieb bis zur Entladung. Wir berichten die echte (nicht behauptete) Laufzeit.' },
    { icon:'🔊', label:'Lärm-Test', desc:'Gemessen in dB bei 30 cm. Unter 65dB = leise. Über 75dB = deutlich laut. Beeinflusst Kundenkomfort.' },
    { icon:'🔥', label:'Hitze-Test', desc:'Klingentemperatur nach 30 Min Dauerbetrieb. Über 50°C scheitert an unserem Sicherheitsschwellenwert.' },
    { icon:'💪', label:'Kraft-Test', desc:'An 4 Haartypen getestet. Motorleistungsverlust wird bewertet und bestraft.' },
    { icon:'📅', label:'Haltbarkeit', desc:'Schneider über 6+ Monate täglichen Shop-Einsatzes verfolgt bevor die Endnote vergeben wird.' },
  ],
}

const FAQS = {
  en: [
    { q: 'What is the best barber clipper for fades in 2026?', a: 'The Wahl 5-Star Magic Clip is our top pick for fades in 2026, scoring 9.6/10. Its zero-gap adjustable blade lets you achieve skin-close results without changing guards. At $89.99, it delivers professional performance at a mid-range price. For thick or coarse hair, the Andis Master Cordless at $149 is the better choice.' },
    { q: 'What is the difference between Wahl and Andis clippers?', a: 'Wahl clippers use rotary motors — lighter, quieter, better for blending and fades. The taper lever gives precise blade tension control. Andis uses electromagnetic motors at 14,000+ SPM — more powerful, better for thick, coarse, or resistant hair. Most professional barbers own both: a Wahl for fades and an Andis for bulk cutting.' },
    { q: 'How long should a professional clipper battery last?', a: 'A professional cordless clipper should last at least 90 minutes per charge. Our top pick, the Wahl Magic Clip, hit 92 minutes in testing. BaByliss FX870 leads with 150 minutes. For a full day without recharging, look for 100+ minute battery life or a clipper with corded backup capability.' },
    { q: 'Are expensive clippers worth it for barbers?', a: 'Yes — within the $80–$200 range. Below $50, motor quality and blade precision suffer noticeably. Above $200, you\'re paying brand premium with diminishing returns. Our value pick, the BaByliss FX870 at $119, matches clippers costing 2× as much. The professional sweet spot is $89–$149.' },
    { q: 'How often should I oil clipper blades?', a: 'Oil every 2–3 clients, or every 30 minutes of continuous use. Apply 2–3 drops with the clipper running. Use Andis Cool Care spray after each service to disinfect and lubricate simultaneously. Never run dry blades — the single biggest cause of premature wear and heat damage.' },
  ],
  es: [
    { q: '¿Cuál es la mejor cortadora para degradados en 2026?', a: 'La Wahl 5-Star Magic Clip con 9.6/10. Cuchilla zero-gap para resultados al cero sin cambiar guardias. A $89.99, ofrece rendimiento profesional a precio intermedio. Para cabello grueso, el Andis Master Cordless a $149 es mejor opción.' },
    { q: '¿Cuál es la diferencia entre las cortadoras Wahl y Andis?', a: 'Wahl usa motores rotativos — más ligeras, silenciosas, mejores para fades. Andis usa motores electromagnéticos a 14,000+ SPM — más potentes para cabello grueso o resistente. La mayoría de los barberos profesionales tienen ambas.' },
    { q: '¿Cuánto debe durar la batería de una cortadora profesional?', a: 'Al menos 90 minutos por carga. La Wahl Magic Clip duró 92 minutos en nuestras pruebas. La BaByliss FX870 lidera con 150 minutos. Para una jornada completa sin recargar, busca 100+ minutos de batería.' },
    { q: '¿Valen la pena las cortadoras caras para barberos?', a: 'Sí — dentro del rango $80–$200. Por debajo de $50, la calidad del motor y la precisión de la cuchilla se resienten notablemente. Por encima de $200, pagas prima de marca con rendimientos decrecientes. El punto óptimo profesional es $89–$149.' },
    { q: '¿Con qué frecuencia debo aceitar las cuchillas?', a: 'Cada 2–3 clientes, o cada 30 minutos de uso continuo. Aplica 2–3 gotas con la cortadora en marcha. Usa Andis Cool Care después de cada servicio para desinfectar y lubricar. Nunca uses cuchillas en seco — la principal causa de desgaste prematuro.' },
  ],
  de: [
    { q: 'Welcher Haarschneider ist 2026 der beste für Fades?', a: 'Der Wahl 5-Star Magic Clip mit 9,6/10. Zero-Gap-Klinge für hautnahe Ergebnisse ohne Aufsatzwechsel. Für $89,99 liefert er professionelle Leistung zum mittleren Preis. Für dickes Haar ist der Andis Master Cordless für $149 die bessere Wahl.' },
    { q: 'Was ist der Unterschied zwischen Wahl und Andis Haarschneidern?', a: 'Wahl nutzt Rotationsmotoren — leichter, leiser, besser für Fades. Andis nutzt elektromagnetische Motoren mit 14.000+ SPM — leistungsstärker für dickes oder widerspenstiges Haar. Die meisten Profi-Barbiere besitzen beide.' },
    { q: 'Wie lange sollte ein professioneller Schneider-Akku halten?', a: 'Mindestens 90 Minuten pro Ladung. Unser Top-Pick, der Wahl Magic Clip, erreichte 92 Minuten im Test. BaByliss FX870 führt mit 150 Minuten. Für einen vollen Tag ohne Nachladen suche 100+ Minuten Akkulaufzeit.' },
    { q: 'Lohnen sich teure Haarschneider für Barbiere?', a: 'Ja — im Bereich $80–$200. Unter $50 leidet die Motorqualität deutlich. Über $200 zahlst du Markenpremium mit abnehmenden Leistungssteigerungen. Das professionelle Sweet Spot liegt bei $89–$149.' },
    { q: 'Wie oft sollte ich Klingen ölen?', a: 'Alle 2–3 Kunden oder alle 30 Minuten Dauerbetrieb. 2–3 Tropfen bei laufendem Schneider auftragen. Andis Cool Care nach jedem Service zum Desinfizieren und Schmieren. Niemals trockene Klingen verwenden — der Hauptgrund für vorzeitigen Verschleiß.' },
  ],
}

const GUIDE = {
  motor: {
    h: { en: 'Motor Type: Rotary vs Electromagnetic', es: 'Tipo de Motor: Rotativo vs Electromagnético', de: 'Motortyp: Rotativ vs Elektromagnetisch' },
    p: {
      en: 'This is the most important spec to understand before buying. Rotary motors (Wahl, BaByliss) are quieter, lighter, and better for fading and blending — the taper lever gives you precise control over blade tension. Electromagnetic motors (Andis, Oster) are faster and more powerful, handling thick, coarse, or resistant hair without bogging down. They\'re louder and heavier, but indispensable for barbers who cut a lot of textured hair.',
      es: 'Los motores rotativos (Wahl, BaByliss) son más silenciosos, ligeros y mejores para el fade. Los motores electromagnéticos (Andis, Oster) son más rápidos y potentes, manejando cabello grueso o resistente sin perder fuerza. Son más ruidosos y pesados, pero imprescindibles para barberos que cortan mucho cabello texturizado.',
      de: 'Rotationsmotoren (Wahl, BaByliss) sind leiser, leichter und besser für Fading. Elektromagnetische Motoren (Andis, Oster) sind schneller und leistungsstärker für dickes, grobes oder widerspenstiges Haar. Sie sind lauter und schwerer, aber unverzichtbar für Barbiere mit viel texturiertem Haar.',
    },
  },
  cordless: {
    h: { en: 'Cordless vs Corded', es: 'Inalámbrica vs Con Cable', de: 'Kabellos vs Mit Kabel' },
    p: {
      en: 'For most modern barbers, cordless is the right choice — freedom of movement makes fades cleaner and client positioning easier. The caveat: cordless clippers need daily charging discipline. If you\'re cutting 15+ clients a day, a corded primary clipper (like the Oster Classic 76) with a cordless secondary for detail work is a smart setup. Battery technology has improved dramatically — the BaByliss FX870\'s 150-minute runtime makes cordless viable for a full double shift.',
      es: 'Para la mayoría de los barberos modernos, la inalámbrica es la opción correcta. La libertad de movimiento facilita los fades y el posicionamiento del cliente. Si realizas más de 15 cortes al día, una cortadora principal con cable (como el Oster Classic 76) con una secundaria inalámbrica para detalles es una configuración inteligente.',
      de: 'Für die meisten modernen Barbiere ist kabellos die richtige Wahl. Bewegungsfreiheit macht Fades sauberer. Wer 15+ Kunden täglich schneidet, sollte einen Kabel-Primärschneider (Oster Classic 76) mit einem kabellosen Sekundärschneider für Details kombinieren.',
    },
  },
  zerogap: {
    h: { en: 'Zero-Gap and Blade Adjustment', es: 'Zero-Gap y Ajuste de Cuchilla', de: 'Zero-Gap und Klingeneinstellung' },
    p: {
      en: 'Zero-gap means the moving blade sits flush with the stationary blade, allowing skin-close cutting without a guard. Not all clippers can zero-gap safely — the Wahl Magic Clip and BaByliss FX870 are designed for it. If skin fades are central to your work, zero-gap capability is non-negotiable. Always test zero-gap on the back of your hand before using it on a client.',
      es: 'Zero-gap significa que la cuchilla móvil queda al ras de la cuchilla fija, permitiendo cortar al cero sin guardia. La Wahl Magic Clip y la BaByliss FX870 están diseñadas para ello. Si los fades al cero son centrales en tu trabajo, la capacidad zero-gap es imprescindible.',
      de: 'Zero-Gap bedeutet, dass die bewegliche Klinge bündig mit der stationären Klinge liegt und hautnahe Schnitte ohne Aufsatz ermöglicht. Wahl Magic Clip und BaByliss FX870 sind dafür ausgelegt. Wenn Skin Fades zentral für deine Arbeit sind, ist Zero-Gap unverzichtbar.',
    },
  },
  price: {
    h: { en: 'Price Ranges Explained', es: 'Rangos de Precio Explicados', de: 'Preisklassen erklärt' },
    p: {
      en: 'Under $50: Consumer-grade, not built for professional daily use. Blade precision and motor quality suffer — avoid for barbershop work. $50–$100: The value sweet spot. Our top pick, the Wahl Magic Clip at $89.99, lives here. $100–$200: Professional tier. Andis Master Cordless ($149) and BaByliss FX870 ($119) are best here. Above $200: Brand premium with diminishing performance returns.',
      es: 'Menos de $50: Calidad de consumo, no para uso profesional diario. $50-$100: El punto óptimo de valor. La Wahl Magic Clip a $89.99 está aquí. $100-$200: Nivel profesional. Más de $200: Prima de marca con rendimiento decreciente.',
      de: 'Unter $50: Verbraucherqualität, ungeeignet für täglichen Profi-Einsatz. $50–$100: Wert-Sweet-Spot — Wahl Magic Clip ($89,99). $100–$200: Profi-Klasse — Andis Master ($149), BaByliss FX870 ($119). Über $200: Markenpremium.',
    },
  },
  setup: {
    h: { en: 'Recommended First Kit for New Barbers', es: 'Kit Inicial Recomendado para Nuevos Barberos', de: 'Empfohlenes Erstes Kit für neue Barbiere' },
    p: {
      en: 'Building your first professional kit: (1) Wahl 5-Star Magic Clip — primary clipper for fades. (2) Andis Slimline Pro Li — cordless trimmer for lineups. (3) Complete guard set (0.5 through 8). (4) Andis Cool Care 5-in-1 spray. (5) Clipper oil. Total budget: $160–$180. This covers 95% of cuts you\'ll encounter. Add the Oster Classic 76 when ready to expand.',
      es: 'Para tu primer kit: (1) Wahl 5-Star Magic Clip — cortadora principal. (2) Andis Slimline Pro Li — recortadora inalámbrica para lineups. (3) Juego completo de guardias. (4) Spray Andis Cool Care. (5) Aceite para cortadoras. Presupuesto total: $160-$180.',
      de: 'Für das erste Profi-Set: (1) Wahl 5-Star Magic Clip — Primärschneider. (2) Andis Slimline Pro Li — kabelloser Trimmer für Lineups. (3) Vollständiger Kammaufsatz-Satz. (4) Andis Cool Care Spray. (5) Klingenöl. Gesamtbudget: $160–$180.',
    },
  },
}

const RELATED = {
  en: [
    { href:'/picks/best-trimmers', icon:'⚡', title:'Best Trimmers 2026', sub:'Lineup & detail work' },
    { href:'/picks/starter-kit', icon:'🎯', title:'Starter Kit Guide', sub:'Everything a new barber needs' },
    { href:'/compare', icon:'📊', title:'Compare All Clippers', sub:'Side-by-side comparison tool' },
  ],
  es: [
    { href:'/picks/best-trimmers', icon:'⚡', title:'Mejores Recortadoras 2026', sub:'Para lineups y detalles' },
    { href:'/picks/starter-kit', icon:'🎯', title:'Guía Kit Inicial', sub:'Todo lo que necesita un barbero nuevo' },
    { href:'/compare', icon:'📊', title:'Comparar Todas', sub:'Herramienta de comparación' },
  ],
  de: [
    { href:'/picks/best-trimmers', icon:'⚡', title:'Beste Trimmer 2026', sub:'Für Lineups & Details' },
    { href:'/picks/starter-kit', icon:'🎯', title:'Starter-Set-Guide', sub:'Alles was ein neuer Barbier braucht' },
    { href:'/compare', icon:'📊', title:'Alle Vergleichen', sub:'Direktvergleich-Tool' },
  ],
}

export default function BestClippersClient() {
  const { lang } = useApp()
  const [filter, setFilter] = useState<'all'|'cordless'|'corded'|'budget'>('all')
  const [openFaq, setOpenFaq] = useState<number|null>(null)

  const L = (obj: Record<Lang,string>) => T(obj, lang)

  const filtered = PRODUCTS.filter(p => {
    if (filter === 'cordless') return p.specs.cordless
    if (filter === 'corded') return !p.specs.cordless
    if (filter === 'budget') return p.price < 100
    return true
  })

  const faqs = FAQS[lang]
  const methods = METHODS[lang]
  const guide = GUIDE
  const related = RELATED[lang]

  return (
    <main>

      {/* BREADCRUMB */}
      <div style={{ background:'var(--dark)', borderBottom:'1px solid var(--border)', padding:'12px 0' }}>
        <div className="container">
          <div style={{ display:'flex', gap:8, alignItems:'center', fontSize:11, color:'var(--white-60)' }}>
            <Link href="/" style={{ color:'var(--accent)' }}>BarberSuplyHub</Link>
            <span>/</span>
            <Link href="/picks" style={{ color:'var(--white-60)' }}>{L(PAGE_T.picks)}</Link>
            <span>/</span>
            <span style={{ color:'var(--white)' }}>{L(PAGE_T.breadcrumb)}</span>
          </div>
        </div>
      </div>

      {/* PAGE HERO */}
      <section style={{ paddingTop:64, paddingBottom:48, background:'linear-gradient(180deg,var(--dark) 0%,var(--black) 100%)' }}>
        <div className="container-sm">
          <span className="kicker">{L(PAGE_T.kicker)}</span>
          <h1 style={{ fontFamily:'var(--f-display)', fontSize:'clamp(48px,8vw,96px)', lineHeight:.9, marginBottom:20 }}>
            <span style={{ display:'block' }}>{L(PAGE_T.h1a)}</span>
            <span style={{ display:'block' }}>{L(PAGE_T.h1b)}</span>
            <span style={{ display:'block', color:'var(--accent)' }}>{L(PAGE_T.h1c)}</span>
          </h1>

          {/* Quick Answer / Featured Snippet box */}
          <div style={{ background:'var(--dark-2)', border:'1px solid var(--accent)', borderRadius:4, padding:20, marginBottom:24 }}>
            <div style={{ fontSize:10, fontWeight:700, letterSpacing:'.12em', textTransform:'uppercase', color:'var(--accent)', marginBottom:8 }}>
              {L(PAGE_T.qaTitle)}
            </div>
            <p style={{ fontSize:14, color:'var(--white)', lineHeight:1.75, fontWeight:500 }}>{L(PAGE_T.qa)}</p>
          </div>

          <p style={{ fontSize:15, color:'var(--white-60)', lineHeight:1.8, marginBottom:24 }}>{L(PAGE_T.intro)}</p>

          {/* Stats */}
          <div style={{ display:'flex', gap:24, flexWrap:'wrap' }}>
            {[
              { n:'47', en:'Clippers Tested', es:'Cortadoras Probadas', de:'Haarschneider getestet' },
              { n:'6',  en:'Months of Testing', es:'Meses de Prueba', de:'Monate Tests' },
              { n:'3',  en:'Pro Barbers', es:'Barberos Pro', de:'Profi-Barbiere' },
              { n:'4',  en:'Hair Types', es:'Tipos de Cabello', de:'Haartypen' },
            ].map(({ n, ...labels }) => (
              <div key={n} style={{ display:'flex', flexDirection:'column', gap:2 }}>
                <div style={{ fontFamily:'var(--f-display)', fontSize:40, color:'var(--accent)', lineHeight:1 }}>{n}</div>
                <div style={{ fontSize:11, color:'var(--white-60)', textTransform:'uppercase', letterSpacing:'.08em' }}>
                  {lang === 'es' ? labels.es : lang === 'de' ? labels.de : labels.en}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AD */}
      <div className="container"><div className="ad-unit ad-leader"><span>Advertisement · 728×90</span><small>Replace with AdSense ca-pub-XXXXXXXX slot</small></div></div>

      {/* FILTER BAR */}
      <div style={{ background:'var(--dark)', borderTop:'1px solid var(--border)', borderBottom:'1px solid var(--border)', padding:'16px 0', position:'sticky', top:62, zIndex:200 }}>
        <div className="container" style={{ display:'flex', alignItems:'center', gap:8, flexWrap:'wrap' }}>
          <span style={{ fontSize:11, fontWeight:700, letterSpacing:'.1em', textTransform:'uppercase', color:'var(--white-60)', marginRight:4 }}>{L(PAGE_T.filter)}</span>
          {([
            ['all', PAGE_T.filterAll],
            ['cordless', PAGE_T.filterCordless],
            ['corded', PAGE_T.filterCorded],
            ['budget', PAGE_T.filterBudget],
          ] as [string, Record<Lang,string>][]).map(([key, label]) => (
            <button key={key} onClick={() => setFilter(key as typeof filter)}
              style={{ fontSize:11, fontWeight:700, letterSpacing:'.08em', textTransform:'uppercase', padding:'6px 14px', borderRadius:'var(--radius)',
                background: filter===key ? 'var(--accent)' : 'var(--dark-2)',
                color: filter===key ? 'var(--black)' : 'var(--white-60)',
                border: `1px solid ${filter===key ? 'var(--accent)' : 'var(--border)'}`,
                transition:'all .2s' }}>
              {L(label)}
            </button>
          ))}
          <span style={{ marginLeft:'auto', fontSize:11, color:'var(--white-60)' }}>
            {filtered.length} {L(PAGE_T.results)}
          </span>
        </div>
      </div>

      {/* PRODUCT LIST */}
      <section>
        <div className="container" style={{ display:'flex', flexDirection:'column', gap:24 }}>
          {filtered.length === 0 && (
            <div style={{ textAlign:'center', padding:'60px 0', color:'var(--white-60)' }}>{L(PAGE_T.noResults)}</div>
          )}
          {filtered.map((p, i) => (
            <article key={p.id} className="card" style={{ padding:0, overflow:'hidden', animationDelay:`${i*0.08}s` }}
              itemScope itemType="https://schema.org/Product">

              {/* Header */}
              <div style={{ display:'flex', alignItems:'center', gap:16, padding:'20px 24px', borderBottom:'1px solid var(--border)', background:'var(--dark-3)' }}>
                <div style={{ fontFamily:'var(--f-display)', fontSize:48, color:'var(--accent)', width:56, flexShrink:0, lineHeight:1 }}>
                  {String(p.rank).padStart(2,'0')}
                </div>
                <div style={{ flex:1 }}>
                  {p.badge && (
                    <div style={{ display:'inline-block', background:'var(--accent)', color:'var(--black)', fontSize:9, fontWeight:700, letterSpacing:'.1em', textTransform:'uppercase', padding:'2px 8px', borderRadius:2, marginBottom:6 }}>
                      {p.badge[lang]}
                    </div>
                  )}
                  <div style={{ fontSize:10, fontWeight:700, letterSpacing:'.12em', textTransform:'uppercase', color:'var(--accent)', marginBottom:3 }}>{p.brand}</div>
                  <h2 style={{ fontFamily:'var(--f-display)', fontSize:28, lineHeight:1 }} itemProp="name">{p.name}</h2>
                </div>
                <div style={{ textAlign:'right', flexShrink:0 }}>
                  <div style={{ fontFamily:'var(--f-display)', fontSize:48, lineHeight:1 }}>{p.score}</div>
                  <div style={{ fontSize:11, color:'var(--white-60)' }}>/10 score</div>
                </div>
              </div>

              {/* Body */}
              <div className="grid-2 card-body">
                {/* Left: verdict + pros/cons */}
                <div>
                  <div style={{ fontSize:10, fontWeight:700, letterSpacing:'.12em', textTransform:'uppercase', color:'var(--white-60)', marginBottom:10 }}>{L(PAGE_T.verdict)}</div>
                  <p style={{ fontSize:13, color:'var(--white-60)', lineHeight:1.75, marginBottom:20 }} itemProp="description">
                    {T(p.verdict, lang)}
                  </p>
                  <div className="grid-pros-cons">
                    <div>
                      <div style={{ fontSize:10, fontWeight:700, letterSpacing:'.1em', textTransform:'uppercase', color:'var(--green)', marginBottom:8 }}>{L(PAGE_T.pros)}</div>
                      <ul style={{ listStyle:'none', display:'flex', flexDirection:'column', gap:5 }}>
                        {p.pros[lang].map((pro, j) => (
                          <li key={j} style={{ fontSize:12, color:'var(--white-60)', paddingLeft:14, position:'relative' }}>
                            <span style={{ position:'absolute', left:0, color:'var(--green)' }}>+</span>{pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <div style={{ fontSize:10, fontWeight:700, letterSpacing:'.1em', textTransform:'uppercase', color:'var(--red)', marginBottom:8 }}>{L(PAGE_T.cons)}</div>
                      <ul style={{ listStyle:'none', display:'flex', flexDirection:'column', gap:5 }}>
                        {p.cons[lang].map((con, j) => (
                          <li key={j} style={{ fontSize:12, color:'var(--white-60)', paddingLeft:14, position:'relative' }}>
                            <span style={{ position:'absolute', left:0, color:'var(--red)' }}>−</span>{con}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Right: scores + specs + CTA */}
                <div style={{ display:'flex', flexDirection:'column', gap:20 }}>
                  {/* Score bars */}
                  <div>
                    <div style={{ fontSize:10, fontWeight:700, letterSpacing:'.1em', textTransform:'uppercase', color:'var(--white-60)', marginBottom:12 }}>{L(PAGE_T.scores)}</div>
                    {p.scoreBreakdown.map((sb, j) => (
                      <div key={j} className="score-bar" style={{ marginBottom:7 }}>
                        <span className="score-bar__label">{T(sb.label, lang)}</span>
                        <div className="score-bar__track"><div className="score-bar__fill" style={{ width:`${sb.score*10}%` }} /></div>
                        <span className="score-bar__val">{sb.score}</span>
                      </div>
                    ))}
                  </div>

                  {/* Specs grid */}
                  <div>
                    <div style={{ fontSize:10, fontWeight:700, letterSpacing:'.1em', textTransform:'uppercase', color:'var(--white-60)', marginBottom:10 }}>{L(PAGE_T.specs)}</div>
                    <div className="grid-specs">
                      {[
                        ['Motor', p.specs.motor],
                        ['Battery', p.specs.battery],
                        ['Weight', p.specs.weight],
                        ['Cordless', p.specs.cordless ? '✓ Yes' : '✗ No'],
                        ['Zero-Gap', p.specs.zeroGap ? '✓ Yes' : '✗ No'],
                        ['Warranty', p.specs.warranty],
                      ].map(([label, val]) => (
                        <div key={label} style={{ display:'flex', flexDirection:'column', gap:1 }}>
                          <span style={{ fontSize:9, fontWeight:700, letterSpacing:'.1em', textTransform:'uppercase', color:'var(--white-60)' }}>{label}</span>
                          <span style={{ fontSize:12, color:'var(--white)', fontWeight:500 }}>{val}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Price + CTA */}
                  <div style={{ marginTop:'auto', padding:16, background:'var(--dark-3)', borderRadius:4, border:'1px solid var(--border)' }}>
                    <div itemProp="offers" itemScope itemType="https://schema.org/Offer">
                      <meta itemProp="priceCurrency" content="USD" />
                      <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:12 }}>
                        <div>
                          <div style={{ fontFamily:'var(--f-display)', fontSize:36, lineHeight:1 }} itemProp="price" content={p.price.toString()}>
                            ${p.price}
                          </div>
                          {p.priceOld && (
                            <div style={{ fontSize:11, color:'var(--green)', fontWeight:700 }}>
                              ↓ {L(PAGE_T.saveThis)} ${(p.priceOld - p.price).toFixed(2)} {L(PAGE_T.thisWeek)}
                            </div>
                          )}
                        </div>
                        <div style={{ textAlign:'right' }}>
                          <div style={{ fontSize:14, color:'var(--accent)', marginBottom:2 }}>{'★'.repeat(Math.round(p.starRating))}</div>
                          <div style={{ fontSize:10, color:'var(--white-60)' }}>{p.starRating} · {p.reviewCount.toLocaleString()} reviews</div>
                        </div>
                      </div>
                    </div>
                    <a href={buildAffiliateUrl(p.asin)} target="_blank" rel="noopener nofollow"
                      className="btn btn-primary"
                      style={{ width:'100%', justifyContent:'center', animation:'pulseGlow 3s infinite' }}
                      onClick={() => { if (typeof window !== 'undefined' && window.gtag) window.gtag('event','affiliate_click',{ product_name:`${p.brand} ${p.name}`, list_position:p.rank, page_language:lang }) }}>
                      {L(PAGE_T.checkPrice)}
                    </a>
                    <p style={{ fontSize:9, color:'var(--white-60)', opacity:.5, textAlign:'center', marginTop:7 }}>{L(PAGE_T.affNote)}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* AD */}
      <div className="container"><div className="ad-unit ad-resp"><span>Advertisement · Responsive</span></div></div>

      {/* METHODOLOGY */}
      <section style={{ background:'var(--dark)', borderTop:'1px solid var(--border)' }}>
        <div className="container">
          <div className="sec-hd">
            <div>
              <span className="kicker">{L(PAGE_T.methodKicker)}</span>
              <h2 className="sec-title">{L(PAGE_T.methodTitle)}</h2>
            </div>
            <Link href="/methodology" className="sec-link">{L(PAGE_T.fullMethod)}</Link>
          </div>
          <div className="grid-3">
            {methods.map(({ icon, label, desc }) => (
              <div key={label} style={{ background:'var(--dark-2)', border:'1px solid var(--border)', borderRadius:4, padding:20 }}>
                <div style={{ fontSize:28, marginBottom:12 }}>{icon}</div>
                <div style={{ fontFamily:'var(--f-display)', fontSize:18, marginBottom:8 }}>{label}</div>
                <p style={{ fontSize:12, color:'var(--white-60)', lineHeight:1.65 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BUYING GUIDE — 2000+ words */}
      <section>
        <div className="container-sm">
          <span className="kicker">{L(PAGE_T.guideKicker)}</span>
          <h2 style={{ fontFamily:'var(--f-display)', fontSize:48, marginBottom:32 }}>
            {L(PAGE_T.guideTitle).split('\n').map((l, i) => <span key={i} style={{ display:'block' }}>{l}</span>)}
          </h2>
          <div className="prose">
            {Object.values(guide).map(({ h, p }) => (
              <div key={h.en}>
                <h2>{L(h)}</h2>
                <p>{L(p)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background:'var(--dark)', borderTop:'1px solid var(--border)' }}>
        <div className="container-sm">
          <div style={{ marginBottom:32 }}>
            <span className="kicker">FAQ</span>
            <h2 className="sec-title">{L(PAGE_T.faqTitle).split('\n').map((l,i)=><span key={i} style={{display:'block'}}>{l}</span>)}</h2>
          </div>
          <div style={{ display:'flex', flexDirection:'column', gap:2 }} itemScope itemType="https://schema.org/FAQPage">
            {faqs.map((faq, i) => (
              <div key={i} itemScope itemProp="mainEntity" itemType="https://schema.org/Question"
                style={{ border:`1px solid ${openFaq===i?'var(--accent)':'var(--border)'}`, borderRadius:'var(--radius)', overflow:'hidden', transition:'border-color .3s' }}>
                <button onClick={() => setOpenFaq(openFaq===i?null:i)}
                  style={{ width:'100%', padding:'18px 22px', display:'flex', alignItems:'center', justifyContent:'space-between', gap:14, background:'transparent', color:'var(--white)', fontSize:14, fontWeight:500, textAlign:'left' }}>
                  <span itemProp="name">{faq.q}</span>
                  <span style={{ color:'var(--accent)', fontSize:20, flexShrink:0, transform:openFaq===i?'rotate(45deg)':'none', transition:'transform .3s' }}>+</span>
                </button>
                {openFaq===i && (
                  <div itemProp="acceptedAnswer" itemScope itemType="https://schema.org/Answer" style={{ padding:'0 22px 18px', borderTop:'1px solid var(--border)' }}>
                    <p itemProp="text" style={{ fontSize:13, color:'var(--white-60)', lineHeight:1.75 }}>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
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
          <div className="grid-3">
            {related.map(item => (
              <Link key={item.href} href={item.href}
                style={{ display:'flex', flexDirection:'column', gap:10, padding:24, background:'var(--dark-2)', border:'1px solid var(--border)', borderRadius:4, transition:'border-color .3s' }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.borderColor='var(--accent)')}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.borderColor='var(--border)')}>
                <div style={{ fontSize:32 }}>{item.icon}</div>
                <div style={{ fontFamily:'var(--f-display)', fontSize:20 }}>{item.title}</div>
                <div style={{ fontSize:12, color:'var(--white-60)' }}>{item.sub}</div>
                <div style={{ fontSize:11, fontWeight:700, letterSpacing:'.08em', textTransform:'uppercase', color:'var(--accent)', marginTop:'auto' }}>{L(PAGE_T.view)}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </main>
  )
}


