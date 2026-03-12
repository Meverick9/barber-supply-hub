'use client'
import Link from 'next/link'
import { useApp } from '@/components/ui/ThemeProvider'
import { PRODUCTS, buildAffiliateUrl } from '@/lib/data'
import type { Lang } from '@/lib/data'

function T(obj: Record<Lang, string>, lang: Lang) { return obj[lang] ?? obj.en }

const PAGE_T = {
  kicker: { en:'Tested by Pro Barbers — 2026', es:'Probado por Barberos Pro — 2026', de:'Von Profi-Barbieren getestet — 2026' },
  title: { en:'BEST BARBER\nSHAVERS', es:'MEJORES\nAFEITADORAS', de:'BESTE BARBER\nSHAVER' },
  sub: { en:'Foil shavers for skin-close fades and clean necklines. Tested in real barbershops.', es:'Afeitadoras de lámina para acabados al ras y líneas limpias.', de:'Folienrasierer für hautnahe Fades und saubere Nackenlinie.' },
  checkPrice: { en:'Check Price on Amazon →', es:'Ver Precio en Amazon →', de:'Preis auf Amazon →' },
  affNote: { en:'Affiliate link — we earn a commission at no extra cost to you.', es:'Enlace de afiliado — sin costo adicional.', de:'Affiliate-Link — keine Mehrkosten für dich.' },
  whyTitle: { en:'Why You Need a Foil Shaver', es:'Por qué necesitas una afeitadora de lámina', de:'Warum du einen Folienrasierer brauchst' },
  whyText: { en:'Clippers get close — foil shavers get skin-close. For the final pass on bald fades, necklines, and temple cleanup, a foil shaver delivers a razor-smooth finish without the blade risk. Both Andis and BaByliss are industry standard in professional barbershops worldwide.', es:'Las cortadoras se acercan, las afeitadoras de lámina llegan hasta la piel. Para el toque final en degradados al cero, nuca y sienes, una afeitadora de lámina da un acabado suave como navaja sin el riesgo de la cuchilla.', de:'Haarschneider kommen nah dran — Folienrasierer kommen hautnah. Für den letzten Pass bei Glatzen-Fades, Nackenlinien und Schläfen liefert ein Folienrasierer ein rasierglattes Ergebnis ohne Klingenrisiko.' },
  specsTitle: { en:'Key Specs', es:'Especificaciones', de:'Technische Daten' },
  backToPicks: { en:'← All Picks', es:'← Todos los Picks', de:'← Alle Picks' },
}

const SHAVER_DETAILS: Record<string, {
  verdict: Record<Lang, string>
  specs: { label: Record<Lang, string>; value: string }[]
  pros: Record<Lang, string>[]
  cons: Record<Lang, string>[]
}> = {
  'andis-profoil': {
    verdict: {
      en: 'The industry standard. Gold titanium hypoallergenic foil, powerful linear motor, runs cool all day. Best value professional foil shaver on the market.',
      es: 'El estándar de la industria. Lámina de titanio dorado hipoalergénica, potente motor lineal, funciona frío todo el día.',
      de: 'Der Industriestandard. Hypoallergene Goldtitan-Folie, leistungsstarker Linearmotor, läuft den ganzen Tag kühl.',
    },
    specs: [
      { label: { en:'Motor', es:'Motor', de:'Motor' }, value: 'Linear' },
      { label: { en:'Foil', es:'Lámina', de:'Folie' }, value: 'Gold Titanium' },
      { label: { en:'Cord', es:'Cable', de:'Kabel' }, value: 'Corded' },
      { label: { en:'Weight', es:'Peso', de:'Gewicht' }, value: '6.4 oz' },
    ],
    pros: [
      { en:'Hypoallergenic gold foil — no skin irritation', es:'Lámina de oro hipoalergénica — sin irritación', de:'Hypoallergene Goldfolie — keine Hautreizung' },
      { en:'Runs cool — no heat buildup during long sessions', es:'No se calienta durante sesiones largas', de:'Bleibt kühl — kein Hitzestau bei langen Sessions' },
      { en:'Industry-proven — used in barbershops worldwide', es:'Probado en la industria — usado en barberías de todo el mundo', de:'Branchenbewährt — in Barbershops weltweit verwendet' },
    ],
    cons: [
      { en:'Corded only — limits movement at the chair', es:'Solo con cable — limita el movimiento', de:'Nur mit Kabel — begrenzt die Bewegungsfreiheit' },
      { en:'Replacement foils sold separately', es:'Láminas de repuesto se venden por separado', de:'Ersatzfolien separat erhältlich' },
    ],
  },
  'babyliss-foilfx02': {
    verdict: {
      en: 'The quietest professional foil shaver available. Rose gold finish, whisper-quiet motor, preferred by barbers who work in high-end salons.',
      es: 'La afeitadora de lámina profesional más silenciosa. Motor ultra-silencioso, preferida en salones de lujo.',
      de: 'Der leiseste professionelle Folienrasierer. Flüsterleiser Motor, bevorzugt in High-End-Salons.',
    },
    specs: [
      { label: { en:'Motor', es:'Motor', de:'Motor' }, value: 'Quiet Rotary' },
      { label: { en:'Foil', es:'Lámina', de:'Folie' }, value: 'Rose Gold' },
      { label: { en:'Cord', es:'Cable', de:'Kabel' }, value: 'Corded' },
      { label: { en:'Weight', es:'Peso', de:'Gewicht' }, value: '5.9 oz' },
    ],
    pros: [
      { en:'Exceptionally quiet — ideal for client comfort', es:'Excepcionalmente silencioso — ideal para la comodidad del cliente', de:'Außergewöhnlich leise — ideal für den Komfort des Kunden' },
      { en:'Rose gold aesthetic — premium look on the station', es:'Estética oro rosado — aspecto premium en la estación', de:'Roségold-Optik — Premium-Look an der Station' },
      { en:'Slightly closer shave than Andis', es:'Afeitado ligeramente más apurado que Andis', de:'Etwas engerer Schnitt als Andis' },
    ],
    cons: [
      { en:'$20 more expensive than Andis ProFoil', es:'$20 más caro que el Andis ProFoil', de:'$20 teurer als Andis ProFoil' },
      { en:'Less durable under heavy daily use', es:'Menos duradero bajo uso diario intensivo', de:'Weniger langlebig bei starkem täglichem Gebrauch' },
    ],
  },
}

export default function ShaversClient() {
  const { lang } = useApp()
  const shavers = PRODUCTS.filter(p => p.category === 'shavers').sort((a, b) => a.rank - b.rank)

  const handleAff = (name: string, pos: number) => {
    if (typeof window !== 'undefined' && window.gtag)
      window.gtag('event', 'affiliate_click', { product_name: name, list_position: pos, page_language: lang })
  }

  return (
    <main>
      {/* ══ HERO ══ */}
      <section style={{ background:'var(--dark-2)', borderBottom:'1px solid var(--border)', padding:'64px 0 48px' }}>
        <div className="container">
          <Link href="/picks" style={{ fontSize:11, fontWeight:700, letterSpacing:'.1em', textTransform:'uppercase', color:'var(--white-60)', display:'inline-block', marginBottom:24 }}>
            {T(PAGE_T.backToPicks, lang)}
          </Link>
          <span className="kicker">{T(PAGE_T.kicker, lang)}</span>
          <h1 style={{ fontFamily:'var(--f-display)', fontSize:'clamp(48px,7vw,96px)', lineHeight:.9, marginBottom:20 }}>
            {T(PAGE_T.title, lang).split('\n').map((l, i) => <span key={i} style={{ display:'block' }}>{l}</span>)}
          </h1>
          <p style={{ fontSize:16, color:'var(--white-60)', maxWidth:560, lineHeight:1.75 }}>{T(PAGE_T.sub, lang)}</p>
        </div>
      </section>

      {/* ══ PRODUCTS ══ */}
      <section>
        <div className="container">
          <div style={{ display:'flex', flexDirection:'column', gap:32 }}>
            {shavers.map((p, i) => {
              const details = SHAVER_DETAILS[p.id]
              return (
                <article key={p.id} className="card" style={{ overflow:'hidden' }} itemScope itemType="https://schema.org/Product">
                  {/* Header */}
                  <div className="card-header">
                    <div className="card-rank">{String(p.rank).padStart(2, '0')}</div>
                    <div style={{ flex:1 }}>
                      <div style={{ fontSize:9, fontWeight:700, letterSpacing:'.14em', textTransform:'uppercase', color:'var(--accent)', marginBottom:2 }}>{p.brand}</div>
                      <h2 style={{ fontFamily:'var(--f-display)', fontSize:28, lineHeight:1 }} itemProp="name">{p.name}</h2>
                    </div>
                    <div style={{ fontSize:40, marginRight:8 }}>{p.emoji}</div>
                    <div className="card-score">
                      <div className="card-score-num" style={{ color:'var(--accent)' }}>{p.score}</div>
                      <div style={{ fontSize:10, color:'var(--white-60)' }}>/10</div>
                    </div>
                  </div>

                  <div className="card-body">
                    {/* Verdict */}
                    {details && (
                      <p style={{ fontSize:14, color:'var(--white-60)', lineHeight:1.75, marginBottom:24, borderLeft:'2px solid var(--accent)', paddingLeft:14 }}>
                        {T(details.verdict, lang)}
                      </p>
                    )}

                    <div className="grid-2" style={{ marginBottom:24 }}>
                      {/* Specs */}
                      {details && (
                        <div>
                          <div style={{ fontSize:10, fontWeight:700, letterSpacing:'.12em', textTransform:'uppercase', color:'var(--white-60)', marginBottom:12 }}>{T(PAGE_T.specsTitle, lang)}</div>
                          <div className="grid-specs">
                            {details.specs.map((s, j) => (
                              <div key={j} style={{ padding:'8px 0', borderBottom:'1px solid var(--border)' }}>
                                <div style={{ fontSize:9, color:'var(--white-60)', textTransform:'uppercase', letterSpacing:'.08em' }}>{T(s.label, lang)}</div>
                                <div style={{ fontSize:13, fontWeight:600, marginTop:2 }}>{s.value}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Pros / Cons */}
                      {details && (
                        <div className="grid-pros-cons">
                          <div>
                            <div style={{ fontSize:10, fontWeight:700, letterSpacing:'.12em', textTransform:'uppercase', color:'var(--green)', marginBottom:10 }}>Pros</div>
                            {details.pros.map((pro, j) => (
                              <div key={j} style={{ fontSize:12, color:'var(--white-60)', padding:'5px 0', borderBottom:'1px solid var(--border)', display:'flex', gap:8, alignItems:'flex-start' }}>
                                <span style={{ color:'var(--green)', flexShrink:0 }}>✓</span>{T(pro, lang)}
                              </div>
                            ))}
                          </div>
                          <div>
                            <div style={{ fontSize:10, fontWeight:700, letterSpacing:'.12em', textTransform:'uppercase', color:'var(--red)', marginBottom:10 }}>Cons</div>
                            {details.cons.map((con, j) => (
                              <div key={j} style={{ fontSize:12, color:'var(--white-60)', padding:'5px 0', borderBottom:'1px solid var(--border)', display:'flex', gap:8, alignItems:'flex-start' }}>
                                <span style={{ color:'var(--red)', flexShrink:0 }}>✗</span>{T(con, lang)}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* CTA */}
                    <div className="cta-box" style={{ display:'flex', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap', gap:14 }}>
                      <div>
                        <div className="cta-price" itemProp="offers" itemScope itemType="https://schema.org/Offer">
                          $<span itemProp="price">{p.price}</span>
                          <meta itemProp="priceCurrency" content="USD" />
                        </div>
                        <div style={{ fontSize:10, color:'var(--white-60)', marginTop:2 }}>on Amazon</div>
                      </div>
                      <a href={buildAffiliateUrl(p.asin)} target="_blank" rel="noopener nofollow"
                        className="btn btn-primary"
                        onClick={() => handleAff(`${p.brand} ${p.name}`, i + 1)}>
                        {T(PAGE_T.checkPrice, lang)}
                      </a>
                    </div>
                    <p style={{ fontSize:9, color:'var(--white-60)', opacity:.5, marginTop:8 }}>{T(PAGE_T.affNote, lang)}</p>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* ══ WHY SECTION ══ */}
      <section style={{ background:'var(--dark-2)', borderTop:'1px solid var(--border)' }}>
        <div className="container-sm">
          <h2 style={{ fontFamily:'var(--f-display)', fontSize:'clamp(28px,4vw,44px)', marginBottom:20 }}>{T(PAGE_T.whyTitle, lang)}</h2>
          <p className="prose" style={{ fontSize:15, color:'var(--white-60)', lineHeight:1.8 }}>{T(PAGE_T.whyText, lang)}</p>
        </div>
      </section>
    </main>
  )
}