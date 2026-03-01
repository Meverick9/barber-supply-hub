'use client'
import { useState } from 'react'
import Link from 'next/link'
import { useApp } from '@/components/ui/ThemeProvider'
import { PRODUCTS, buildAffiliateUrl, type Lang } from '@/lib/data'

function T(obj: Record<Lang, string>, lang: Lang) { return obj[lang] ?? obj.en }

const BALD_IDS = ['wahl-balding-8110', 'babyliss-goldfx-boost', 'wahl-magic-clip']

const PAGE_T = {
  kicker: { en: 'Pro Barber Tested · February 2026', es: 'Probado por Barberos Pro · Febrero 2026', de: 'Von Profi-Barbieren getestet · Februar 2026' },
  h1a: { en: 'BEST CLIPPERS FOR', es: 'MEJORES PARA', de: 'BESTE FÜR' },
  h1b: { en: 'BALD FADES', es: 'FADES AL CERO', de: 'BALD FADES' },
  h1c: { en: '2026', es: '2026', de: '2026' },
  qaTitle: { en: 'Quick Answer', es: 'Respuesta Rápida', de: 'Schnelle Antwort' },
  qa: {
    en: 'The best clipper for bald fades in 2026 is the Wahl 5-Star Balding Clipper #8110 ($44.99, 9.0/10). V5000+ electromagnetic motor runs at twice the speed of pivot motors — surgically close results every time. 18,000+ reviews at 4.8★. Every professional barbershop needs one.',
    es: 'La mejor cortadora para fades al cero en 2026 es la Wahl 5-Star Balding Clipper #8110 ($44.99, 9.0/10). Motor electromagnético V5000+ a doble velocidad — resultados quirúrgicamente cerca siempre. Más de 18,000 reseñas a 4.8★.',
    de: 'Der beste Clipper für Bald Fades 2026 ist der Wahl 5-Star Balding Clipper #8110 ($44,99, 9,0/10). V5000+-Elektromagnetmotor läuft mit doppelter Geschwindigkeit — chirurgisch nahe Ergebnisse jedes Mal. 18.000+ Bewertungen bei 4,8★.',
  },
  intro: {
    en: 'Bald fades require specialized tools. Standard clippers struggle to achieve skin-close results consistently — they drag, leave unevenness, and bog down on dense hair. These picks are tested specifically for skin-close work: bald fades, full head shaves, and zero-gap skin fades on all hair types.',
    es: 'Los fades al cero requieren herramientas especializadas. Las cortadoras estándar tienen dificultades para lograr resultados al ras de forma consistente. Estas selecciones fueron probadas específicamente para trabajo al ras: fades al cero, afeitados de cabeza completa y skin fades.',
    de: 'Bald Fades erfordern spezialisierte Werkzeuge. Standardschneider haben Schwierigkeiten, hautnahe Ergebnisse konsistent zu erzielen. Diese Picks wurden speziell für hautnahe Arbeit getestet: Bald Fades, vollständige Kopfrasuren und Zero-Gap-Skin-Fades.',
  },
  verdict: { en: 'VERDICT', es: 'VEREDICTO', de: 'URTEIL' },
  pros: { en: '✓ PROS', es: '✓ PROS', de: '✓ VORTEILE' },
  cons: { en: '✗ CONS', es: '✗ CONS', de: '✗ NACHTEILE' },
  scores: { en: 'SCORES', es: 'PUNTUACIÓN', de: 'PUNKTE' },
  checkPrice: { en: 'Check Price on Amazon →', es: 'Ver Precio en Amazon →', de: 'Preis bei Amazon →' },
  affNote: { en: 'Affiliate link — no extra cost.', es: 'Enlace afiliado — sin costo.', de: 'Affiliate-Link — keine Mehrkosten.' },
  guideKicker: { en: 'Pro Technique Guide', es: 'Guía de Técnica Pro', de: 'Profi-Technik-Guide' },
  guideTitle: { en: 'BALD FADE\nTECHNIQUE GUIDE', es: 'GUÍA DE TÉCNICA\nFADE AL CERO', de: 'BALD FADE\nTECHNIK-GUIDE' },
  faqTitle: { en: 'BALD FADE\nFAQS', es: 'PREGUNTAS\nFRECUENTES', de: 'BALD FADE\nFAQS' },
}

const GUIDE = {
  tool: {
    h: { en: 'Choosing the Right Tool for Bald Fades', es: 'Elegir la herramienta correcta para fades al cero', de: 'Das richtige Werkzeug für Bald Fades wählen' },
    p: { en: 'Not every clipper can do a clean bald fade. You need a tool with a fast motor (the Wahl Balding\'s V5000+ EM motor runs at twice the speed of standard pivot motors), the right blade geometry for skin contact, and consistent power that doesn\'t wane as the battery drains. The Wahl Balding is purpose-built for this. The BaByliss GoldFX handles bald fades with its zero-gap blade but requires more technique.', es: 'No toda cortadora puede hacer un fade al cero limpio. Necesitas una herramienta con un motor rápido (el motor V5000+ del Wahl Balding corre a doble velocidad), la geometría correcta de la cuchilla para el contacto con la piel y potencia consistente. El Wahl Balding está diseñado específicamente para esto.', de: 'Nicht jeder Clipper kann einen sauberen Bald Fade machen. Du brauchst ein Werkzeug mit einem schnellen Motor (der V5000+ des Wahl Balding läuft mit doppelter Geschwindigkeit), der richtigen Klingengeometrie für den Hautkontakt und konsistenter Leistung.' },
  },
  technique: {
    h: { en: 'The 3-Pass Bald Fade Method', es: 'El Método de 3 Pasadas para Fade al Cero', de: 'Die 3-Pass-Methode für Bald Fades' },
    p: { en: 'Pass 1 — Bulk removal: Use the Wahl Magic Clip or BaByliss FX870 with a 0.5 guard to remove bulk from the fade zone. Pass 2 — Skin close: Switch to the Wahl Balding Clipper. Work against the grain in short, deliberate strokes. Keep the blade flat against the skin. Pass 3 — Blend and refine: Use the Magic Clip on its taper lever setting to blend the skin section into the top guard length. Apply Andis Cool Care between passes to keep blades cool and lubricated.', es: 'Pasada 1 — Eliminar volumen: Usa la Wahl Magic Clip o BaByliss FX870 con guarda 0.5. Pasada 2 — Al ras: Cambia a la Wahl Balding Clipper. Trabaja contra el grano en pasadas cortas y deliberadas. Pasada 3 — Mezclar y refinar: Usa la Magic Clip en su posición de lever para mezclar la sección al ras con la longitud de la guarda superior.', de: 'Pass 1 — Bulk-Entfernung: Wahl Magic Clip oder BaByliss FX870 mit 0,5-Aufsatz. Pass 2 — Haut-nah: Zum Wahl Balding Clipper wechseln. Gegen den Strich in kurzen, gezielten Strichen arbeiten. Pass 3 — Blenden und verfeinern: Magic Clip auf Taper-Lever-Einstellung zum Blenden.' },
  },
  care: {
    h: { en: 'Bald Fade Blade Care', es: 'Cuidado de Cuchillas para Fade al Cero', de: 'Klingenpflege für Bald Fades' },
    p: { en: 'Skin-close cutting accelerates blade wear faster than any other barbering technique. After every client, spray Andis Cool Care (5-in-1: cools, disinfects, lubricates, prevents rust, conditions). Zero-gap your Wahl Balding before each use — check the blade alignment. Replace blades every 2–3 months with daily professional bald fade use, or when you notice any dragging. Sharp blades are non-negotiable for client comfort and safety.', es: 'El corte al ras acelera el desgaste de la cuchilla más que cualquier otra técnica de barbería. Después de cada cliente, aplica Andis Cool Care. Ajusta el zero-gap de tu Wahl Balding antes de cada uso. Reemplaza las cuchillas cada 2-3 meses con uso profesional diario.', de: 'Hautnahes Schneiden beschleunigt den Klingenverschleiß schneller als jede andere Barbier-Technik. Nach jedem Kunden Andis Cool Care sprühen. Wahl Balding vor jedem Einsatz zero-gappen. Klingen alle 2-3 Monate bei täglichem professionellen Bald-Fade-Einsatz ersetzen.' },
  },
}

const FAQS = {
  en: [
    { q: 'What is the best clipper for bald fades in 2026?', a: 'The Wahl 5-Star Balding Clipper #8110 ($44.99) is the best dedicated bald fade clipper. V5000+ EM motor runs at twice the speed of pivot motors. Purpose-built blade for skin-close cuts. 18,000+ reviews at 4.8★. Every barbershop should own one.' },
    { q: 'Can I use the Wahl Magic Clip for bald fades?', a: 'Yes — the Wahl Magic Clip can do bald fades when zero-gapped. However, the dedicated Wahl Balding Clipper does it better: faster motor, purpose-built blade geometry, and it\'s $45 less. Use the Magic Clip for the blend, Balding Clipper for the skin-close pass.' },
    { q: 'How close does the Wahl Balding Clipper cut?', a: 'The Wahl Balding Clipper cuts down to 0.0mm — skin-close without dragging. Its V5000+ electromagnetic motor at double speed prevents the pulling that standard pivot-motor clippers experience at skin-close settings.' },
    { q: '¿Cuál es la mejor cortadora para fades al cero?', a: 'La Wahl 5-Star Balding Clipper #8110 ($44.99) es la mejor cortadora dedicada para fades al cero. Motor V5000+ a doble velocidad. Diseñada específicamente para cortes al ras. +18,000 reseñas a 4.8★.' },
    { q: 'Welcher Clipper ist der beste für Bald Fades?', a: 'Der Wahl 5-Star Balding Clipper #8110 ($44,99) ist der beste dedizierte Bald-Fade-Clipper. V5000+ EM-Motor mit doppelter Geschwindigkeit. Speziell für hautnahe Schnitte gebaut. 18.000+ Bewertungen bei 4,8★.' },
  ],
  es: [
    { q: '¿Cuál es la mejor cortadora para fades al cero en 2026?', a: 'La Wahl 5-Star Balding Clipper #8110 ($44.99) es la mejor cortadora dedicada. Motor V5000+ a doble velocidad de los motores pivot. Más de 18,000 reseñas a 4.8★.' },
    { q: '¿Puedo usar la Wahl Magic Clip para fades al cero?', a: 'Sí — la Wahl Magic Clip puede hacer fades al cero con zero-gap. Sin embargo, la Wahl Balding Clipper lo hace mejor: motor más rápido y geometría de cuchilla diseñada específicamente, y cuesta $45 menos.' },
    { q: '¿Qué tan cerca corta la Wahl Balding Clipper?', a: 'La Wahl Balding Clipper corta hasta 0.0mm — al ras de la piel sin tirones. Su motor electromagnético V5000+ a doble velocidad previene el tirón que experimentan las cortadoras de motor pivot estándar.' },
    { q: 'What is the best clipper for bald fades in 2026?', a: 'The Wahl 5-Star Balding Clipper #8110 ($44.99). V5000+ EM motor, purpose-built blade, 18,000+ reviews at 4.8★.' },
    { q: 'Welcher Clipper ist der beste für Bald Fades?', a: 'Der Wahl 5-Star Balding Clipper #8110 ($44,99). V5000+ EM-Motor, speziell gebaut, 18.000+ Bewertungen bei 4,8★.' },
  ],
  de: [
    { q: 'Welcher Clipper ist 2026 der beste für Bald Fades?', a: 'Der Wahl 5-Star Balding Clipper #8110 ($44,99) ist der beste dedizierte Bald-Fade-Clipper. V5000+ EM-Motor mit doppelter Geschwindigkeit. 18.000+ Bewertungen bei 4,8★.' },
    { q: 'Kann ich den Wahl Magic Clip für Bald Fades verwenden?', a: 'Ja — der Wahl Magic Clip kann Bald Fades mit Zero-Gap machen. Der dedizierte Wahl Balding Clipper macht es jedoch besser: schnellerer Motor, speziell gebaute Klingengeometrie, und kostet $45 weniger.' },
    { q: 'Wie nah schneidet der Wahl Balding Clipper?', a: 'Der Wahl Balding Clipper schneidet bis zu 0,0mm — hautnahe ohne Ziehen. Sein V5000+ EM-Motor verhindert das Ziehen, das Standard-Pivot-Motor-Clipper bei hautnahen Einstellungen erleben.' },
    { q: 'What is the best clipper for bald fades in 2026?', a: 'Wahl 5-Star Balding Clipper #8110 ($44.99). V5000+ EM motor, purpose-built, 18,000+ reviews at 4.8★.' },
    { q: '¿Cuál es la mejor cortadora para fades al cero?', a: 'La Wahl 5-Star Balding Clipper #8110 ($44.99). Motor V5000+, diseñada específicamente, +18,000 reseñas a 4.8★.' },
  ],
}

export default function BaldFadeClient() {
  const { lang } = useApp()
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const L = (obj: Record<Lang, string>) => T(obj, lang)
  const products = PRODUCTS.filter(p => BALD_IDS.includes(p.id))
  const faqs = FAQS[lang]

  const handleAff = (name: string, pos: number) => {
    if (typeof window !== 'undefined' && window.gtag)
      window.gtag('event', 'affiliate_click', { product_name: name, list_position: pos, page_language: lang })
  }

  return (
    <main>
      <div style={{ background: 'var(--dark)', borderBottom: '1px solid var(--border)', padding: '12px 0' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: 8, alignItems: 'center', fontSize: 11, color: 'var(--white-60)' }}>
            <Link href="/" style={{ color: 'var(--accent)' }}>BarberSuplyHub</Link>
            <span>/</span>
            <Link href="/picks" style={{ color: 'var(--white-60)' }}>{lang === 'es' ? 'Selecciones' : lang === 'de' ? 'Empfehlungen' : 'Picks'}</Link>
            <span>/</span>
            <span style={{ color: 'var(--white)' }}>
              {lang === 'es' ? 'Mejores para Fades al Cero' : lang === 'de' ? 'Beste für Bald Fades' : 'Best Bald Fade Clippers'}
            </span>
          </div>
        </div>
      </div>

      <section style={{ paddingTop: 64, paddingBottom: 48, background: 'linear-gradient(180deg,var(--dark) 0%,var(--black) 100%)' }}>
        <div className="container-sm">
          <span className="kicker">{L(PAGE_T.kicker)}</span>
          <h1 style={{ fontFamily: 'var(--f-display)', fontSize: 'clamp(40px,7vw,88px)', lineHeight: .9, marginBottom: 20 }}>
            <span style={{ display: 'block' }}>{L(PAGE_T.h1a)}</span>
            <span style={{ display: 'block', color: 'var(--accent)' }}>{L(PAGE_T.h1b)}</span>
            <span style={{ display: 'block' }}>{L(PAGE_T.h1c)}</span>
          </h1>
          <div style={{ background: 'var(--dark-2)', border: '1px solid var(--accent)', borderRadius: 4, padding: 20, marginBottom: 24 }}>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 8 }}>{L(PAGE_T.qaTitle)}</div>
            <p style={{ fontSize: 14, color: 'var(--white)', lineHeight: 1.75, fontWeight: 500 }}>{L(PAGE_T.qa)}</p>
          </div>
          <p style={{ fontSize: 15, color: 'var(--white-60)', lineHeight: 1.8 }}>{L(PAGE_T.intro)}</p>
        </div>
      </section>

      <div className="container"><div className="ad-unit ad-leader"><span>Advertisement</span></div></div>

      <section>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {products.map((p, i) => (
            <article key={p.id} className="card" style={{ padding: 0, overflow: 'hidden' }} itemScope itemType="https://schema.org/Product">
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '20px 24px', borderBottom: '1px solid var(--border)', background: 'var(--dark-3)' }}>
                <div style={{ fontFamily: 'var(--f-display)', fontSize: 48, color: 'var(--accent)', width: 56, flexShrink: 0 }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div style={{ flex: 1 }}>
                  {p.badge && <div style={{ display: 'inline-block', background: 'var(--accent)', color: 'var(--black)', fontSize: 9, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', padding: '2px 8px', borderRadius: 2, marginBottom: 6 }}>{p.badge[lang]}</div>}
                  <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 3 }}>{p.brand}</div>
                  <h2 style={{ fontFamily: 'var(--f-display)', fontSize: 28, lineHeight: 1 }} itemProp="name">{p.name}</h2>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontFamily: 'var(--f-display)', fontSize: 48, lineHeight: 1 }}>{p.score}</div>
                  <div style={{ fontSize: 11, color: 'var(--white-60)' }}>/10</div>
                </div>
              </div>
              <div className="grid-2 card-body">
                <div>
                  <p style={{ fontSize: 13, color: 'var(--white-60)', lineHeight: 1.75, marginBottom: 20 }}>{T(p.verdict, lang)}</p>
                  <div className="grid-pros-cons">
                    <div>
                      <div style={{ fontSize: 10, fontWeight: 700, color: 'var(--green)', marginBottom: 8 }}>{L(PAGE_T.pros)}</div>
                      <ul style={{ listStyle: 'none' }}>
                        {p.pros[lang].map((pro, j) => <li key={j} style={{ fontSize: 12, color: 'var(--white-60)', paddingLeft: 14, position: 'relative', marginBottom: 5 }}><span style={{ position: 'absolute', left: 0, color: 'var(--green)' }}>+</span>{pro}</li>)}
                      </ul>
                    </div>
                    <div>
                      <div style={{ fontSize: 10, fontWeight: 700, color: 'var(--red)', marginBottom: 8 }}>{L(PAGE_T.cons)}</div>
                      <ul style={{ listStyle: 'none' }}>
                        {p.cons[lang].map((con, j) => <li key={j} style={{ fontSize: 12, color: 'var(--white-60)', paddingLeft: 14, position: 'relative', marginBottom: 5 }}><span style={{ position: 'absolute', left: 0, color: 'var(--red)' }}>−</span>{con}</li>)}
                      </ul>
                    </div>
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  {p.scoreBreakdown.map((sb, j) => (
                    <div key={j} className="score-bar">
                      <span className="score-bar__label">{T(sb.label, lang)}</span>
                      <div className="score-bar__track"><div className="score-bar__fill" style={{ width: `${sb.score * 10}%` }} /></div>
                      <span className="score-bar__val">{sb.score}</span>
                    </div>
                  ))}
                  <div style={{ marginTop: 'auto', padding: 16, background: 'var(--dark-3)', borderRadius: 4, border: '1px solid var(--border)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
                      <div style={{ fontFamily: 'var(--f-display)', fontSize: 36 }}>${p.price}</div>
                      <div style={{ textAlign: 'right', fontSize: 10, color: 'var(--white-60)' }}>{p.starRating}★ · {p.reviewCount.toLocaleString()}</div>
                    </div>
                    <a href={buildAffiliateUrl(p.asin)} target="_blank" rel="noopener nofollow"
                      className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}
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

      <section style={{ background: 'var(--dark)', borderTop: '1px solid var(--border)' }}>
        <div className="container-sm">
          <span className="kicker">{L(PAGE_T.guideKicker)}</span>
          <h2 style={{ fontFamily: 'var(--f-display)', fontSize: 48, marginBottom: 32 }}>
            {L(PAGE_T.guideTitle).split('\n').map((l, i) => <span key={i} style={{ display: 'block' }}>{l}</span>)}
          </h2>
          <div className="prose">
            {Object.values(GUIDE).map(({ h, p }) => (
              <div key={h.en}><h2>{L(h)}</h2><p>{L(p)}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container-sm">
          <div style={{ marginBottom: 32 }}><span className="kicker">FAQ</span><h2 className="sec-title">{L(PAGE_T.faqTitle).split('\n').map((l, i) => <span key={i} style={{ display: 'block' }}>{l}</span>)}</h2></div>
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

      <section style={{ background: 'var(--dark)', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div className="sec-hd">
            <div><span className="kicker">{lang === 'es' ? 'Ver también' : lang === 'de' ? 'Siehe auch' : 'See Also'}</span><h2 className="sec-title">{lang === 'es' ? 'RELACIONADOS' : lang === 'de' ? 'VERWANDTE' : 'RELATED PICKS'}</h2></div>
          </div>
          <div className="grid-3">
            {[
              { href: '/picks/best-clippers', icon: '✂️', en: 'Best Clippers 2026', es: 'Mejores Cortadoras', de: 'Beste Haarschneider' },
              { href: '/picks/best-trimmers', icon: '🔪', en: 'Best Trimmers 2026', es: 'Mejores Recortadoras', de: 'Beste Trimmer' },
              { href: '/picks/starter-kit', icon: '🎯', en: 'Starter Kit', es: 'Kit Inicial', de: 'Starter-Set' },
            ].map(item => (
              <Link key={item.href} href={item.href}
                style={{ padding: 24, background: 'var(--dark-2)', border: '1px solid var(--border)', borderRadius: 4, transition: 'border-color .3s', display: 'flex', flexDirection: 'column', gap: 8 }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.borderColor = 'var(--accent)')}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.borderColor = 'var(--border)')}>
                <div style={{ fontSize: 32 }}>{item.icon}</div>
                <div style={{ fontFamily: 'var(--f-display)', fontSize: 18 }}>{lang === 'es' ? item.es : lang === 'de' ? item.de : item.en}</div>
                <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--accent)', marginTop: 'auto' }}>{lang === 'es' ? 'Ver →' : lang === 'de' ? 'Ansehen →' : 'View →'}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}



