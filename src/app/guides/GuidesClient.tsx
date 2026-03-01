'use client'
import Link from 'next/link'
import { useApp } from '@/components/ui/ThemeProvider'
import type { Lang } from '@/lib/data'

const L3=(obj:{en:string;es:string;de:string},lang:Lang)=>lang==='es'?obj.es:lang==='de'?obj.de:obj.en

const GUIDES = [
  {
    slug:'how-to-bald-fade', icon:'🪒', readTime:'8 min',
    title:{en:'How to Do a Bald Fade',es:'Cómo Hacer un Fade al Cero',de:'Wie man einen Bald Fade macht'},
    desc:{en:'Step-by-step bald fade technique from a 14-year NYC barber. The 3-pass method, blade selection, and common mistakes.',es:'Técnica de fade al cero paso a paso de un barbero de 14 años en NYC. El método de 3 pasadas.',de:'Schritt-für-Schritt Bald-Fade-Technik von einem 14-jährigen NYC-Barbier. Die 3-Pass-Methode.'},
    tags:['Technique','Beginner Friendly','Bald Fades'],
    difficulty:{en:'Intermediate',es:'Intermedio',de:'Mittelstufe'},
  },
  {
    slug:'how-to-choose-clipper', icon:'✂️', readTime:'6 min',
    title:{en:'How to Choose Your First Clipper',es:'Cómo Elegir Tu Primera Cortadora',de:'Wie man seinen ersten Clipper wählt'},
    desc:{en:'Rotary vs electromagnetic motor, cordless vs corded, zero-gap — everything you need to know before buying your first professional clipper.',es:'Motor rotativo vs electromagnético, inalámbrico vs cable, zero-gap — todo lo que necesitas saber antes de tu primera cortadora profesional.',de:'Rotations- vs. Elektromagnetmotor, kabellos vs. Kabel, Zero-Gap — alles was du vor deinem ersten Profi-Clipper wissen musst.'},
    tags:['Buying Guide','Motors','Cordless'],
    difficulty:{en:'Beginner',es:'Principiante',de:'Anfänger'},
  },
  {
    slug:'blade-maintenance', icon:'🔧', readTime:'5 min',
    title:{en:'Clipper Blade Maintenance Guide',es:'Guía de Mantenimiento de Cuchillas',de:'Klingenwartungsanleitung'},
    desc:{en:'How to oil, clean, zero-gap and replace clipper blades. The routine that makes your blades last 3x longer and keeps clients comfortable.',es:'Cómo aceitar, limpiar, ajustar zero-gap y reemplazar cuchillas. La rutina que hace que tus cuchillas duren 3 veces más.',de:'Wie man Clipper-Klingen ölt, reinigt, zero-gappt und ersetzt. Die Routine, die Klingen 3x länger hält.'},
    tags:['Maintenance','Blade Care','Sanitation'],
    difficulty:{en:'Beginner',es:'Principiante',de:'Anfänger'},
  },
  {
    slug:'how-to-lineup', icon:'🔪', readTime:'7 min',
    title:{en:'Perfect Lineup & Edge-Up Guide',es:'Guía de Lineup y Edge-Up Perfecto',de:'Perfekter Lineup & Edge-Up Guide'},
    desc:{en:'Achieve crisp, symmetrical lineups every time. Temple angle, hairline mapping, T-blade technique and fixing common errors.',es:'Logra lineups nítidos y simétricos cada vez. Ángulo de sienes, mapeo de línea capilar y corrección de errores comunes.',de:'Scharfe, symmetrische Lineups jedes Mal. Schläfenwinkel, Haaransatz-Mapping und Korrektur häufiger Fehler.'},
    tags:['Lineups','T-Blade','Precision'],
    difficulty:{en:'Intermediate',es:'Intermedio',de:'Mittelstufe'},
  },
  {
    slug:'zero-gap-guide', icon:'⚙️', readTime:'4 min',
    title:{en:'How to Zero-Gap Your Clipper',es:'Cómo Ajustar el Zero-Gap de Tu Cortadora',de:'Wie man seinen Clipper zero-gappt'},
    desc:{en:'Zero-gapping gives you the closest possible cut. Safe step-by-step instructions for Wahl, Andis, and BaByliss clippers. When to zero-gap and when not to.',es:'El zero-gap te da el corte más cercano posible. Instrucciones paso a paso seguras para Wahl, Andis y BaByliss.',de:'Zero-Gapping gibt dir den engstmöglichen Schnitt. Sichere Schritt-für-Schritt-Anweisungen für Wahl, Andis und BaByliss.'},
    tags:['Zero-Gap','Advanced','Blade Adjustment'],
    difficulty:{en:'Advanced',es:'Avanzado',de:'Fortgeschritten'},
  },
  {
    slug:'barber-sanitation', icon:'🧼', readTime:'5 min',
    title:{en:'Barbershop Sanitation Standards 2026',es:'Estándares de Sanitación en Barbería 2026',de:'Barbershop-Sanitationsstandards 2026'},
    desc:{en:'State board sanitation requirements, Barbicide protocol, blood spill procedures, and infection control for professional barbershops.',es:'Requisitos de sanitación del consejo estatal, protocolo Barbicide, procedimientos de derrame de sangre y control de infecciones.',de:'Staatliche Sanitationsanforderungen, Barbicide-Protokoll, Blutungsverfahren und Infektionskontrolle.'},
    tags:['Sanitation','Health','Compliance'],
    difficulty:{en:'Essential',es:'Esencial',de:'Wesentlich'},
  },
]

const DIFF_COLOR: Record<string,string> = {
  Beginner:'var(--green)', Principiante:'var(--green)', Anfänger:'var(--green)',
  Intermediate:'var(--accent)', Intermedio:'var(--accent)', Mittelstufe:'var(--accent)',
  Advanced:'var(--red)', Avanzado:'var(--red)', Fortgeschritten:'var(--red)',
  Essential:'#a855f7', Esencial:'#a855f7', Wesentlich:'#a855f7',
}

export default function GuidesClient() {
  const { lang } = useApp()

  return (
    <main>
      <div style={{background:'var(--dark)',borderBottom:'1px solid var(--border)',padding:'12px 0'}}>
        <div className="container">
          <div style={{display:'flex',gap:8,alignItems:'center',fontSize:11,color:'var(--white-60)'}}>
            <Link href="/" style={{color:'var(--accent)'}}>BarberSuplyHub</Link>
            <span>/</span>
            <span style={{color:'var(--white)'}}>
              {lang==='es'?'Guías':lang==='de'?'Anleitungen':'Guides'}
            </span>
          </div>
        </div>
      </div>

      <section style={{paddingTop:56,paddingBottom:48,background:'var(--dark)'}}>
        <div className="container-sm">
          <span className="kicker">{lang==='es'?'Por Barberos Profesionales':lang==='de'?'Von Profi-Barbieren':'By Pro Barbers'} · 2026</span>
          <h1 style={{fontFamily:'var(--f-display)',fontSize:'clamp(48px,8vw,96px)',lineHeight:.93,marginBottom:20}}>
            <span style={{display:'block'}}>{lang==='es'?'GUÍAS':lang==='de'?'ANLEIT-':'BARBER'}</span>
            <span style={{display:'block',color:'var(--accent)'}}>{lang==='es'?'DE BARBERÍA':lang==='de'?'UNGEN':'GUIDES'}</span>
            <span style={{display:'block'}}>2026</span>
          </h1>
          <p style={{fontSize:15,color:'var(--white-60)',lineHeight:1.8}}>
            {lang==='es'?'Técnicas, mantenimiento y guías de compra escritas por barberos con décadas de experiencia en barbería profesional.':
             lang==='de'?'Techniken, Wartung und Kaufratgeber von Barbieren mit jahrzehntelanger professioneller Erfahrung.':
             'Techniques, maintenance, and buying guides written by barbers with decades of professional barbering experience.'}
          </p>
        </div>
      </section>

      <div className="container"><div className="ad-unit ad-leader"><span>Advertisement</span></div></div>

      <section>
        <div className="container">
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(340px,1fr))',gap:20}}>
            {GUIDES.map(g=>{
              const diff = L3(g.difficulty,lang)
              return (
                <Link key={g.slug} href={`/guides/${g.slug}`}
                  style={{display:'flex',flexDirection:'column',background:'var(--dark-2)',border:'1px solid var(--border)',borderRadius:4,overflow:'hidden',transition:'all .3s'}}
                  onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.borderColor='var(--accent)';(e.currentTarget as HTMLElement).style.transform='translateY(-2px)'}}
                  onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.borderColor='var(--border)';(e.currentTarget as HTMLElement).style.transform='none'}}>
                  <div style={{padding:'28px 24px 20px',flex:1}}>
                    <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:16}}>
                      <span style={{fontSize:36}}>{g.icon}</span>
                      <div style={{display:'flex',gap:6,alignItems:'center'}}>
                        <span style={{fontSize:9,fontWeight:700,color:DIFF_COLOR[diff]||'var(--accent)',border:`1px solid ${DIFF_COLOR[diff]||'var(--accent)'}`,padding:'2px 8px',borderRadius:2,textTransform:'uppercase',letterSpacing:'.08em'}}>{diff}</span>
                        <span style={{fontSize:10,color:'var(--white-60)'}}>{g.readTime} {lang==='es'?'lectura':lang==='de'?'Lesen':'read'}</span>
                      </div>
                    </div>
                    <h2 style={{fontFamily:'var(--f-display)',fontSize:24,lineHeight:1.1,marginBottom:12}}>{L3(g.title,lang)}</h2>
                    <p style={{fontSize:13,color:'var(--white-60)',lineHeight:1.7,marginBottom:16}}>{L3(g.desc,lang)}</p>
                    <div style={{display:'flex',gap:6,flexWrap:'wrap'}}>
                      {g.tags.map(tag=>(
                        <span key={tag} className="tag tag-amber">{tag}</span>
                      ))}
                    </div>
                  </div>
                  <div style={{padding:'14px 24px',borderTop:'1px solid var(--border)',display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                    <span style={{fontSize:11,fontWeight:700,letterSpacing:'.08em',textTransform:'uppercase',color:'var(--accent)'}}>
                      {lang==='es'?'Leer guía':lang==='de'?'Anleitung lesen':'Read guide'}
                    </span>
                    <span style={{color:'var(--accent)',fontSize:18}}>→</span>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <section style={{background:'var(--dark)',borderTop:'1px solid var(--border)'}}>
        <div className="container-sm" style={{textAlign:'center'}}>
          <h2 style={{fontFamily:'var(--f-display)',fontSize:48,marginBottom:16}}>
            {lang==='es'?'¿LISTO PARA COMPRAR?':lang==='de'?'BEREIT ZU KAUFEN?':'READY TO BUY?'}
          </h2>
          <p style={{color:'var(--white-60)',marginBottom:28}}>
            {lang==='es'?'Ve nuestras selecciones recomendadas por barberos profesionales.':
             lang==='de'?'Sieh dir unsere von professionellen Barbieren empfohlenen Picks an.':
             'See our picks recommended by professional barbers.'}
          </p>
          <div style={{display:'flex',gap:12,justifyContent:'center',flexWrap:'wrap'}}>
            <Link href="/picks/best-clippers" className="btn btn-primary">
              {lang==='es'?'Mejores Cortadoras →':lang==='de'?'Beste Clipper →':'Best Clippers →'}
            </Link>
            <Link href="/compare" className="btn btn-outline">
              {lang==='es'?'Comparar Todas →':lang==='de'?'Alle vergleichen →':'Compare All →'}
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
