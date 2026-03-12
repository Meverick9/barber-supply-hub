'use client'
import { useState } from 'react'
import Link from 'next/link'
import { useApp } from '@/components/ui/ThemeProvider'
import { PRODUCTS, buildAffiliateUrl } from '@/lib/data'
import type { Lang } from '@/lib/data'

function T(obj: Record<Lang, string>, lang: Lang) { return obj[lang] ?? obj.en }

const HERO = {
  kicker: { en:'Tested by Working Barbers — 2026', es:'Probado por Barberos Profesionales — 2026', de:'Getestet von echten Barbieren — 2026' },
  titleLine1: { en:'THE PRO TOOL', es:'LA BIBLIA', de:'DAS PROFI' },
  titleLine2: { en:'BIBLE.', es:'DEL BARBERO.', de:'WERKZEUG.' },
  sub: { en:'Not a store. Not sponsored reviews. 47 clippers tested by barbers who cut hair every single day.', es:'No somos una tienda. 47 cortadoras probadas por barberos que trabajan cada día.', de:'Kein Shop. 47 Haarschneider getestet von Barbieren, die täglich schneiden.' },
  cta1: { en:'See Top Picks →', es:'Ver Mejores Opciones →', de:'Top-Empfehlungen →' },
  edPick: { en:"⚡ Editor's Pick — February 2026", es:'⚡ Elección del Editor — Febrero 2026', de:'⚡ Empfehlung der Redaktion — Februar 2026' },
  priceOff: { en:'off this week', es:'de descuento', de:'diese Woche' },
  checkPrice: { en:'Check Price →', es:'Ver Precio →', de:'Preis prüfen →' },
  affNote: { en:'Affiliate link — no extra cost to you.', es:'Enlace de afiliado — sin costo adicional.', de:'Affiliate-Link — keine Mehrkosten für dich.' },
}

const PICKS_T = {
  kicker: { en:'Ranked by Pro Barbers', es:'Clasificado por Barberos Pro', de:'Von Profi-Barbieren bewertet' },
  title: { en:'TOP PICKS\nTHIS MONTH', es:'MEJORES\nOPCIONES', de:'TOP\nEMPFEHLUNGEN' },
  seeAll: { en:'See all →', es:'Ver todo →', de:'Alle sehen →' },
}

const EMAIL_T = {
  kicker: { en:'Weekly · Free · Unsubscribe Anytime', es:'Semanal · Gratis · Cancela cuando quieras', de:'Wöchentlich · Kostenlos · Jederzeit abmelden' },
  title: { en:'THE WEEKLY\nPRO BRIEF', es:'EL RESUMEN\nPRO SEMANAL', de:'DER WÖCHENT\nLICHE BRIEF' },
  sub: { en:'Price drops, new reviews & one technique tip — every Tuesday. 45,000+ barbers.', es:'Ofertas, nuevas reseñas y un truco técnico — cada martes.', de:'Preissenkungen, neue Tests, ein Technik-Tipp — jeden Dienstag.' },
  cta: { en:'Subscribe →', es:'Suscribirse →', de:'Anmelden →' },
  success: { en:"You're in! Check your inbox.", es:'¡Suscrito! Revisa tu bandeja.', de:'Angemeldet! Prüfe dein Postfach.' },
}

const FAQS = {
  en: [
    { q:'What is the best barber clipper for fades in 2026?', a:'The Wahl 5-Star Magic Clip ($89.99, Score: 9.6/10) is our top pick. Zero-gap adjustable blade, 92-min cordless runtime, 0.28 lbs — light enough for a full 8-hour shift.' },
    { q:'Wahl vs Andis — which is better for professional barbers?', a:'Wahl for fades (lighter, quieter, better taper lever). Andis for thick/coarse hair (more powerful EM motor at 14,000 SPM). Most pros own both.' },
    { q:'Does BarberSupplyHub accept payment to rank products higher?', a:'No. Editorial rankings are never for sale. Revenue comes from Amazon affiliate commissions and AdSense. Sponsored content is always clearly labeled and never influences scores.' },
  ],
  es: [
    { q:'¿Cuál es la mejor cortadora para degradados en 2026?', a:'La Wahl 5-Star Magic Clip ($89.99, Nota: 9.6/10). Cuchilla zero-gap, 92 min inalámbrica, 0.28 lbs. Perfecta para jornadas de 8 horas.' },
    { q:'Wahl vs Andis — ¿cuál es mejor para barberos profesionales?', a:'Wahl para degradados (más ligera, silenciosa, mejor lever). Andis para cabello grueso (motor EM más potente). La mayoría de los pros tienen ambas.' },
    { q:'¿BarberSupplyHub acepta pagos para posicionar productos más alto?', a:'No. Los rankings editoriales nunca están en venta. Los ingresos provienen de comisiones de afiliados de Amazon y AdSense. El contenido patrocinado se etiqueta claramente.' },
  ],
  de: [
    { q:'Welcher Haarschneider ist 2026 der beste für Fades?', a:'Der Wahl 5-Star Magic Clip ($89,99, Score: 9,6/10). Zero-Gap-Klinge, 92 Min kabellos, 0,28 lbs — leicht genug für eine volle 8-Stunden-Schicht.' },
    { q:'Wahl vs Andis — was ist besser für Profi-Barbiere?', a:'Wahl für Fades (leichter, leiser, besserer Taper-Lever). Andis für dickes Haar (leistungsstärkerer EM-Motor mit 14.000 SPM). Die meisten Profis besitzen beide.' },
    { q:'Akzeptiert BarberSupplyHub Zahlungen für höhere Rankings?', a:'Nein. Redaktionelle Rankings sind niemals käuflich. Einnahmen aus Amazon-Affiliate und AdSense. Gesponserte Inhalte sind immer klar gekennzeichnet.' },
  ],
}

export default function HomePage() {
  const { lang } = useApp()
  const [emailVal, setEmailVal] = useState('')
  const [emailSent, setEmailSent] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const editor = PRODUCTS[0]
  const top3 = PRODUCTS.slice(0, 3)
  const faqs = FAQS[lang]

  const handleEmail = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await fetch('/api/subscribe', { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify({ email:emailVal, lang }) })
    } catch {}
    setEmailSent(true)
    if (typeof window !== 'undefined' && window.gtag) window.gtag('event','generate_lead',{method:'newsletter'})
  }

  const handleAff = (name: string, pos: number) => {
    if (typeof window !== 'undefined' && window.gtag)
      window.gtag('event','affiliate_click',{product_name:name,list_position:pos,page_language:lang})
  }

  return (
    <main>

      {/* ══ TICKER ══ */}
      <div style={{ background:'var(--accent)', color:'var(--black)', fontSize:11, fontWeight:700, letterSpacing:'.09em', textTransform:'uppercase', padding:'7px 0', overflow:'hidden', whiteSpace:'nowrap', transition:'background .3s' }}>
        <div style={{ display:'inline-flex', animation:'ticker 35s linear infinite' }}>
          {Array(4).fill(null).map((_, i) => (
            <span key={i} style={{ padding:'0 40px' }}>
              {lang==='es' ? '◆ Actualizado Feb 2026 · 47 cortadoras probadas · Wahl Magic Clip $89.99 ↓' :
               lang==='de' ? '◆ Aktualisiert Feb 2026 · 47 Haarschneider getestet · Wahl Magic Clip $89.99 ↓' :
               '◆ Updated Feb 2026 · 47 clippers tested · Wahl Magic Clip $89.99 price drop ↓'}
            </span>
          ))}
        </div>
      </div>

      {/* ══ HERO ══ */}
      <section className="hero-grid container">
        <div style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse at 65% 40%, var(--accent-dim) 0%, transparent 60%)', pointerEvents:'none', transition:'background .5s' }} />

        {/* Left */}
        <div className="hero-left">
          <div style={{ display:'inline-flex', alignItems:'center', gap:10, fontSize:11, fontWeight:700, letterSpacing:'.16em', textTransform:'uppercase', color:'var(--accent)' }}>
            <span style={{ width:28, height:1, background:'var(--accent)', display:'inline-block' }} />
            {T(HERO.kicker, lang)}
          </div>

          <h1 style={{ fontFamily:'var(--f-display)', fontSize:'clamp(48px,8.5vw,116px)', lineHeight:.88, color:'var(--white)' }}>
            <span style={{ display:'block' }}>{T(HERO.titleLine1, lang)}</span>
            <span style={{ display:'block', fontFamily:'var(--f-serif)', fontStyle:'italic', color:'var(--accent)', transition:'color .3s' }}>{T(HERO.titleLine2, lang)}</span>
          </h1>

          <p style={{ fontSize:16, color:'var(--white-60)', maxWidth:420, lineHeight:1.75 }}>{T(HERO.sub, lang)}</p>

          <div style={{ display:'flex', flexWrap:'wrap', gap:7 }}>
            {[
              lang==='es'?'47 herramientas probadas':lang==='de'?'47 Tools getestet':'47 Tools Tested',
              lang==='es'?'Sin rankings pagados':lang==='de'?'Keine bezahlten Rankings':'No paid rankings',
              lang==='es'?'Actualizado mensualmente':lang==='de'?'Monatlich aktualisiert':'Updated monthly',
            ].map(b => (
              <span key={b} style={{ fontSize:10, fontWeight:700, letterSpacing:'.09em', textTransform:'uppercase', padding:'5px 10px', borderRadius:2, border:'1px solid var(--accent)', color:'var(--accent)' }}>{b}</span>
            ))}
          </div>

          <div style={{ display:'flex', gap:10, flexWrap:'wrap' }}>
            <Link href="/picks/best-clippers" className="btn btn-primary">{T(HERO.cta1, lang)}</Link>
          </div>
        </div>

        {/* Right: Editor's pick card */}
        <div className="hero-right">
          <div style={{ fontSize:11, fontWeight:700, letterSpacing:'.14em', textTransform:'uppercase', color:'var(--white-60)' }}>
            {T(HERO.edPick, lang)}
          </div>
          <article className="card" style={{ overflow:'hidden', width:'100%' }} itemScope itemType="https://schema.org/Product">
            <div style={{ height:180, background:'linear-gradient(135deg,var(--dark-3),var(--dark-2))', display:'flex', alignItems:'center', justifyContent:'center', fontSize:80, position:'relative' }}>
              <span>{editor.emoji}</span>
              <div style={{ position:'absolute', top:14, left:14, background:'var(--accent)', color:'var(--black)', fontFamily:'var(--f-display)', fontSize:26, width:42, height:42, display:'flex', alignItems:'center', justifyContent:'center', borderRadius:2, transition:'background .3s' }}>1</div>
            </div>
            <div style={{ padding:20 }}>
              <div style={{ fontSize:10, fontWeight:700, letterSpacing:'.14em', textTransform:'uppercase', color:'var(--accent)', marginBottom:3 }}>{editor.brand}</div>
              <h2 style={{ fontFamily:'var(--f-display)', fontSize:26, marginBottom:10 }} itemProp="name">{editor.name}</h2>
              {editor.scoreBreakdown.map((sb, i) => (
                <div key={i} className="score-bar" style={{ marginBottom:6 }}>
                  <span className="score-bar__label">{T(sb.label, lang)}</span>
                  <div className="score-bar__track"><div className="score-bar__fill" style={{ width:`${sb.score*10}%` }} /></div>
                  <span className="score-bar__val">{sb.score}</span>
                </div>
              ))}
              <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', gap:12, marginTop:14 }}>
                <div>
                  <div style={{ fontFamily:'var(--f-display)', fontSize:32 }} itemProp="offers" itemScope itemType="https://schema.org/Offer">
                    $<span itemProp="price">{editor.price}</span><meta itemProp="priceCurrency" content="USD" />
                  </div>
                  {editor.priceOld && <div style={{ fontSize:10, fontWeight:700, color:'var(--green)' }}>↓ ${(editor.priceOld - editor.price).toFixed(2)} {T(HERO.priceOff, lang)}</div>}
                </div>
                <a href={buildAffiliateUrl(editor.asin)} target="_blank" rel="noopener nofollow"
                  className="btn btn-primary" style={{ animation:'pulseGlow 3s infinite', flexShrink:0 }}
                  onClick={() => handleAff(`${editor.brand} ${editor.name}`, 1)}>
                  {T(HERO.checkPrice, lang)}
                </a>
              </div>
              <p style={{ fontSize:9, color:'var(--white-60)', opacity:.5, marginTop:7 }}>{T(HERO.affNote, lang)}</p>
            </div>
          </article>
        </div>
      </section>

      {/* ══ TRUST BAR ══ */}
      <div style={{ background:'var(--dark-2)', borderTop:'1px solid var(--border)', borderBottom:'1px solid var(--border)', padding:'18px 0' }}>
        <div className="container">
          <div style={{ display:'flex', alignItems:'center', justifyContent:'space-around', gap:20, flexWrap:'wrap' }}>
            {[
              { icon:'🔬', en:'Hands-On Testing', es:'Pruebas Reales', de:'Praxistest', sub:{ en:'Every tool physically tested', es:'Cada herramienta probada físicamente', de:'Jedes Tool physisch getestet' } },
              { icon:'🚫', en:'No Paid Rankings', es:'Sin Rankings Pagados', de:'Keine bezahlten Rankings', sub:{ en:"Brands can't buy top spots", es:'Las marcas no pueden comprar posiciones', de:'Marken kaufen keine Spitzenplätze' } },
              { icon:'📅', en:'Monthly Updates', es:'Actualización Mensual', de:'Monatliche Updates', sub:{ en:'Prices & scores refreshed', es:'Precios y notas actualizados', de:'Preise & Noten aktualisiert' } },
              { icon:'💈', en:'14+ Years Experience', es:'14+ Años de Experiencia', de:'14+ Jahre Erfahrung', sub:{ en:'Real barbers, real opinions', es:'Barberos reales, opiniones reales', de:'Echte Barbiere, echte Meinungen' } },
            ].map(item => (
              <div key={item.icon} style={{ display:'flex', alignItems:'center', gap:9, fontSize:12 }}>
                <span style={{ fontSize:18 }}>{item.icon}</span>
                <div>
                  <strong style={{ color:'var(--white)', display:'block' }}>
                    {lang==='es' ? item.es : lang==='de' ? item.de : item.en}
                  </strong>
                  <span style={{ color:'var(--white-60)' }}>
                    {T(item.sub as Record<Lang,string>, lang)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ══ AD ══ */}
      <div className="container"><div className="ad-unit ad-leader"><span>Advertisement · 728×90</span><small>Replace with AdSense ca-pub-XXXXXXXX</small></div></div>

      {/* ══ TOP PICKS ══ */}
      <section>
        <div className="container">
          <div className="sec-hd">
            <div>
              <span className="kicker">{T(PICKS_T.kicker, lang)}</span>
              <h2 className="sec-title">{T(PICKS_T.title, lang).split('\n').map((l,i)=><span key={i} style={{display:'block'}}>{l}</span>)}</h2>
            </div>
            <Link href="/picks/best-clippers" className="sec-link">{T(PICKS_T.seeAll, lang)}</Link>
          </div>
          <div className="picks-grid">
            {top3.map((p, i) => (
              <article key={p.id} className="card" style={{ padding:22, display:'flex', flexDirection:'column', gap:14, position:'relative' }} itemScope itemType="https://schema.org/Product">
                <div style={{ fontFamily:'var(--f-display)', fontSize:56, lineHeight:1, color:'var(--white-04)', position:'absolute', top:10, right:14, pointerEvents:'none' }}>{String(p.rank).padStart(2,'0')}</div>
                <div style={{ fontSize:36 }}>{p.emoji}</div>
                <div style={{ fontSize:9, fontWeight:700, letterSpacing:'.12em', textTransform:'uppercase', color:'var(--accent)' }}>{T(p.bestFor, lang)}</div>
                <h3 style={{ fontFamily:'var(--f-display)', fontSize:i===0?24:18, lineHeight:1.05 }} itemProp="name">{p.brand}<br/>{p.name}</h3>
                {i===0 && <p style={{ fontSize:13, color:'var(--white-60)', lineHeight:1.55 }}>{T(p.tagline, lang)}</p>}
                <div style={{ marginTop:'auto', display:'flex', alignItems:'center', justifyContent:'space-between' }}>
                  <a href={buildAffiliateUrl(p.asin)} target="_blank" rel="noopener nofollow"
                    className={i===0?'btn btn-primary btn-sm':'btn btn-outline btn-sm'}
                    onClick={() => handleAff(`${p.brand} ${p.name}`, i+1)}>
                    ${p.price} →
                  </a>
                  <div style={{ fontFamily:'var(--f-display)', fontSize:26, color:'var(--accent)' }}>
                    {p.score}<span style={{ fontFamily:'var(--f-body)', fontSize:11, color:'var(--white-60)' }}>/10</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ══ EMAIL ══ */}
      <section style={{ background:'var(--dark-3)', borderTop:'1px solid var(--border)', borderBottom:'1px solid var(--border)' }}>
        <div className="container">
          <div style={{ maxWidth:600, margin:'0 auto', textAlign:'center' }}>
            <span className="kicker">{T(EMAIL_T.kicker, lang)}</span>
            <h2 style={{ fontFamily:'var(--f-display)', fontSize:'clamp(38px,6vw,64px)', lineHeight:1, marginBottom:10 }}>
              {T(EMAIL_T.title, lang).split('\n').map((l,i)=><span key={i} style={{display:'block'}}>{l}</span>)}
            </h2>
            <p style={{ fontSize:15, color:'var(--white-60)', marginBottom:28 }}>{T(EMAIL_T.sub, lang)}</p>
            {emailSent ? (
              <div style={{ color:'var(--green)', fontWeight:600, padding:'14px 0', fontSize:15 }}>✓ {T(EMAIL_T.success, lang)}</div>
            ) : (
              <form onSubmit={handleEmail} style={{ display:'flex', gap:7, maxWidth:460, margin:'0 auto', flexWrap:'wrap' }}>
                <input type="email" required placeholder="your@email.com" value={emailVal} onChange={e=>setEmailVal(e.target.value)}
                  style={{ flex:1, minWidth:200, background:'var(--dark)', border:'1px solid var(--border-l)', color:'var(--white)', fontFamily:'var(--f-body)', fontSize:14, padding:'13px 15px', borderRadius:'var(--radius)', outline:'none' }} />
                <button type="submit" className="btn btn-primary">{T(EMAIL_T.cta, lang)}</button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ══ FAQ ══ */}
      <section>
        <div className="container-sm">
          <div style={{ marginBottom:32 }}>
            <span className="kicker">FAQ</span>
            <h2 className="sec-title">{lang==='es'?'PREGUNTAS\nFRECUENTES':lang==='de'?'HÄUFIGE\nFRAGEN':'COMMON\nQUESTIONS'}</h2>
          </div>
          <div style={{ display:'flex', flexDirection:'column', gap:2 }} itemScope itemType="https://schema.org/FAQPage">
            {faqs.map((faq, i) => (
              <div key={i} itemScope itemProp="mainEntity" itemType="https://schema.org/Question"
                style={{ border:`1px solid ${openFaq===i?'var(--accent)':'var(--border)'}`, borderRadius:'var(--radius)', overflow:'hidden', transition:'border-color .3s' }}>
                <button onClick={()=>setOpenFaq(openFaq===i?null:i)}
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

    </main>
  )
}