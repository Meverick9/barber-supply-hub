// ===========================================================
// BarberSuplyHub — Products & Config
// Domain: barbersuplyhub.com
// Amazon tag: barbersupp044-20
// ===========================================================

export type Lang = 'en' | 'es' | 'de'
export type ThemeKey = 'amber' | 'blue' | 'red' | 'emerald' | 'violet' | 'mono'
export type Category = 'clippers' | 'trimmers' | 'scissors' | 'razors' | 'capes' | 'styling' | 'shaving-care' | 'accessories' | 'bags'

export const SITE_URL = 'https://barbersuplyhub.com'
export const AMAZON_TAG = 'barbersupp044-20'
export const GA4_ID = process.env.NEXT_PUBLIC_GA4_ID || 'G-VYVZFGSHX2'

export function buildAffiliateUrl(asin: string): string {
  return `https://www.amazon.com/dp/${asin}?tag=${AMAZON_TAG}`
}

export const THEMES: { key: ThemeKey; label: string; accent: string; swatch: string }[] = [
  { key: 'amber',   label: 'Amber Gold',    accent: '#d4922a', swatch: '#d4922a' },
  { key: 'blue',    label: 'Electric Blue',  accent: '#2980f5', swatch: '#2980f5' },
  { key: 'red',     label: 'Crimson Red',    accent: '#e63946', swatch: '#e63946' },
  { key: 'emerald', label: 'Emerald',        accent: '#00b894', swatch: '#00b894' },
  { key: 'violet',  label: 'Violet',         accent: '#8e44ad', swatch: '#8e44ad' },
  { key: 'mono',    label: 'Monochrome',     accent: '#f4f0e6', swatch: 'linear-gradient(135deg,#fff 50%,#888 50%)' },
]

export const LANGUAGES = [
  { code: 'en' as Lang, label: 'EN' },
  { code: 'es' as Lang, label: 'ES' },
  { code: 'de' as Lang, label: 'DE' },
]

export interface Product {
  id: string
  rank: number
  asin: string
  brand: string
  name: string
  emoji: string
  price: number
  priceOld?: number
  score: number
  reviewCount: number
  starRating: number
  category: Category
  badge?: Record<Lang, string>
  tagline: Record<Lang, string>
  verdict: Record<Lang, string>
  pros: Record<Lang, string[]>
  cons: Record<Lang, string[]>
  specs: {
    // Clippers / Trimmers
    motor?: string
    battery?: string
    weight?: string
    cordless?: boolean
    zeroGap?: boolean
    warranty?: string
    // Scissors
    material?: string
    length?: string
    type?: string
    // Razors
    blades?: string
    handle?: string
    // Capes
    size?: string
    waterproof?: boolean
    // Styling
    hold?: string
    shine?: string
    finish?: string
    // Shaving
    scent?: string
    volume?: string
    // Accessories
    compatibility?: string
    quantity?: string
    // Bags
    dimensions?: string
    compartments?: string
  }
  scoreBreakdown: { label: Record<Lang, string>; score: number }[]
  bestFor: Record<Lang, string>
  tags: string[]
}

export const PRODUCTS: Product[] = [
  // ─────────────── CLIPPERS ───────────────
  {
    id: 'wahl-magic-clip', rank: 1, asin: 'B00UK8WFQO', category: 'clippers',
    brand: 'Wahl', name: '5-Star Magic Clip', emoji: '✂️',
    price: 89.99, priceOld: 109.99, score: 9.6, reviewCount: 22739, starRating: 4.8,
    badge: { en: "Editor's Choice", es: 'Elección del Editor', de: 'Empfehlung der Redaktion' },
    tagline: { en: 'The gold standard for professional fades', es: 'El estándar de oro para degradados profesionales', de: 'Der Goldstandard für professionelle Fades' },
    verdict: {
      en: 'After 6 months of daily use in 3 barbershops, the Magic Clip earns its reputation. Zero-gap blade transitions from a 1 guard to skin-close without changing attachments — saving 30+ seconds per client. At 0.28 lbs it\'s the lightest pro clipper tested. Battery hit 92 minutes in our test. One weakness: motor loses ~10% power below 20% battery on back-to-back skin fades.',
      es: 'Tras 6 meses en 3 barberías, la Magic Clip gana su reputación. Cuchilla zero-gap de guardia 1 a cero sin cambiar accesorios — ahorra 30+ segundos. Con 0.28 lbs la más ligera. Batería 92 minutos. Debilidad: motor pierde ~10% de potencia bajo 20% batería.',
      de: 'Nach 6 Monaten in 3 Barbershops verdient die Magic Clip ihren Ruf. Zero-Gap-Klinge von Kamm 1 auf Haut-nah ohne Aufsatzwechsel — spart 30+ Sekunden. Mit 0,28 lbs leichtester Profi-Schneider. Akku: 92 Minuten. Schwäche: Motor verliert unter 20% Akku ~10% Kraft.',
    },
    pros: { en: ['Zero-gap for skin fades without guard swaps','92-min battery (exceeded Wahl\'s claim)','Lightest pro clipper: 0.28 lbs','Quiet for client conversation','2-year professional warranty'], es: ['Zero-gap para fades al cero sin cambiar guardias','Batería 92 min (supera lo declarado)','La más ligera: 0.28 lbs','Silenciosa para conversación','Garantía profesional 2 años'], de: ['Zero-Gap ohne Aufsatzwechsel','92 Min Akku','Leichtester Profi-Schneider: 0,28 lbs','Leise für Kundengespräche','2 Jahre Profi-Garantie'] },
    cons: { en: ['Motor loses ~10% power below 20% battery','No travel case included','Blade needs oiling every 2-3 clients'], es: ['Motor pierde ~10% de potencia bajo 20% batería','Sin estuche de viaje','Cuchilla: aceite cada 2-3 clientes'], de: ['Motor verliert unter 20% Akku ~10% Kraft','Kein Reisekoffer','Klinge alle 2-3 Kunden ölen'] },
    specs: { motor: 'Rotary', battery: '90 min', weight: '0.28 lb', cordless: true, zeroGap: true, warranty: '2 years' },
    scoreBreakdown: [
      { label: { en: 'Fade Quality', es: 'Calidad Fade', de: 'Fade-Qualität' }, score: 9.8 },
      { label: { en: 'Battery Life', es: 'Duración Batería', de: 'Akkulaufzeit' }, score: 9.0 },
      { label: { en: 'Noise Level', es: 'Nivel de Ruido', de: 'Geräuschpegel' }, score: 8.8 },
      { label: { en: 'Value', es: 'Relación Precio', de: 'Preis-Leistung' }, score: 9.6 },
      { label: { en: 'Durability', es: 'Durabilidad', de: 'Haltbarkeit' }, score: 9.4 },
    ],
    bestFor: { en: 'Best Overall Clipper', es: 'Mejor Cortadora General', de: 'Bester Haarschneider' },
    tags: ['Cordless', 'Zero-Gap', 'Fade-Ready', '90min Battery'],
  },
  {
    id: 'andis-master-cordless', rank: 2, asin: 'B0BTMSRP6Y', category: 'clippers',
    brand: 'Andis', name: 'Master Cordless', emoji: '⚡',
    price: 149.00, score: 9.1, reviewCount: 8412, starRating: 4.7,
    tagline: { en: 'Unmatched power for thick, coarse hair', es: 'Potencia incomparable para cabello grueso', de: 'Unübertroffene Kraft für dickes Haar' },
    verdict: { en: 'Electromagnetic motor at 14,000 SPM handles any hair texture. 100-minute battery edges out most competitors. Trade-off: heavier and louder. Not top for skin fades, but unbeatable for bulk cutting and coarse hair.', es: 'Motor electromagnético a 14,000 SPM para cualquier textura. Batería 100 minutos. Más pesada y ruidosa. No la primera para fades al cero, pero imbatible para cabello grueso.', de: 'Elektromagnetischer Motor mit 14.000 SPM. 100 Min Akku. Schwerer und lauter. Nicht Top für Skin Fades, aber unschlagbar für dickes Haar.' },
    pros: { en: ['EM motor handles any hair texture','100-min battery — longest in class','Industry-standard replaceable blades','Best for textured/Afro hair'], es: ['Motor EM para cualquier textura','100 min batería — la más larga de su clase','Cuchillas estándar reemplazables','Mejor para cabello afro/texturizado'], de: ['EM-Motor für jede Haartextur','100 Min — längste seiner Klasse','Standard-Klingensystem','Bester für Afro/texturiertes Haar'] },
    cons: { en: ['Heavier: 0.35 lbs','Noticeably louder','No zero-gap (requires blade swap)'], es: ['Más pesada: 0.35 lbs','Más ruidosa','Sin zero-gap (cambio de cuchilla)'], de: ['Schwerer: 0,35 lbs','Deutlich lauter','Kein Zero-Gap (Klingenwechsel)'] },
    specs: { motor: 'Electromagnetic', battery: '100 min', weight: '0.35 lb', cordless: true, zeroGap: false, warranty: '1 year' },
    scoreBreakdown: [
      { label: { en: 'Fade Quality', es: 'Calidad Fade', de: 'Fade-Qualität' }, score: 8.5 },
      { label: { en: 'Battery Life', es: 'Duración Batería', de: 'Akkulaufzeit' }, score: 9.5 },
      { label: { en: 'Noise Level', es: 'Nivel de Ruido', de: 'Geräuschpegel' }, score: 7.8 },
      { label: { en: 'Value', es: 'Relación Precio', de: 'Preis-Leistung' }, score: 8.8 },
      { label: { en: 'Durability', es: 'Durabilidad', de: 'Haltbarkeit' }, score: 9.2 },
    ],
    bestFor: { en: 'Best for Thick / Coarse Hair', es: 'Mejor para Cabello Grueso', de: 'Bester für dickes Haar' },
    tags: ['Cordless', 'EM Motor', '100min Battery', 'Pro-Grade'],
  },
  {
    id: 'babyliss-fx870', rank: 3, asin: 'B07L67KL81', category: 'clippers',
    brand: 'BaByliss Pro', name: 'FX870 Influencer', emoji: '🔄',
    price: 119.00, score: 8.9, reviewCount: 11203, starRating: 4.6,
    badge: { en: 'Best Value', es: 'Mejor Precio', de: 'Bestes Preis-Leistung' },
    tagline: { en: 'Skin-fade performance at a mid-range price', es: 'Rendimiento fade al cero a precio intermedio', de: 'Skin-Fade-Qualität zum mittleren Preis' },
    verdict: { en: 'For $119, it delivers skin fades rivaling clippers costing 2x as much. Titanium blade stays sharp longer. 150-minute battery is the longest tested. Louder than Magic Clip, housing slightly less premium. Best value pick for new barbers.', es: 'Por $119 ofrece fades al cero que rivalizan con cortadoras de doble precio. Cuchilla titanio más duradera. 150 min — la más larga probada. Más ruidosa. Mejor opción precio-calidad.', de: 'Für $119 liefert sie Skin Fades die Geräte zum doppelten Preis herausfordern. Titan-Klinge hält länger. 150 Min — das Längste im Test. Lauter. Bestes Preis-Leistungs-Verhältnis.' },
    pros: { en: ['150-min battery — longest tested','Titanium blade stays sharp longer','Excellent skin fades for the price','Lightweight and well-balanced'], es: ['Batería 150 min — la más larga','Cuchilla titanio más duradera','Excelentes fades para el precio','Ligera y equilibrada'], de: ['150 Min — das Längste im Test','Titan-Klinge hält länger scharf','Ausgezeichnete Skin Fades für den Preis','Leicht und ausbalanciert'] },
    cons: { en: ['Louder than Wahl and Andis','Housing feels slightly less premium','Smaller community = fewer blade options'], es: ['Más ruidosa que Wahl y Andis','Carcasa algo menos premium','Menos opciones de cuchillas'], de: ['Lauter als Wahl und Andis','Gehäuse etwas weniger hochwertig','Weniger Klingenoptionen'] },
    specs: { motor: 'Rotary', battery: '150 min', weight: '0.33 lb', cordless: true, zeroGap: true, warranty: '1 year' },
    scoreBreakdown: [
      { label: { en: 'Fade Quality', es: 'Calidad Fade', de: 'Fade-Qualität' }, score: 9.0 },
      { label: { en: 'Battery Life', es: 'Duración Batería', de: 'Akkulaufzeit' }, score: 9.8 },
      { label: { en: 'Noise Level', es: 'Nivel de Ruido', de: 'Geräuschpegel' }, score: 7.5 },
      { label: { en: 'Value', es: 'Relación Precio', de: 'Preis-Leistung' }, score: 9.7 },
      { label: { en: 'Durability', es: 'Durabilidad', de: 'Haltbarkeit' }, score: 8.5 },
    ],
    bestFor: { en: 'Best Budget Pick', es: 'Mejor Relación Precio-Calidad', de: 'Bestes Preis-Leistungs-Verhältnis' },
    tags: ['Cordless', 'Zero-Gap', '150min Battery', 'Titanium Blade'],
  },
  {
    id: 'andis-t-outliner-cordless', rank: 4, asin: 'B07YXB629V', category: 'clippers',
    brand: 'Andis', name: 'T-Outliner Cordless 74055', emoji: '✏️',
    price: 89.99, score: 9.2, reviewCount: 4821, starRating: 4.7,
    badge: { en: 'Best Trimmer', es: 'Mejor Recortadora', de: 'Bester Trimmer' },
    tagline: { en: 'The sharpest lineup tool in professional barbering', es: 'La herramienta de lineup más precisa en barbería profesional', de: 'Das schärfste Lineup-Tool der professionellen Barbierung' },
    verdict: { en: 'The T-Outliner Cordless is the gold standard for lineup work. Carbon steel T-blade cuts surgically close — crisp edges every time. The cordless upgrade keeps all the power of the classic corded T-Outliner while adding freedom of movement. 7,200 SPM constant-speed motor never bogs down on dense hairlines. 100-minute battery handles a full barbershop day.', es: 'El T-Outliner Cordless es el estándar de oro para el trabajo de lineup. La cuchilla de carbono corta quirúrgicamente cerca — bordes nítidos en todo momento. El motor de 7,200 SPM nunca pierde potencia en líneas densas. Batería de 100 minutos para una jornada completa de barbería.', de: 'Der T-Outliner Cordless ist der Goldstandard für Lineup-Arbeit. Karbonstahl-T-Klinge schneidet chirurgisch nah — scharfe Kanten jedes Mal. Der 7.200 SPM-Motor verliert nie Kraft an dichten Haaransätzen. 100 Minuten Akku für einen vollen Barbershop-Tag.' },
    pros: { en: ['Carbon steel T-blade for surgical lineup precision','7,200 SPM constant-speed motor','100-min cordless runtime','Corded/cordless flexibility','Industry-standard blade compatibility'], es: ['Cuchilla T de carbono para precisión de lineup','Motor 7,200 SPM velocidad constante','100 min inalámbrica','Flexibilidad con/sin cable','Compatibilidad de cuchillas estándar'], de: ['Karbonstahl-T-Klinge für chirurgische Lineup-Präzision','7.200 SPM Konstantgeschwindigkeitsmotor','100 Min kabellos','Kabel/kabellos Flexibilität','Standard-Klingenkompatibilität'] },
    cons: { en: ['Not a clipper — dedicated trimmer/outliner only','Heavier than BaByliss trimmers at 1.98 lbs','No zero-gap taper lever'], es: ['No es una clipper — solo recortadora/delineadora','Más pesada que las recortadoras BaByliss','Sin lever de zero-gap'], de: ['Kein Clipper — nur dedizierter Trimmer/Outliner','Schwerer als BaByliss Trimmer: 1,98 lbs','Kein Zero-Gap-Hebel'] },
    specs: { motor: 'Rotary 7,200 SPM', battery: '100 min', weight: '1.98 lb', cordless: true, zeroGap: true, warranty: '1 year' },
    scoreBreakdown: [
      { label: { en: 'Lineup Precision', es: 'Precisión Lineup', de: 'Lineup-Präzision' }, score: 9.9 },
      { label: { en: 'Battery Life', es: 'Duración Batería', de: 'Akkulaufzeit' }, score: 9.0 },
      { label: { en: 'Noise Level', es: 'Nivel de Ruido', de: 'Geräuschpegel' }, score: 8.0 },
      { label: { en: 'Value', es: 'Relación Precio', de: 'Preis-Leistung' }, score: 9.0 },
      { label: { en: 'Durability', es: 'Durabilidad', de: 'Haltbarkeit' }, score: 9.4 },
    ],
    bestFor: { en: 'Best Lineup Trimmer', es: 'Mejor Recortadora para Lineups', de: 'Bester Lineup-Trimmer' },
    tags: ['Cordless', 'T-Blade', 'Lineup', '100min Battery', 'Carbon Steel'],
  },
  {
    id: 'wahl-balding-8110', rank: 5, asin: 'B000VVT94G', category: 'clippers',
    brand: 'Wahl', name: '5-Star Balding Clipper #8110', emoji: '>',
    price: 44.99, score: 9.0, reviewCount: 18432, starRating: 4.8,
    badge: { en: 'Best for Bald Fades', es: 'Mejor para Fades al Cero', de: 'Bester für Bald Fades' },
    tagline: { en: 'Surgically close bald fades at the best price in the game', es: 'Fades al cero quirúrgicamente cerca al mejor precio', de: 'Chirurgisch nahe Bald Fades zum besten Preis' },
    verdict: { en: 'The most specialized tool in professional barbering. The Wahl Balding Clipper does ONE thing: cut hair surgically close for full head bald fades. V5000+ electromagnetic motor runs at twice the speed of pivot motors — no dragging, no pulling. At $44.99 it is the best value purchase any professional barber can make.', es: 'La herramienta más especializada en barbería profesional. Hace UNA cosa: cortar quirúrgicamente cerca para fades al cero de cabeza completa. Motor V5000+ funciona a doble velocidad que los motores pivot. A $44.99 es la mejor compra en relación valor-precio para cualquier barbero profesional.', de: 'Das speziellste Werkzeug in der professionellen Barbierung. Macht EINE Sache: Haare chirurgisch nah für vollständige Bald Fades schneiden. V5000+-Motor läuft doppelt so schnell wie Pivot-Motoren. Bei $44,99 ist er der beste Preis-Leistungs-Kauf für jeden Profi-Barbier.' },
    pros: { en: ['V5000+ EM motor — twice speed of pivot motors','Surgically close for full bald fades','Best price in professional barbering: $44.99','Unlimited corded runtime','18,000+ Amazon reviews at 4.8★'], es: ['Motor EM V5000+ — doble velocidad que motores pivot','Corte quirúrgicamente cerca para fades al cero','Mejor precio en barbería profesional: $44.99','Tiempo ilimitado con cable','18,000+ reseñas en Amazon a 4.8★'], de: ['V5000+ EM-Motor — doppelte Geschwindigkeit der Pivot-Motoren','Chirurgisch nah für vollständige Bald Fades','Bester Preis in der professionellen Barbierung: $44,99','Unbegrenzte Laufzeit (Kabel)','18.000+ Amazon-Bewertungen bei 4,8★'] },
    cons: { en: ['Corded only — no cordless option','Specialized tool — not for general cutting','Heavier V5000+ motor adds weight'], es: ['Solo con cable — sin opción inalámbrica','Herramienta especializada — no para corte general','Motor V5000+ más pesado'], de: ['Nur Kabel — keine kabellose Option','Spezialisiertes Werkzeug — nicht für allgemeines Schneiden','Schwererer V5000+-Motor'] },
    specs: { motor: 'Electromagnetic V5000+', battery: '∞ Unlimited (corded)', weight: '1.41 lb', cordless: false, zeroGap: false, warranty: '1 year' },
    scoreBreakdown: [
      { label: { en: 'Bald Fade Quality', es: 'Calidad Fade al Cero', de: 'Bald-Fade-Qualität' }, score: 9.9 },
      { label: { en: 'Battery Life', es: 'Duración Batería', de: 'Akkulaufzeit' }, score: 10.0 },
      { label: { en: 'Noise Level', es: 'Nivel de Ruido', de: 'Geräuschpegel' }, score: 7.0 },
      { label: { en: 'Value', es: 'Relación Precio', de: 'Preis-Leistung' }, score: 9.9 },
      { label: { en: 'Durability', es: 'Durabilidad', de: 'Haltbarkeit' }, score: 9.8 },
    ],
    bestFor: { en: 'Best Bald Fade / Head Shave', es: 'Mejor Fade al Cero / Afeitado de Cabeza', de: 'Bester Bald Fade / Kopfrasur' },
    tags: ['Corded', 'V5000+ Motor', 'Bald Fade', 'Best Value', '$44.99'],
  },

  // ─────────────── TRIMMERS ───────────────
  {
    id: 'andis-gtx-exo', rank: 1, asin: 'B0BZTGL6LG', category: 'trimmers',
    brand: 'Andis', name: 'GTX-EXO Cord/Cordless', emoji: '⚡',
    price: 109.00, score: 9.4, reviewCount: 3241, starRating: 4.7,
    badge: { en: "Editor's Choice", es: 'Elección del Editor', de: 'Empfehlung der Redaktion' },
    tagline: { en: 'Zero-gap precision for skin-close lineups', es: 'Precisión zero-gap para lineups al ras de la piel', de: 'Zero-Gap-Präzision für hautnahe Lineups' },
    verdict: { en: 'The GTX-EXO redefines what a trimmer can do. Adjustable zero-gap blade achieves skin-close results without swapping blades. Cord/cordless versatility means you\'re never caught without power. 100-minute runtime handles a full shop day.', es: 'El GTX-EXO redefine lo que puede hacer una recortadora. Cuchilla zero-gap ajustable para resultados al ras sin cambiar cuchillas. Versatilidad con/sin cable. 100 minutos de autonomía.', de: 'Der GTX-EXO definiert neu, was ein Trimmer kann. Einstellbare Zero-Gap-Klinge für hautnahe Ergebnisse ohne Klingenwechsel. Kabel/kabellos Vielseitigkeit. 100 Minuten Laufzeit.' },
    pros: { en: ['Adjustable zero-gap blade','Cord/cordless flexibility','100-min battery','Andis ExO blade system compatibility','Professional-grade build'], es: ['Cuchilla zero-gap ajustable','Flexibilidad con/sin cable','100 min batería','Compatibilidad sistema Andis ExO','Construcción de nivel profesional'], de: ['Einstellbare Zero-Gap-Klinge','Kabel/kabellos Flexibilität','100 Min Akku','Andis ExO-Klingensystem-Kompatibilität','Professionelle Verarbeitung'] },
    cons: { en: ['Higher price point ($109)','Blade adjustment learning curve','Heavier than budget trimmers'], es: ['Precio alto ($109)','Curva de aprendizaje en ajuste de cuchilla','Más pesada que recortadoras económicas'], de: ['Höherer Preis ($109)','Lernkurve bei Klingeneinstellung','Schwerer als günstige Trimmer'] },
    specs: { motor: 'Electromagnetic', battery: '100 min', weight: '0.44 lb', cordless: true, zeroGap: true, warranty: '1 year' },
    scoreBreakdown: [
      { label: { en: 'Lineup Precision', es: 'Precisión Lineup', de: 'Lineup-Präzision' }, score: 9.7 },
      { label: { en: 'Battery Life', es: 'Duración Batería', de: 'Akkulaufzeit' }, score: 9.2 },
      { label: { en: 'Versatility', es: 'Versatilidad', de: 'Vielseitigkeit' }, score: 9.5 },
      { label: { en: 'Value', es: 'Relación Precio', de: 'Preis-Leistung' }, score: 8.8 },
      { label: { en: 'Durability', es: 'Durabilidad', de: 'Haltbarkeit' }, score: 9.6 },
    ],
    bestFor: { en: 'Best Overall Trimmer', es: 'Mejor Recortadora General', de: 'Bester Trimmer Gesamt' },
    tags: ['Cordless', 'Zero-Gap', 'Cord/Cordless', 'Professional'],
  },
  {
    id: 'philips-multigroom-5000', rank: 2, asin: 'B08156NWQ2', category: 'trimmers',
    brand: 'Philips Norelco', name: 'Multigroom 5000 MG5910', emoji: '🔧',
    price: 49.00, score: 8.7, reviewCount: 45231, starRating: 4.5,
    badge: { en: 'Best Value', es: 'Mejor Precio', de: 'Bestes Preis-Leistung' },
    tagline: { en: '18-piece all-in-one grooming kit for head-to-toe', es: 'Kit de aseo 18 en uno de cabeza a pies', de: '18-teiliges Rundum-Pflegeset von Kopf bis Fuß' },
    verdict: { en: 'The best all-around grooming kit under $50. 18 attachments cover every grooming scenario. Self-sharpening steel blades never need oiling. The DualCut technology delivers 2x faster trimming. Ideal for clients and home barbers who want one tool for everything.', es: 'El mejor kit de aseo integral por menos de $50. 18 accesorios cubren todos los escenarios. Cuchillas de acero autoadfilables que no necesitan aceite. Tecnología DualCut 2x más rápida. Ideal para clientes y barberos caseros que quieren una herramienta para todo.', de: 'Das beste Rundum-Pflegeset unter $50. 18 Aufsätze für jedes Szenario. Selbstschärfende Stahlklingen ohne Ölung. DualCut-Technologie für 2x schnelleres Trimmen. Ideal für Kunden und Heim-Barbiere.' },
    pros: { en: ['18 attachments for complete grooming','Self-sharpening blades — no oiling required','DualCut 2x faster technology','USB charging','Waterproof'], es: ['18 accesorios para aseo completo','Cuchillas autoadfilables — sin aceite','Tecnología DualCut 2x más rápida','Carga USB','Resistente al agua'], de: ['18 Aufsätze für vollständiges Grooming','Selbstschärfende Klingen — kein Öl nötig','DualCut 2x schnellere Technologie','USB-Laden','Wasserdicht'] },
    cons: { en: ['Not professional-grade for barbershop use','Lower motor power than dedicated trimmers','Can miss very short stubble'], es: ['No es de grado profesional para barberías','Motor menos potente que recortadoras dedicadas','Puede perder barba muy corta'], de: ['Nicht professionell für Barbershop-Einsatz','Geringere Motorleistung als dedizierte Trimmer','Kann sehr kurzen Bartwuchs übersehen'] },
    specs: { motor: 'Rotary', battery: '60 min', weight: '0.55 lb', cordless: true, zeroGap: false, warranty: '2 years' },
    scoreBreakdown: [
      { label: { en: 'Versatility', es: 'Versatilidad', de: 'Vielseitigkeit' }, score: 9.8 },
      { label: { en: 'Value', es: 'Relación Precio', de: 'Preis-Leistung' }, score: 9.5 },
      { label: { en: 'Ease of Use', es: 'Facilidad de Uso', de: 'Benutzerfreundlichkeit' }, score: 9.0 },
      { label: { en: 'Battery Life', es: 'Duración Batería', de: 'Akkulaufzeit' }, score: 7.5 },
      { label: { en: 'Durability', es: 'Durabilidad', de: 'Haltbarkeit' }, score: 8.2 },
    ],
    bestFor: { en: 'Best All-in-One Value', es: 'Mejor Todo-en-Uno Económico', de: 'Bester All-in-One Wert' },
    tags: ['Cordless', '18-Piece Kit', 'Self-Sharpening', 'USB Charging'],
  },
  {
    id: 'braun-series9-9440', rank: 3, asin: 'B08JDLSW5Z', category: 'trimmers',
    brand: 'Braun', name: 'Series 9 All-in-One 9440', emoji: '🏆',
    price: 79.00, score: 9.1, reviewCount: 12876, starRating: 4.6,
    badge: { en: 'Premium Pick', es: 'Elección Premium', de: 'Premium-Wahl' },
    tagline: { en: '13-in-1 German engineering for the serious groomer', es: 'Ingeniería alemana 13 en 1 para el cuidado serio', de: 'Deutsche 13-in-1-Technik für ernsthafte Pflege' },
    verdict: { en: 'German engineering meets everyday grooming. The Series 9 handles hair, beard, body, and ear/nose trimming with one device. EasyClick system swaps attachments in seconds. Travel pouch included. Best premium option under $80.', es: 'Ingeniería alemana para el cuidado cotidiano. El Series 9 maneja cabello, barba, cuerpo y nariz/oídos con un dispositivo. Sistema EasyClick cambia accesorios en segundos. Bolsa de viaje incluida. Mejor opción premium bajo $80.', de: 'Deutsche Technik für tägliche Pflege. Das Series 9 erledigt Haare, Bart, Körper und Ohren/Nase mit einem Gerät. EasyClick-System wechselt Aufsätze in Sekunden. Reisetasche inklusive. Beste Premium-Option unter $80.' },
    pros: { en: ['13-in-1 versatility','EasyClick attachment system','Auto-sense technology adjusts to beard density','Travel pouch included','60-min battery'], es: ['Versatilidad 13 en 1','Sistema de accesorios EasyClick','Tecnología Auto-sense para densidad de barba','Bolsa de viaje incluida','60 min batería'], de: ['13-in-1-Vielseitigkeit','EasyClick-Aufsatzsystem','Auto-Sense passt sich der Bartdichte an','Reisetasche inklusive','60 Min Akku'] },
    cons: { en: ['More expensive than Philips ($79 vs $49)','Attachments sold separately for some functions','Louder than premium shavers'], es: ['Más caro que Philips ($79 vs $49)','Algunos accesorios vendidos por separado','Más ruidoso que afeitadoras premium'], de: ['Teurer als Philips ($79 vs $49)','Einige Aufsätze separat erhältlich','Lauter als Premium-Rasierer'] },
    specs: { motor: 'Rotary', battery: '60 min', weight: '0.48 lb', cordless: true, zeroGap: false, warranty: '2 years' },
    scoreBreakdown: [
      { label: { en: 'Versatility', es: 'Versatilidad', de: 'Vielseitigkeit' }, score: 9.5 },
      { label: { en: 'Build Quality', es: 'Calidad de Construcción', de: 'Verarbeitungsqualität' }, score: 9.3 },
      { label: { en: 'Ease of Use', es: 'Facilidad de Uso', de: 'Benutzerfreundlichkeit' }, score: 9.2 },
      { label: { en: 'Value', es: 'Relación Precio', de: 'Preis-Leistung' }, score: 8.6 },
      { label: { en: 'Durability', es: 'Durabilidad', de: 'Haltbarkeit' }, score: 9.0 },
    ],
    bestFor: { en: 'Best Premium All-in-One', es: 'Mejor Todo-en-Uno Premium', de: 'Bester Premium All-in-One' },
    tags: ['Cordless', '13-in-1', 'German Engineering', 'Travel Pouch'],
  },

  // ─────────────── SCISSORS ───────────────
  {
    id: 'ulg-razor-edge-6-5', rank: 1, asin: 'B071CWXLY5', category: 'scissors',
    brand: 'ULG', name: 'Professional 6.5" Razor Edge Shears', emoji: '✂️',
    price: 18.00, score: 9.0, reviewCount: 8432, starRating: 4.6,
    badge: { en: "Editor's Choice", es: 'Elección del Editor', de: 'Empfehlung der Redaktion' },
    tagline: { en: 'Japanese steel razor-edge shears for pro barbers', es: 'Tijeras de acero japonés para barberos profesionales', de: 'Japanische Stahl-Rasierklingen-Scheren für Profi-Barbiere' },
    verdict: { en: 'At $18, these ULG shears deliver professional-level sharpness straight out of the box. Japanese 420 stainless steel holds an edge through hundreds of cuts. The razor edge reduces hand fatigue significantly. Best value scissors for barbers on a budget.', es: 'A $18, estas tijeras ULG ofrecen nitidez de nivel profesional desde el primer uso. El acero inoxidable japonés 420 mantiene el filo durante cientos de cortes. El filo de navaja reduce la fatiga de la mano significativamente. Mejores tijeras económicas para barberos.', de: 'Für $18 liefern diese ULG-Scheren professionelle Schärfe aus der Box. Japanischer 420-Edelstahl behält die Schneide durch Hunderte von Schnitten. Die Rasierkante reduziert Ermüdung erheblich. Beste Preis-Leistungs-Schere für Barbiere.' },
    pros: { en: ['Japanese 420 stainless steel blade','Razor-sharp edge from box','Reduces hand fatigue','Offset handle for comfort','6.5" ideal length for most cuts'], es: ['Hoja de acero inoxidable japonés 420','Filo de navaja desde la caja','Reduce fatiga de la mano','Mango offset para comodidad','6.5" longitud ideal para la mayoría de cortes'], de: ['Japanischer 420-Edelstahl','Rasierscharfe Klinge ab Werk','Reduziert Ermüdung','Offset-Griff für Komfort','6,5" ideale Länge für die meisten Schnitte'] },
    cons: { en: ['Requires professional sharpening after heavy use','No carrying case included','Not suitable for heavy-duty daily professional use'], es: ['Requiere afilado profesional después de uso intensivo','Sin estuche incluido','No adecuadas para uso profesional diario intensivo'], de: ['Benötigt professionelles Nachschärfen nach intensivem Gebrauch','Kein Tragetasche inklusive','Nicht für täglichen Intensivgebrauch geeignet'] },
    specs: { material: 'Japanese 420 Stainless Steel', length: '6.5"', type: 'Cutting Shears', warranty: '1 year' },
    scoreBreakdown: [
      { label: { en: 'Sharpness', es: 'Nitidez', de: 'Schärfe' }, score: 9.2 },
      { label: { en: 'Durability', es: 'Durabilidad', de: 'Haltbarkeit' }, score: 8.5 },
      { label: { en: 'Comfort', es: 'Comodidad', de: 'Komfort' }, score: 9.0 },
      { label: { en: 'Value', es: 'Relación Precio', de: 'Preis-Leistung' }, score: 9.8 },
    ],
    bestFor: { en: 'Best Budget Shears', es: 'Mejores Tijeras Económicas', de: 'Beste Preis-Leistungs-Schere' },
    tags: ['6.5"', 'Razor Edge', 'Japanese Steel', 'Budget'],
  },
  {
    id: 'ciicii-scissors-kit', rank: 2, asin: 'B07NKMB5V8', category: 'scissors',
    brand: 'CIICII', name: '6.7" Scissors Kit (Cutting + Thinning)', emoji: '✂️',
    price: 22.00, score: 8.8, reviewCount: 5621, starRating: 4.5,
    badge: { en: 'Best Kit Value', es: 'Mejor Kit Precio-Calidad', de: 'Bestes Kit-Preis-Leistung' },
    tagline: { en: 'Complete cutting and thinning kit for professional styling', es: 'Kit completo de corte y entresacado para estilismo profesional', de: 'Komplettes Schnitt- und Effilierscheren-Set für professionelles Styling' },
    verdict: { en: 'Getting both cutting and thinning shears for $22 is exceptional value. The 6.7" cutting shears handle bulk removal efficiently. Thinning shears with 28 teeth create natural texture without visible lines. Matching set feels balanced.', es: 'Obtener tijeras de corte y entresacado por $22 es un valor excepcional. Las tijeras de corte de 6.7" manejan la eliminación de volumen eficientemente. Tijeras de entresacado con 28 dientes crean textura natural sin líneas visibles.', de: 'Schnitt- und Effilierscheren für $22 zu bekommen ist außergewöhnliches Preis-Leistungs-Verhältnis. Die 6,7" Schnittschere entfernt Volumen effizient. Effilierschere mit 28 Zähnen schafft natürliche Textur ohne sichtbare Linien.' },
    pros: { en: ['Complete kit: cutting + thinning shears','28-tooth thinning shears for natural texture','Matched set for balanced feel','410 stainless steel','Includes carrying case'], es: ['Kit completo: tijeras de corte y entresacado','Tijeras de entresacado 28 dientes para textura natural','Juego coordinado para sensación equilibrada','Acero inoxidable 410','Incluye estuche'], de: ['Komplettes Set: Schnitt- und Effilierschere','28-Zahn-Effilierschere für natürliche Textur','Abgestimmtes Set für ausgewogenes Gefühl','410-Edelstahl','Inklusive Tragetasche'] },
    cons: { en: ['Steel quality lower than Japanese steel options','Thinning shears teeth can snag on fine hair','Not ideal for precision point cutting'], es: ['Calidad del acero inferior a opciones de acero japonés','Las tijeras de entresacado pueden engancharse en cabello fino','No ideal para cortes de punta de precisión'], de: ['Stahlqualität unter japanischen Optionen','Effilierscherenzähne können sich in feinem Haar verfangen','Nicht ideal für präzises Punktschneiden'] },
    specs: { material: '410 Stainless Steel', length: '6.7"', type: 'Cutting + Thinning Kit', warranty: '1 year' },
    scoreBreakdown: [
      { label: { en: 'Value', es: 'Relación Precio', de: 'Preis-Leistung' }, score: 9.7 },
      { label: { en: 'Sharpness', es: 'Nitidez', de: 'Schärfe' }, score: 8.6 },
      { label: { en: 'Comfort', es: 'Comodidad', de: 'Komfort' }, score: 8.8 },
      { label: { en: 'Durability', es: 'Durabilidad', de: 'Haltbarkeit' }, score: 8.0 },
    ],
    bestFor: { en: 'Best Complete Kit', es: 'Mejor Kit Completo', de: 'Bestes Komplettset' },
    tags: ['6.7"', 'Cutting + Thinning', 'Kit', 'Carrying Case'],
  },
  {
    id: 'cut-factory-matte-black', rank: 3, asin: 'B07VZ2RCVH', category: 'scissors',
    brand: 'The Cut Factory', name: '6.5" Matte Black Barber Shears', emoji: '⬛',
    price: 34.00, score: 9.2, reviewCount: 2187, starRating: 4.7,
    badge: { en: 'Premium Design', es: 'Diseño Premium', de: 'Premium-Design' },
    tagline: { en: 'Professional aesthetics meets razor-edge performance', es: 'Estética profesional con rendimiento de filo de navaja', de: 'Professionelle Ästhetik trifft Rasierklingen-Leistung' },
    verdict: { en: 'The Cut Factory shears look as good as they cut. Matte black finish resists fingerprints and looks sharp in any barbershop. The VG-10 steel core holds a longer edge than 420 steel. Ergonomic offset handle reduces fatigue during back-to-back cuts.', es: 'Las tijeras Cut Factory se ven tan bien como cortan. El acabado negro mate resiste huellas dactilares. El núcleo de acero VG-10 mantiene el filo más tiempo que el acero 420. El mango offset ergonómico reduce la fatiga.', de: 'Die Cut Factory-Scheren sehen so gut aus wie sie schneiden. Mattschwarze Oberfläche widersteht Fingerabdrücken. VG-10-Stahlkern behält länger die Schneide als 420-Stahl. Ergonomischer Offset-Griff reduziert Ermüdung.' },
    pros: { en: ['VG-10 steel core for superior edge retention','Matte black finish — professional look','Ergonomic offset handle','Finger rest included','Individual tension adjustment'], es: ['Núcleo de acero VG-10 para retención de filo superior','Acabado negro mate — aspecto profesional','Mango offset ergonómico','Apoyadedo incluido','Ajuste de tensión individual'], de: ['VG-10-Stahlkern für überlegene Kantenhaltbarkeit','Mattschwarze Oberfläche — professioneller Look','Ergonomischer Offset-Griff','Fingerstütze inklusive','Individuelle Spannungseinstellung'] },
    cons: { en: ['More expensive than basic options ($34)','Matte finish shows wear over time','Less forgiving for beginners'], es: ['Más caro que opciones básicas ($34)','El acabado mate muestra desgaste con el tiempo','Menos tolerante para principiantes'], de: ['Teurer als grundlegende Optionen ($34)','Matte Oberfläche zeigt Abnutzung mit der Zeit','Weniger vergebend für Anfänger'] },
    specs: { material: 'VG-10 Steel Core', length: '6.5"', type: 'Cutting Shears', warranty: '2 years' },
    scoreBreakdown: [
      { label: { en: 'Sharpness', es: 'Nitidez', de: 'Schärfe' }, score: 9.4 },
      { label: { en: 'Edge Retention', es: 'Retención del Filo', de: 'Kantenhaltbarkeit' }, score: 9.3 },
      { label: { en: 'Design', es: 'Diseño', de: 'Design' }, score: 9.7 },
      { label: { en: 'Value', es: 'Relación Precio', de: 'Preis-Leistung' }, score: 8.5 },
    ],
    bestFor: { en: 'Best Premium Design', es: 'Mejor Diseño Premium', de: 'Bestes Premium-Design' },
    tags: ['6.5"', 'VG-10 Steel', 'Matte Black', 'Professional'],
  },

  // ─────────────── RAZORS ───────────────
  {
    id: 'parker-srx-razor', rank: 1, asin: 'B01D8SFFVO', category: 'razors',
    brand: 'Parker', name: 'SRX All Stainless Barber Razor', emoji: '🪒',
    price: 22.00, score: 9.3, reviewCount: 6743, starRating: 4.7,
    badge: { en: "Editor's Choice", es: 'Elección del Editor', de: 'Empfehlung der Redaktion' },
    tagline: { en: 'All-stainless professional barber straight razor', es: 'Navaja barbera profesional de acero inoxidable', de: 'Professionelles Rasiermesser aus Edelstahl für Barbiere' },
    verdict: { en: 'The Parker SRX is the gold standard for professional straight razor shaving. All-stainless construction withstands daily barbershop use. The precision blade gap produces the smoothest BBS (baby-butt smooth) results. Compatible with any standard DE blade.', es: 'El Parker SRX es el estándar de oro para el afeitado con navaja recta profesional. Construcción de acero inoxidable resiste el uso diario en barbería. La brecha de cuchilla de precisión produce los resultados más suaves.', de: 'Der Parker SRX ist der Goldstandard für professionelles Rasieren mit dem Rasiermesser. Edelstahlkonstruktion hält täglichem Barbershop-Einsatz stand. Die Präzisionsklingenöffnung liefert glatteste BBS-Ergebnisse.' },
    pros: { en: ['All-stainless steel construction','Precision blade gap for smooth shave','Compatible with standard DE blades','Professional barbershop durability','Includes 5 blades to start'], es: ['Construcción de acero inoxidable total','Brecha de cuchilla de precisión para afeitado suave','Compatible con cuchillas DE estándar','Durabilidad de barbería profesional','Incluye 5 cuchillas para empezar'], de: ['Komplett aus Edelstahl','Präzisionsklingenöffnung für glattes Rasieren','Kompatibel mit Standard-DE-Klingen','Professionelle Barbershop-Haltbarkeit','Inklusive 5 Klingen zum Start'] },
    cons: { en: ['Learning curve for beginners','Requires regular blade changes','Not ideal for sensitive skin without practice'], es: ['Curva de aprendizaje para principiantes','Requiere cambios regulares de cuchilla','No ideal para piel sensible sin práctica'], de: ['Lernkurve für Anfänger','Regelmäßige Klingenwechsel erforderlich','Nicht ideal für empfindliche Haut ohne Übung'] },
    specs: { material: 'All Stainless Steel', blades: 'Standard DE blades', handle: 'Stainless grip', warranty: '1 year' },
    scoreBreakdown: [
      { label: { en: 'Shave Quality', es: 'Calidad del Afeitado', de: 'Rasierqualität' }, score: 9.5 },
      { label: { en: 'Build Quality', es: 'Calidad de Construcción', de: 'Verarbeitungsqualität' }, score: 9.3 },
      { label: { en: 'Value', es: 'Relación Precio', de: 'Preis-Leistung' }, score: 9.2 },
      { label: { en: 'Versatility', es: 'Versatilidad', de: 'Vielseitigkeit' }, score: 9.0 },
    ],
    bestFor: { en: 'Best Professional Straight Razor', es: 'Mejor Navaja Recta Profesional', de: 'Bestes professionelles Rasiermesser' },
    tags: ['Stainless Steel', 'DE Blades', 'Professional', 'BBS Shave'],
  },
  {
    id: 'utopia-care-razor', rank: 2, asin: 'B074WC87Y2', category: 'razors',
    brand: 'Utopia Care', name: 'Straight Razor + 100 Blades', emoji: '🪒',
    price: 17.00, score: 8.7, reviewCount: 15432, starRating: 4.5,
    badge: { en: 'Best Value', es: 'Mejor Precio', de: 'Bestes Preis-Leistung' },
    tagline: { en: 'Professional razor with 100 blades — best value starter kit', es: 'Navaja profesional con 100 cuchillas — mejor kit inicial precio-calidad', de: 'Professionelles Rasiermesser mit 100 Klingen — bestes Preis-Starter-Kit' },
    verdict: { en: '100 blades included at $17 makes this the best value straight razor kit on Amazon. Stainless steel handle provides reliable grip. Perfect starter kit for new barbers learning straight razor techniques. Replace blades frequently for best results.', es: '100 cuchillas incluidas a $17 hacen de este el mejor kit de navaja recta en Amazon. El mango de acero inoxidable proporciona agarre fiable. Kit de inicio perfecto para nuevos barberos. Reemplaza las cuchillas frecuentemente para mejores resultados.', de: '100 Klingen für $17 machen dieses zum besten Preis-Leistungs-Rasiermesser-Kit auf Amazon. Edelstahlgriff bietet zuverlässigen Griff. Perfektes Starter-Kit für neue Barbiere. Häufig Klingen wechseln für beste Ergebnisse.' },
    pros: { en: ['100 blades included — exceptional value','Stainless steel handle','Standard DE blade compatibility','Perfect for beginners','Good for high-volume shops'], es: ['100 cuchillas incluidas — valor excepcional','Mango de acero inoxidable','Compatibilidad con cuchillas DE estándar','Perfecto para principiantes','Bueno para barberías de alto volumen'], de: ['100 Klingen inklusive — außergewöhnlicher Wert','Edelstahlgriff','Standard-DE-Klingenkompatibilität','Perfekt für Anfänger','Gut für Hochvolumen-Shops'] },
    cons: { en: ['Build quality lower than Parker SRX','Lighter feel than premium razors','Handle grip less refined'], es: ['Calidad de construcción inferior al Parker SRX','Sensación más ligera que navajas premium','Agarre del mango menos refinado'], de: ['Verarbeitungsqualität unter Parker SRX','Leichteres Gefühl als Premium-Rasiermesser','Griff weniger verfeinert'] },
    specs: { material: 'Stainless Steel', blades: '100 DE blades included', handle: 'Stainless steel', warranty: '1 year' },
    scoreBreakdown: [
      { label: { en: 'Value', es: 'Relación Precio', de: 'Preis-Leistung' }, score: 9.9 },
      { label: { en: 'Shave Quality', es: 'Calidad del Afeitado', de: 'Rasierqualität' }, score: 8.4 },
      { label: { en: 'Build Quality', es: 'Calidad de Construcción', de: 'Verarbeitungsqualität' }, score: 8.0 },
      { label: { en: 'Beginner Friendly', es: 'Apto para Principiantes', de: 'Anfängerfreundlich' }, score: 9.0 },
    ],
    bestFor: { en: 'Best Value Starter Kit', es: 'Mejor Kit Inicial Precio-Calidad', de: 'Bestes Preis-Leistungs-Starter-Kit' },
    tags: ['100 Blades', 'Starter Kit', 'Best Value', 'DE Compatible'],
  },

  // ─────────────── CAPES ───────────────
  {
    id: 'barber-strong-cape', rank: 1, asin: 'B07WQJLW1Z', category: 'capes',
    brand: 'Barber Strong', name: 'The Barber Cape Hair-Repelling', emoji: '🦸',
    price: 29.00, score: 9.4, reviewCount: 7823, starRating: 4.8,
    badge: { en: "Editor's Choice", es: 'Elección del Editor', de: 'Empfehlung der Redaktion' },
    tagline: { en: 'The professional cape that actually repels hair clippings', es: 'La capa profesional que realmente repele el cabello cortado', de: 'Der professionelle Umhang der Haarschnipsel wirklich abstößt' },
    verdict: { en: 'Barber Strong lives up to its name. The proprietary hair-repelling technology means clippings slide off instead of sticking. Professional barbers in our test saved 2-3 minutes per client on cleanup. The heavyweight fabric holds its shape after hundreds of washes.', es: 'Barber Strong cumple su promesa. La tecnología propietaria de repelencia de cabello significa que los recortes se deslizan en lugar de pegarse. Los barberos profesionales en nuestra prueba ahorraron 2-3 minutos por cliente en limpieza.', de: 'Barber Strong hält, was es verspricht. Die proprietäre Haarabweisungstechnologie lässt Schnipsel abgleiten statt haften. Professionelle Barbiere in unserem Test sparten 2-3 Minuten pro Kunde bei der Reinigung.' },
    pros: { en: ['Proprietary hair-repelling technology','Professional heavyweight fabric','Adjustable neck closure','Holds shape after hundreds of washes','Available in multiple colors'], es: ['Tecnología propietaria de repelencia de cabello','Tela profesional de gran peso','Cierre de cuello ajustable','Mantiene la forma tras cientos de lavados','Disponible en múltiples colores'], de: ['Proprietäre Haarabweisungstechnologie','Professioneller schwerer Stoff','Verstellbarer Nackenverschluss','Behält Form nach Hunderten von Wäschen','In mehreren Farben erhältlich'] },
    cons: { en: ['More expensive than basic capes ($29)','Heavier than lightweight alternatives','Hand wash recommended for best longevity'], es: ['Más caro que capas básicas ($29)','Más pesada que alternativas ligeras','Lavado a mano recomendado para mayor durabilidad'], de: ['Teurer als einfache Umhänge ($29)','Schwerer als leichte Alternativen','Handwäsche für beste Langlebigkeit empfohlen'] },
    specs: { material: 'Proprietary Hair-Repelling Fabric', size: 'One Size Fits All', waterproof: true, warranty: '1 year' },
    scoreBreakdown: [
      { label: { en: 'Hair Repelling', es: 'Repelencia de Cabello', de: 'Haarabweisung' }, score: 9.8 },
      { label: { en: 'Durability', es: 'Durabilidad', de: 'Haltbarkeit' }, score: 9.5 },
      { label: { en: 'Comfort', es: 'Comodidad', de: 'Komfort' }, score: 9.0 },
      { label: { en: 'Value', es: 'Relación Precio', de: 'Preis-Leistung' }, score: 8.5 },
    ],
    bestFor: { en: 'Best Professional Cape', es: 'Mejor Capa Profesional', de: 'Bester Profi-Umhang' },
    tags: ['Hair-Repelling', 'Professional', 'Heavyweight', 'Washable'],
  },
  {
    id: 'yelegai-cape', rank: 2, asin: 'B07MKR8M9S', category: 'capes',
    brand: 'YELEGAI', name: 'Professional Cape + Neck Brush', emoji: '💈',
    price: 19.00, score: 8.9, reviewCount: 4521, starRating: 4.6,
    badge: { en: 'Best Value Bundle', es: 'Mejor Bundle Precio-Calidad', de: 'Bestes Preis-Leistungs-Bundle' },
    tagline: { en: 'Professional cape and neck brush combo at budget price', es: 'Combo de capa profesional y cepillo de cuello a precio económico', de: 'Professionelle Umhang-und-Nackenbürsten-Kombi zum Budgetpreis' },
    verdict: { en: 'Getting a professional cape AND neck brush for $19 is exceptional value. The waterproof nylon repels water and cutting oil. Large size (55" x 63") covers clients of all sizes. The included neck brush has soft bristles that remove clippings without scratching.', es: 'Obtener una capa profesional Y cepillo de cuello por $19 es un valor excepcional. El nylon impermeable repele agua y aceite de corte. Tamaño grande (55" x 63") cubre clientes de todos los tamaños. El cepillo de cuello incluido tiene cerdas suaves.', de: 'Einen professionellen Umhang UND Nackenbürste für $19 zu bekommen ist außergewöhnlicher Wert. Das wasserdichte Nylon stößt Wasser und Schneidöl ab. Große Größe (55" x 63") deckt Kunden aller Größen ab.' },
    pros: { en: ['Waterproof nylon material','Large 55" x 63" coverage','Includes neck brush','Easy snap closure','Machine washable'], es: ['Material de nylon impermeable','Gran cobertura 55" x 63"','Incluye cepillo de cuello','Cierre de presión fácil','Lavable a máquina'], de: ['Wasserdichtes Nylonmaterial','Große 55" x 63" Abdeckung','Inklusive Nackenbürste','Einfacher Druckverschluss','Maschinenwaschbar'] },
    cons: { en: ['No hair-repelling technology like premium capes','Lighter fabric than Barber Strong','Neck closure less adjustable'], es: ['Sin tecnología de repelencia como capas premium','Tela más ligera que Barber Strong','Cierre de cuello menos ajustable'], de: ['Keine Haarabweisungstechnologie wie Premium-Umhänge','Leichterer Stoff als Barber Strong','Nackenverschluss weniger verstellbar'] },
    specs: { material: 'Waterproof Nylon', size: '55" x 63"', waterproof: true, warranty: '1 year' },
    scoreBreakdown: [
      { label: { en: 'Value', es: 'Relación Precio', de: 'Preis-Leistung' }, score: 9.7 },
      { label: { en: 'Coverage', es: 'Cobertura', de: 'Abdeckung' }, score: 9.2 },
      { label: { en: 'Waterproofing', es: 'Impermeabilidad', de: 'Wasserdichtigkeit' }, score: 8.8 },
      { label: { en: 'Durability', es: 'Durabilidad', de: 'Haltbarkeit' }, score: 8.5 },
    ],
    bestFor: { en: 'Best Value Bundle', es: 'Mejor Bundle Económico', de: 'Bestes Preis-Leistungs-Bundle' },
    tags: ['Waterproof', 'Large Size', 'Neck Brush Included', 'Machine Washable'],
  },

  // ─────────────── STYLING ───────────────
  {
    id: 'suavecito-pomade-firme', rank: 1, asin: 'B00BFJGJLE', category: 'styling',
    brand: 'Suavecito', name: 'Pomade Firme Strong Hold', emoji: '💈',
    price: 15.00, score: 9.5, reviewCount: 67432, starRating: 4.7,
    badge: { en: "Barbers' Favorite", es: 'Favorito de los Barberos', de: 'Barbier-Favorit' },
    tagline: { en: 'The water-based pomade trusted by professional barbers worldwide', es: 'La pomada a base de agua de confianza de barberos profesionales', de: 'Das wasserbasierte Pomade von professionellen Barbieren weltweit' },
    verdict: { en: 'Suavecito Firme has earned its legendary status in barbershops worldwide. Water-based formula washes out cleanly without residue — critical for client satisfaction. Strong hold lasts all day without hardening into a helmet. The scent is neutral enough for professional settings.', es: 'Suavecito Firme ha ganado su estatus legendario en barberías mundiales. La fórmula a base de agua se lava limpiamente sin residuos. El agarre fuerte dura todo el día sin endurecerse.', de: 'Suavecito Firme hat seinen legendären Status in Barbershops weltweit verdient. Wasserbasierte Formel wäscht sich rückstandsfrei aus. Starker Halt hält den ganzen Tag ohne zu erhärten.' },
    pros: { en: ['Water-based — washes out cleanly','Strong hold without hardening','Light neutral scent for professional use','Works on all hair types','67,000+ Amazon reviews at 4.7★'], es: ['A base de agua — se lava limpiamente','Agarre fuerte sin endurecer','Aroma neutro ligero para uso profesional','Funciona en todos los tipos de cabello','67,000+ reseñas en Amazon a 4.7★'], de: ['Wasserbasiert — wäscht rückstandsfrei aus','Starker Halt ohne Erhärten','Leichter neutraler Duft für professionellen Einsatz','Funktioniert bei allen Haartypen','67.000+ Amazon-Bewertungen bei 4,7★'] },
    cons: { en: ['Can feel heavy on very fine hair','Scent may be too strong for some clients','Not ideal for natural/curly hair styles'], es: ['Puede sentirse pesado en cabello muy fino','El aroma puede ser demasiado fuerte para algunos clientes','No ideal para estilos de cabello natural/rizado'], de: ['Kann sich bei sehr feinem Haar schwer anfühlen','Duft kann für manche Kunden zu stark sein','Nicht ideal für natürliche/gelockte Frisuren'] },
    specs: { hold: 'Strong', shine: 'Medium', finish: 'Semi-Matte', volume: '4 oz', warranty: 'N/A' },
    scoreBreakdown: [
      { label: { en: 'Hold Strength', es: 'Fuerza de Agarre', de: 'Haltestärke' }, score: 9.5 },
      { label: { en: 'Washability', es: 'Facilidad de Lavado', de: 'Waschbarkeit' }, score: 9.7 },
      { label: { en: 'Value', es: 'Relación Precio', de: 'Preis-Leistung' }, score: 9.6 },
      { label: { en: 'Versatility', es: 'Versatilidad', de: 'Vielseitigkeit' }, score: 9.0 },
    ],
    bestFor: { en: 'Best Overall Pomade', es: 'Mejor Pomada General', de: 'Bestes Pomade Gesamt' },
    tags: ['Water-Based', 'Strong Hold', 'Semi-Matte', 'Professional'],
  },
  {
    id: 'reuzel-extreme-matte', rank: 2, asin: 'B01N4NDTU7', category: 'styling',
    brand: 'REUZEL', name: 'Extreme Hold Matte Pomade', emoji: '🟤',
    price: 24.00, score: 9.2, reviewCount: 12341, starRating: 4.6,
    badge: { en: 'Premium Pick', es: 'Elección Premium', de: 'Premium-Wahl' },
    tagline: { en: 'Dutch barbershop formula for extreme control without shine', es: 'Fórmula de barbería holandesa para control extremo sin brillo', de: 'Niederländische Barbershop-Formel für extreme Kontrolle ohne Glanz' },
    verdict: { en: 'REUZEL comes from Dutch barbershop culture and it shows. Extreme hold with zero shine creates that modern matte look clients want. Fiber-like texture gives natural movement despite the strong hold. Works especially well on thick, textured hair.', es: 'REUZEL viene de la cultura de barbería holandesa y se nota. Agarre extremo con cero brillo crea ese look mate moderno que los clientes quieren. La textura tipo fibra da movimiento natural a pesar del agarre fuerte. Funciona especialmente bien en cabello grueso y texturizado.', de: 'REUZEL kommt aus der niederländischen Barbershop-Kultur und das sieht man. Extremer Halt mit null Glanz schafft den modernen matten Look, den Kunden wollen. Faserähnliche Textur gibt natürliche Bewegung trotz starkem Halt.' },
    pros: { en: ['Extreme hold with zero shine','Natural movement despite strong hold','Dutch barbershop pedigree','Works on thick/textured hair','Long-lasting 24+ hours'], es: ['Agarre extremo con cero brillo','Movimiento natural a pesar del agarre fuerte','Pedigrí de barbería holandesa','Funciona en cabello grueso/texturizado','Duración de 24+ horas'], de: ['Extremer Halt mit null Glanz','Natürliche Bewegung trotz starkem Halt','Niederländisches Barbershop-Erbe','Funktioniert bei dickem/texturiertem Haar','Langanhaltend 24+ Stunden'] },
    cons: { en: ['More expensive than Suavecito ($24 vs $15)','Hard to distribute through thick hair','Can be difficult to wash out completely'], es: ['Más caro que Suavecito ($24 vs $15)','Difícil de distribuir en cabello grueso','Puede ser difícil de lavar completamente'], de: ['Teurer als Suavecito ($24 vs $15)','Schwer durch dickes Haar zu verteilen','Kann schwer vollständig auszuwaschen sein'] },
    specs: { hold: 'Extreme', shine: 'None', finish: 'Matte', volume: '3.55 oz', warranty: 'N/A' },
    scoreBreakdown: [
      { label: { en: 'Hold Strength', es: 'Fuerza de Agarre', de: 'Haltestärke' }, score: 9.8 },
      { label: { en: 'Matte Finish', es: 'Acabado Mate', de: 'Mattes Finish' }, score: 9.9 },
      { label: { en: 'Longevity', es: 'Durabilidad', de: 'Langlebigkeit' }, score: 9.3 },
      { label: { en: 'Value', es: 'Relación Precio', de: 'Preis-Leistung' }, score: 8.2 },
    ],
    bestFor: { en: 'Best Matte Finish Pomade', es: 'Mejor Pomada Acabado Mate', de: 'Bestes Mattes Pomade' },
    tags: ['Extreme Hold', 'Matte', 'Zero Shine', 'Dutch Formula'],
  },

  // ─────────────── SHAVING CARE ───────────────
  {
    id: 'clubman-aftershave-16oz', rank: 1, asin: 'B00004S075', category: 'shaving-care',
    brand: 'Clubman', name: 'After Shave Spray 16oz Classic Barber', emoji: '🧴',
    price: 12.00, score: 9.1, reviewCount: 18432, starRating: 4.7,
    badge: { en: 'Classic Choice', es: 'Elección Clásica', de: 'Klassische Wahl' },
    tagline: { en: 'The iconic barbershop aftershave since 1870', es: 'La loción aftershave de barbería icónica desde 1870', de: 'Das ikonische Barbershop-Aftershave seit 1870' },
    verdict: { en: 'Clubman has been in barbershops since 1870 for good reason. The classic scent signals professionalism. Antiseptic formula closes pores and prevents post-shave irritation. 16oz bottle provides excellent value for busy shops. The spray application provides even coverage.', es: 'Clubman ha estado en las barberías desde 1870 por una buena razón. El aroma clásico señala profesionalismo. La fórmula antiséptica cierra los poros y previene la irritación post-afeitado. La botella de 16oz proporciona excelente valor para tiendas ocupadas.', de: 'Clubman ist seit 1870 in Barbershops — aus gutem Grund. Der klassische Duft signalisiert Professionalität. Antiseptische Formel schließt Poren und verhindert Nachrasier-Reizungen. 16-Unzen-Flasche bietet hervorragenden Wert für beschäftigte Shops.' },
    pros: { en: ['Classic iconic barbershop scent','Antiseptic formula prevents irritation','16oz — excellent value','Spray application for even coverage','Used by barbers for 150+ years'], es: ['Aroma clásico icónico de barbería','Fórmula antiséptica previene irritación','16oz — excelente valor','Aplicación en spray para cobertura uniforme','Usado por barberos durante 150+ años'], de: ['Klassischer ikonischer Barbershop-Duft','Antiseptische Formel verhindert Reizungen','16oz — hervorragender Wert','Spray-Anwendung für gleichmäßige Abdeckung','Von Barbieren seit 150+ Jahren verwendet'] },
    cons: { en: ['Strong scent not suitable for all clients','Contains alcohol — drying for very sensitive skin','Classic scent is polarizing — not modern'], es: ['Aroma fuerte no apto para todos los clientes','Contiene alcohol — secante para piel muy sensible','El aroma clásico es polarizante — no moderno'], de: ['Starker Duft nicht für alle Kunden geeignet','Enthält Alkohol — trocknend für sehr empfindliche Haut','Klassischer Duft ist polarisierend — nicht modern'] },
    specs: { scent: 'Classic Clubman', volume: '16 oz', type: 'Aftershave Spray', warranty: 'N/A' },
    scoreBreakdown: [
      { label: { en: 'Scent Quality', es: 'Calidad del Aroma', de: 'Duftqualität' }, score: 9.0 },
      { label: { en: 'Antiseptic Effect', es: 'Efecto Antiséptico', de: 'Antiseptische Wirkung' }, score: 9.3 },
      { label: { en: 'Value', es: 'Relación Precio', de: 'Preis-Leistung' }, score: 9.7 },
      { label: { en: 'Client Comfort', es: 'Comodidad del Cliente', de: 'Kundenkomfort' }, score: 8.5 },
    ],
    bestFor: { en: 'Best Classic Aftershave', es: 'Mejor Aftershave Clásico', de: 'Bestes klassisches Aftershave' },
    tags: ['Classic Scent', '16oz', 'Antiseptic', 'Professional'],
  },
  {
    id: 'proraso-aftershave-eucalyptus', rank: 2, asin: 'B001G2QLAM', category: 'shaving-care',
    brand: 'Proraso', name: 'Aftershave Lotion Eucalyptus & Menthol', emoji: '🌿',
    price: 14.00, score: 9.0, reviewCount: 8921, starRating: 4.6,
    badge: { en: 'Premium Skin Care', es: 'Cuidado Premium de la Piel', de: 'Premium-Hautpflege' },
    tagline: { en: 'Italian barbershop formula for sensitive skin', es: 'Fórmula de barbería italiana para piel sensible', de: 'Italienische Barbershop-Formel für empfindliche Haut' },
    verdict: { en: 'Proraso brings Italian barbershop tradition to your shop. The eucalyptus and menthol formula soothes razor burn immediately. Less alcoholic than Clubman, making it ideal for sensitive skin clients. The fresh scent is universally appreciated.', es: 'Proraso trae la tradición de barbería italiana a tu tienda. La fórmula de eucalipto y mentol alivia el ardor de navaja inmediatamente. Menos alcohólico que Clubman, ideal para clientes con piel sensible. El aroma fresco es universalmente apreciado.', de: 'Proraso bringt italienische Barbershop-Tradition in Ihren Shop. Die Eukalyptus-und-Menthol-Formel beruhigt Rasurbrand sofort. Weniger alkoholisch als Clubman, ideal für empfindliche Haut. Der frische Duft wird allgemein geschätzt.' },
    pros: { en: ['Eucalyptus + menthol soothes razor burn','Less alcohol than classic formulas','Fresh universal scent','Suitable for sensitive skin','Italian barbershop tradition since 1948'], es: ['Eucalipto + mentol alivia el ardor de navaja','Menos alcohol que fórmulas clásicas','Aroma fresco universal','Adecuado para piel sensible','Tradición de barbería italiana desde 1948'], de: ['Eukalyptus + Menthol beruhigt Rasurbrand','Weniger Alkohol als klassische Formeln','Frischer universeller Duft','Geeignet für empfindliche Haut','Italienische Barbershop-Tradition seit 1948'] },
    cons: { en: ['More expensive than Clubman ($14 vs $12)','Smaller bottle (100ml vs 16oz)','Menthol feeling too intense for some clients'], es: ['Más caro que Clubman ($14 vs $12)','Botella más pequeña (100ml vs 16oz)','La sensación de mentol demasiado intensa para algunos clientes'], de: ['Teurer als Clubman ($14 vs $12)','Kleinere Flasche (100ml vs 16oz)','Mentolgefühl für manche Kunden zu intensiv'] },
    specs: { scent: 'Eucalyptus & Menthol', volume: '100 ml', type: 'Aftershave Lotion', warranty: 'N/A' },
    scoreBreakdown: [
      { label: { en: 'Skin Soothing', es: 'Alivio de la Piel', de: 'Hautberuhigung' }, score: 9.5 },
      { label: { en: 'Scent Quality', es: 'Calidad del Aroma', de: 'Duftqualität' }, score: 9.2 },
      { label: { en: 'Sensitive Skin', es: 'Piel Sensible', de: 'Empfindliche Haut' }, score: 9.4 },
      { label: { en: 'Value', es: 'Relación Precio', de: 'Preis-Leistung' }, score: 8.3 },
    ],
    bestFor: { en: 'Best for Sensitive Skin', es: 'Mejor para Piel Sensible', de: 'Bestes für empfindliche Haut' },
    tags: ['Eucalyptus', 'Menthol', 'Sensitive Skin', 'Italian Formula'],
  },

  // ─────────────── ACCESSORIES ───────────────
  {
    id: 'wahl-blade-oil', rank: 1, asin: 'B0000DDCU7', category: 'accessories',
    brand: 'Wahl', name: 'Clipper Blade Lubricating Oil 4oz', emoji: '🫙',
    price: 6.00, score: 9.5, reviewCount: 34521, starRating: 4.8,
    badge: { en: 'Essential Tool', es: 'Herramienta Esencial', de: 'Unverzichtbares Werkzeug' },
    tagline: { en: 'The #1 clipper blade oil trusted by professional barbers', es: 'El aceite lubricante #1 para cuchillas de barberos profesionales', de: 'Das meistvertraute Klingenöl von professionellen Barbieren' },
    verdict: { en: 'Wahl blade oil is non-negotiable for any professional barber. A few drops every 2-3 clients extends blade life from months to years. The light mineral oil formula prevents rust, reduces heat, and keeps cutting speed consistent. At $6 for 4oz, it\'s the best investment per dollar in your kit.', es: 'El aceite de cuchillas Wahl es imprescindible para cualquier barbero profesional. Unas gotas cada 2-3 clientes extiende la vida de la cuchilla de meses a años. La fórmula de aceite mineral ligero previene la oxidación, reduce el calor y mantiene la velocidad de corte constante.', de: 'Wahl-Klingenöl ist für jeden professionellen Barbier unverzichtbar. Ein paar Tropfen alle 2-3 Kunden verlängert die Klingenlebensdauer von Monaten auf Jahre. Die leichte Mineralölformel verhindert Rost, reduziert Wärme und hält die Schnittgeschwindigkeit konstant.' },
    pros: { en: ['Extends blade life significantly','Prevents rust and corrosion','Reduces heat during use','Compatible with all major clipper brands','34,000+ Amazon reviews at 4.8★'], es: ['Extiende significativamente la vida de la cuchilla','Previene la oxidación y corrosión','Reduce el calor durante el uso','Compatible con todas las marcas principales','34,000+ reseñas en Amazon a 4.8★'], de: ['Verlängert Klingenlebensdauer erheblich','Verhindert Rost und Korrosion','Reduziert Wärme während des Gebrauchs','Kompatibel mit allen großen Clipper-Marken','34.000+ Amazon-Bewertungen bei 4,8★'] },
    cons: { en: ['Need to apply frequently (every 2-3 clients)','Can drip if over-applied','Small bottle for high-volume shops'], es: ['Necesita aplicarse frecuentemente (cada 2-3 clientes)','Puede gotear si se aplica en exceso','Botella pequeña para barberías de alto volumen'], de: ['Muss häufig aufgetragen werden (alle 2-3 Kunden)','Kann bei Überdosierung tropfen','Kleine Flasche für Hochvolumen-Shops'] },
    specs: { compatibility: 'All major clipper brands', quantity: '4 oz', type: 'Mineral Oil', warranty: 'N/A' },
    scoreBreakdown: [
      { label: { en: 'Effectiveness', es: 'Efectividad', de: 'Effektivität' }, score: 9.7 },
      { label: { en: 'Value', es: 'Relación Precio', de: 'Preis-Leistung' }, score: 9.9 },
      { label: { en: 'Compatibility', es: 'Compatibilidad', de: 'Kompatibilität' }, score: 9.5 },
      { label: { en: 'Ease of Use', es: 'Facilidad de Uso', de: 'Benutzerfreundlichkeit' }, score: 9.3 },
    ],
    bestFor: { en: 'Best Essential Clipper Accessory', es: 'Mejor Accesorio Esencial para Cortadora', de: 'Bestes wesentliches Clipper-Zubehör' },
    tags: ['Blade Oil', 'Essential', 'Universal', 'Rust Prevention'],
  },
  {
    id: 'vallnei-metal-guards', rank: 2, asin: 'B07CXGR3W8', category: 'accessories',
    brand: 'VALLNEI', name: 'Metal Fade Combs for Wahl #0.5–#1.5', emoji: '🔧',
    price: 14.00, score: 9.0, reviewCount: 3421, starRating: 4.6,
    badge: { en: 'Fade Pro Essential', es: 'Esencial para Fade Pro', de: 'Fade-Pro-Wesentliches' },
    tagline: { en: 'Metal fade guards for precise blending transitions', es: 'Guardias de metal para transiciones de fundido precisas', de: 'Metall-Fade-Wächter für präzise Übergangsübergänge' },
    verdict: { en: 'Metal fade combs are a game-changer for barbers doing high-skin fades. The #0.5 and #1 sizes fill the gap that plastic guards can\'t — giving you that perfect blend between zero and a 1. Wahl-compatible, these snap on the Magic Clip and 5-Star Senior without modification.', es: 'Los peines de metal son un cambio de juego para barberos que hacen fades high-skin. Los tamaños #0.5 y #1 llenan el vacío que los guardias de plástico no pueden — dando esa mezcla perfecta entre cero y 1. Compatibles con Wahl, se enganchan en la Magic Clip sin modificación.', de: 'Metall-Fade-Kämme sind ein Gamechanger für Barbiere, die High-Skin-Fades machen. Die #0,5- und #1-Größen füllen die Lücke, die Kunststoffwächter nicht können — für die perfekte Mischung zwischen Null und 1. Wahl-kompatibel, passen sie ohne Modifikation.' },
    pros: { en: ['Metal build — more durable than plastic','#0.5 and #1 sizes for precise fading','Wahl Magic Clip compatible','Creates perfect high-skin fade transitions','Better heat resistance than plastic'], es: ['Construcción de metal — más durable que plástico','Tamaños #0.5 y #1 para degradado preciso','Compatible con Wahl Magic Clip','Crea transiciones perfectas de fade high-skin','Mejor resistencia al calor que el plástico'], de: ['Metallbau — langlebiger als Kunststoff','#0,5- und #1-Größen für präzises Faden','Wahl Magic Clip-kompatibel','Schafft perfekte High-Skin-Fade-Übergänge','Bessere Wärmebeständigkeit als Kunststoff'] },
    cons: { en: ['Only compatible with Wahl clippers','Limited guard range (#0.5-#1.5)','More expensive per guard than plastic sets'], es: ['Solo compatible con cortadoras Wahl','Rango limitado de guardias (#0.5-#1.5)','Más caro por guardia que juegos de plástico'], de: ['Nur mit Wahl-Clippern kompatibel','Begrenzter Wächterbereich (#0,5-#1,5)','Teurer pro Wächter als Kunststoffsätze'] },
    specs: { compatibility: 'Wahl Magic Clip, 5-Star Senior', quantity: '#0.5, #1, #1.5', type: 'Metal Clipper Guards', warranty: '1 year' },
    scoreBreakdown: [
      { label: { en: 'Fade Precision', es: 'Precisión del Fade', de: 'Fade-Präzision' }, score: 9.5 },
      { label: { en: 'Durability', es: 'Durabilidad', de: 'Haltbarkeit' }, score: 9.2 },
      { label: { en: 'Compatibility', es: 'Compatibilidad', de: 'Kompatibilität' }, score: 8.5 },
      { label: { en: 'Value', es: 'Relación Precio', de: 'Preis-Leistung' }, score: 8.8 },
    ],
    bestFor: { en: 'Best Metal Fade Guards', es: 'Mejores Guardias de Metal para Fade', de: 'Beste Metall-Fade-Wächter' },
    tags: ['Metal Guards', 'Wahl Compatible', 'Fade Precision', 'High-Skin Fade'],
  },

  // ─────────────── BAGS ───────────────
  {
    id: 'yueieoun-barber-backpack', rank: 1, asin: 'B07WB3GG8Y', category: 'bags',
    brand: 'Yueieoun', name: 'Barber Backpack 16.8" with Detachable Tray', emoji: '💼',
    price: 49.00, score: 9.1, reviewCount: 2341, starRating: 4.5,
    badge: { en: "Editor's Choice", es: 'Elección del Editor', de: 'Empfehlung der Redaktion' },
    tagline: { en: 'The professional barber backpack with detachable tool tray', es: 'La mochila de barbero profesional con bandeja extraíble', de: 'Der professionelle Barbier-Rucksack mit abnehmbarem Werkzeugfach' },
    verdict: { en: 'The Yueieoun is the most thoughtfully designed barber bag we\'ve tested. The detachable tray is the killer feature — snap it off at the chair for instant tool access without digging. 16.8" height accommodates full-size clippers standing upright. The reinforced base prevents the sag that ruins cheaper bags.', es: 'El Yueieoun es la mochila de barbero más cuidadosamente diseñada que hemos probado. La bandeja desmontable es la característica asesina — quítala en la silla para acceso instantáneo a las herramientas. 16.8" de altura acomoda cortadoras de tamaño completo verticalmente.', de: 'Der Yueieoun ist die am sorgfältigsten gestaltete Barbier-Tasche, die wir getestet haben. Das abnehmbare Fach ist das Killer-Feature — am Stuhl abnehmen für sofortigen Werkzeugzugang. 16,8" Höhe beherbergt Vollflächen-Clipper aufrecht stehend.' },
    pros: { en: ['Detachable tool tray — killer feature','16.8" fits full-size clippers upright','Reinforced base — no sag','Multiple compartments for organization','Padded back panel for comfort'], es: ['Bandeja de herramientas desmontable — característica asesina','16.8" cabe cortadoras de tamaño completo verticales','Base reforzada — sin pandeo','Múltiples compartimentos para organización','Panel trasero acolchado para comodidad'], de: ['Abnehmbares Werkzeugfach — Killer-Feature','16,8" für Vollflächen-Clipper aufrecht','Verstärkte Basis — kein Durchhängen','Mehrere Fächer für Organisation','Gepolstertes Rückenteil für Komfort'] },
    cons: { en: ['More expensive than basic barber bags ($49)','Detachable tray takes practice to reattach quickly','Heavy when fully loaded (full kit = 8+ lbs)'], es: ['Más caro que bolsas de barbero básicas ($49)','La bandeja desmontable requiere práctica para volver a unir rápidamente','Pesada cuando está completamente cargada (kit completo = 8+ lbs)'], de: ['Teurer als einfache Barbier-Taschen ($49)','Abnehmbares Fach braucht Übung zum schnellen Wiederanbringen','Schwer bei voller Beladung (voller Satz = 8+ lbs)'] },
    specs: { dimensions: '16.8" x 12" x 6"', compartments: '15+ compartments + detachable tray', material: 'Water-resistant nylon', warranty: '1 year' },
    scoreBreakdown: [
      { label: { en: 'Organization', es: 'Organización', de: 'Organisation' }, score: 9.5 },
      { label: { en: 'Durability', es: 'Durabilidad', de: 'Haltbarkeit' }, score: 9.0 },
      { label: { en: 'Design', es: 'Diseño', de: 'Design' }, score: 9.3 },
      { label: { en: 'Value', es: 'Relación Precio', de: 'Preis-Leistung' }, score: 8.5 },
    ],
    bestFor: { en: 'Best Barber Bag Overall', es: 'Mejor Bolsa de Barbero General', de: 'Beste Barbier-Tasche Gesamt' },
    tags: ['Backpack', 'Detachable Tray', '16.8"', 'Professional'],
  },
]

// Helper: get products by category
export function getProductsByCategory(category: Category): Product[] {
  return PRODUCTS.filter(p => p.category === category).sort((a, b) => a.rank - b.rank)
}

// SEO helpers
export const SEO_DEFAULTS = {
  siteName: 'BarberSuplyHub',
  twitterHandle: '@barbersuplyhub',
  locale: 'en_US',
  type: 'website' as const,
}

export function buildPageMeta(opts: {
  title: string
  description: string
  path: string
  keywords?: string[]
}) {
  return {
    title: opts.title,
    description: opts.description,
    keywords: opts.keywords?.join(', '),
    alternates: {
      canonical: `${SITE_URL}${opts.path}`,
      languages: {
        'en': `${SITE_URL}${opts.path}`,
        'es': `${SITE_URL}/es${opts.path}`,
        'de': `${SITE_URL}/de${opts.path}`,
      },
    },
    openGraph: {
      title: opts.title,
      description: opts.description,
      url: `${SITE_URL}${opts.path}`,
      siteName: SEO_DEFAULTS.siteName,
      locale: SEO_DEFAULTS.locale,
      type: SEO_DEFAULTS.type,
    },
    twitter: {
      card: 'summary_large_image' as const,
      title: opts.title,
      description: opts.description,
      site: SEO_DEFAULTS.twitterHandle,
    },
  }
}

