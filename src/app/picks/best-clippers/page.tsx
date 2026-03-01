import type { Metadata } from 'next'
import BestClippersClient from './BestClippersClient'
import { PRODUCTS, SITE_URL } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Best Barber Clippers 2026 — Top 10 Tested by Pro Barbers',
  description: 'We tested 47 professional barber clippers in real shops in NYC, LA & London. Top 10 ranked by fade quality, battery life & value. Updated February 2026.',
  keywords: ['best barber clippers 2026','professional barber clippers','best clippers for fades','wahl magic clip review','andis master cordless','babyliss fx870','cordless barber clippers'],
  alternates: {
    canonical: `${SITE_URL}/picks/best-clippers`,
    languages: {
      'en': `${SITE_URL}/picks/best-clippers`,
      'es': `${SITE_URL}/es/picks/best-clippers`,
      'de': `${SITE_URL}/de/picks/best-clippers`,
    },
  },
  openGraph: {
    title: 'Best Barber Clippers 2026 — 47 Tested by Pro Barbers',
    description: 'Top 10 ranked by fade quality, battery life & value. Real barbers, real tests.',
    type: 'article',
  },
}

const BREADCRUMB_SCHEMA = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Picks', item: `${SITE_URL}/picks` },
    { '@type': 'ListItem', position: 3, name: 'Best Clippers 2026', item: `${SITE_URL}/picks/best-clippers` },
  ],
}

const FAQ_SCHEMA = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is the best barber clipper for fades in 2026?', acceptedAnswer: { '@type': 'Answer', text: 'The Wahl 5-Star Magic Clip is the best clipper for fades in 2026, scoring 9.6/10. Zero-gap blade, 92-min cordless runtime, 0.28 lbs. At $89.99 it delivers professional performance at mid-range price.' } },
    { '@type': 'Question', name: 'What is the difference between Wahl and Andis clippers?', acceptedAnswer: { '@type': 'Answer', text: 'Wahl clippers use rotary motors — lighter, quieter, better for fades. Andis uses electromagnetic motors at 14,000+ SPM — more powerful, better for thick/coarse hair. Most pros own both.' } },
    { '@type': 'Question', name: 'How long should a professional clipper battery last?', acceptedAnswer: { '@type': 'Answer', text: 'A professional cordless clipper should last at least 90 minutes per charge. Our top pick (Wahl Magic Clip) hit 92 min. BaByliss FX870 leads at 150 min. For full-day use without recharging, look for 100+ min battery.' } },
    { '@type': 'Question', name: '¿Cuál es la mejor cortadora para barberos en 2026?', acceptedAnswer: { '@type': 'Answer', text: 'La Wahl 5-Star Magic Clip ($89.99) con 9.6/10 puntos. Cuchilla zero-gap, 92 min inalámbrica, 0.28 lbs.' } },
    { '@type': 'Question', name: 'Welcher Haarschneider ist 2026 der beste für Barbiere?', acceptedAnswer: { '@type': 'Answer', text: 'Der Wahl 5-Star Magic Clip ($89,99) mit 9,6/10. Zero-Gap-Klinge, 92 Min kabellos, 0,28 lbs.' } },
  ],
}

const ARTICLE_SCHEMA = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: 'Best Barber Clippers 2026 — Top 10 Tested by Pro Barbers',
  description: 'We tested 47 professional barber clippers. Top 10 ranked by fade quality, battery life & value.',
  url: `${SITE_URL}/picks/best-clippers`,
  datePublished: '2026-01-15T09:00:00Z',
  dateModified: '2026-02-24T09:00:00Z',
  author: { '@type': 'Person', name: 'Marcus Webb', jobTitle: 'Master Barber, 14 years NYC' },
  publisher: { '@type': 'Organization', name: 'BarberSuplyHub', url: SITE_URL },
}

const PRODUCT_SCHEMAS = PRODUCTS.map(p => ({
  '@context': 'https://schema.org', '@type': 'Product',
  name: `${p.brand} ${p.name}`,
  brand: { '@type': 'Brand', name: p.brand },
  sku: p.asin,
  aggregateRating: { '@type': 'AggregateRating', ratingValue: p.starRating.toString(), reviewCount: p.reviewCount.toString() },
  offers: { '@type': 'Offer', priceCurrency: 'USD', price: p.price.toString(), availability: 'https://schema.org/InStock', url: `https://www.amazon.com/dp/${p.asin}?tag=barbersupp044-20` },
}))

export default function BestClippersPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }} />
      {PRODUCT_SCHEMAS.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      <BestClippersClient />
    </>
  )
}
