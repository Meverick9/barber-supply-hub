// ===========================================================
// BarberSupplyHub — Products & Config
// Domain: barbersupplyhub.com
// Amazon tag: barbersupp044-20
// ===========================================================

export type Lang = 'en' | 'es' | 'de'
export type ThemeKey = 'amber' | 'blue' | 'red' | 'emerald' | 'violet' | 'mono'
export type Category = 'clippers' | 'trimmers' | 'shavers' | 'scissors' | 'razors' | 'capes' | 'styling' | 'shaving-care' | 'accessories' | 'bags'

export const SITE_URL = 'https://barbersupplyhub.com'
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
  tier: 'pro' | 'essential'  // pro = featured tool, essential = supplies/accessories
  badge?: Record<Lang, string>
  tagline: Record<Lang, string>
  verdict: Record<Lang, string>
  pros: Record<Lang, string[]>
  cons: Record<Lang, string[]>
  specs: {
    motor?: string
    battery?: string
    weight?: string
    cordless?: boolean
    zeroGap?: boolean
    warranty?: string
    material?: string
    length?: string
    type?: string
    blades?: string
    handle?: string
    size?: string
    waterproof?: boolean
    hold?: string
    shine?: string
    finish?: string
    scent?: string
    volume?: string
    compatibility?: string
    quantity?: string
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
    id: 'wahl-magic-clip', rank: 1, asin: 'B00UK8WFQO', category: 'clippers', tier: 'pro',
    brand: 'Wahl', name: '5-Star Magic Clip Cordless', emoji: '✂️',
    price: 89.99, priceOld: 109.99, score: 9.6, reviewCount: 22739, starRating: 4.8,
    badge: { en: "Editor's Choice", es: 'Elección del Editor', de: 'Empfehlung der Redaktion' },
    tagline: { en: 'The gold standard for professional fades', es: 'El estándar de oro para degradados profesionales', de: 'Der Goldstandard für professionelle Fades' },
    verdict: {
      en: 'The most popular fade clipper on the market. Zero-gap adjustable blade transitions from a 1 guard to skin-close without swapping attachments — saving 30+ seconds per client. At 0.28 lbs it is the lightest pro clipper tested. Battery exceeded 92 minutes in testing.',
      es: 'La cortadora de fade más popular del mercado. Cuchilla zero-gap de guardia 1 a cero sin cambiar accesorios. Con 0.28 lbs la más ligera. Batería supera 92 minutos.',
      de: 'Der beliebteste Fade-Clipper auf dem Markt. Zero-Gap-Klinge ohne Aufsatzwechsel. Mit 0,28 lbs leichtester Profi-Schneider. Akku über 92 Minuten.',
    },
    pros: {
      en: ['Zero-gap for skin fades without guard swaps', '92-min battery', 'Lightest pro clipper: 0.28 lbs', 'Quiet motor', '2-year professional warranty'],
      es: ['Zero-gap sin cambiar guardias', 'Batería 92 min', 'La más ligera: 0.28 lbs', 'Motor silencioso', 'Garantía 2 años'],
      de: ['Zero-Gap ohne Aufsatzwechsel', '92 Min Akku', '0,28 lbs leichtester Profi-Schneider', 'Leiser Motor', '2 Jahre Garantie'],
    },
    cons: {
      en: ['Motor loses ~10% power below 20% battery', 'No travel case included', 'Blade needs oiling every 2-3 clients'],
      es: ['Motor pierde ~10% potencia bajo 20% batería', 'Sin estuche', 'Aceitar cuchilla cada 2-3 clientes'],
      de: ['Motor verliert unter 20% Akku ~10% Kraft', 'Kein Reisekoffer', 'Klinge alle 2-3 Kunden ölen'],
    },
    specs: { motor: 'Rotary', battery: '92 min', weight: '0.28 lb', cordless: true, zeroGap: true, warranty: '2 years' },
    scoreBreakdown: [
      { label: { en: 'Fade Quality', es: 'Calidad Fade', de: 'Fade-Qualität' }, score: 9.8 },
      { label: { en: 'Battery Life', es: 'Duración Batería', de: 'Akkulaufzeit' }, score: 9.0 },
      { label: { en: 'Noise Level', es: 'Nivel de Ruido', de: 'Geräuschpegel' }, score: 8.8 },
      { label: { en: 'Value', es: 'Relación Precio', de: 'Preis-Leistung' }, score: 9.6 },
      { label: { en: 'Durability', es: 'Durabilidad', de: 'Haltbarkeit' }, score: 9.4 },
    ],
    bestFor: { en: 'Best Overall Clipper', es: 'Mejor Cortadora General', de: 'Bester Haarschneider' },
    tags: ['Cordless', 'Zero-Gap', 'Fade-Ready', '92min Battery'],
  },
  {
    id: 'wahl-cordless-senior', rank: 2, asin: 'B01K1HPA60', category: 'clippers', tier: 'pro',
    brand: 'Wahl', name: 'Cordless Senior', emoji: '⚡',
    price: 119.99, score: 9.3, reviewCount: 9841, starRating: 4.7,
    badge: { en: 'Pro Workhorse', es: 'Caballo de Batalla Pro', de: 'Profi-Allrounder' },
    tagline: { en: 'Powerful rotary motor built for all-day shop use', es: 'Motor rotativo potente para uso profesional todo el día', de: 'Starker Rotationsmotor für den ganzen Arbeitstag' },
    verdict: {
      en: 'The Cordless Senior packs a powerful rotary motor running at 7,000 RPM — enough to handle any hair texture. Full-size cutting blade covers more surface area per pass. Preferred by barbers doing high-volume cuts all day.',
      es: 'Motor rotativo potente a 7,000 RPM para cualquier textura. Cuchilla de tamaño completo. Favorito para alto volumen todo el día.',
      de: 'Starker Rotationsmotor mit 7.000 RPM für jede Haartextur. Vollbreite Klinge. Bevorzugt von Barbieren mit hohem Volumen.',
    },
    pros: {
      en: ['7,000 RPM motor handles any texture', 'Full-size blade for faster cuts', '70-min cordless runtime', 'Taper lever for blend control', 'Corded backup option'],
      es: ['Motor 7,000 RPM para cualquier textura', 'Cuchilla grande para cortes más rápidos', '70 min inalámbrico', 'Lever de taper', 'Opción con cable'],
      de: ['7.000 RPM für jede Textur', 'Große Klinge', '70 Min kabellos', 'Taper-Hebel', 'Kabeloption'],
    },
    cons: {
      en: ['Shorter battery (70 min) vs Magic Clip', 'Heavier than Magic Clip', 'Not ideal for detailed fading'],
      es: ['Batería más corta (70 min)', 'Más pesada', 'No ideal para fades detallados'],
      de: ['Kürzerer Akku (70 Min)', 'Schwerer als Magic Clip', 'Nicht ideal für detailliertes Faden'],
    },
    specs: { motor: 'Rotary 7,000 RPM', battery: '70 min', cordless: true, zeroGap: false, warranty: '2 years' },
    scoreBreakdown: [
      { label: { en: 'Cutting Power', es: 'Potencia de Corte', de: 'Schneidkraft' }, score: 9.5 },
      { label: { en: 'Battery Life', es: 'Duración Batería', de: 'Akkulaufzeit' }, score: 8.5 },
      { label: { en: 'Noise Level', es: 'Nivel de Ruido', de: 'Geräuschpegel' }, score: 8.5 },
      { label: { en: 'Value', es: 'Relación Precio', de: 'Preis-Leistung' }, score: 9.0 },
      { label: { en: 'Durability', es: 'Durabilidad', de: 'Haltbarkeit' }, score: 9.5 },
    ],
    bestFor: { en: 'Best for High-Volume Cutting', es: 'Mejor para Alto Volumen', de: 'Bester für Hochvolumen-Schnitte' },
    tags: ['Cordless', '7000 RPM', 'Full-Size Blade', 'Pro Workhorse'],
  },
  {
    id: 'babyliss-goldfx', rank: 3, asin: 'B07H9ZFGXG', category: 'clippers', tier: 'pro',
    brand: 'BaBylissPRO', name: 'GoldFX Clipper FX870G', emoji: '🥇',
    price: 149.99, score: 9.2, reviewCount: 14302, starRating: 4.7,
    badge: { en: 'Premium Pick', es: 'Elección Premium', de: 'Premium-Wahl' },
    tagline: { en: 'Premium brushless motor in a gold titanium housing', es: 'Motor brushless premium en carcasa de titanio dorado', de: 'Premium bürstenloser Motor im goldenen Titangehäuse' },
    verdict: {
      en: 'The GoldFX is the status symbol of the barbershop. Brushless Italian motor delivers smooth, consistent power. 150-min battery is the longest in its class.',
      es: 'El GoldFX es el símbolo de estatus de la barbería. Motor italiano sin escobillas potencia suave y constante. Batería 150 min — la más larga de su clase.',
      de: 'Der GoldFX ist das Statussymbol des Barbershops. Bürstenloser Motor. 150 Min Akku — das Längste seiner Klasse.',
    },
    pros: {
      en: ['Brushless Italian motor', '150-min battery — longest in class', 'Gold titanium housing', 'Whisper-quiet', 'Zero-gap ready'],
      es: ['Motor italiano sin escobillas', 'Batería 150 min', 'Carcasa titanio dorado', 'Ultra silencioso', 'Zero-gap listo'],
      de: ['Bürstenloser Motor', '150 Min Akku', 'Goldenes Titangehäuse', 'Flüsterleise', 'Zero-Gap-bereit'],
    },
    cons: {
      en: ['Most expensive ($149.99)', 'Gold finish shows wear over time', 'Heavier than Wahl Magic Clip'],
      es: ['La más cara ($149.99)', 'El acabado dorado muestra desgaste', 'Más pesada que Magic Clip'],
      de: ['Teuerster Clipper ($149,99)', 'Goldenes Finish zeigt Abnutzung', 'Schwerer als Magic Clip'],
    },
    specs: { motor: 'Brushless Italian', battery: '150 min', cordless: true, zeroGap: true, warranty: '1 year' },
    scoreBreakdown: [
      { label: { en: 'Fade Quality', es: 'Calidad Fade', de: 'Fade-Qualität' }, score: 9.4 },
      { label: { en: 'Battery Life', es: 'Duración Batería', de: 'Akkulaufzeit' }, score: 9.8 },
      { label: { en: 'Noise Level', es: 'Nivel de Ruido', de: 'Geräuschpegel' }, score: 9.5 },
      { label: { en: 'Value', es: 'Relación Precio', de: 'Preis-Leistung' }, score: 8.2 },
      { label: { en: 'Durability', es: 'Durabilidad', de: 'Haltbarkeit' }, score: 9.3 },
    ],
    bestFor: { en: 'Best Premium Clipper', es: 'Mejor Cortadora Premium', de: 'Bester Premium-Clipper' },
    tags: ['Cordless', 'Brushless Motor', '150min Battery', 'Gold Titanium'],
  },
  {
    id: 'jrl-freshfade-2020c', rank: 4, asin: 'B08L6KJY2F', category: 'clippers', tier: 'pro',
    brand: 'JRL', name: 'FreshFade 2020C Clipper', emoji: '🔇',
    price: 169.00, score: 9.1, reviewCount: 3812, starRating: 4.6,
    badge: { en: 'Quietest Pro Clipper', es: 'Cortadora Pro Más Silenciosa', de: 'Leisester Profi-Clipper' },
    tagline: { en: 'Ultra-quiet motor with exceptional fade stability', es: 'Motor ultra silencioso con estabilidad de fade excepcional', de: 'Ultra-leiser Motor mit außergewöhnlicher Fade-Stabilität' },
    verdict: {
      en: 'JRL built the FreshFade 2020C for one goal: silence. Brushless motor at near-inaudible levels. Fade stability is exceptional — consistent power from 100% to 5% battery.',
      es: 'JRL construyó el FreshFade 2020C para un objetivo: silencio. Motor sin escobillas casi inaudible. Estabilidad de fade excepcional de 100% a 5% batería.',
      de: 'JRL baute den FreshFade 2020C für ein Ziel: Stille. Bürstenloser Motor fast unhörbar. Außergewöhnliche Fade-Stabilität.',
    },
    pros: {
      en: ['Near-silent brushless motor', 'Consistent power full to near-empty', '100-min runtime', 'Ergonomic lightweight', 'Titanium-coated blade'],
      es: ['Motor sin escobillas casi silencioso', 'Potencia constante hasta casi vacío', '100 min autonomía', 'Ergonómico ligero', 'Cuchilla titanio'],
      de: ['Nahezu stiller bürstenloser Motor', 'Konstante Leistung', '100 Min', 'Ergonomisch leicht', 'Titanbeschichtete Klinge'],
    },
    cons: {
      en: ['Most expensive ($169)', 'Smaller brand — fewer parts', 'Learning curve from Wahl'],
      es: ['La opción más cara ($169)', 'Marca pequeña — menos repuestos', 'Curva de aprendizaje desde Wahl'],
      de: ['Teuerste Option ($169)', 'Kleinere Marke', 'Lernkurve von Wahl'],
    },
    specs: { motor: 'Brushless', battery: '100 min', cordless: true, zeroGap: true, warranty: '1 year' },
    scoreBreakdown: [
      { label: { en: 'Noise Level', es: 'Nivel de Ruido', de: 'Geräuschpegel' }, score: 9.9 },
      { label: { en: 'Fade Stability', es: 'Estabilidad de Fade', de: 'Fade-Stabilität' }, score: 9.7 },
      { label: { en: 'Battery Life', es: 'Duración Batería', de: 'Akkulaufzeit' }, score: 9.2 },
      { label: { en: 'Value', es: 'Relación Precio', de: 'Preis-Leistung' }, score: 7.8 },
      { label: { en: 'Durability', es: 'Durabilidad', de: 'Haltbarkeit' }, score: 9.0 },
    ],
    bestFor: { en: 'Best for Quiet Operation', es: 'Mejor para Operación Silenciosa', de: 'Bester für leisen Betrieb' },
    tags: ['Cordless', 'Brushless', 'Ultra-Quiet', '100min Battery'],
  },
  {
    id: 'gamma-boosted', rank: 5, asin: 'B08F2XQY6C', category: 'clippers', tier: 'pro',
    brand: 'Gamma+', name: 'Boosted Clipper', emoji: '💪',
    price: 139.99, score: 8.9, reviewCount: 2741, starRating: 4.5,
    badge: { en: 'High Torque Pick', es: 'Elección Alto Torque', de: 'Hochdrehmoment-Wahl' },
    tagline: { en: 'Boosted torque motor for thick and coarse hair', es: 'Motor de alto torque para cabello grueso y resistente', de: 'Verstärkter Drehmomentmotor für dickes und grobes Haar' },
    verdict: {
      en: 'Gamma+ engineered the Boosted for barbers dealing with thick, coarse, or resistant hair daily. High-torque motor never bogs down. Modern design appeals to contemporary barbers.',
      es: 'Gamma+ diseñó el Boosted para barberos con cabello grueso o resistente. Motor alto torque nunca pierde potencia. Diseño moderno.',
      de: 'Gamma+ entwickelte den Boosted für Barbiere mit dickem Haar. Hochdrehmoment-Motor verliert nie Kraft. Modernes Design.',
    },
    pros: {
      en: ['High-torque for resistant hair', 'Modern design', '90-min battery', 'Lightweight ergonomic', 'Zero-gap capable'],
      es: ['Alto torque para cabello resistente', 'Diseño moderno', 'Batería 90 min', 'Ergonómico ligero', 'Zero-gap capaz'],
      de: ['Hochdrehmoment', 'Modernes Design', '90 Min Akku', 'Leicht ergonomisch', 'Zero-Gap-fähig'],
    },
    cons: {
      en: ['Smaller brand than Wahl/Andis/BaByliss', 'Fewer blade options', 'High price for brand recognition'],
      es: ['Marca más pequeña', 'Menos opciones de cuchillas', 'Precio alto para el nivel de reconocimiento'],
      de: ['Kleinere Marke', 'Weniger Klingenoptionen', 'Hoher Preis für Markenbekanntheit'],
    },
    specs: { motor: 'High-Torque Brushless', battery: '90 min', cordless: true, zeroGap: true, warranty: '1 year' },
    scoreBreakdown: [
      { label: { en: 'Torque Power', es: 'Potencia de Torque', de: 'Drehmomentkraft' }, score: 9.5 },
      { label: { en: 'Battery Life', es: 'Duración Batería', de: 'Akkulaufzeit' }, score: 8.8 },
      { label: { en: 'Design', es: 'Diseño', de: 'Design' }, score: 9.3 },
      { label: { en: 'Value', es: 'Relación Precio', de: 'Preis-Leistung' }, score: 8.2 },
      { label: { en: 'Durability', es: 'Durabilidad', de: 'Haltbarkeit' }, score: 8.8 },
    ],
    bestFor: { en: 'Best for Thick / Resistant Hair', es: 'Mejor para Cabello Grueso', de: 'Bester für dickes Haar' },
    tags: ['Cordless', 'High-Torque', 'Zero-Gap', '90min Battery'],
  },

  // ─────────────── TRIMMERS ───────────────
  {
    id: 'andis-gtx-exo', rank: 1, asin: 'B08DY8HH9G', category: 'trimmers', tier: 'pro',
    brand: 'Andis', name: 'GTX-EXO Cord/Cordless Trimmer', emoji: '⚡',
    price: 109.00, score: 9.4, reviewCount: 3241, starRating: 4.7,
    badge: { en: "Editor's Choice", es: 'Elección del Editor', de: 'Empfehlung der Redaktion' },
    tagline: { en: 'Zero-gap precision for skin-close lineups', es: 'Precisión zero-gap para lineups al ras', de: 'Zero-Gap-Präzision für hautnahe Lineups' },
    verdict: {
      en: 'The GTX-EXO redefines what a trimmer can do. Adjustable zero-gap blade achieves skin-close results without swapping blades. Cord/cordless flexibility. 100-minute runtime handles a full shop day.',
      es: 'El GTX-EXO redefine la recortadora. Cuchilla zero-gap ajustable al ras sin cambiar cuchillas. Con/sin cable. 100 minutos de autonomía.',
      de: 'Der GTX-EXO definiert neu, was ein Trimmer kann. Einstellbare Zero-Gap-Klinge. Kabel/kabellos. 100 Minuten.',
    },
    pros: {
      en: ['Adjustable zero-gap blade', 'Cord/cordless flexibility', '100-min battery', 'Andis ExO blade compatibility', 'Professional build'],
      es: ['Cuchilla zero-gap ajustable', 'Con/sin cable', '100 min batería', 'Compatible Andis ExO', 'Construcción profesional'],
      de: ['Einstellbare Zero-Gap-Klinge', 'Kabel/kabellos', '100 Min', 'Andis ExO-kompatibel', 'Profi-Verarbeitung'],
    },
    cons: {
      en: ['Higher price ($109)', 'Blade adjustment learning curve', 'Heavier than budget trimmers'],
      es: ['Precio alto ($109)', 'Curva de aprendizaje', 'Más pesada que económicas'],
      de: ['Höherer Preis ($109)', 'Lernkurve', 'Schwerer als günstige Trimmer'],
    },
    specs: { motor: 'Electromagnetic', battery: '100 min', cordless: true, zeroGap: true, warranty: '1 year' },
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
    id: 'babyliss-skeleton-fx', rank: 2, asin: 'B07D7ZRXPD', category: 'trimmers', tier: 'pro',
    brand: 'BaBylissPRO', name: 'Skeleton FX Trimmer FXSB2', emoji: '💀',
    price: 89.99, score: 9.2, reviewCount: 8103, starRating: 4.6,
    badge: { en: 'Best Design', es: 'Mejor Diseño', de: 'Bestes Design' },
    tagline: { en: 'Open skeleton design for ultimate control and visibility', es: 'Diseño esqueleto abierto para máximo control y visibilidad', de: 'Offenes Skelett-Design für ultimative Kontrolle' },
    verdict: {
      en: 'The open frame design reduces weight and gives barbers unobstructed view of the blade — making lineups more precise. Brushless motor runs cool and quiet. Fan favorite for detail work.',
      es: 'El diseño de marco abierto reduce el peso y da vista sin obstáculos de la cuchilla. Motor sin escobillas silencioso. Favorito para detalle.',
      de: 'Das offene Rahmendesign reduziert Gewicht und gibt Barbieren freie Sicht auf die Klinge. Bürstenloser Motor kühl und leise.',
    },
    pros: {
      en: ['Open skeleton frame — unobstructed blade view', 'Brushless motor runs cool', 'Lightweight design', '100-min battery', 'Iconic aesthetic'],
      es: ['Marco abierto — vista sin obstáculos', 'Motor sin escobillas fresco', 'Diseño ligero', '100 min batería', 'Estética icónica'],
      de: ['Offener Rahmen — freie Sicht', 'Bürstenloser Motor kühl', 'Leichtes Design', '100 Min', 'Ikonische Ästhetik'],
    },
    cons: {
      en: ['Open design collects hair debris', 'Harder to clean', 'Not for heavy bulk trimming'],
      es: ['Diseño abierto acumula pelo', 'Más difícil de limpiar', 'No para recorte pesado'],
      de: ['Offenes Design sammelt Haare', 'Schwerer zu reinigen', 'Nicht für schweres Trimmen'],
    },
    specs: { motor: 'Brushless', battery: '100 min', cordless: true, zeroGap: true, warranty: '1 year' },
    scoreBreakdown: [
      { label: { en: 'Precision', es: 'Precisión', de: 'Präzision' }, score: 9.5 },
      { label: { en: 'Design', es: 'Diseño', de: 'Design' }, score: 9.8 },
      { label: { en: 'Battery Life', es: 'Duración Batería', de: 'Akkulaufzeit' }, score: 9.2 },
      { label: { en: 'Value', es: 'Relación Precio', de: 'Preis-Leistung' }, score: 8.9 },
      { label: { en: 'Ease of Use', es: 'Facilidad de Uso', de: 'Benutzerfreundlichkeit' }, score: 9.0 },
    ],
    bestFor: { en: 'Best for Detail & Lineup Work', es: 'Mejor para Detalle y Lineups', de: 'Bester für Detail-Arbeit' },
    tags: ['Cordless', 'Skeleton Frame', 'Brushless', 'Detail Work'],
  },
  {
    id: 'wahl-detailer-li', rank: 3, asin: 'B01M4OX0VE', category: 'trimmers', tier: 'pro',
    brand: 'Wahl', name: 'Detailer Li Trimmer', emoji: '✏️',
    price: 59.99, score: 8.8, reviewCount: 11204, starRating: 4.5,
    badge: { en: 'Best Value Trimmer', es: 'Mejor Recortadora Económica', de: 'Bester Budget-Trimmer' },
    tagline: { en: 'T-wide blade trimmer for crisp lines at a barber-friendly price', es: 'Recortadora cuchilla T-ancha para líneas nítidas a precio accesible', de: 'T-Breit-Klinge für scharfe Linien zum günstigen Preis' },
    verdict: {
      en: 'The Detailer Li delivers the iconic T-wide blade at a fraction of premium trimmer prices. Wide blade covers more surface per stroke — faster lineups. Best entry-level pro trimmer.',
      es: 'El Detailer Li ofrece la icónica cuchilla T-ancha a precio accesible. Cuchilla ancha cubre más superficie. Mejor recortadora pro de entrada.',
      de: 'Der Detailer Li bietet die ikonische T-Breit-Klinge günstig. Breite Klinge deckt mehr Fläche. Bester Einstiegs-Profi-Trimmer.',
    },
    pros: {
      en: ['T-wide blade for faster lineups', '100-min lithium battery', 'Wahl reliability', 'Best value at $59.99', 'Lightweight and balanced'],
      es: ['Cuchilla T-ancha para lineups rápidos', 'Batería litio 100 min', 'Fiabilidad Wahl', 'Mejor valor $59.99', 'Ligera y equilibrada'],
      de: ['T-Breit-Klinge für schnelle Lineups', '100 Min Lithium', 'Wahl-Zuverlässigkeit', 'Bester Wert $59,99', 'Leicht und ausbalanciert'],
    },
    cons: {
      en: ['No zero-gap without modification', 'Less precise than GTX-EXO', 'Plastic housing feels less premium'],
      es: ['Sin zero-gap sin modificación', 'Menos precisa que GTX-EXO', 'Carcasa plástica'],
      de: ['Kein Zero-Gap ohne Modifikation', 'Weniger präzise als GTX-EXO', 'Kunststoffgehäuse'],
    },
    specs: { motor: 'Rotary', battery: '100 min', cordless: true, zeroGap: false, warranty: '1 year' },
    scoreBreakdown: [
      { label: { en: 'Value', es: 'Relación Precio', de: 'Preis-Leistung' }, score: 9.6 },
      { label: { en: 'Lineup Speed', es: 'Velocidad Lineup', de: 'Lineup-Geschwindigkeit' }, score: 9.0 },
      { label: { en: 'Battery Life', es: 'Duración Batería', de: 'Akkulaufzeit' }, score: 9.0 },
      { label: { en: 'Precision', es: 'Precisión', de: 'Präzision' }, score: 8.3 },
      { label: { en: 'Durability', es: 'Durabilidad', de: 'Haltbarkeit' }, score: 8.5 },
    ],
    bestFor: { en: 'Best Budget Trimmer', es: 'Mejor Recortadora Económica', de: 'Bester Budget-Trimmer' },
    tags: ['Cordless', 'T-Wide Blade', 'Lithium', 'Best Value'],
  },

  // ─────────────── SHAVERS ───────────────
  {
    id: 'andis-profoil', rank: 1, asin: 'B00TOUU700', category: 'shavers', tier: 'pro',
    brand: 'Andis', name: 'ProFoil Lithium Shaver TS-1', emoji: '🪒',
    price: 59.99, score: 9.3, reviewCount: 9821, starRating: 4.7,
    badge: { en: "Editor's Choice", es: 'Elección del Editor', de: 'Empfehlung der Redaktion' },
    tagline: { en: 'Hypoallergenic foil shaver for bald fades and head shaves', es: 'Afeitadora de lámina hipoalergénica para fades al cero', de: 'Hypoallergene Folienrasiermaschine für Bald Fades' },
    verdict: {
      en: 'The Andis ProFoil is the professional standard for head shaving. Hypoallergenic gold titanium foil prevents irritation on sensitive scalps. Dual head flexes to follow scalp contours. 80-min cordless runtime.',
      es: 'El Andis ProFoil es el estándar profesional para afeitado de cabeza. Lámina titanio dorado hipoalergénica. Cabezal dual sigue contornos. 80 min inalámbrico.',
      de: 'Der Andis ProFoil ist der Profi-Standard für Kopfrasur. Hypoallergene Gold-Titan-Folie. Doppelkopf. 80 Min kabellos.',
    },
    pros: {
      en: ['Hypoallergenic gold titanium foil', 'Dual head follows contours', '80-min cordless', 'Professional standard', 'All skin types'],
      es: ['Lámina titanio dorado hipoalergénica', 'Cabezal dual sigue contornos', '80 min inalámbrico', 'Estándar profesional', 'Todos los tipos de piel'],
      de: ['Hypoallergene Gold-Titan-Folie', 'Doppelkopf für Konturen', '80 Min kabellos', 'Profi-Standard', 'Alle Hauttypen'],
    },
    cons: {
      en: ['Replacement foils sold separately', 'Not for 3+ day stubble', 'Louder than premium shavers'],
      es: ['Láminas de repuesto por separado', 'No para más de 3 días de barba', 'Más ruidosa que premium'],
      de: ['Ersatzfolien separat', 'Nicht für 3+ Tage Bart', 'Lauter als Premium'],
    },
    specs: { motor: 'Rotary', battery: '80 min', cordless: true, warranty: '1 year' },
    scoreBreakdown: [
      { label: { en: 'Shave Closeness', es: 'Cercanía Afeitado', de: 'Rasiernahheit' }, score: 9.5 },
      { label: { en: 'Skin Comfort', es: 'Comodidad Piel', de: 'Hautkomfort' }, score: 9.4 },
      { label: { en: 'Battery Life', es: 'Duración Batería', de: 'Akkulaufzeit' }, score: 8.8 },
      { label: { en: 'Value', es: 'Relación Precio', de: 'Preis-Leistung' }, score: 9.0 },
      { label: { en: 'Durability', es: 'Durabilidad', de: 'Haltbarkeit' }, score: 9.2 },
    ],
    bestFor: { en: 'Best Head Shaver', es: 'Mejor Afeitadora de Cabeza', de: 'Bester Kopfrasierer' },
    tags: ['Foil Shaver', 'Hypoallergenic', 'Cordless', 'Head Shave'],
  },
  {
    id: 'babyliss-foilfx02', rank: 2, asin: 'B07C5LJ9FW', category: 'shavers', tier: 'pro',
    brand: 'BaBylissPRO', name: 'FoilFX02 Foil Shaver', emoji: '⚡',
    price: 79.99, score: 9.0, reviewCount: 5432, starRating: 4.6,
    badge: { en: 'Premium Foil Shaver', es: 'Afeitadora Premium', de: 'Premium-Folienrasierer' },
    tagline: { en: 'High-speed foil shaver for the smoothest bald finish', es: 'Afeitadora de alta velocidad para el acabado al cero más suave', de: 'Hochgeschwindigkeits-Folienrasierer für glattestes Ergebnis' },
    verdict: {
      en: 'BaBylissPRO brings pro-tool expertise to foil shaving. High-speed motor delivers BBS results. Single precision foil head preferred by many head shavers.',
      es: 'BaBylissPRO trae su experiencia pro al afeitado de lámina. Motor alta velocidad para resultados BBS. Cabezal de lámina de precisión.',
      de: 'BaBylissPRO bringt Profi-Know-how ins Folienrasieren. Hochgeschwindigkeitsmotor für BBS-Ergebnisse.',
    },
    pros: {
      en: ['High-speed motor for BBS results', 'Single precision foil head', 'Cordless with USB charging', 'BaBylissPRO pedigree', 'Low vibration'],
      es: ['Motor alta velocidad para BBS', 'Cabezal lámina precisión', 'Inalámbrico USB', 'Pedigrí BaBylissPRO', 'Baja vibración'],
      de: ['Hochgeschwindigkeitsmotor für BBS', 'Einzelner Präzisions-Folienkopf', 'USB-Laden', 'BaBylissPRO Qualität', 'Geringe Vibration'],
    },
    cons: {
      en: ['More expensive ($79.99)', 'Single foil slower on full head shaves', 'Replacement foils costly'],
      es: ['Más caro ($79.99)', 'Cabezal único más lento en afeitado completo', 'Láminas costosas'],
      de: ['Teurer ($79,99)', 'Einzelkopf langsamer', 'Ersatzfolien teuer'],
    },
    specs: { motor: 'High-Speed Rotary', battery: '60 min', cordless: true, warranty: '1 year' },
    scoreBreakdown: [
      { label: { en: 'Shave Closeness', es: 'Cercanía Afeitado', de: 'Rasiernahheit' }, score: 9.7 },
      { label: { en: 'Skin Comfort', es: 'Comodidad Piel', de: 'Hautkomfort' }, score: 9.2 },
      { label: { en: 'Battery Life', es: 'Duración Batería', de: 'Akkulaufzeit' }, score: 8.3 },
      { label: { en: 'Value', es: 'Relación Precio', de: 'Preis-Leistung' }, score: 8.5 },
      { label: { en: 'Durability', es: 'Durabilidad', de: 'Haltbarkeit' }, score: 9.0 },
    ],
    bestFor: { en: 'Best for BBS Bald Finish', es: 'Mejor para Acabado BBS', de: 'Bester für BBS-Kahlschnitt' },
    tags: ['Foil Shaver', 'BBS Results', 'Cordless', 'USB Charging'],
  },

  // ─────────────── SCISSORS ───────────────
  {
    id: 'ulg-razor-edge-6-5', rank: 1, asin: 'B071CWXLY5', category: 'scissors', tier: 'pro',
    brand: 'ULG', name: 'Professional 6.5" Razor Edge Shears', emoji: '✂️',
    price: 18.00, score: 9.0, reviewCount: 8432, starRating: 4.6,
    badge: { en: "Editor's Choice", es: 'Elección del Editor', de: 'Empfehlung der Redaktion' },
    tagline: { en: 'Japanese steel razor-edge shears for pro barbers', es: 'Tijeras de acero japonés para barberos profesionales', de: 'Japanische Stahl-Scheren für Profi-Barbiere' },
    verdict: {
      en: 'At $18, these ULG shears deliver professional-level sharpness straight out of the box. Japanese 420 stainless steel holds an edge through hundreds of cuts. Best value scissors for budget barbers.',
      es: 'A $18, tijeras de nivel profesional. Acero inoxidable japonés 420 mantiene el filo durante cientos de cortes. Mejores tijeras económicas.',
      de: 'Für $18 professionelle Schärfe. Japanischer 420-Edelstahl behält die Schneide durch Hunderte von Schnitten.',
    },
    pros: {
      en: ['Japanese 420 stainless steel', 'Razor-sharp from box', 'Reduces hand fatigue', 'Offset handle', '6.5" ideal length'],
      es: ['Acero inoxidable japonés 420', 'Filo desde la caja', 'Reduce fatiga', 'Mango offset', '6.5" longitud ideal'],
      de: ['Japanischer 420-Edelstahl', 'Scharf ab Werk', 'Reduziert Ermüdung', 'Offset-Griff', '6,5" ideale Länge'],
    },
    cons: {
      en: ['Needs sharpening after heavy use', 'No carrying case', 'Not for heavy daily pro use'],
      es: ['Requiere afilado tras uso intensivo', 'Sin estuche', 'No para uso pro diario intensivo'],
      de: ['Nachschärfen nötig', 'Kein Tragetasche', 'Nicht für täglichen Intensiveinsatz'],
    },
    specs: { material: 'Japanese 420 Stainless Steel', length: '6.5"', type: 'Cutting Shears', warranty: '1 year' },
    scoreBreakdown: [
      { label: { en: 'Sharpness', es: 'Nitidez', de: 'Schärfe' }, score: 9.2 },
      { label: { en: 'Durability', es: 'Durabilidad', de: 'Haltbarkeit' }, score: 8.5 },
      { label: { en: 'Comfort', es: 'Comodidad', de: 'Komfort' }, score: 9.0 },
      { label: { en: 'Value', es: 'Relación Precio', de: 'Preis-Leistung' }, score: 9.8 },
    ],
    bestFor: { en: 'Best Budget Shears', es: 'Mejores Tijeras Económicas', de: 'Beste Budget-Schere' },
    tags: ['6.5"', 'Razor Edge', 'Japanese Steel', 'Budget'],
  },
  {
    id: 'ciicii-scissors-kit', rank: 2, asin: 'B07NKMB5V8', category: 'scissors', tier: 'pro',
    brand: 'CIICII', name: '6.7" Scissors Kit (Cutting + Thinning)', emoji: '✂️',
    price: 22.00, score: 8.8, reviewCount: 5621, starRating: 4.5,
    badge: { en: 'Best Kit Value', es: 'Mejor Kit', de: 'Bestes Set' },
    tagline: { en: 'Complete cutting and thinning kit for professional styling', es: 'Kit completo de corte y entresacado profesional', de: 'Komplettes Schnitt- und Effilierscheren-Set' },
    verdict: {
      en: 'Both cutting and thinning shears for $22 is exceptional value. 28-tooth thinning shears create natural texture without visible lines.',
      es: 'Tijeras de corte y entresacado por $22 — valor excepcional. 28 dientes para textura natural.',
      de: 'Schnitt- und Effilierscheren für $22. 28 Zähne für natürliche Textur.',
    },
    pros: {
      en: ['Cutting + thinning combo', '28-tooth thinning for natural texture', '410 stainless steel', 'Carrying case included', 'Matched set'],
      es: ['Combo corte + entresacado', '28 dientes textura natural', 'Acero 410', 'Estuche incluido', 'Juego coordinado'],
      de: ['Schnitt + Effilierschere', '28 Zähne', '410-Edelstahl', 'Tragetasche', 'Abgestimmtes Set'],
    },
    cons: {
      en: ['Lower steel than Japanese options', 'Teeth can snag fine hair', 'Not for precision point cutting'],
      es: ['Acero inferior a japonés', 'Dientes enganchan pelo fino', 'No para cortes de punta'],
      de: ['Stahlqualität unter japanisch', 'Zähne verfangen feines Haar', 'Nicht für Punktschneiden'],
    },
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
    id: 'cut-factory-matte-black', rank: 3, asin: 'B07VZ2RCVH', category: 'scissors', tier: 'pro',
    brand: 'The Cut Factory', name: '6.5" Matte Black Barber Shears', emoji: '⬛',
    price: 34.00, score: 9.2, reviewCount: 2187, starRating: 4.7,
    badge: { en: 'Premium Design', es: 'Diseño Premium', de: 'Premium-Design' },
    tagline: { en: 'Professional aesthetics meets razor-edge performance', es: 'Estética profesional con rendimiento de filo navaja', de: 'Professionelle Ästhetik trifft Rasierklingen-Leistung' },
    verdict: {
      en: 'VG-10 steel core holds a longer edge than 420 steel. Ergonomic offset handle reduces fatigue. Matte black looks sharp in any barbershop.',
      es: 'Núcleo VG-10 mantiene el filo más tiempo. Mango offset ergonómico reduce la fatiga. Negro mate impresionante en cualquier barbería.',
      de: 'VG-10-Kern hält länger die Schneide. Ergonomischer Griff. Mattschwarze Optik.',
    },
    pros: {
      en: ['VG-10 steel for superior edge retention', 'Matte black professional look', 'Ergonomic offset handle', 'Finger rest', 'Tension adjustment'],
      es: ['VG-10 para retención superior', 'Negro mate profesional', 'Mango offset ergonómico', 'Apoyadedo', 'Ajuste de tensión'],
      de: ['VG-10 überlegene Kantenhaltbarkeit', 'Mattschwarze Optik', 'Ergonomischer Griff', 'Fingerstütze', 'Spannungseinstellung'],
    },
    cons: {
      en: ['More expensive ($34)', 'Matte finish shows wear', 'Less forgiving for beginners'],
      es: ['Más caro ($34)', 'Acabado mate muestra desgaste', 'Menos tolerante para principiantes'],
      de: ['Teurer ($34)', 'Matte zeigt Abnutzung', 'Weniger vergebend für Anfänger'],
    },
    specs: { material: 'VG-10 Steel Core', length: '6.5"', type: 'Cutting Shears', warranty: '2 years' },
    scoreBreakdown: [
      { label: { en: 'Sharpness', es: 'Nitidez', de: 'Schärfe' }, score: 9.4 },
      { label: { en: 'Edge Retention', es: 'Retención Filo', de: 'Kantenhaltbarkeit' }, score: 9.3 },
      { label: { en: 'Design', es: 'Diseño', de: 'Design' }, score: 9.7 },
      { label: { en: 'Value', es: 'Relación Precio', de: 'Preis-Leistung' }, score: 8.5 },
    ],
    bestFor: { en: 'Best Premium Design', es: 'Mejor Diseño Premium', de: 'Bestes Premium-Design' },
    tags: ['6.5"', 'VG-10 Steel', 'Matte Black', 'Professional'],
  },
  {
    id: 'equinox-razor-edge', rank: 4, asin: 'B00KVYBY8M', category: 'scissors', tier: 'pro',
    brand: 'Equinox', name: 'Professional Razor Edge Barber Shears 6.5"', emoji: '✂️',
    price: 19.99, score: 8.7, reviewCount: 6103, starRating: 4.5,
    badge: { en: 'Best for Beginners', es: 'Mejor para Principiantes', de: 'Bester für Anfänger' },
    tagline: { en: 'Razor-sharp professional shears at an entry-level price', es: 'Tijeras profesionales afiladas a precio de entrada', de: 'Rasierscharfe Profi-Scheren zum Einstiegspreis' },
    verdict: {
      en: 'Equinox delivers a sharp, reliable scissor under $20. Perfect for barbers just starting out or as a backup pair. Japanese stainless steel stays sharp through a full week of cuts.',
      es: 'Equinox ofrece tijeras afiladas y confiables por menos de $20. Perfectas para principiantes o como respaldo.',
      de: 'Equinox liefert scharfe, zuverlässige Scheren unter $20. Perfekt für Anfänger oder als Ersatz.',
    },
    pros: {
      en: ['Under $20 — best entry price', 'Japanese stainless steel', 'Sharp from box', 'Comfortable offset handle', 'Great as backup'],
      es: ['Menos de $20', 'Acero japonés', 'Afiladas desde la caja', 'Mango offset cómodo', 'Ideal como respaldo'],
      de: ['Unter $20', 'Japanischer Edelstahl', 'Scharf ab Werk', 'Komfortabler Griff', 'Gut als Ersatz'],
    },
    cons: {
      en: ['Not for heavy daily professional use', 'Needs frequent sharpening vs premium', 'No thinning shear included'],
      es: ['No para uso profesional diario intensivo', 'Afilado frecuente vs premium', 'Sin tijeras de entresacado'],
      de: ['Nicht für täglichen Intensiveinsatz', 'Häufigeres Nachschärfen', 'Keine Effilierschere'],
    },
    specs: { material: 'Japanese Stainless Steel', length: '6.5"', type: 'Cutting Shears', warranty: '1 year' },
    scoreBreakdown: [
      { label: { en: 'Value', es: 'Relación Precio', de: 'Preis-Leistung' }, score: 9.5 },
      { label: { en: 'Sharpness', es: 'Nitidez', de: 'Schärfe' }, score: 8.8 },
      { label: { en: 'Comfort', es: 'Comodidad', de: 'Komfort' }, score: 8.6 },
      { label: { en: 'Durability', es: 'Durabilidad', de: 'Haltbarkeit' }, score: 7.8 },
    ],
    bestFor: { en: 'Best Entry-Level Shears', es: 'Mejores Tijeras de Entrada', de: 'Beste Einsteiger-Scheren' },
    tags: ['6.5"', 'Japanese Steel', 'Budget', 'Entry Level'],
  },
  {
    id: 'kamisori-diablo', rank: 5, asin: 'B07P7R7N9M', category: 'scissors', tier: 'pro',
    brand: 'Kamisori', name: 'Diablo Barber Shears 6.0"', emoji: '😈',
    price: 49.99, score: 9.1, reviewCount: 1832, starRating: 4.6,
    badge: { en: 'Premium Japanese Steel', es: 'Acero Japonés Premium', de: 'Premium Japanischer Stahl' },
    tagline: { en: 'Japanese VG-10 shears built for professional barbers', es: 'Tijeras japonesas VG-10 para barberos profesionales', de: 'Japanische VG-10-Scheren für Profi-Barbiere' },
    verdict: {
      en: 'Kamisori brings Japanese scissor craftsmanship to the barbershop. VG-10 steel gives exceptional edge retention. Convex edge reduces drag for smooth, effortless cuts.',
      es: 'Kamisori trae artesanía japonesa a la barbería. VG-10 para retención de filo excepcional. Filo convexo para cortes suaves.',
      de: 'Kamisori bringt japanische Scherenschmiedekunst. VG-10 für außergewöhnliche Kantenhaltbarkeit. Konvexe Kante.',
    },
    pros: {
      en: ['VG-10 Japanese steel — superior edge retention', 'Convex edge for effortless cutting', 'Ergonomic crane handle', 'Leather case included', 'Professional craftsmanship'],
      es: ['VG-10 japonés — retención superior', 'Filo convexo sin esfuerzo', 'Mango grúa ergonómico', 'Estuche de cuero', 'Artesanía profesional'],
      de: ['VG-10 Japanstahl', 'Konvexe Kante', 'Ergonomischer Kranengriff', 'Ledertasche', 'Profi-Handwerk'],
    },
    cons: {
      en: ['Most expensive scissors ($49.99)', 'Convex edge harder to sharpen at home', '6.0" shorter than some prefer'],
      es: ['Las más caras ($49.99)', 'Filo convexo difícil de afilar en casa', '6.0" más cortas'],
      de: ['Teuerste Schere ($49,99)', 'Konvexe Kante schwer zu schärfen', '6,0" kürzer'],
    },
    specs: { material: 'VG-10 Japanese Steel', length: '6.0"', type: 'Convex Cutting Shears', warranty: '2 years' },
    scoreBreakdown: [
      { label: { en: 'Edge Retention', es: 'Retención Filo', de: 'Kantenhaltbarkeit' }, score: 9.6 },
      { label: { en: 'Sharpness', es: 'Nitidez', de: 'Schärfe' }, score: 9.5 },
      { label: { en: 'Comfort', es: 'Comodidad', de: 'Komfort' }, score: 9.2 },
      { label: { en: 'Value', es: 'Relación Precio', de: 'Preis-Leistung' }, score: 8.3 },
    ],
    bestFor: { en: 'Best Premium Japanese Shears', es: 'Mejores Tijeras Japonesas Premium', de: 'Beste Premium Japanische Scheren' },
    tags: ['6.0"', 'VG-10', 'Convex Edge', 'Japanese Craft'],
  },

  // ─────────────── RAZORS ───────────────
  {
    id: 'parker-srx-razor', rank: 1, asin: 'B01D8SFFVO', category: 'razors', tier: 'pro',
    brand: 'Parker', name: 'SRX All Stainless Barber Razor', emoji: '🪒',
    price: 22.00, score: 9.3, reviewCount: 6743, starRating: 4.7,
    badge: { en: "Editor's Choice", es: 'Elección del Editor', de: 'Empfehlung der Redaktion' },
    tagline: { en: 'All-stainless professional barber straight razor', es: 'Navaja barbera profesional de acero inoxidable', de: 'Professionelles Edelstahl-Rasiermesser' },
    verdict: {
      en: 'The Parker SRX is the gold standard for professional straight razor shaving. All-stainless construction. Precision blade gap for smoothest BBS results. Compatible with any standard DE blade.',
      es: 'El Parker SRX es el estándar de oro para navaja recta profesional. Construcción acero inoxidable. Compatible con cuchillas DE estándar.',
      de: 'Der Parker SRX ist der Goldstandard. Edelstahlkonstruktion. Kompatibel mit Standard-DE-Klingen.',
    },
    pros: {
      en: ['All-stainless construction', 'Precision blade gap', 'Standard DE compatible', 'Professional durability', 'Includes 5 blades'],
      es: ['Construcción acero inoxidable', 'Brecha de precisión', 'Compatible DE estándar', 'Durabilidad profesional', 'Incluye 5 cuchillas'],
      de: ['Komplett Edelstahl', 'Präzisionsklingenöffnung', 'Standard DE-kompatibel', 'Profi-Haltbarkeit', '5 Klingen inklusive'],
    },
    cons: {
      en: ['Learning curve for beginners', 'Requires regular blade changes', 'Not for sensitive skin without practice'],
      es: ['Curva de aprendizaje', 'Cambios de cuchilla regulares', 'No para piel sensible sin práctica'],
      de: ['Lernkurve', 'Regelmäßige Klingenwechsel', 'Nicht für empfindliche Haut ohne Übung'],
    },
    specs: { material: 'All Stainless Steel', blades: 'Standard DE blades', handle: 'Stainless grip', warranty: '1 year' },
    scoreBreakdown: [
      { label: { en: 'Shave Quality', es: 'Calidad Afeitado', de: 'Rasierqualität' }, score: 9.5 },
      { label: { en: 'Build Quality', es: 'Calidad Construcción', de: 'Verarbeitungsqualität' }, score: 9.3 },
      { label: { en: 'Value', es: 'Relación Precio', de: 'Preis-Leistung' }, score: 9.2 },
      { label: { en: 'Versatility', es: 'Versatilidad', de: 'Vielseitigkeit' }, score: 9.0 },
    ],
    bestFor: { en: 'Best Professional Straight Razor', es: 'Mejor Navaja Recta Profesional', de: 'Bestes professionelles Rasiermesser' },
    tags: ['Stainless Steel', 'DE Blades', 'Professional', 'BBS Shave'],
  },
  {
    id: 'utopia-care-razor', rank: 2, asin: 'B074WC87Y2', category: 'razors', tier: 'pro',
    brand: 'Utopia Care', name: 'Straight Razor + 100 Blades', emoji: '🪒',
    price: 17.00, score: 8.7, reviewCount: 15432, starRating: 4.5,
    badge: { en: 'Best Value', es: 'Mejor Precio', de: 'Bestes Preis-Leistung' },
    tagline: { en: 'Professional razor with 100 blades — best value starter kit', es: 'Navaja profesional con 100 cuchillas — mejor kit inicial', de: 'Profi-Rasiermesser mit 100 Klingen — bestes Starter-Kit' },
    verdict: {
      en: '100 blades included at $17 — best value straight razor kit on Amazon. Perfect starter kit for new barbers learning straight razor techniques.',
      es: '100 cuchillas a $17 — mejor kit en Amazon. Perfecto para nuevos barberos.',
      de: '100 Klingen für $17 — bestes Preis-Kit auf Amazon. Perfektes Starter-Kit.',
    },
    pros: {
      en: ['100 blades included', 'Stainless steel handle', 'Standard DE compatible', 'Perfect for beginners', 'High-volume shop value'],
      es: ['100 cuchillas incluidas', 'Mango acero inoxidable', 'Compatible DE estándar', 'Perfecto para principiantes', 'Valor alto volumen'],
      de: ['100 Klingen', 'Edelstahlgriff', 'Standard DE-kompatibel', 'Perfekt für Anfänger', 'Hochvolumen-Wert'],
    },
    cons: {
      en: ['Lower build quality than Parker', 'Lighter feel', 'Less refined grip'],
      es: ['Calidad inferior al Parker', 'Sensación más ligera', 'Agarre menos refinado'],
      de: ['Geringere Qualität als Parker', 'Leichteres Gefühl', 'Weniger raffinierter Griff'],
    },
    specs: { material: 'Stainless Steel', blades: '100 DE blades included', handle: 'Stainless steel', warranty: '1 year' },
    scoreBreakdown: [
      { label: { en: 'Value', es: 'Relación Precio', de: 'Preis-Leistung' }, score: 9.9 },
      { label: { en: 'Shave Quality', es: 'Calidad Afeitado', de: 'Rasierqualität' }, score: 8.4 },
      { label: { en: 'Build Quality', es: 'Calidad Construcción', de: 'Verarbeitungsqualität' }, score: 8.0 },
      { label: { en: 'Beginner Friendly', es: 'Apto Principiantes', de: 'Anfängerfreundlich' }, score: 9.0 },
    ],
    bestFor: { en: 'Best Value Starter Kit', es: 'Mejor Kit Inicial', de: 'Bestes Starter-Kit' },
    tags: ['100 Blades', 'Starter Kit', 'Best Value', 'DE Compatible'],
  },

  // ─────────────── CAPES ───────────────
  {
    id: 'barber-strong-cape', rank: 1, asin: 'B07WQJLW1Z', category: 'capes', tier: 'essential',
    brand: 'Barber Strong', name: 'The Barber Cape Hair-Repelling', emoji: '🦸',
    price: 29.00, score: 9.4, reviewCount: 7823, starRating: 4.8,
    badge: { en: "Editor's Choice", es: 'Elección del Editor', de: 'Empfehlung der Redaktion' },
    tagline: { en: 'The professional cape that actually repels hair clippings', es: 'La capa profesional que realmente repele el cabello cortado', de: 'Der professionelle Umhang der Haarschnipsel abstößt' },
    verdict: {
      en: 'Hair-repelling technology means clippings slide off instead of sticking. Professional barbers saved 2-3 minutes per client on cleanup. Heavyweight fabric holds shape after hundreds of washes.',
      es: 'La tecnología hace que los recortes se deslicen. Los barberos ahorran 2-3 minutos por cliente. La tela mantiene su forma.',
      de: 'Haarabweisungstechnologie lässt Schnipsel abgleiten. Barbiere sparten 2-3 Minuten. Schwerer Stoff formstabil.',
    },
    pros: {
      en: ['Proprietary hair-repelling technology', 'Heavyweight professional fabric', 'Adjustable neck closure', 'Holds shape after hundreds of washes', 'Multiple colors'],
      es: ['Tecnología de repelencia propietaria', 'Tela profesional pesada', 'Cierre ajustable', 'Mantiene forma', 'Múltiples colores'],
      de: ['Proprietäre Haarabweisung', 'Schwerer Stoff', 'Verstellbarer Verschluss', 'Formstabil', 'Mehrere Farben'],
    },
    cons: {
      en: ['More expensive ($29)', 'Heavier than lightweight options', 'Hand wash recommended'],
      es: ['Más caro ($29)', 'Más pesada que ligeras', 'Lavado a mano recomendado'],
      de: ['Teurer ($29)', 'Schwerer', 'Handwäsche empfohlen'],
    },
    specs: { material: 'Proprietary Hair-Repelling Fabric', size: 'One Size Fits All', waterproof: true, warranty: '1 year' },
    scoreBreakdown: [
      { label: { en: 'Hair Repelling', es: 'Repelencia', de: 'Haarabweisung' }, score: 9.8 },
      { label: { en: 'Durability', es: 'Durabilidad', de: 'Haltbarkeit' }, score: 9.5 },
      { label: { en: 'Comfort', es: 'Comodidad', de: 'Komfort' }, score: 9.0 },
      { label: { en: 'Value', es: 'Relación Precio', de: 'Preis-Leistung' }, score: 8.5 },
    ],
    bestFor: { en: 'Best Professional Cape', es: 'Mejor Capa Profesional', de: 'Bester Profi-Umhang' },
    tags: ['Hair-Repelling', 'Professional', 'Heavyweight', 'Washable'],
  },
  {
    id: 'yelegai-cape', rank: 2, asin: 'B07MKR8M9S', category: 'capes', tier: 'essential',
    brand: 'YELEGAI', name: 'Professional Cape + Neck Brush', emoji: '💈',
    price: 19.00, score: 8.9, reviewCount: 4521, starRating: 4.6,
    badge: { en: 'Best Value Bundle', es: 'Mejor Bundle', de: 'Bestes Bundle' },
    tagline: { en: 'Professional cape and neck brush combo at budget price', es: 'Combo capa y cepillo de cuello a precio económico', de: 'Profi-Umhang und Nackenbürste zum Budgetpreis' },
    verdict: {
      en: 'Professional cape AND neck brush for $19 is exceptional value. Waterproof nylon. Large 55"x63" covers clients of all sizes.',
      es: 'Capa y cepillo por $19 — valor excepcional. Nylon impermeable. 55"x63".',
      de: 'Umhang UND Nackenbürste für $19. Wasserdichtes Nylon. 55"x63".',
    },
    pros: {
      en: ['Waterproof nylon', '55"x63" coverage', 'Neck brush included', 'Easy snap closure', 'Machine washable'],
      es: ['Nylon impermeable', 'Cobertura 55"x63"', 'Cepillo de cuello incluido', 'Cierre fácil', 'Lavable a máquina'],
      de: ['Wasserdichtes Nylon', '55"x63"', 'Nackenbürste', 'Einfacher Verschluss', 'Maschinenwaschbar'],
    },
    cons: {
      en: ['No hair-repelling like premium', 'Lighter fabric', 'Less adjustable closure'],
      es: ['Sin repelencia premium', 'Tela más ligera', 'Cierre menos ajustable'],
      de: ['Keine Premium-Haarabweisung', 'Leichterer Stoff', 'Weniger verstellbar'],
    },
    specs: { material: 'Waterproof Nylon', size: '55" x 63"', waterproof: true, warranty: '1 year' },
    scoreBreakdown: [
      { label: { en: 'Value', es: 'Relación Precio', de: 'Preis-Leistung' }, score: 9.7 },
      { label: { en: 'Coverage', es: 'Cobertura', de: 'Abdeckung' }, score: 9.2 },
      { label: { en: 'Waterproofing', es: 'Impermeabilidad', de: 'Wasserdichtigkeit' }, score: 8.8 },
      { label: { en: 'Durability', es: 'Durabilidad', de: 'Haltbarkeit' }, score: 8.5 },
    ],
    bestFor: { en: 'Best Value Bundle', es: 'Mejor Bundle Económico', de: 'Bestes Preis-Bundle' },
    tags: ['Waterproof', 'Large Size', 'Neck Brush', 'Machine Washable', 'Bundle'],
  },

  // ─────────────── STYLING ───────────────
  {
    id: 'suavecito-pomade-firme', rank: 1, asin: 'B00BFJGJLE', category: 'styling', tier: 'essential',
    brand: 'Suavecito', name: 'Pomade Firme Strong Hold', emoji: '💈',
    price: 15.00, score: 9.5, reviewCount: 67432, starRating: 4.7,
    badge: { en: "Barbers' Favorite", es: 'Favorito de los Barberos', de: 'Barbier-Favorit' },
    tagline: { en: 'The water-based pomade trusted by professional barbers worldwide', es: 'La pomada a base de agua de barberos profesionales', de: 'Das wasserbasierte Pomade von Profi-Barbieren weltweit' },
    verdict: {
      en: 'Water-based formula washes out cleanly. Strong hold lasts all day without hardening. 67,000+ Amazon reviews confirm its legendary status.',
      es: 'Fórmula a base de agua se lava limpiamente. Agarre fuerte sin endurecerse. 67,000+ reseñas confirman su estatus legendario.',
      de: 'Wasserbasierte Formel wäscht rückstandsfrei. Starker Halt ohne Erhärten. 67.000+ Bewertungen bestätigen legendären Status.',
    },
    pros: {
      en: ['Water-based — washes cleanly', 'Strong hold without hardening', 'Light neutral scent', 'All hair types', '67,000+ reviews at 4.7★'],
      es: ['A base de agua', 'Agarre fuerte sin endurecer', 'Aroma neutro', 'Todos los tipos', '67,000+ reseñas 4.7★'],
      de: ['Wasserbasiert', 'Starker Halt', 'Neutraler Duft', 'Alle Haartypen', '67.000+ Bewertungen 4,7★'],
    },
    cons: {
      en: ['Heavy on fine hair', 'Scent too strong for some', 'Not for natural/curly styles'],
      es: ['Pesado en fino', 'Aroma fuerte para algunos', 'No para estilos naturales'],
      de: ['Schwer bei feinem Haar', 'Duft zu stark', 'Nicht für Naturlocken'],
    },
    specs: { hold: 'Strong', shine: 'Medium', finish: 'Semi-Matte', volume: '4 oz' },
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
    id: 'reuzel-extreme-matte', rank: 2, asin: 'B01N4NDTU7', category: 'styling', tier: 'essential',
    brand: 'REUZEL', name: 'Extreme Hold Matte Pomade', emoji: '🟤',
    price: 24.00, score: 9.2, reviewCount: 12341, starRating: 4.6,
    badge: { en: 'Premium Pick', es: 'Elección Premium', de: 'Premium-Wahl' },
    tagline: { en: 'Dutch barbershop formula for extreme control without shine', es: 'Fórmula holandesa para control extremo sin brillo', de: 'Niederländische Formel für extreme Kontrolle ohne Glanz' },
    verdict: {
      en: 'Extreme hold with zero shine. Fiber-like texture gives natural movement despite strong hold. Works best on thick, textured hair.',
      es: 'Agarre extremo con cero brillo. Textura tipo fibra da movimiento natural. Mejor para cabello grueso.',
      de: 'Extremer Halt null Glanz. Faserähnliche Textur. Bester für dickes Haar.',
    },
    pros: {
      en: ['Extreme hold zero shine', 'Natural movement', 'Dutch pedigree', 'Thick/textured specialist', '24+ hour hold'],
      es: ['Agarre extremo cero brillo', 'Movimiento natural', 'Pedigrí holandés', 'Especialista cabello grueso', '24+ horas'],
      de: ['Extremer Halt null Glanz', 'Natürliche Bewegung', 'Niederländisches Erbe', 'Für dickes Haar', '24+ Stunden'],
    },
    cons: {
      en: ['More expensive ($24)', 'Hard to distribute in thick hair', 'Difficult to wash out fully'],
      es: ['Más caro ($24)', 'Difícil de distribuir', 'Difícil de lavar completamente'],
      de: ['Teurer ($24)', 'Schwer zu verteilen', 'Schwer auszuwaschen'],
    },
    specs: { hold: 'Extreme', shine: 'None', finish: 'Matte', volume: '3.55 oz' },
    scoreBreakdown: [
      { label: { en: 'Hold Strength', es: 'Fuerza de Agarre', de: 'Haltestärke' }, score: 9.8 },
      { label: { en: 'Matte Finish', es: 'Acabado Mate', de: 'Mattes Finish' }, score: 9.9 },
      { label: { en: 'Longevity', es: 'Durabilidad', de: 'Langlebigkeit' }, score: 9.3 },
      { label: { en: 'Value', es: 'Relación Precio', de: 'Preis-Leistung' }, score: 8.2 },
    ],
    bestFor: { en: 'Best Matte Finish Pomade', es: 'Mejor Pomada Mate', de: 'Bestes Mattes Pomade' },
    tags: ['Extreme Hold', 'Matte', 'Zero Shine', 'Dutch Formula'],
  },

  // ─────────────── SHAVING CARE ───────────────
  {
    id: 'clubman-aftershave-16oz', rank: 1, asin: 'B00004S075', category: 'shaving-care', tier: 'essential',
    brand: 'Clubman', name: 'After Shave Spray 16oz Classic', emoji: '🧴',
    price: 12.00, score: 9.1, reviewCount: 18432, starRating: 4.7,
    badge: { en: 'Classic Choice', es: 'Elección Clásica', de: 'Klassische Wahl' },
    tagline: { en: 'The iconic barbershop aftershave since 1870', es: 'La loción aftershave icónica desde 1870', de: 'Das ikonische Barbershop-Aftershave seit 1870' },
    verdict: {
      en: 'Clubman since 1870. Antiseptic formula closes pores and prevents irritation. 16oz excellent value for busy shops.',
      es: 'Clubman desde 1870. Fórmula antiséptica cierra poros. 16oz excelente valor.',
      de: 'Clubman seit 1870. Antiseptische Formel. 16oz hervorragender Wert.',
    },
    pros: {
      en: ['Iconic classic scent', 'Antiseptic formula', '16oz excellent value', 'Spray application', '150+ years proven'],
      es: ['Aroma clásico icónico', 'Fórmula antiséptica', '16oz excelente valor', 'Spray', '150+ años probado'],
      de: ['Klassischer Duft', 'Antiseptisch', '16oz Wert', 'Spray', '150+ Jahre bewährt'],
    },
    cons: {
      en: ['Strong scent not for all', 'Alcohol — drying for sensitive skin', 'Classic scent polarizing'],
      es: ['Aroma fuerte no para todos', 'Alcohol seca piel sensible', 'Aroma polarizante'],
      de: ['Starker Duft', 'Alkohol trocknend', 'Polarisierender Duft'],
    },
    specs: { scent: 'Classic Clubman', volume: '16 oz', type: 'Aftershave Spray' },
    scoreBreakdown: [
      { label: { en: 'Scent Quality', es: 'Calidad Aroma', de: 'Duftqualität' }, score: 9.0 },
      { label: { en: 'Antiseptic Effect', es: 'Efecto Antiséptico', de: 'Antiseptische Wirkung' }, score: 9.3 },
      { label: { en: 'Value', es: 'Relación Precio', de: 'Preis-Leistung' }, score: 9.7 },
      { label: { en: 'Client Comfort', es: 'Comodidad Cliente', de: 'Kundenkomfort' }, score: 8.5 },
    ],
    bestFor: { en: 'Best Classic Aftershave', es: 'Mejor Aftershave Clásico', de: 'Bestes klassisches Aftershave' },
    tags: ['Classic Scent', '16oz', 'Antiseptic', 'Professional'],
  },
  {
    id: 'proraso-aftershave-eucalyptus', rank: 2, asin: 'B001G2QLAM', category: 'shaving-care', tier: 'essential',
    brand: 'Proraso', name: 'Aftershave Lotion Eucalyptus & Menthol', emoji: '🌿',
    price: 14.00, score: 9.0, reviewCount: 8921, starRating: 4.6,
    badge: { en: 'Premium Skin Care', es: 'Cuidado Premium', de: 'Premium-Hautpflege' },
    tagline: { en: 'Italian barbershop formula for sensitive skin', es: 'Fórmula italiana para piel sensible', de: 'Italienische Formel für empfindliche Haut' },
    verdict: {
      en: 'Eucalyptus and menthol soothes razor burn immediately. Less alcohol than Clubman — ideal for sensitive skin clients.',
      es: 'Eucalipto y mentol alivia el ardor inmediatamente. Menos alcohol que Clubman — ideal para piel sensible.',
      de: 'Eukalyptus und Menthol beruhigt Rasurbrand sofort. Weniger Alkohol als Clubman.',
    },
    pros: {
      en: ['Eucalyptus + menthol soothes', 'Less alcohol', 'Fresh universal scent', 'Sensitive skin friendly', 'Italian tradition since 1948'],
      es: ['Eucalipto + mentol alivia', 'Menos alcohol', 'Aroma fresco', 'Piel sensible', 'Tradición italiana 1948'],
      de: ['Eukalyptus + Menthol', 'Weniger Alkohol', 'Frischer Duft', 'Empfindliche Haut', 'Seit 1948'],
    },
    cons: {
      en: ['More expensive than Clubman', 'Smaller bottle (100ml)', 'Menthol too intense for some'],
      es: ['Más caro que Clubman', 'Botella pequeña (100ml)', 'Mentol muy intenso para algunos'],
      de: ['Teurer als Clubman', 'Kleinere Flasche (100ml)', 'Menthol zu intensiv'],
    },
    specs: { scent: 'Eucalyptus & Menthol', volume: '100 ml', type: 'Aftershave Lotion' },
    scoreBreakdown: [
      { label: { en: 'Skin Soothing', es: 'Alivio Piel', de: 'Hautberuhigung' }, score: 9.5 },
      { label: { en: 'Scent Quality', es: 'Calidad Aroma', de: 'Duftqualität' }, score: 9.2 },
      { label: { en: 'Sensitive Skin', es: 'Piel Sensible', de: 'Empfindliche Haut' }, score: 9.4 },
      { label: { en: 'Value', es: 'Relación Precio', de: 'Preis-Leistung' }, score: 8.3 },
    ],
    bestFor: { en: 'Best for Sensitive Skin', es: 'Mejor para Piel Sensible', de: 'Bestes für empfindliche Haut' },
    tags: ['Eucalyptus', 'Menthol', 'Sensitive Skin', 'Italian Formula'],
  },

  // ─────────────── ACCESSORIES ───────────────
  {
    id: 'wahl-blade-oil', rank: 1, asin: 'B0000DDCU7', category: 'accessories', tier: 'essential',
    brand: 'Wahl', name: 'Clipper Blade Lubricating Oil 4oz', emoji: '🫙',
    price: 6.00, score: 9.5, reviewCount: 34521, starRating: 4.8,
    badge: { en: 'Essential Tool', es: 'Herramienta Esencial', de: 'Unverzichtbares Werkzeug' },
    tagline: { en: 'The #1 clipper blade oil trusted by professional barbers', es: 'El aceite lubricante #1 para barberos profesionales', de: 'Das meistvertraute Klingenöl von Profi-Barbieren' },
    verdict: {
      en: 'A few drops every 2-3 clients extends blade life from months to years. Prevents rust, reduces heat, keeps cutting speed consistent.',
      es: 'Unas gotas cada 2-3 clientes extiende la vida de la cuchilla de meses a años. Previene oxidación, reduce calor.',
      de: 'Ein paar Tropfen alle 2-3 Kunden verlängert Klingenlebensdauer. Verhindert Rost, reduziert Wärme.',
    },
    pros: {
      en: ['Extends blade life significantly', 'Prevents rust', 'Reduces heat', 'All brands compatible', '34,000+ reviews at 4.8★'],
      es: ['Extiende vida de cuchilla', 'Previene oxidación', 'Reduce calor', 'Todas las marcas', '34,000+ reseñas 4.8★'],
      de: ['Verlängert Klingenlebensdauer', 'Verhindert Rost', 'Reduziert Wärme', 'Alle Marken', '34.000+ Bewertungen 4,8★'],
    },
    cons: {
      en: ['Apply every 2-3 clients', 'Can drip if over-applied', 'Small bottle for high volume'],
      es: ['Aplicar cada 2-3 clientes', 'Puede gotear', 'Botella pequeña para alto volumen'],
      de: ['Alle 2-3 Kunden auftragen', 'Kann tropfen', 'Kleine Flasche'],
    },
    specs: { compatibility: 'All major clipper brands', quantity: '4 oz', type: 'Mineral Oil' },
    scoreBreakdown: [
      { label: { en: 'Effectiveness', es: 'Efectividad', de: 'Effektivität' }, score: 9.7 },
      { label: { en: 'Value', es: 'Relación Precio', de: 'Preis-Leistung' }, score: 9.9 },
      { label: { en: 'Compatibility', es: 'Compatibilidad', de: 'Kompatibilität' }, score: 9.5 },
      { label: { en: 'Ease of Use', es: 'Facilidad de Uso', de: 'Benutzerfreundlichkeit' }, score: 9.3 },
    ],
    bestFor: { en: 'Best Essential Clipper Accessory', es: 'Mejor Accesorio Esencial', de: 'Bestes wesentliches Zubehör' },
    tags: ['Blade Oil', 'Essential', 'Universal', 'Rust Prevention'],
  },
  {
    id: 'vallnei-metal-guards', rank: 2, asin: 'B07CXGR3W8', category: 'accessories', tier: 'essential',
    brand: 'VALLNEI', name: 'Metal Fade Combs for Wahl #0.5-#1.5', emoji: '🔧',
    price: 14.00, score: 9.0, reviewCount: 3421, starRating: 4.6,
    badge: { en: 'Fade Pro Essential', es: 'Esencial Fade Pro', de: 'Fade-Pro-Essential' },
    tagline: { en: 'Metal fade guards for precise blending transitions', es: 'Guardias de metal para transiciones de fundido precisas', de: 'Metall-Fade-Kämme für präzise Übergänge' },
    verdict: {
      en: 'Metal fade combs fill the gap plastic guards cannot. The #0.5 and #1 sizes give perfect blend between zero and a 1. Wahl Magic Clip compatible without modification.',
      es: 'Los peines de metal llenan el vacío que los de plástico no pueden. Compatibles con Wahl Magic Clip sin modificación.',
      de: 'Metall-Fade-Kämme füllen die Lücke die Kunststoff nicht kann. Wahl Magic Clip-kompatibel.',
    },
    pros: {
      en: ['Metal — more durable than plastic', '#0.5 and #1 for precise fading', 'Wahl Magic Clip compatible', 'Perfect high-skin transitions', 'Better heat resistance'],
      es: ['Metal más durable que plástico', '#0.5 y #1 precisos', 'Compatible Magic Clip', 'Transiciones perfectas high-skin', 'Mejor resistencia al calor'],
      de: ['Metall langlebiger als Kunststoff', '#0,5 und #1 präzise', 'Magic Clip kompatibel', 'Perfekte High-Skin-Übergänge', 'Bessere Wärmebeständigkeit'],
    },
    cons: {
      en: ['Only Wahl compatible', 'Limited range (#0.5-#1.5)', 'More expensive per guard than plastic'],
      es: ['Solo Wahl', 'Rango limitado', 'Más caro por guardia'],
      de: ['Nur Wahl', 'Begrenzter Bereich', 'Teurer pro Stück'],
    },
    specs: { compatibility: 'Wahl Magic Clip, 5-Star Senior', quantity: '#0.5, #1, #1.5', type: 'Metal Clipper Guards', warranty: '1 year' },
    scoreBreakdown: [
      { label: { en: 'Fade Precision', es: 'Precisión Fade', de: 'Fade-Präzision' }, score: 9.5 },
      { label: { en: 'Durability', es: 'Durabilidad', de: 'Haltbarkeit' }, score: 9.2 },
      { label: { en: 'Compatibility', es: 'Compatibilidad', de: 'Kompatibilität' }, score: 8.5 },
      { label: { en: 'Value', es: 'Relación Precio', de: 'Preis-Leistung' }, score: 8.8 },
    ],
    bestFor: { en: 'Best Metal Fade Guards', es: 'Mejores Guardias Metal Fade', de: 'Beste Metall-Fade-Kämme' },
    tags: ['Metal Guards', 'Wahl Compatible', 'Fade Precision', 'High-Skin Fade'],
  },

  // ─────────────── BAGS ───────────────
  {
    id: 'yueieoun-barber-backpack', rank: 1, asin: 'B07WB3GG8Y', category: 'bags', tier: 'essential',
    brand: 'Yueieoun', name: 'Barber Backpack 16.8" with Detachable Tray', emoji: '💼',
    price: 49.00, score: 9.1, reviewCount: 2341, starRating: 4.5,
    badge: { en: "Editor's Choice", es: 'Elección del Editor', de: 'Empfehlung der Redaktion' },
    tagline: { en: 'The professional barber backpack with detachable tool tray', es: 'La mochila de barbero profesional con bandeja extraíble', de: 'Der professionelle Rucksack mit abnehmbarem Fach' },
    verdict: {
      en: 'The most thoughtfully designed barber bag tested. Detachable tray is the killer feature — snap it off at the chair for instant tool access. 16.8" fits full-size clippers upright.',
      es: 'La mochila más cuidadosamente diseñada. La bandeja desmontable es la característica asesina. 16.8" para cortadoras de tamaño completo.',
      de: 'Die sorgfältigste Barbier-Tasche. Abnehmbares Fach ist das Killer-Feature. 16,8" für Vollflächen-Clipper aufrecht.',
    },
    pros: {
      en: ['Detachable tool tray', '16.8" fits full-size clippers upright', 'Reinforced base', '15+ compartments', 'Padded back panel'],
      es: ['Bandeja desmontable', '16.8" para cortadoras verticales', 'Base reforzada', '15+ compartimentos', 'Panel trasero acolchado'],
      de: ['Abnehmbares Fach', '16,8" für Clipper aufrecht', 'Verstärkte Basis', '15+ Fächer', 'Gepolstertes Rückenteil'],
    },
    cons: {
      en: ['More expensive ($49)', 'Tray takes practice to reattach', 'Heavy when fully loaded'],
      es: ['Más caro ($49)', 'Bandeja requiere práctica', 'Pesada cuando cargada'],
      de: ['Teurer ($49)', 'Fach braucht Übung', 'Schwer bei voller Beladung'],
    },
    specs: { dimensions: '16.8" x 12" x 6"', compartments: '15+ compartments + detachable tray', material: 'Water-resistant nylon', warranty: '1 year' },
    scoreBreakdown: [
      { label: { en: 'Organization', es: 'Organización', de: 'Organisation' }, score: 9.5 },
      { label: { en: 'Durability', es: 'Durabilidad', de: 'Haltbarkeit' }, score: 9.0 },
      { label: { en: 'Design', es: 'Diseño', de: 'Design' }, score: 9.3 },
      { label: { en: 'Value', es: 'Relación Precio', de: 'Preis-Leistung' }, score: 8.5 },
    ],
    bestFor: { en: 'Best Barber Bag', es: 'Mejor Bolsa de Barbero', de: 'Beste Barbier-Tasche' },
    tags: ['Backpack', 'Detachable Tray', '16.8"', 'Professional'],
  },
]

// Helper: get products by category
export function getProductsByCategory(category: Category): Product[] {
  return PRODUCTS.filter(p => p.category === category).sort((a, b) => a.rank - b.rank)
}

// SEO helpers
export const SEO_DEFAULTS = {
  siteName: 'BarberSupplyHub',
  twitterHandle: '@barbersupplyhub',
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

// Helper: get pro-tier products only (clippers, trimmers, shavers, scissors, razors)
export function getProProducts(): Product[] {
  return PRODUCTS.filter(p => p.tier === 'pro').sort((a, b) => a.rank - b.rank)
}

// Helper: get essential-tier products (supplies, accessories, care)
export function getEssentialProducts(): Product[] {
  return PRODUCTS.filter(p => p.tier === 'essential').sort((a, b) => a.rank - b.rank)
}

// Pro categories — shown in main nav and SEO priority pages
export const PRO_CATEGORIES: Category[] = ['clippers', 'trimmers', 'shavers', 'scissors', 'razors']

// Essential categories — shown as "Complete Your Kit" secondary section
export const ESSENTIAL_CATEGORIES: Category[] = ['capes', 'styling', 'shaving-care', 'accessories', 'bags']
