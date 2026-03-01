'use client'
import Link from 'next/link'
import { useApp } from '@/components/ui/ThemeProvider'
import { buildAffiliateUrl } from '@/lib/data'
import type { Lang } from '@/lib/data'

const L3=(obj:{en:string;es:string;de:string},lang:Lang)=>lang==='es'?obj.es:lang==='de'?obj.de:obj.en

const BARBERS = [
  {
    name:'Marcus Webb', city:'New York City', years:14, emoji:'✂️',
    specialty:{en:'Skin Fades & Lineups',es:'Skin Fades y Lineups',de:'Skin Fades & Lineups'},
    bio:{
      en:'Marcus has been cutting in Harlem since 2012. Specializes in high-contrast skin fades and crisp lineups for clients in the entertainment industry. He tests all clippers for fade quality first — everything else is secondary.',
      es:'Marcus lleva cortando en Harlem desde 2012. Especializado en skin fades de alto contraste y lineups nítidos para clientes de la industria del entretenimiento.',
      de:'Marcus schneidet seit 2012 in Harlem. Spezialisiert auf kontrastreiche Skin Fades und scharfe Lineups für Kunden in der Entertainmentbranche.',
    },
    kit:[
      {name:'Wahl 5-Star Magic Clip',role:{en:'Primary Clipper',es:'Cortadora Principal',de:'Haupt-Clipper'},asin:'B00UK8WFQO'},
      {name:'Andis T-Outliner Cordless',role:{en:'Lineup Trimmer',es:'Recortadora Lineup',de:'Lineup-Trimmer'},asin:'B0BJL7W4HP'},
      {name:'Wahl 5-Star Balding',role:{en:'Bald Fade Specialist',es:'Especialista Fade al Cero',de:'Bald Fade Spezialist'},asin:'B000VVT94G'},
    ],
    rating:9.6, reviews:47, quote:{
      en:'"The Magic Clip is still the fade standard in 2026. Nothing touches it at that price point."',
      es:'"La Magic Clip sigue siendo el estándar del fade en 2026. Nada la supera en ese rango de precio."',
      de:'"Der Magic Clip ist 2026 immer noch der Fade-Standard. Nichts kommt bei dem Preis daran ran."',
    },
  },
  {
    name:'Diego Reyes', city:'Los Angeles', years:11, emoji:'🔪',
    specialty:{en:'Lineup & Beard Work',es:'Lineup y Trabajo de Barba',de:'Lineup & Bartarbeit'},
    bio:{
      en:'Diego built his reputation at a high-volume LA barbershop cutting 30+ clients daily. Expert in fast, consistent lineups and beard shaping. His trimmer reviews focus on longevity and speed under pressure.',
      es:'Diego construyó su reputación en una barbería de alto volumen en LA cortando más de 30 clientes diarios. Experto en lineups rápidos y consistentes.',
      de:'Diego baute seinen Ruf in einem Hochvolumen-Barbershop in LA auf und schnitt täglich 30+ Kunden. Experte für schnelle, konsistente Lineups.',
    },
    kit:[
      {name:'Andis Master Cordless',role:{en:'Primary Clipper',es:'Cortadora Principal',de:'Haupt-Clipper'},asin:'B07MX1YRHF'},
      {name:'Andis T-Outliner Cordless',role:{en:'Primary Trimmer',es:'Recortadora Principal',de:'Haupt-Trimmer'},asin:'B0BJL7W4HP'},
      {name:'Andis Slimline Pro Li',role:{en:'Detail Trimmer',es:'Recortadora Detalle',de:'Detail-Trimmer'},asin:'B0BRYP4NGB'},
    ],
    rating:9.2, reviews:38, quote:{
      en:'"The T-Outliner Cordless changed my game. I can do 30 lineups without charging and every one looks the same."',
      es:'"El T-Outliner Cordless cambió mi juego. Puedo hacer 30 lineups sin cargar y todos se ven igual."',
      de:'"Der T-Outliner Cordless hat mein Spiel verändert. Ich kann 30 Lineups machen ohne zu laden."',
    },
  },
  {
    name:'Sofia Mendez', city:'Miami', years:8, emoji:'💈',
    specialty:{en:'Women\'s Cuts & Color Transitions',es:'Cortes Femeninos y Transiciones de Color',de:'Damenhaarschnitte & Farbübergänge'},
    bio:{
      en:'Sofia bridges traditional barbering with modern styling. Her Miami clientele spans all genders, ages, and hair textures. She evaluates clippers for versatility and gentleness on fine hair first.',
      es:'Sofia une la barbería tradicional con el estilo moderno. Su clientela en Miami abarca todos los géneros, edades y texturas de cabello.',
      de:'Sofia verbindet traditionelle Barbierung mit modernem Styling. Ihre Miami-Kundschaft umfasst alle Geschlechter, Altersstufen und Haartexturen.',
    },
    kit:[
      {name:'BaByliss GoldFX Boost+',role:{en:'Primary Clipper',es:'Cortadora Principal',de:'Haupt-Clipper'},asin:'B09TCN6BHL'},
      {name:'Andis Slimline Pro Li',role:{en:'Detail & Kids',es:'Detalle y Niños',de:'Detail & Kinder'},asin:'B0BRYP4NGB'},
      {name:'BaByliss FX870 Influencer',role:{en:'Second Clipper',es:'Cortadora Secundaria',de:'Zweiter Clipper'},asin:'B07D7ZRXPD'},
    ],
    rating:8.9, reviews:29, quote:{
      en:'"The GoldFX runs quieter than most and the BOOST+ motor handles fine hair beautifully without pulling."',
      es:'"El GoldFX funciona más silencioso que la mayoría y el motor BOOST+ maneja el cabello fino sin tirones."',
      de:'"Der GoldFX läuft leiser als die meisten und der BOOST+-Motor handhabt feines Haar wunderschön."',
    },
  },
  {
    name:'James Okafor', city:'London', years:16, emoji:'👑',
    specialty:{en:'Afro Textures & Patterns',es:'Texturas Afro y Patrones',de:'Afro-Texturen & Muster'},
    bio:{
      en:'James is a Peckham institution. 16 years specializing in Afro-Caribbean hair textures, patterns, and designs. His clipper evaluations prioritize motor power, blade heat management, and blade zero-gap precision.',
      es:'James es una institución en Peckham. 16 años especializados en texturas afrocaribeñas, patrones y diseños.',
      de:'James ist eine Institution in Peckham. 16 Jahre Spezialisierung auf afrokaribische Haartexturen, Muster und Designs.',
    },
    kit:[
      {name:'Andis Master Cordless',role:{en:'Primary Clipper',es:'Cortadora Principal',de:'Haupt-Clipper'},asin:'B07MX1YRHF'},
      {name:'Wahl 5-Star Balding',role:{en:'Skin Work',es:'Trabajo al Ras',de:'Hautnahe Arbeit'},asin:'B000VVT94G'},
      {name:'Andis T-Outliner Cordless',role:{en:'Pattern Work',es:'Trabajo de Patrones',de:'Musterarbeit'},asin:'B0BJL7W4HP'},
    ],
    rating:9.1, reviews:52, quote:{
      en:'"Andis Master for power, Wahl Balding for the skin — this combo handles every Afro texture I\'ve ever seen."',
      es:'"Andis Master para potencia, Wahl Balding para la piel — esta combinación maneja todas las texturas afro."',
      de:'"Andis Master für Kraft, Wahl Balding für die Haut — diese Kombo handhabt jede Afro-Textur."',
    },
  },
]

export default function BarbersClient() {
  const { lang } = useApp()

  return (
    <main>
      <div style={{background:'var(--dark)',borderBottom:'1px solid var(--border)',padding:'12px 0'}}>
        <div className="container">
          <div style={{display:'flex',gap:8,alignItems:'center',fontSize:11,color:'var(--white-60)'}}>
            <Link href="/" style={{color:'var(--accent)'}}>BarberSuplyHub</Link>
            <span>/</span>
            <span style={{color:'var(--white)'}}>
              {lang==='es'?'Barberos':lang==='de'?'Barbiere':'Barbers'}
            </span>
          </div>
        </div>
      </div>

      <section style={{paddingTop:56,paddingBottom:48,background:'var(--dark)'}}>
        <div className="container-sm">
          <span className="kicker">{lang==='es'?'Nuestros Evaluadores':lang==='de'?'Unsere Tester':'Our Testers'} · 2026</span>
          <h1 style={{fontFamily:'var(--f-display)',fontSize:'clamp(48px,8vw,96px)',lineHeight:.93,marginBottom:20}}>
            <span style={{display:'block'}}>{lang==='es'?'LOS BARBEROS':lang==='de'?'DIE':'THE'}</span>
            <span style={{display:'block',color:'var(--accent)'}}>{lang==='es'?'QUE NOS':lang==='de'?'BARBIERE':'BARBERS'}</span>
            <span style={{display:'block'}}>{lang==='es'?'EVALÚAN':lang==='de'?'2026':'BEHIND IT'}</span>
          </h1>
          <p style={{fontSize:15,color:'var(--white-60)',lineHeight:1.8,marginBottom:32}}>
            {lang==='es'?'Cada puntuación en BarberSuplyHub proviene de barberos reales, con clientes reales, en barberías reales. Aquí están los profesionales que prueban cada herramienta.':
             lang==='de'?'Jede Bewertung auf BarberSuplyHub kommt von echten Barbieren, mit echten Kunden, in echten Barbershops.':
             'Every score on BarberSuplyHub comes from real barbers, with real clients, in real barbershops. Here are the professionals who test every tool.'}
          </p>
          <div style={{display:'flex',gap:24,flexWrap:'wrap'}}>
            {[
              {n:'4',en:'Pro Barbers',es:'Barberos Pro',de:'Profi-Barbiere'},
              {n:'49',en:'Years Combined',es:'Años Combinados',de:'Jahre kombiniert'},
              {n:'4',en:'Cities',es:'Ciudades',de:'Städte'},
            ].map(({n,en,es,de})=>(
              <div key={n}>
                <div style={{fontFamily:'var(--f-display)',fontSize:40,color:'var(--accent)',lineHeight:1}}>{n}</div>
                <div style={{fontSize:11,color:'var(--white-60)',textTransform:'uppercase',letterSpacing:'.08em'}}>{lang==='es'?es:lang==='de'?de:en}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container" style={{display:'flex',flexDirection:'column',gap:32}}>
          {BARBERS.map((b,i)=>(
            <div key={b.name} className="card" style={{padding:0,overflow:'hidden'}}>
              <div style={{display:'grid',gridTemplateColumns:'auto 1fr',gap:0}}>
                {/* LEFT — Identity */}
                <div style={{padding:32,background:'var(--dark-3)',borderRight:'1px solid var(--border)',minWidth:200,display:'flex',flexDirection:'column',gap:12,alignItems:'center',textAlign:'center'}}>
                  <div style={{fontSize:64,lineHeight:1}}>{b.emoji}</div>
                  <div>
                    <div style={{fontFamily:'var(--f-display)',fontSize:24,lineHeight:1}}>{b.name}</div>
                    <div style={{fontSize:11,color:'var(--accent)',marginTop:4}}>{b.city}</div>
                  </div>
                  <div style={{width:'100%',padding:'8px 0',borderTop:'1px solid var(--border)',borderBottom:'1px solid var(--border)'}}>
                    <div style={{fontFamily:'var(--f-display)',fontSize:32,color:'var(--accent)',lineHeight:1}}>{b.years}</div>
                    <div style={{fontSize:10,color:'var(--white-60)',textTransform:'uppercase',letterSpacing:'.08em'}}>
                      {lang==='es'?'años exp.':lang==='de'?'Jahre Erfahrung':'yrs experience'}
                    </div>
                  </div>
                  <div style={{fontSize:11,color:'var(--white-60)',textAlign:'center'}}>{L3(b.specialty,lang)}</div>
                  <div style={{fontSize:10,color:'var(--white-60)'}}>
                    {b.reviews} {lang==='es'?'herramientas evaluadas':lang==='de'?'Werkzeuge bewertet':'tools reviewed'}
                  </div>
                </div>

                {/* RIGHT — Content */}
                <div style={{padding:32}}>
                  <p style={{fontSize:14,color:'var(--white-60)',lineHeight:1.8,marginBottom:24}}>{L3(b.bio,lang)}</p>

                  {/* Quote */}
                  <blockquote style={{borderLeft:'3px solid var(--accent)',paddingLeft:16,marginBottom:28,fontStyle:'italic',color:'var(--white)',fontSize:14,lineHeight:1.7}}>
                    {L3(b.quote,lang)}
                  </blockquote>

                  {/* Tool Kit */}
                  <div>
                    <div style={{fontSize:10,fontWeight:700,letterSpacing:'.12em',textTransform:'uppercase',color:'var(--white-60)',marginBottom:12}}>
                      {lang==='es'?'KIT DE HERRAMIENTAS':lang==='de'?'WERKZEUG-SET':'TOOL KIT'}
                    </div>
                    <div style={{display:'flex',flexDirection:'column',gap:8}}>
                      {b.kit.map(tool=>(
                        <div key={tool.asin} style={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:12,padding:'10px 14px',background:'var(--dark-3)',borderRadius:3,border:'1px solid var(--border)'}}>
                          <div>
                            <div style={{fontSize:13,fontWeight:600}}>{tool.name}</div>
                            <div style={{fontSize:11,color:'var(--accent)'}}>{L3(tool.role,lang)}</div>
                          </div>
                          <a href={buildAffiliateUrl(tool.asin)} target="_blank" rel="noopener nofollow"
                            className="btn btn-primary btn-sm" style={{whiteSpace:'nowrap',flexShrink:0}}>
                            {lang==='es'?'Ver →':lang==='de'?'Ansehen →':'View →'}
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{background:'var(--dark)',borderTop:'1px solid var(--border)'}}>
        <div className="container-sm" style={{textAlign:'center'}}>
          <h2 style={{fontFamily:'var(--f-display)',fontSize:48,marginBottom:16}}>
            {lang==='es'?'VE SUS SELECCIONES':lang==='de'?'IHRE PICKS ANSEHEN':'SEE THEIR PICKS'}
          </h2>
          <div style={{display:'flex',gap:12,justifyContent:'center',flexWrap:'wrap'}}>
            <Link href="/picks/best-clippers" className="btn btn-primary">
              {lang==='es'?'Mejores Cortadoras →':lang==='de'?'Beste Clipper →':'Best Clippers →'}
            </Link>
            <Link href="/compare" className="btn btn-outline">
              {lang==='es'?'Comparar Todo →':lang==='de'?'Alles vergleichen →':'Compare All →'}
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
