'use client'
import { useState } from 'react'
import Link from 'next/link'
import { useApp } from '@/components/ui/ThemeProvider'
import { buildAffiliateUrl } from '@/lib/data'
import type { Lang } from '@/lib/data'

const L3=(obj:{en:string;es:string;de:string},lang:Lang)=>lang==='es'?obj.es:lang==='de'?obj.de:obj.en

type Build = 'budget'|'pro'

const BUILDS = {
  budget: {
    label:{en:'Budget Build',es:'Kit Económico',de:'Budget-Set'},
    total: 214,
    tagline:{en:'Everything you need to start cutting professionally.',es:'Todo lo que necesitas para empezar a cortar profesionalmente.',de:'Alles was du brauchst um professionell zu schneiden.'},
    items:[
      {emoji:'✂️',name:'Wahl 5-Star Magic Clip',role:{en:'Primary Clipper — Fades & Blends',es:'Cortadora Principal — Fades y Mezclas',de:'Haupt-Clipper — Fades & Blends'},price:89.99,asin:'B00UK8WFQO',why:{en:'Most forgiving clipper for learners. Largest tutorial community. Taper lever perfect for blending.',es:'Cortadora más indulgente para principiantes. Comunidad de tutoriales más grande.',de:'Vergebendstes Clipper für Lernende. Größte Tutorial-Community.'},priority:'essential'},
      {emoji:'🔪',name:'Andis T-Outliner Cordless',role:{en:'Lineup Trimmer',es:'Recortadora de Lineup',de:'Lineup-Trimmer'},price:89.99,asin:'B0BJL7W4HP',why:{en:'Carbon steel T-blade for crisp lineups. The industry standard trimmer used by pros worldwide.',es:'Cuchilla T de carbono para lineups nítidos. El recortador estándar de la industria.',de:'Karbonstahl-T-Klinge für scharfe Lineups. Der Industrie-Standard-Trimmer.'},priority:'essential'},
      {emoji:'💧',name:'Wahl Clipper Oil',role:{en:'Blade Oil',es:'Aceite de Cuchilla',de:'Klingenöl'},price:6.99,asin:'B00006IFIG',why:{en:'Oil before every use. Extends blade life 3x. Essential maintenance.',es:'Aceita antes de cada uso. Extiende la vida de la cuchilla 3 veces.',de:'Vor jedem Einsatz ölen. Verlängert Klingenlebensdauer 3x.'},priority:'essential'},
      {emoji:'❄️',name:'Andis Cool Care Spray',role:{en:'5-in-1 Blade Spray',es:'Spray 5 en 1 para Cuchilla',de:'5-in-1 Klingenspray'},price:10.99,asin:'B00006IFIG',why:{en:'Cools, disinfects, lubricates, prevents rust, conditions. Spray after every client.',es:'Enfría, desinfecta, lubrica, previene óxido. Aplica después de cada cliente.',de:'Kühlt, desinfiziert, schmiert, verhindert Rost. Nach jedem Kunden sprühen.'},priority:'essential'},
      {emoji:'📦',name:'Wahl Premium Cutting Guides',role:{en:'Guard Set (8 guards)',es:'Set de Guardas (8 guardas)',de:'Aufsatz-Set (8 Aufsätze)'},price:14.99,asin:'B00UK8WFQO',why:{en:'Magnetic guards for consistent lengths. Sizes 1/8 to 1" included.',es:'Guardas magnéticas para longitudes consistentes. Tallas 1/8 a 1 pulgada.',de:'Magnetische Aufsätze für konsistente Längen.'},priority:'recommended'},
    ]
  },
  pro: {
    label:{en:'Pro Build',es:'Kit Profesional',de:'Profi-Set'},
    total: 394,
    tagline:{en:'The complete setup used by working barbers.',es:'El setup completo usado por barberos en activo.',de:'Das komplette Setup das aktive Barbiere verwenden.'},
    items:[
      {emoji:'✂️',name:'Wahl 5-Star Magic Clip',role:{en:'Primary Clipper — Fades',es:'Cortadora Principal — Fades',de:'Haupt-Clipper — Fades'},price:89.99,asin:'B00UK8WFQO',why:{en:'Still the fade standard. Taper lever, zero-gap ready, 92min battery.',es:'Sigue siendo el estándar del fade. Lever de taper, listo para zero-gap.',de:'Immer noch der Fade-Standard. Taper-Lever, zero-gap-bereit.'},priority:'essential'},
      {emoji:'🪒',name:'Wahl 5-Star Balding #8110',role:{en:'Bald Fade Specialist',es:'Especialista Fade al Cero',de:'Bald Fade Spezialist'},price:44.99,asin:'B000VVT94G',why:{en:'V5000+ EM motor for skin-close cuts. The best $44.99 investment in barbering.',es:'Motor V5000+ para cortes al ras. La mejor inversión de $44.99 en barbería.',de:'V5000+ EM-Motor für hautnahe Schnitte. Die beste $44,99-Investition.'},priority:'essential'},
      {emoji:'🔪',name:'Andis T-Outliner Cordless',role:{en:'Primary Lineup Trimmer',es:'Recortadora Principal de Lineup',de:'Haupt-Lineup-Trimmer'},price:89.99,asin:'B0BJL7W4HP',why:{en:'7,200 SPM constant-speed carbon steel T-blade. Industry standard.',es:'7,200 SPM cuchilla T de carbono de velocidad constante. Estándar de la industria.',de:'7.200 SPM Konstantgeschwindigkeit Karbonstahl-T-Klinge.'},priority:'essential'},
      {emoji:'✏️',name:'Andis Slimline Pro Li',role:{en:'Detail Trimmer — Ears, Temples, Kids',es:'Recortadora Detalle — Orejas, Sienes',de:'Detail-Trimmer — Ohren, Schläfen'},price:64.99,asin:'B0BRYP4NGB',why:{en:'Ultra-slim 0.3 lb profile for tight areas. The perfect second trimmer.',es:'Perfil ultra-delgado 0.3 lbs para áreas estrechas. El segundo recortador perfecto.',de:'Ultra-schlankes 0,3-lbs-Profil für enge Bereiche.'},priority:'essential'},
      {emoji:'💧',name:'Wahl Clipper Oil',role:{en:'Blade Oil',es:'Aceite',de:'Klingenöl'},price:6.99,asin:'B00006IFIG',why:{en:'Oil before every use.',es:'Aceita antes de cada uso.',de:'Vor jedem Einsatz ölen.'},priority:'essential'},
      {emoji:'❄️',name:'Andis Cool Care 5-in-1',role:{en:'Blade Spray',es:'Spray Cuchilla',de:'Klingenspray'},price:10.99,asin:'B00006IFIG',why:{en:'After every client.',es:'Después de cada cliente.',de:'Nach jedem Kunden.'},priority:'essential'},
      {emoji:'🧰',name:'Babyliss Pro Trimmer Bag',role:{en:'Tool Bag',es:'Bolsa de Herramientas',de:'Werkzeugtasche'},price:29.99,asin:'B07D7ZRXPD',why:{en:'Professional tool organization. Fits all 4 tools + accessories.',es:'Organización profesional de herramientas. Cabe todo.',de:'Professionelle Werkzeugorganisation.'},priority:'recommended'},
      {emoji:'📦',name:'Guard Set + Clipper Mat',role:{en:'Accessories',es:'Accesorios',de:'Zubehör'},price:24.99,asin:'B00UK8WFQO',why:{en:'Full guard set and non-slip mat for your station.',es:'Set completo de guardas y tapete antideslizante.',de:'Vollständiges Aufsatz-Set und rutschfeste Matte.'},priority:'recommended'},
    ]
  }
}

export default function StarterKitClient() {
  const { lang } = useApp()
  const [build, setBuild] = useState<Build>('budget')
  const data = BUILDS[build]
  const essential = data.items.filter(i=>i.priority==='essential')
  const recommended = data.items.filter(i=>i.priority==='recommended')

  return (
    <main>
      <div style={{background:'var(--dark)',borderBottom:'1px solid var(--border)',padding:'12px 0'}}>
        <div className="container">
          <div style={{display:'flex',gap:8,alignItems:'center',fontSize:11,color:'var(--white-60)'}}>
            <Link href="/" style={{color:'var(--accent)'}}>BarberSuplyHub</Link>
            <span>/</span>
            <Link href="/picks" style={{color:'var(--white-60)'}}>{lang==='es'?'Selecciones':lang==='de'?'Empfehlungen':'Picks'}</Link>
            <span>/</span>
            <span style={{color:'var(--white)'}}>Starter Kit</span>
          </div>
        </div>
      </div>

      <section style={{paddingTop:56,paddingBottom:40,background:'var(--dark)'}}>
        <div className="container-sm">
          <span className="kicker">{lang==='es'?'Guía de Compra':lang==='de'?'Kaufratgeber':'Buying Guide'} · 2026</span>
          <h1 style={{fontFamily:'var(--f-display)',fontSize:'clamp(44px,8vw,92px)',lineHeight:.93,marginBottom:20}}>
            <span style={{display:'block'}}>{lang==='es'?'KIT DE':lang==='de'?'STARTER':'BARBER'}</span>
            <span style={{display:'block',color:'var(--accent)'}}>{lang==='es'?'INICIO':lang==='de'?'KIT':'STARTER'}</span>
            <span style={{display:'block'}}>2026</span>
          </h1>
          <div style={{background:'var(--dark-2)',border:'1px solid var(--accent)',borderRadius:4,padding:20,marginBottom:24}}>
            <div style={{fontSize:10,fontWeight:700,letterSpacing:'.12em',textTransform:'uppercase',color:'var(--accent)',marginBottom:8}}>
              {lang==='es'?'Respuesta Rápida':lang==='de'?'Schnelle Antwort':'Quick Answer'}
            </div>
            <p style={{fontSize:14,color:'var(--white)',lineHeight:1.75,fontWeight:500}}>
              {lang==='es'?'Kit de inicio mínimo ($180): Wahl Magic Clip ($89.99) + Andis T-Outliner Cordless ($89.99) + aceite de cuchilla + spray Cool Care. El 90% de barberos profesionales comenzaron con la Magic Clip.':
               lang==='de'?'Minimales Starter-Kit ($180): Wahl Magic Clip ($89,99) + Andis T-Outliner Cordless ($89,99) + Klingenöl + Cool Care Spray. 90% der professionellen Barbiere begannen mit dem Magic Clip.':
               'Minimum starter kit ($180): Wahl Magic Clip ($89.99) + Andis T-Outliner Cordless ($89.99) + blade oil + Cool Care spray. 90% of professional barbers started with the Magic Clip.'}
            </p>
          </div>
        </div>
      </section>

      {/* BUILD TOGGLE */}
      <div style={{background:'var(--dark-2)',borderBottom:'1px solid var(--border)',borderTop:'1px solid var(--border)'}}>
        <div className="container" style={{padding:'16px 24px',display:'flex',gap:8,alignItems:'center',flexWrap:'wrap'}}>
          <span style={{fontSize:11,color:'var(--white-60)',textTransform:'uppercase',letterSpacing:'.08em',marginRight:8}}>
            {lang==='es'?'Build:':lang==='de'?'Build:':'Build:'}
          </span>
          {(['budget','pro'] as const).map(b=>(
            <button key={b} onClick={()=>setBuild(b)}
              style={{padding:'8px 20px',fontSize:12,fontWeight:700,letterSpacing:'.08em',textTransform:'uppercase',
                background:build===b?'var(--accent)':'transparent',
                color:build===b?'#000':'var(--white-60)',
                border:`1px solid ${build===b?'var(--accent)':'var(--border)'}`,borderRadius:2}}>
              {L3(BUILDS[b].label,lang)} — ${BUILDS[b].total}
            </button>
          ))}
        </div>
      </div>

      <section>
        <div className="container">
          <div style={{display:'grid',gridTemplateColumns:'2fr 1fr',gap:32,alignItems:'start'}}>
            {/* ITEMS */}
            <div>
              <div style={{fontSize:10,fontWeight:700,letterSpacing:'.12em',textTransform:'uppercase',color:'var(--accent)',marginBottom:16}}>
                {lang==='es'?'HERRAMIENTAS ESENCIALES':lang==='de'?'WESENTLICHE WERKZEUGE':'ESSENTIAL TOOLS'}
              </div>
              <div style={{display:'flex',flexDirection:'column',gap:12,marginBottom:32}}>
                {essential.map(item=>(
                  <div key={item.asin+item.name} style={{display:'grid',gridTemplateColumns:'auto 1fr auto',gap:16,padding:20,background:'var(--dark-2)',border:'1px solid var(--border)',borderRadius:4,alignItems:'center'}}>
                    <span style={{fontSize:32}}>{item.emoji}</span>
                    <div>
                      <div style={{fontSize:10,color:'var(--accent)',fontWeight:700,letterSpacing:'.08em',textTransform:'uppercase',marginBottom:3}}>{L3(item.role,lang)}</div>
                      <div style={{fontFamily:'var(--f-display)',fontSize:20,marginBottom:6}}>{item.name}</div>
                      <div style={{fontSize:12,color:'var(--white-60)'}}>{L3(item.why,lang)}</div>
                    </div>
                    <div style={{textAlign:'right',flexShrink:0}}>
                      <div style={{fontFamily:'var(--f-display)',fontSize:28,color:'var(--accent)',marginBottom:8}}>${item.price}</div>
                      <a href={buildAffiliateUrl(item.asin)} target="_blank" rel="noopener nofollow"
                        className="btn btn-primary btn-sm">
                        {lang==='es'?'Amazon →':lang==='de'?'Amazon →':'Amazon →'}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {recommended.length>0&&(
                <>
                  <div style={{fontSize:10,fontWeight:700,letterSpacing:'.12em',textTransform:'uppercase',color:'var(--white-60)',marginBottom:16}}>
                    {lang==='es'?'RECOMENDADOS':lang==='de'?'EMPFOHLEN':'RECOMMENDED'}
                  </div>
                  <div style={{display:'flex',flexDirection:'column',gap:10}}>
                    {recommended.map(item=>(
                      <div key={item.asin+item.name} style={{display:'grid',gridTemplateColumns:'auto 1fr auto',gap:14,padding:16,background:'var(--dark-3)',border:'1px solid var(--border)',borderRadius:4,alignItems:'center',opacity:.85}}>
                        <span style={{fontSize:24}}>{item.emoji}</span>
                        <div>
                          <div style={{fontSize:10,color:'var(--white-60)',textTransform:'uppercase',letterSpacing:'.06em',marginBottom:2}}>{L3(item.role,lang)}</div>
                          <div style={{fontFamily:'var(--f-display)',fontSize:16}}>{item.name}</div>
                        </div>
                        <div style={{textAlign:'right',flexShrink:0}}>
                          <div style={{fontSize:14,fontWeight:700,color:'var(--white)',marginBottom:6}}>${item.price}</div>
                          <a href={buildAffiliateUrl(item.asin)} target="_blank" rel="noopener nofollow"
                            className="btn btn-outline btn-sm" style={{fontSize:10}}>
                            {lang==='es'?'Ver →':lang==='de'?'Ansehen →':'View →'}
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* SUMMARY BOX */}
            <div style={{position:'sticky',top:80}}>
              <div style={{background:'var(--dark-2)',border:'2px solid var(--accent)',borderRadius:4,padding:24}}>
                <div style={{fontSize:10,fontWeight:700,letterSpacing:'.12em',textTransform:'uppercase',color:'var(--accent)',marginBottom:8}}>
                  {L3(data.label,lang)}
                </div>
                <div style={{fontFamily:'var(--f-display)',fontSize:56,color:'var(--accent)',lineHeight:1,marginBottom:4}}>${data.total}</div>
                <div style={{fontSize:12,color:'var(--white-60)',marginBottom:20}}>{L3(data.tagline,lang)}</div>
                <div style={{display:'flex',flexDirection:'column',gap:8,marginBottom:20,borderTop:'1px solid var(--border)',paddingTop:16}}>
                  {data.items.map(item=>(
                    <div key={item.name} style={{display:'flex',justifyContent:'space-between',fontSize:12}}>
                      <span style={{color:item.priority==='essential'?'var(--white)':'var(--white-60)'}}>{item.emoji} {item.name.split(' ').slice(-2).join(' ')}</span>
                      <span style={{color:'var(--accent)',fontWeight:600}}>${item.price}</span>
                    </div>
                  ))}
                  <div style={{borderTop:'1px solid var(--border)',paddingTop:8,display:'flex',justifyContent:'space-between',fontWeight:700}}>
                    <span>{lang==='es'?'Total':lang==='de'?'Gesamt':'Total'}</span>
                    <span style={{color:'var(--accent)',fontFamily:'var(--f-display)',fontSize:20}}>${data.total}</span>
                  </div>
                </div>
                <p style={{fontSize:10,color:'var(--white-60)',textAlign:'center',lineHeight:1.5}}>
                  {lang==='es'?'Enlace de afiliado — sin costo adicional para ti.':
                   lang==='de'?'Affiliate-Link — keine Mehrkosten für dich.':
                   'Affiliate links — no extra cost to you.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{background:'var(--dark)',borderTop:'1px solid var(--border)'}}>
        <div className="container-sm">
          <span className="kicker">FAQ</span>
          <h2 style={{fontFamily:'var(--f-display)',fontSize:48,marginBottom:32}}>
            {lang==='es'?'PREGUNTAS\nFRECUENTES':lang==='de'?'HÄUFIGE\nFRAGEN':'STARTER\nFAQS'}
          </h2>
          <div className="prose">
            <h2>{lang==='es'?'¿Cuánto debo gastar en mi primer kit?':lang==='de'?'Wie viel sollte ich für mein erstes Kit ausgeben?':'How much should I spend on my first kit?'}</h2>
            <p>{lang==='es'?'Un kit mínimo funcional cuesta $180-$220: Wahl Magic Clip + Andis T-Outliner + aceite + spray Cool Care. No comiences con cortadoras baratas — retrasan el aprendizaje y dañan el cabello de los clientes. Invierte bien desde el principio.':
                lang==='de'?'Ein minimales funktionales Kit kostet $180-$220: Wahl Magic Clip + Andis T-Outliner + Öl + Cool Care Spray. Beginne nicht mit billigen Clippern — sie verlangsamen das Lernen und beschädigen das Haar der Kunden.':
                'A minimum functional kit costs $180-$220: Wahl Magic Clip + Andis T-Outliner + blade oil + Cool Care spray. Do not start with cheap clippers — they slow learning and damage client hair. Invest correctly from the start.'}</p>
            <h2>{lang==='es'?'¿Empiezo con cortadora inalámbrica o con cable?':lang==='de'?'Starte ich mit kabellosem oder kabelgebundenem Clipper?':'Should I start cordless or corded?'}</h2>
            <p>{lang==='es'?'Inalámbrica siempre para principiantes. La flexibilidad de movimiento acelera el aprendizaje. La Wahl Magic Clip (92 min) y la BaByliss FX870 (150 min) tienen batería suficiente para aprender sin interrupciones. Agrega una cortadora con cable más tarde para las sesiones largas.':
                lang==='de'?'Immer kabellos für Anfänger. Bewegungsfreiheit beschleunigt das Lernen. Der Wahl Magic Clip (92 Min.) und BaByliss FX870 (150 Min.) haben genug Akku zum Lernen ohne Unterbrechungen.':
                'Always cordless for beginners. Freedom of movement accelerates learning. The Wahl Magic Clip (92min) and BaByliss FX870 (150min) have enough battery to learn without interruption. Add a corded clipper later for long sessions.'}</p>
          </div>
        </div>
      </section>
    </main>
  )
}



