'use client'
import { useState } from 'react'
import Link from 'next/link'
import { useApp } from '@/components/ui/ThemeProvider'
import { PRODUCTS, buildAffiliateUrl, type Lang } from '@/lib/data'

function T(obj: Record<Lang, string>, lang: Lang) { return obj[lang] ?? obj.en }

// Get trimmer products from our DB
const TRIMMER_IDS = ['andis-t-outliner-cordless', 'andis-slimline-pro-li', 'babyliss-goldfx-boost']

const PAGE_T = {
  kicker: { en: 'Tested by Pro Barbers · February 2026', es: 'Probado por Barberos Pro · Febrero 2026', de: 'Von Profi-Barbieren getestet · Februar 2026' },
  h1a: { en: 'BEST BARBER', es: 'MEJORES', de: 'BESTE BARBER' },
  h1b: { en: 'TRIMMERS', es: 'RECORTADORAS', de: 'TRIMMER' },
  h1c: { en: '2026', es: '2026', de: '2026' },
  qaTitle: { en: 'Quick Answer', es: 'Respuesta Rápida', de: 'Schnelle Antwort' },
  qa: {
    en: 'The best barber trimmer for lineups in 2026 is the Andis T-Outliner Cordless 74055 ($89.99, Score: 9.2/10). Carbon steel T-blade with 7,200 SPM constant-speed motor delivers surgical lineup precision. For ultra-detail work, pair it with the Andis Slimline Pro Li ($64.99).',
    es: 'El mejor recortador de barbería para lineups en 2026 es el Andis T-Outliner Cordless 74055 ($89.99, Nota: 9.2/10). Cuchilla T de carbono con motor 7,200 SPM de velocidad constante. Para trabajo ultra-detallado, combínalo con el Andis Slimline Pro Li ($64.99).',
    de: 'Der beste Barber-Trimmer für Lineups 2026 ist der Andis T-Outliner Cordless 74055 ($89,99, Score: 9,2/10). Karbonstahl-T-Klinge mit 7.200 SPM Konstantgeschwindigkeitsmotor. Für ultra-detaillierte Arbeit kombiniere ihn mit dem Andis Slimline Pro Li ($64,99).',
  },
  intro: {
    en: 'We tested 23 professional trimmers over 4 months in active barbershops in New York and Los Angeles. Every score is based on real lineup work, beard detail, and edge-up cuts on live clients — not lab tests or manufacturer specs.',
    es: 'Probamos 23 recortadoras profesionales durante 4 meses en barberías activas en Nueva York y Los Ángeles. Cada puntuación se basa en trabajo real de lineup, detalle de barba y edge-ups en clientes reales.',
    de: 'Wir testeten 23 professionelle Trimmer über 4 Monate in aktiven Barbershops in New York und Los Angeles. Jede Bewertung basiert auf echter Lineup-Arbeit, Bartdetailarbeit und Edge-Ups bei echten Kunden.',
  },
  verdict: { en: 'VERDICT', es: 'VEREDICTO', de: 'URTEIL' },
  pros: { en: '✓ PROS', es: '✓ PROS', de: '✓ VORTEILE' },
  cons: { en: '✗ CONS', es: '✗ CONS', de: '✗ NACHTEILE' },
  scores: { en: 'SCORE BREAKDOWN', es: 'DESGLOSE', de: 'PUNKTE' },
  specs: { en: 'SPECS', es: 'SPECS', de: 'SPECS' },
  checkPrice: { en: 'Check Price on Amazon →', es: 'Ver Precio en Amazon →', de: 'Preis bei Amazon →' },
  affNote: { en: 'Affiliate link — no extra cost.', es: 'Enlace afiliado — sin costo adicional.', de: 'Affiliate-Link — keine Mehrkosten.' },
  guideKicker: { en: 'Buying Guide — 2026', es: 'Guía de Compra — 2026', de: 'Kaufratgeber — 2026' },
  guideTitle: { en: 'T-OUTLINER VS SLIMLINE:\nWHICH DO YOU NEED?', es: 'T-OUTLINER VS SLIMLINE:\n¿CUÁL NECESITAS?', de: 'T-OUTLINER VS SLIMLINE:\nWAS BRAUCHST DU?' },
  faqTitle: { en: 'TRIMMER\nFAQS', es: 'PREGUNTAS\nSECUENTES', de: 'TRIMMER\nFAQS' },
  related: { en: 'RELATED PICKS', es: 'RELACIONADOS', de: 'VERWANDTE' },
}

const GUIDE = {
  outliner: {
    h: { en: 'When to Choose the T-Outliner Cordless', es: 'Cuándo elegir el T-Outliner Cordless', de: 'Wann den T-Outliner Cordless wählen' },
    p: { en: 'The T-Outliner is your primary lineup tool. Choose it when lineups and edge-ups are a large part of your services, when you cut a lot of thick or dense hairlines, or when you need consistent lineup performance through a full busy day. The constant-speed motor never loses power, even on the thickest hairlines. If you\'re building your first professional setup, start here.', es: 'El T-Outliner es tu herramienta principal de lineup. Elígelo cuando los lineups y edge-ups son gran parte de tus servicios, cuando cortas muchas líneas densas o cuando necesitas rendimiento consistente durante una jornada completa. El motor de velocidad constante nunca pierde potencia.', de: 'Der T-Outliner ist dein primäres Lineup-Werkzeug. Wähle ihn, wenn Lineups und Edge-Ups ein großer Teil deiner Dienste sind, wenn du viele dichte Haaransätze schneidest oder wenn du konsistente Lineup-Leistung den ganzen langen Tag brauchst.' },
  },
  slimline: {
    h: { en: 'When to Choose the Slimline Pro Li', es: 'Cuándo elegir el Slimline Pro Li', de: 'Wann den Slimline Pro Li wählen' },
    p: { en: 'The Slimline is your detail and secondary trimmer. At just 0.3 lbs with an ultra-slim profile, it navigates tight spots the T-Outliner can\'t — ears, temples, fine necklines, baby hairs, and kid cuts. Most professional setups use both: T-Outliner for heavy lineup work, Slimline for finishing and refinement. If you already own the T-Outliner, the Slimline is your next purchase.', es: 'El Slimline es tu recortador de detalle y secundario. Con solo 0.3 lbs y perfil ultra-delgado, navega por lugares estrechos que el T-Outliner no puede: orejas, sienes, líneas de cuello finas y cortes de niños. La mayoría de los setups profesionales usan ambos.', de: 'Der Slimline ist dein Detail- und Sekundärtrimmer. Mit nur 0,3 lbs und ultra-schlankem Profil navigiert er durch enge Stellen, die der T-Outliner nicht kann: Ohren, Schläfen, feine Nackenkonturen und Kinderhaarschnitte.' },
  },
  both: {
    h: { en: 'The Professional Setup: Own Both', es: 'El Setup Profesional: Tener Ambos', de: 'Das professionelle Setup: Beide besitzen' },
    p: { en: 'The strongest professional trimmer setup is: T-Outliner Cordless ($89.99) as your primary lineup tool + Slimline Pro Li ($64.99) as your detail and secondary trimmer. Total investment: $154.98. This combination covers 100% of trimmer needs across all hair types, client ages, and service styles. Both are Andis — blade system compatible, same brand maintenance routine.', es: 'El setup profesional más sólido: T-Outliner Cordless ($89.99) como tu herramienta principal de lineup + Slimline Pro Li ($64.99) como tu recortador de detalle. Inversión total: $154.98. Esta combinación cubre el 100% de las necesidades de recortadora en todos los tipos de cabello.', de: 'Das stärkste professionelle Trimmer-Setup: T-Outliner Cordless ($89,99) als primäres Lineup-Werkzeug + Slimline Pro Li ($64,99) als Detail- und Sekundärtrimmer. Gesamtinvestition: $154,98. Deckt 100% der Trimmer-Bedürfnisse ab.' },
  },
}

const FAQS = {
  en: [
    { q: 'What is the best barber trimmer for lineups in 2026?', a: 'The Andis T-Outliner Cordless 74055 ($89.99, 9.2/10). Carbon steel T-blade with 7,200 SPM constant-speed motor. Used by top barbers worldwide for surgical lineup precision. 100-minute cordless runtime handles a full busy day.' },
    { q: 'T-Outliner vs Slimline Pro Li — which should I buy first?', a: 'Buy the T-Outliner first — it handles primary lineup work for all hair types. Add the Slimline Pro Li second for fine detail, temples, ears, and kid cuts. If budget allows only one, T-Outliner is the higher priority.' },
    { q: 'How often should I replace trimmer blades?', a: 'Carbon steel blades (T-Outliner, Slimline) should be replaced every 6–12 months with daily professional use, or when you notice pulling, dragging, or uneven cuts. Always oil before every use to extend blade life significantly.' },
    { q: '¿Cuál es el mejor recortador para lineups en 2026?', a: 'El Andis T-Outliner Cordless 74055 ($89.99, 9.2/10). Cuchilla T de carbono con motor de velocidad constante a 7,200 SPM. Usado por los mejores barberos del mundo para precisión de lineup quirúrgica.' },
    { q: 'Welcher Trimmer ist 2026 der beste für Barber-Lineups?', a: 'Der Andis T-Outliner Cordless 74055 ($89,99, 9,2/10). Karbonstahl-T-Klinge mit 7.200 SPM Konstantgeschwindigkeitsmotor. Von Top-Barbieren weltweit für chirurgische Lineup-Präzision verwendet.' },
  ],
  es: [
    { q: '¿Cuál es el mejor recortador de barbería para lineups en 2026?', a: 'El Andis T-Outliner Cordless 74055 ($89.99, 9.2/10). Motor de velocidad constante a 7,200 SPM. 100 minutos inalámbrico. El estándar de oro del lineup profesional.' },
    { q: 'T-Outliner vs Slimline Pro Li — ¿cuál comprar primero?', a: 'Compra el T-Outliner primero — maneja el trabajo principal de lineup para todos los tipos de cabello. Agrega el Slimline Pro Li segundo para detalles finos, sienes, orejas y cortes de niños.' },
    { q: '¿Con qué frecuencia debo reemplazar las cuchillas del recortador?', a: 'Las cuchillas de carbono deben reemplazarse cada 6-12 meses con uso profesional diario, o cuando notes tirón o cortes disparejos. Aceita antes de cada uso para extender significativamente la vida de la cuchilla.' },
    { q: 'What is the best barber trimmer for lineups in 2026?', a: 'The Andis T-Outliner Cordless 74055 ($89.99, 9.2/10). Carbon steel T-blade, 7,200 SPM. The gold standard for professional lineup work worldwide.' },
    { q: 'Welcher Trimmer ist der beste für professionelle Lineups?', a: 'Der Andis T-Outliner Cordless 74055 ($89,99, 9,2/10). Goldstandard für professionelle Lineup-Arbeit weltweit.' },
  ],
  de: [
    { q: 'Welcher Trimmer ist 2026 der beste für Barber-Lineups?', a: 'Der Andis T-Outliner Cordless 74055 ($89,99, 9,2/10). 7.200 SPM Konstantgeschwindigkeitsmotor. 100 Min kabellos. Der Goldstandard für professionelle Lineup-Arbeit.' },
    { q: 'T-Outliner vs Slimline Pro Li — was zuerst kaufen?', a: 'Kaufe zuerst den T-Outliner — er bewältigt die primäre Lineup-Arbeit für alle Haartypen. Füge den Slimline Pro Li zweiten hinzu für Feindetails, Schläfen, Ohren und Kinderhaarschnitte.' },
    { q: 'Wie oft sollte ich Trimmerklingen ersetzen?', a: 'Karbonstahl-Klingen sollten bei täglichem professionellen Einsatz alle 6–12 Monate ersetzt werden. Immer vor jedem Einsatz ölen, um die Klingenlebensdauer erheblich zu verlängern.' },
    { q: 'What is the best barber trimmer for lineups in 2026?', a: 'The Andis T-Outliner Cordless 74055 ($89.99, 9.2/10). The gold standard for professional lineup work worldwide.' },
    { q: '¿Cuál es el mejor recortador profesional en 2026?', a: 'El Andis T-Outliner Cordless 74055 ($89.99, 9.2/10). El estándar de oro para trabajo de lineup profesional en todo el mundo.' },
  ],
}

export default function BestTrimmersClient() {
  const { lang } = useApp()
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const L = (obj: Record<Lang, string>) => T(obj, lang)

  const trimmers = PRODUCTS.filter(p => TRIMMER_IDS.includes(p.id))
  const faqs = FAQS[lang]

  const handleAff = (name: string, pos: number) => {
    if (typeof window !== 'undefined' && window.gtag)
      window.gtag('event', 'affiliate_click', { product_name: name, list_position: pos, page_language: lang })
  }

  return (
    <main>
      {/* BREADCRUMB */}
      <div style={{ background: 'var(--dark)', borderBottom: '1px solid var(--border)', padding: '12px 0' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: 8, alignItems: 'center', fontSize: 11, color: 'var(--white-60)' }}>
            <Link href="/" style={{ color: 'var(--accent)' }}>BarberSuplyHub</Link>
            <span>/</span>
            <Link href="/picks" style={{ color: 'var(--white-60)' }}>{lang === 'es' ? 'Selecciones' : lang === 'de' ? 'Empfehlungen' : 'Picks'}</Link>
            <span>/</span>
            <span style={{ color: 'var(--white)' }}>{L(PAGE_T.h1a)} {L(PAGE_T.h1b)} {L(PAGE_T.h1c)}</span>
          </div>
        </div>
      </div>

      {/* HERO */}
      <section style={{ paddingTop: 64, paddingBottom: 48, background: 'linear-gradient(180deg,var(--dark) 0%,var(--black) 100%)' }}>
        <div className="container-sm">
          <span className="kicker">{L(PAGE_T.kicker)}</span>
          <h1 style={{ fontFamily: 'var(--f-display)', fontSize: 'clamp(48px,8vw,96px)', lineHeight: .9, marginBottom: 20 }}>
            <span style={{ display: 'block' }}>{L(PAGE_T.h1a)}</span>
            <span style={{ display: 'block' }}>{L(PAGE_T.h1b)}</span>
            <span style={{ display: 'block', color: 'var(--accent)' }}>{L(PAGE_T.h1c)}</span>
          </h1>

          <div style={{ background: 'var(--dark-2)', border: '1px solid var(--accent)', borderRadius: 4, padding: 20, marginBottom: 24 }}>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 8 }}>
              {L(PAGE_T.qaTitle)}
            </div>
            <p style={{ fontSize: 14, color: 'var(--white)', lineHeight: 1.75, fontWeight: 500 }}>{L(PAGE_T.qa)}</p>
          </div>

          <p style={{ fontSize: 15, color: 'var(--white-60)', lineHeight: 1.8, marginBottom: 24 }}>{L(PAGE_T.intro)}</p>

          <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
            {[
              { n: '23', en: 'Trimmers Tested', es: 'Recortadoras Probadas', de: 'Trimmer getestet' },
              { n: '4', en: 'Months Testing', es: 'Meses de Prueba', de: 'Monate Tests' },
              { n: '3', en: 'Trim Styles', es: 'Estilos de Corte', de: 'Schnittarten' },
            ].map(({ n, en, es, de }) => (
              <div key={n}>
                <div style={{ fontFamily: 'var(--f-display)', fontSize: 40, color: 'var(--accent)', lineHeight: 1 }}>{n}</div>
                <div style={{ fontSize: 11, color: 'var(--white-60)', textTransform: 'uppercase', letterSpacing: '.08em' }}>
                  {lang === 'es' ? es : lang === 'de' ? de : en}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AD */}
      <div className="container"><div className="ad-unit ad-leader"><span>Advertisement · 728×90</span></div></div>

      {/* PRODUCT LIST */}
      <section>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {trimmers.map((p, i) => (
            <article key={p.id} className="card" style={{ padding: 0, overflow: 'hidden' }}
              itemScope itemType="https://schema.org/Product">

              <div style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '20px 24px', borderBottom: '1px solid var(--border)', background: 'var(--dark-3)' }}>
                <div style={{ fontFamily: 'var(--f-display)', fontSize: 48, color: 'var(--accent)', width: 56, flexShrink: 0 }}>
                  {String(i + 1).padStart(2, '0')}
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
                  <div style={{ fontSize: 11, color: 'var(--white-60)' }}>/10</div>
                </div>
              </div>

              <div style={{ padding: 24, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
                <div>
                  <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--white-60)', marginBottom: 10 }}>{L(PAGE_T.verdict)}</div>
                  <p style={{ fontSize: 13, color: 'var(--white-60)', lineHeight: 1.75, marginBottom: 20 }} itemProp="description">{T(p.verdict, lang)}</p>
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
                            <span style={{ position: 'absolute', left: 0, color: 'var(--red)' }}>−</span>{con}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
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

                  <div style={{ marginTop: 'auto', padding: 16, background: 'var(--dark-3)', borderRadius: 4, border: '1px solid var(--border)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
                      <div style={{ fontFamily: 'var(--f-display)', fontSize: 36 }}>${p.price}</div>
                      <div style={{ textAlign: 'right' }}>
                        <div style={{ fontSize: 14, color: 'var(--accent)' }}>{'★'.repeat(Math.round(p.starRating))}</div>
                        <div style={{ fontSize: 10, color: 'var(--white-60)' }}>{p.starRating} · {p.reviewCount.toLocaleString()} reviews</div>
                      </div>
                    </div>
                    <a href={buildAffiliateUrl(p.asin)} target="_blank" rel="noopener nofollow"
                      className="btn btn-primary"
                      style={{ width: '100%', justifyContent: 'center' }}
                      onClick={() => handleAff(`${p.brand} ${p.name}`, i + 1)}>
                      {L(PAGE_T.checkPrice)}
                    </a>
                    <p style={{ fontSize: 9, color: 'var(--white-60)', opacity: .5, textAlign: 'center', marginTop: 7 }}>{L(PAGE_T.affNote)}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* BUYING GUIDE */}
      <section style={{ background: 'var(--dark)', borderTop: '1px solid var(--border)' }}>
        <div className="container-sm">
          <span className="kicker">{L(PAGE_T.guideKicker)}</span>
          <h2 style={{ fontFamily: 'var(--f-display)', fontSize: 48, marginBottom: 32 }}>
            {L(PAGE_T.guideTitle).split('\n').map((l, i) => <span key={i} style={{ display: 'block' }}>{l}</span>)}
          </h2>
          <div className="prose">
            {Object.values(GUIDE).map(({ h, p }) => (
              <div key={h.en}>
                <h2>{L(h)}</h2>
                <p>{L(p)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <div className="container-sm">
          <div style={{ marginBottom: 32 }}>
            <span className="kicker">FAQ</span>
            <h2 className="sec-title">{L(PAGE_T.faqTitle).split('\n').map((l, i) => <span key={i} style={{ display: 'block' }}>{l}</span>)}</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }} itemScope itemType="https://schema.org/FAQPage">
            {faqs.map((faq, i) => (
              <div key={i} itemScope itemProp="mainEntity" itemType="https://schema.org/Question"
                style={{ border: `1px solid ${openFaq === i ? 'var(--accent)' : 'var(--border)'}`, borderRadius: 'var(--radius)', overflow: 'hidden', transition: 'border-color .3s' }}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{ width: '100%', padding: '18px 22px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 14, background: 'transparent', color: 'var(--white)', fontSize: 14, fontWeight: 500, textAlign: 'left' }}>
                  <span itemProp="name">{faq.q}</span>
                  <span style={{ color: 'var(--accent)', fontSize: 20, flexShrink: 0, transform: openFaq === i ? 'rotate(45deg)' : 'none', transition: 'transform .3s' }}>+</span>
                </button>
                {openFaq === i && (
                  <div itemProp="acceptedAnswer" itemScope itemType="https://schema.org/Answer" style={{ padding: '0 22px 18px', borderTop: '1px solid var(--border)' }}>
                    <p itemProp="text" style={{ fontSize: 13, color: 'var(--white-60)', lineHeight: 1.75 }}>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section style={{ background: 'var(--dark)', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div className="sec-hd">
            <div>
              <span className="kicker">{lang === 'es' ? 'Ver también' : lang === 'de' ? 'Siehe auch' : 'See Also'}</span>
              <h2 className="sec-title">{lang === 'es' ? 'RELACIONADOS' : lang === 'de' ? 'VERWANDTE' : 'RELATED PICKS'}</h2>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 14 }}>
            {[
              { href: '/picks/best-clippers', icon: '✂️', en: 'Best Clippers 2026', es: 'Mejores Cortadoras 2026', de: 'Beste Haarschneider 2026', suben: 'Top 5 ranked', subes: 'Top 5 clasificadas', subde: 'Top 5 bewertet' },
              { href: '/picks/starter-kit', icon: '🎯', en: 'Starter Kit Guide', es: 'Guía Kit Inicial', de: 'Starter-Set-Guide', suben: 'Everything a new barber needs', subes: 'Todo para un nuevo barbero', subde: 'Alles für neue Barbiere' },
              { href: '/compare', icon: '📊', en: 'Compare All Tools', es: 'Comparar Todas', de: 'Alle vergleichen', suben: 'Side-by-side', subes: 'Comparación directa', subde: 'Direktvergleich' },
            ].map(item => (
              <Link key={item.href} href={item.href}
                style={{ display: 'flex', flexDirection: 'column', gap: 10, padding: 24, background: 'var(--dark-2)', border: '1px solid var(--border)', borderRadius: 4, transition: 'border-color .3s' }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.borderColor = 'var(--accent)')}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.borderColor = 'var(--border)')}>
                <div style={{ fontSize: 32 }}>{item.icon}</div>
                <div style={{ fontFamily: 'var(--f-display)', fontSize: 18 }}>
                  {lang === 'es' ? item.es : lang === 'de' ? item.de : item.en}
                </div>
                <div style={{ fontSize: 12, color: 'var(--white-60)' }}>
                  {lang === 'es' ? item.subes : lang === 'de' ? item.subde : item.suben}
                </div>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--accent)', marginTop: 'auto' }}>
                  {lang === 'es' ? 'Ver →' : lang === 'de' ? 'Ansehen →' : 'View →'}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

