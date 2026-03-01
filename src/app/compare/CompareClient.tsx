'use client'
import { useState } from 'react'
import Link from 'next/link'
import { useApp } from '@/components/ui/ThemeProvider'
import { PRODUCTS, buildAffiliateUrl, type Lang } from '@/lib/data'

function T(obj: Record<Lang,string>, lang: Lang){ return obj[lang]??obj.en }

type Filter = 'all'|'cordless'|'corded'|'under100'|'trimmers'
const FILTERS: {key:Filter; en:string; es:string; de:string}[] = [
  {key:'all',    en:'All Tools',    es:'Todas',        de:'Alle'},
  {key:'cordless',en:'Cordless',   es:'Inalámbricas', de:'Kabellos'},
  {key:'corded', en:'Corded',      es:'Con Cable',    de:'Mit Kabel'},
  {key:'under100',en:'Under $100', es:'Menos $100',   de:'Unter $100'},
  {key:'trimmers',en:'Trimmers',   es:'Recortadoras', de:'Trimmer'},
]

const TRIMMER_IDS = ['andis-t-outliner-cordless','andis-slimline-pro-li']

const L3 = (obj:{en:string;es:string;de:string}, lang:Lang) =>
  lang==='es'?obj.es:lang==='de'?obj.de:obj.en

export default function CompareClient() {
  const { lang } = useApp()
  const [filter, setFilter] = useState<Filter>('all')
  const [sort, setSort] = useState<'score'|'price'|'battery'>('score')

  const filtered = PRODUCTS
    .filter(p => {
      if (filter==='cordless') return p.specs.cordless
      if (filter==='corded') return !p.specs.cordless
      if (filter==='under100') return p.price < 100
      if (filter==='trimmers') return TRIMMER_IDS.includes(p.id)
      return true
    })
    .sort((a,b) => {
      if (sort==='price') return a.price-b.price
      if (sort==='battery') {
        const getMin = (s:string) => parseInt(s)||0
        return getMin(b.specs.battery??"")-getMin(a.specs.battery??"")
      }
      return b.score-a.score
    })

  return (
    <main>
      {/* BREADCRUMB */}
      <div style={{background:'var(--dark)',borderBottom:'1px solid var(--border)',padding:'12px 0'}}>
        <div className="container">
          <div style={{display:'flex',gap:8,alignItems:'center',fontSize:11,color:'var(--white-60)'}}>
            <Link href="/" style={{color:'var(--accent)'}}>BarberSuplyHub</Link>
            <span>/</span>
            <span style={{color:'var(--white)'}}>
              {lang==='es'?'Comparar':lang==='de'?'Vergleichen':'Compare'}
            </span>
          </div>
        </div>
      </div>

      {/* HERO */}
      <section style={{paddingTop:56,paddingBottom:40,background:'var(--dark)'}}>
        <div className="container-sm">
          <span className="kicker">{lang==='es'?'Herramienta de Comparación':lang==='de'?'Vergleichstool':'Comparison Tool'} · {lang==='es'?'Febrero':'Februar'==='Februar'&&lang==='de'?'Februar':'February'} 2026</span>
          <h1 style={{fontFamily:'var(--f-display)',fontSize:'clamp(40px,7vw,80px)',lineHeight:.93,marginBottom:16}}>
            <span style={{display:'block'}}>{lang==='es'?'COMPARA':lang==='de'?'VERGLEICHE':'COMPARE'}</span>
            <span style={{display:'block',color:'var(--accent)'}}>{lang==='es'?'HERRAMIENTAS':lang==='de'?'WERKZEUGE':'ALL TOOLS'}</span>
          </h1>
          <p style={{fontSize:15,color:'var(--white-60)',lineHeight:1.8}}>
            {lang==='es'?'7 herramientas profesionales comparadas lado a lado. Filtra por precio, motor y batería.':
             lang==='de'?'7 professionelle Werkzeuge direkt verglichen. Nach Preis, Motor und Akku filtern.':
             '7 professional tools compared side-by-side. Filter by price, motor type & battery life.'}
          </p>
        </div>
      </section>

      {/* FILTERS + SORT */}
      <div style={{background:'var(--dark-2)',borderBottom:'1px solid var(--border)',position:'sticky',top:0,zIndex:50}}>
        <div className="container" style={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:16,padding:'14px 24px',flexWrap:'wrap'}}>
          <div style={{display:'flex',gap:6,flexWrap:'wrap'}}>
            {FILTERS.map(f=>(
              <button key={f.key} onClick={()=>setFilter(f.key)}
                style={{padding:'7px 14px',fontSize:11,fontWeight:700,letterSpacing:'.08em',textTransform:'uppercase',
                  background:filter===f.key?'var(--accent)':'transparent',
                  color:filter===f.key?'#000':'var(--white-60)',
                  border:`1px solid ${filter===f.key?'var(--accent)':'var(--border)'}`,
                  borderRadius:2,transition:'all .2s'}}>
                {L3(f,lang)}
              </button>
            ))}
          </div>
          <div style={{display:'flex',gap:6,alignItems:'center'}}>
            <span style={{fontSize:11,color:'var(--white-60)',letterSpacing:'.06em',textTransform:'uppercase'}}>
              {lang==='es'?'Ordenar:':lang==='de'?'Sortieren:':'Sort:'}
            </span>
            {(['score','price','battery'] as const).map(s=>(
              <button key={s} onClick={()=>setSort(s)}
                style={{padding:'5px 12px',fontSize:10,fontWeight:700,letterSpacing:'.08em',textTransform:'uppercase',
                  background:sort===s?'var(--accent-dim)':'transparent',
                  color:sort===s?'var(--accent)':'var(--white-60)',
                  border:`1px solid ${sort===s?'var(--accent)':'var(--border)'}`,borderRadius:2}}>
                {s==='score'?(lang==='es'?'Nota':lang==='de'?'Score':'Score'):
                 s==='price'?(lang==='es'?'Precio':lang==='de'?'Preis':'Price'):
                 (lang==='es'?'Batería':lang==='de'?'Akku':'Battery')}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* COMPARE TABLE — Desktop */}
      <section style={{padding:'40px 0'}}>
        <div className="container" style={{overflowX:'auto'}}>
          <table style={{width:'100%',borderCollapse:'collapse',fontSize:13}}>
            <thead>
              <tr style={{borderBottom:'2px solid var(--accent)'}}>
                <th style={{padding:'12px 16px',textAlign:'left',fontFamily:'var(--f-display)',fontSize:14,color:'var(--white-60)',fontWeight:400,width:180}}>
                  {lang==='es'?'Herramienta':lang==='de'?'Werkzeug':'Tool'}
                </th>
                {['Score','Price','Motor','Battery','Weight','Cordless','Zero-Gap','Warranty'].map(h=>(
                  <th key={h} style={{padding:'12px 10px',textAlign:'center',fontFamily:'var(--f-display)',fontSize:13,color:'var(--white-60)',fontWeight:400,whiteSpace:'nowrap'}}>
                    {h==='Price'?(lang==='es'?'Precio':lang==='de'?'Preis':h):
                     h==='Battery'?(lang==='es'?'Batería':lang==='de'?'Akku':h):
                     h==='Weight'?(lang==='es'?'Peso':lang==='de'?'Gewicht':h):
                     h==='Cordless'?(lang==='es'?'Inalámbr.':lang==='de'?'Kabellos':h):
                     h==='Warranty'?(lang==='es'?'Garantía':lang==='de'?'Garantie':h):h}
                  </th>
                ))}
                <th style={{padding:'12px 10px',textAlign:'center',fontFamily:'var(--f-display)',fontSize:13,color:'var(--white-60)',fontWeight:400}}>
                  {lang==='es'?'Comprar':lang==='de'?'Kaufen':'Buy'}
                </th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((p,i)=>(
                <tr key={p.id} style={{borderBottom:'1px solid var(--border)',background:i%2===0?'transparent':'var(--dark-2)',transition:'background .2s'}}
                  onMouseEnter={e=>(e.currentTarget as HTMLElement).style.background='var(--accent-dim)'}
                  onMouseLeave={e=>(e.currentTarget as HTMLElement).style.background=i%2===0?'transparent':'var(--dark-2)'}>
                  <td style={{padding:'16px',verticalAlign:'middle'}}>
                    <div style={{display:'flex',alignItems:'center',gap:10}}>
                      <span style={{fontFamily:'var(--f-display)',fontSize:22,color:'var(--accent)',width:32,flexShrink:0}}>{String(p.rank).padStart(2,'0')}</span>
                      <div>
                        <div style={{fontSize:10,color:'var(--accent)',fontWeight:700,letterSpacing:'.08em',textTransform:'uppercase'}}>{p.brand}</div>
                        <div style={{fontSize:13,fontWeight:600,color:'var(--white)'}}>{p.name}</div>
                        {p.badge&&<div style={{fontSize:9,background:'var(--accent)',color:'#000',fontWeight:700,padding:'1px 6px',borderRadius:2,display:'inline-block',marginTop:3}}>{p.badge[lang]}</div>}
                      </div>
                    </div>
                  </td>
                  {/* Score */}
                  <td style={{padding:'16px 10px',textAlign:'center',verticalAlign:'middle'}}>
                    <div style={{fontFamily:'var(--f-display)',fontSize:28,color:'var(--accent)',lineHeight:1}}>{p.score}</div>
                    <div style={{fontSize:9,color:'var(--white-60)'}}>/10</div>
                  </td>
                  {/* Price */}
                  <td style={{padding:'16px 10px',textAlign:'center',verticalAlign:'middle'}}>
                    <div style={{fontFamily:'var(--f-display)',fontSize:20}}>${p.price}</div>
                    {p.priceOld&&<div style={{fontSize:10,color:'var(--white-60)',textDecoration:'line-through'}}>${p.priceOld}</div>}
                  </td>
                  {/* Motor */}
                  <td style={{padding:'16px 10px',textAlign:'center',verticalAlign:'middle',fontSize:11,color:'var(--white-60)'}}>{p.specs.motor}</td>
                  {/* Battery */}
                  <td style={{padding:'16px 10px',textAlign:'center',verticalAlign:'middle'}}>
                    <span style={{fontSize:12,color:(p.specs.battery??"").includes('∞')||parseInt(p.specs.battery??"0")>=120?'var(--accent)':'var(--white-60)',fontWeight:600}}>{p.specs.battery}</span>
                  </td>
                  {/* Weight */}
                  <td style={{padding:'16px 10px',textAlign:'center',verticalAlign:'middle',fontSize:12,color:'var(--white-60)'}}>{p.specs.weight}</td>
                  {/* Cordless */}
                  <td style={{padding:'16px 10px',textAlign:'center',verticalAlign:'middle'}}>
                    <span style={{fontSize:18}}>{p.specs.cordless?'✓':'✗'}</span>
                  </td>
                  {/* Zero-Gap */}
                  <td style={{padding:'16px 10px',textAlign:'center',verticalAlign:'middle'}}>
                    <span style={{fontSize:18,color:p.specs.zeroGap?'var(--accent)':'var(--white-60)'}}>{p.specs.zeroGap?'✓':'✗'}</span>
                  </td>
                  {/* Warranty */}
                  <td style={{padding:'16px 10px',textAlign:'center',verticalAlign:'middle',fontSize:11,color:'var(--white-60)'}}>{p.specs.warranty}</td>
                  {/* Buy */}
                  <td style={{padding:'16px 10px',textAlign:'center',verticalAlign:'middle'}}>
                    <a href={buildAffiliateUrl(p.asin)} target="_blank" rel="noopener nofollow"
                      className="btn btn-primary btn-sm" style={{whiteSpace:'nowrap',fontSize:10}}>
                      {lang==='es'?'Amazon →':lang==='de'?'Amazon →':'Amazon →'}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filtered.length===0&&(
            <div style={{textAlign:'center',padding:60,color:'var(--white-60)'}}>
              {lang==='es'?'No hay herramientas que coincidan':lang==='de'?'Keine passenden Werkzeuge':'No tools match this filter'}
            </div>
          )}
        </div>
      </section>

      {/* SCORE BREAKDOWN SECTION */}
      <section style={{background:'var(--dark)',borderTop:'1px solid var(--border)'}}>
        <div className="container">
          <div className="sec-hd">
            <div>
              <span className="kicker">{lang==='es'?'Desglose Detallado':lang==='de'?'Detaillierte Aufschlüsselung':'Detailed Breakdown'}</span>
              <h2 className="sec-title">
                {lang==='es'?'PUNTUACIÓN\nPOR CATEGORÍA':lang==='de'?'SCORE\nNACH KATEGORIE':'SCORES\nBY CATEGORY'}
              </h2>
            </div>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(300px,1fr))',gap:16}}>
            {filtered.map(p=>(
              <div key={p.id} className="card" style={{padding:20}}>
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',marginBottom:16}}>
                  <div>
                    <div style={{fontSize:10,color:'var(--accent)',fontWeight:700,letterSpacing:'.08em',textTransform:'uppercase'}}>{p.brand}</div>
                    <div style={{fontFamily:'var(--f-display)',fontSize:20}}>{p.name}</div>
                  </div>
                  <div style={{fontFamily:'var(--f-display)',fontSize:36,color:'var(--accent)',lineHeight:1}}>{p.score}</div>
                </div>
                {p.scoreBreakdown.map((sb,j)=>(
                  <div key={j} className="score-bar" style={{marginBottom:8}}>
                    <span className="score-bar__label">{T(sb.label,lang)}</span>
                    <div className="score-bar__track"><div className="score-bar__fill" style={{width:`${sb.score*10}%`}}/></div>
                    <span className="score-bar__val">{sb.score}</span>
                  </div>
                ))}
                <a href={buildAffiliateUrl(p.asin)} target="_blank" rel="noopener nofollow"
                  className="btn btn-outline btn-sm" style={{width:'100%',justifyContent:'center',marginTop:14}}>
                  {lang==='es'?'Ver precio →':lang==='de'?'Preis ansehen →':'Check price →'}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{borderTop:'1px solid var(--border)'}}>
        <div className="container-sm" style={{textAlign:'center'}}>
          <h2 style={{fontFamily:'var(--f-display)',fontSize:48,marginBottom:16}}>
            {lang==='es'?'¿LISTO PARA ELEGIR?':lang==='de'?'BEREIT ZU WÄHLEN?':'READY TO CHOOSE?'}
          </h2>
          <p style={{color:'var(--white-60)',marginBottom:32}}>
            {lang==='es'?'Nuestros editores seleccionaron el mejor para cada caso de uso.':
             lang==='de'?'Unsere Redakteure haben das beste für jeden Anwendungsfall ausgewählt.':
             'Our editors picked the best for each use case.'}
          </p>
          <div style={{display:'flex',gap:12,justifyContent:'center',flexWrap:'wrap'}}>
            <Link href="/picks/best-clippers" className="btn btn-primary">
              {lang==='es'?'Mejores Cortadoras →':lang==='de'?'Beste Haarschneider →':'Best Clippers →'}
            </Link>
            <Link href="/picks/best-trimmers" className="btn btn-outline">
              {lang==='es'?'Mejores Recortadoras →':lang==='de'?'Beste Trimmer →':'Best Trimmers →'}
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
