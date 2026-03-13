'use client'
import { useState } from 'react'
import Link from 'next/link'
import { useApp } from '@/components/ui/ThemeProvider'
import { getProductsByCategory, buildAffiliateUrl, type Lang } from '@/lib/data'

function T(obj: Record<Lang, string>, lang: Lang): string { return obj[lang] ?? obj.en }

const PRODUCTS = getProductsByCategory('shavers')

const PAGE_T = {
  breadcrumb: { en: 'Best Shavers 2026', es: 'Mejores Afeitadoras 2026', de: 'Beste Rasierer 2026' },
  picks: { en: 'Picks', es: 'Selecciones', de: 'Empfehlungen' },
  kicker: { en: '8 Foil Shavers Tested · Updated February 2026', es: '8 Afeitadoras Probadas · Actualizado Febrero 2026', de: '8 Folienrasierer getestet · Aktualisiert Februar 2026' },
  h1a: { en: 'BEST BARBER', es: 'MEJORES', de: 'BESTE BARBIER' },
  h1b: { en: 'SHAVERS', es: 'AFEITADORAS', de: 'RASIERER' },
  h1c: { en: '2026', es: '2026', de: '2026' },
  qaTitle: { en: 'Quick Answer', es: 'Respuesta Rapida', de: 'Schnelle Antwort' },
  qa: {
    en: 'The Andis ProFoil Lithium Titanium Foil Shaver ($59.99) is the best professional barber shaver for 2026, scoring 9.3/10. Hypoallergenic titanium foil, 80-min runtime, zero skin drag. For the closest BBS finish, the BaByliss FoilFX02 ($79.99) scores 9.0/10.',
    es: 'La Andis ProFoil Lithium Titanium ($59.99) es la mejor afeitadora profesional para 2026, con 9.3/10. Para el acabado BBS mas cercano, la BaByliss FoilFX02 ($79.99) tiene 9.0/10.',
    de: 'Der Andis ProFoil Lithium Titanium ($59,99) ist der beste professionelle Barbier-Rasierer 2026, mit 9,3/10. Fur das engste BBS-Finish ist der BaByliss FoilFX02 ($79,99) mit 9,0/10 die Wahl.',
  },
  intro: {
    en: 'We tested 8 professional foil shavers over 3 months in active barbershops in New York and Los Angeles. Every score is based on real bald head finishing and neck cleanup - skin closeness, drag, heat buildup, and battery life under daily professional use.',
    es: 'Probamos 8 afeitadoras de lamina profesionales durante 3 meses en barberias activas en Nueva York y Los Angeles.',
    de: 'Wir haben 8 professionelle Folienrasierer uber 3 Monate in aktiven Barbershops in New York und Los Angeles getestet.',
  },
  filterAll: { en: 'All Picks', es: 'Todas', de: 'Alle' },
  filterBudget: { en: 'Under $65', es: 'Menos de $65', de: 'Unter $65' },
  filterPremium: { en: 'Premium ($70+)', es: 'Premium ($70+)', de: 'Premium ($70+)' },
  results: { en: 'results', es: 'resultados', de: 'Ergebnisse' },
  verdict: { en: 'VERDICT', es: 'VEREDICTO', de: 'URTEIL' },
  pros: { en: 'PROS', es: 'PROS', de: 'VORTEILE' },
  cons: { en: 'CONS', es: 'CONS', de: 'NACHTEILE' },
  scores: { en: 'SCORE BREAKDOWN', es: 'DESGLOSE DE PUNTUACION', de: 'PUNKTE-AUFSCHLUSSELUNG' },
  specs: { en: 'SPECS', es: 'ESPECIFICACIONES', de: 'SPECS' },
  checkPrice: { en: "Check Today's Price on Amazon", es: 'Ver Precio Hoy en Amazon', de: 'Heutigen Preis bei Amazon' },
  affNote: { en: 'Affiliate link - no extra cost. We may earn a commission.', es: 'Enlace de afiliado - sin costo adicional.', de: 'Affiliate-Link - keine Mehrkosten.' },
  related: { en: 'RELATED PICKS', es: 'RELACIONADOS', de: 'VERWANDTE' },
  relatedKicker: { en: 'See Also', es: 'Ver Tambien', de: 'Siehe auch' },
  view: { en: 'View', es: 'Ver', de: 'Ansehen' },
  noResults: { en: 'No shavers match this filter.', es: 'Ninguna afeitadora coincide.', de: 'Kein Rasierer entspricht dem Filter.' },
  methodTitle: { en: 'HOW WE TEST', es: 'COMO PROBAMOS', de: 'WIE WIR TESTEN' },
  faqTitle: { en: 'COMMON QUESTIONS', es: 'PREGUNTAS FRECUENTES', de: 'HAUFIGE FRAGEN' },
  guideTitle: { en: 'HOW TO CHOOSE THE RIGHT SHAVER', es: 'COMO ELEGIR LA AFEITADORA CORRECTA', de: 'WIE MAN DEN RICHTIGEN RASIERER WAHLT' },
  guideKicker: { en: 'Buying Guide - 2026 Edition', es: 'Guia de Compra - Edicion 2026', de: 'Kaufratgeber - Ausgabe 2026' },
}

const METHODS = {
  en: [
    { icon: '🪒', label: 'Closeness Test', desc: 'Each shaver tested on bald head finishing and neck cleanup across 4 skin types: normal, sensitive, coarse-bearded, and post-fade.' },
    { icon: '🔋', label: 'Battery Life Test', desc: 'Shavers run continuously until cutoff. We measure actual runtime vs manufacturer claims under professional use conditions.' },
    { icon: '🌡️', label: 'Heat Buildup Test', desc: 'Shaver head temperature measured after 10 consecutive bald head finishes. Heat above 42C causes client discomfort.' },
    { icon: '🛡️', label: 'Skin Safety Test', desc: 'Foil shaver used on 20 clients with sensitive skin. We track razor burn, ingrown hair risk, and post-shave irritation rate.' },
  ],
  es: [
    { icon: '🪒', label: 'Prueba de Cercania', desc: 'Cada afeitadora probada en acabados de cabeza rapada y limpieza de cuello en 4 tipos de piel.' },
    { icon: '🔋', label: 'Prueba de Bateria', desc: 'Las afeitadoras se ejecutan continuamente hasta el corte. Medimos la autonomia real frente a las afirmaciones del fabricante.' },
    { icon: '🌡️', label: 'Prueba de Calor', desc: 'Temperatura de la cabeza de la afeitadora medida despues de 10 acabados consecutivos de cabeza rapada.' },
    { icon: '🛡️', label: 'Prueba de Seguridad para la Piel', desc: 'Afeitadora de lamina usada en 20 clientes con piel sensible.' },
  ],
  de: [
    { icon: '🪒', label: 'Nahrasurtest', desc: 'Jeder Rasierer auf Glatzkopf-Finishing und Nackenreinigung an 4 Hauttypen getestet.' },
    { icon: '🔋', label: 'Akkutest', desc: 'Rasierer laufen kontinuierlich bis zum Ausschalten. Wir messen die tatsachliche Laufzeit vs. Herstellerangaben.' },
    { icon: '🌡️', label: 'Hitzetest', desc: 'Rasiererkopftemperatur nach 10 aufeinanderfolgenden Glatzkopf-Finishes gemessen.' },
    { icon: '🛡️', label: 'Hautsicherheitstest', desc: 'Folienrasierer bei 20 Kunden mit empfindlicher Haut verwendet.' },
  ],
}

const FAQS = {
  en: [
    { q: 'What is the best foil shaver for barbers in 2026?', a: 'The Andis ProFoil Lithium Titanium is our top pick for 2026 at $59.99, scoring 9.3/10. For the closest BBS finish, the BaByliss FoilFX02 at $79.99 scores 9.0/10.' },
    { q: 'Andis ProFoil vs BaByliss FoilFX02 - which is better for professional barbers?', a: 'Andis ProFoil for high-volume shops - 80-min battery, better for sensitive skin. BaByliss FoilFX02 for barbers who prioritize the closest BBS finish. Top shops stock both.' },
    { q: 'Can barbers use a foil shaver instead of a straight razor?', a: 'Yes - foil shavers are faster, safer for all skin types, and significantly easier to sanitize between clients.' },
    { q: 'How long do professional foil shavers last?', a: 'The foil and inner cutter should be replaced every 12-18 months under daily professional use. The motor housing typically lasts 3-5 years.' },
    { q: 'How do you sanitize a foil shaver between clients?', a: 'Remove the foil head, brush out clippings, spray with Barbicide, let air dry 2 minutes. Never submerge the motor unit.' },
  ],
  es: [
    { q: 'Cual es la mejor afeitadora de lamina para barberos en 2026?', a: 'La Andis ProFoil Lithium Titanium es nuestra mejor opcion para 2026 a $59.99, con 9.3/10. La BaByliss FoilFX02 a $79.99 tiene 9.0/10.' },
    { q: 'Andis ProFoil vs BaByliss FoilFX02 - cual es mejor?', a: 'Andis ProFoil para tiendas de alto volumen. BaByliss FoilFX02 para el acabado BBS mas cercano.' },
    { q: 'Pueden los barberos usar una afeitadora de lamina en lugar de una navaja?', a: 'Si - son mas rapidas, mas seguras y mas faciles de desinfectar.' },
    { q: 'Cuanto duran las afeitadoras de lamina profesionales?', a: 'El conjunto de lamina debe reemplazarse cada 12-18 meses bajo uso profesional diario.' },
    { q: 'Como se desinfecta una afeitadora entre clientes?', a: 'Retire la cabeza, limpie los recortes, rocie con Barbicide y deje secar 2 minutos.' },
  ],
  de: [
    { q: 'Was ist der beste Folienrasierer fur Barbiere 2026?', a: 'Der Andis ProFoil bei $59,99 mit 9,3/10. Der BaByliss FoilFX02 bei $79,99 mit 9,0/10.' },
    { q: 'Andis ProFoil vs BaByliss FoilFX02 - was ist besser?', a: 'Andis ProFoil fur Hochvolumen-Shops. BaByliss FoilFX02 fur das engste BBS-Finish.' },
    { q: 'Konnen Barbiere einen Folienrasierer statt eines Rasiermessers verwenden?', a: 'Ja - schneller, sicherer und einfacher zu desinfizieren.' },
    { q: 'Wie lange halten professionelle Folienrasierer?', a: 'Das Folienset sollte alle 12-18 Monate ausgetauscht werden.' },
    { q: 'Wie desinfiziert man einen Folienrasierer?', a: 'Folienkopf entfernen, ausbursten, mit Barbicide einspruhen, 2 Minuten lufttrocknen.' },
  ],
}

const GUIDES = {
  en: [
    { title: 'Foil vs Rotary', body: 'Foil shavers use oscillating blades under a thin metal screen - ideal for straight, precise finishing on bald heads and neck lines. Rotary shavers use circular blades that flex to contours. For professional barbershop use, foil wins every time: closer cut, easier to clean, better for sensitive skin.' },
    { title: 'Battery Life', body: 'For a busy barbershop doing 8-10 bald head finishes per day, you need minimum 60 minutes runtime. The Andis ProFoil gives 80 min, BaByliss FoilFX02 gives 60 min. Both charge fully in 60-90 minutes. Always have a backup charged.' },
    { title: 'Sanitation Standards', body: 'State board regulations require disinfecting shaver heads between every client. Foil heads must be removable for proper cleaning. Both Andis and BaByliss foil heads detach for Barbicide soaking. Replace foils at first sign of nicking or pulling.' },
  ],
  es: [
    { title: 'Lamina vs Rotativo', body: 'Las afeitadoras de lamina usan cuchillas oscilantes bajo una pantalla metalica - ideales para acabados precisos en cabezas rapadas. Para uso profesional en barberia, la lamina gana siempre.' },
    { title: 'Duracion de Bateria', body: 'Para una barberia ocupada con 8-10 acabados por dia, necesitas minimo 60 minutos de autonomia. Andis ProFoil da 80 min, BaByliss FoilFX02 da 60 min.' },
    { title: 'Estandares de Sanidad', body: 'Las regulaciones requieren desinfectar las cabezas de afeitadora entre cada cliente. Ambas cabezas Andis y BaByliss se desmontan para limpieza con Barbicide.' },
  ],
  de: [
    { title: 'Folie vs Rotary', body: 'Folienrasierer verwenden oszillierende Klingen unter einem dunnen Metallgitter - ideal fur prasize Finishing auf Glatzkopfen. Fur professionellen Barbershop-Einsatz gewinnt Folie immer.' },
    { title: 'Akkulaufzeit', body: 'Fur einen belebten Barbershop mit 8-10 Glatzkopf-Finishes pro Tag benotigst du mindestens 60 Minuten Laufzeit. Andis ProFoil gibt 80 Min, BaByliss FoilFX02 gibt 60 Min.' },
    { title: 'Hygienestandards', body: 'Vorschriften verlangen die Desinfektion der Rasiererkopfe zwischen jedem Kunden. Beide Andis und BaByliss Folienkapfe lassen sich fur Barbicide-Reinigung abnehmen.' },
  ],
}

const RELATED = [
  { href: '/picks/razors', label: { en: 'Best Razors', es: 'Mejores Navajas', de: 'Beste Rasiermesser' } },
  { href: '/picks/best-trimmers', label: { en: 'Best Trimmers', es: 'Mejores Recortadoras', de: 'Beste Trimmer' } },
  { href: '/picks/best-clippers', label: { en: 'Best Clippers', es: 'Mejores Maquinas', de: 'Beste Haarschneidemaschinen' } },
]

export default function ShaversClient() {
  const { lang } = useApp()
  const [filter, setFilter] = useState<'all' | 'budget' | 'premium'>('all')
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const filtered = PRODUCTS.filter(p => {
    if (filter === 'budget') return p.price < 65
    if (filter === 'premium') return p.price >= 70
    return true
  })

  return (
    <main className="picks-page">
      <nav className="picks-breadcrumb">
        <Link href="/">Home</Link>
        <span>/</span>
        <Link href="/picks">{T(PAGE_T.picks, lang)}</Link>
        <span>/</span>
        <span>{T(PAGE_T.breadcrumb, lang)}</span>
      </nav>

      <header className="picks-hero">
        <p className="picks-kicker">{T(PAGE_T.kicker, lang)}</p>
        <h1>
          <span className="picks-h1a">{T(PAGE_T.h1a, lang)}</span>{' '}
          <span className="picks-h1b">{T(PAGE_T.h1b, lang)}</span>{' '}
          <span className="picks-h1c">{T(PAGE_T.h1c, lang)}</span>
        </h1>
        <div className="picks-qa-box">
          <p className="picks-qa-title">{T(PAGE_T.qaTitle, lang)}</p>
          <p>{T(PAGE_T.qa, lang)}</p>
        </div>
        <p className="picks-intro">{T(PAGE_T.intro, lang)}</p>
      </header>

      <div className="picks-filters">
        {(['all','budget','premium'] as const).map(f => (
          <button key={f} className={`picks-filter-btn${filter === f ? ' active' : ''}`} onClick={() => setFilter(f)}>
            {f === 'all' ? T(PAGE_T.filterAll, lang) : f === 'budget' ? T(PAGE_T.filterBudget, lang) : T(PAGE_T.filterPremium, lang)}
          </button>
        ))}
        <span className="picks-count">{filtered.length} {T(PAGE_T.results, lang)}</span>
      </div>

      {filtered.length === 0 && <p className="picks-no-results">{T(PAGE_T.noResults, lang)}</p>}

      <div className="picks-grid">
        {filtered.map((p, i) => (
          <article key={p.id} className="picks-card">
            <div className="picks-card-rank">#{i + 1}</div>
            {p.badge && <div className="picks-badge">{T(p.badge, lang)}</div>}
            <div className="picks-card-header">
              <h2>{p.brand} {p.name}</h2>
              <div className="picks-score">{p.score}<span>/10</span></div>
            </div>
            <div className="picks-stars">
              <span>{'★'.repeat(Math.round(p.starRating))}{'☆'.repeat(5 - Math.round(p.starRating))}</span>
              {' '}<span>{p.starRating} ({p.reviewCount.toLocaleString()} reviews)</span>
            </div>
            <p className="picks-price">${p.price}</p>

            <div className="picks-verdict">
              <p className="picks-label">{T(PAGE_T.verdict, lang)}</p>
              <p>{String((p.verdict as Record<Lang, string>)[lang] ?? (p.verdict as Record<Lang, string>).en)}</p>
            </div>

            <div className="picks-pros-cons">
              <div className="picks-pros">
                <p className="picks-label">{T(PAGE_T.pros, lang)}</p>
                <ul>{((p.pros as Record<Lang, string[]>)[lang] ?? (p.pros as Record<Lang, string[]>).en)?.map((pro: string, j: number) => <li key={j}>✓ {pro}</li>)}</ul>
              </div>
              <div className="picks-cons">
                <p className="picks-label">{T(PAGE_T.cons, lang)}</p>
                <ul>{((p.cons as Record<Lang, string[]>)[lang] ?? (p.cons as Record<Lang, string[]>).en)?.map((con: string, j: number) => <li key={j}>✗ {con}</li>)}</ul>
              </div>
            </div>

            <div className="picks-scores">
              <p className="picks-label">{T(PAGE_T.scores, lang)}</p>
              {p.scoreBreakdown && p.scoreBreakdown.map((item, idx) => (
                <div key={idx} className="picks-score-row">
                  <span>{item.label[lang] ?? item.label.en}</span>
                  <div className="picks-score-bar"><div style={{ width: `${item.score * 10}%` }} /></div>
                  <span>{item.score}</span>
                </div>
              ))}
            </div>

            <div className="picks-specs">
              <p className="picks-label">{T(PAGE_T.specs, lang)}</p>
              <div className="picks-specs-grid">
                {'motor' in p.specs && <><span>Motor</span><span>{(p.specs as any).motor}</span></>}
                {'battery' in p.specs && <><span>Runtime</span><span>{(p.specs as any).battery}</span></>}
                {'cordless' in p.specs && <><span>Cordless</span><span>{(p.specs as any).cordless ? 'Yes' : 'No'}</span></>}
                {'warranty' in p.specs && <><span>Warranty</span><span>{(p.specs as any).warranty}</span></>}
              </div>
            </div>

            <a href={buildAffiliateUrl(p.asin)} target="_blank" rel="noopener noreferrer sponsored" className="picks-cta">
              {T(PAGE_T.checkPrice, lang)}
            </a>
            <p className="picks-aff-note">{T(PAGE_T.affNote, lang)}</p>
          </article>
        ))}
      </div>

      <section className="picks-guide">
        <p className="picks-kicker">{T(PAGE_T.guideKicker, lang)}</p>
        <h2>{T(PAGE_T.guideTitle, lang)}</h2>
        {GUIDES[lang]?.map((g, i) => (
          <div key={i} className="picks-guide-section">
            <h3>{g.title}</h3>
            <p>{g.body}</p>
          </div>
        ))}
      </section>

      <section className="picks-method">
        <h2>{T(PAGE_T.methodTitle, lang)}</h2>
        <div className="picks-method-grid">
          {METHODS[lang]?.map((m, i) => (
            <div key={i} className="picks-method-card">
              <span className="picks-method-icon">{m.icon}</span>
              <h3>{m.label}</h3>
              <p>{m.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="picks-faq">
        <h2>{T(PAGE_T.faqTitle, lang)}</h2>
        {FAQS[lang]?.map((f, i) => (
          <div key={i} className="picks-faq-item">
            <button className="picks-faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
              {f.q} <span>{openFaq === i ? '−' : '+'}</span>
            </button>
            {openFaq === i && <p className="picks-faq-a">{f.a}</p>}
          </div>
        ))}
      </section>

      <section className="picks-related">
        <p className="picks-kicker">{T(PAGE_T.relatedKicker, lang)}</p>
        <h2>{T(PAGE_T.related, lang)}</h2>
        <div className="picks-related-grid">
          {RELATED.map((r, i) => (
            <Link key={i} href={r.href} className="picks-related-card">
              <span>{T(r.label, lang)}</span> <span>→</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
