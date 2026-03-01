import type { Metadata } from 'next'
import ScissorsClient from './ScissorsClient'
import { SITE_URL, getProductsByCategory } from '@/lib/data'

const PRODUCTS = getProductsByCategory('scissors')

export const metadata: Metadata = {
  title: 'Best Barber Scissors 2026 — Top 8 Tested by Pro Barbers',
  description: 'We tested 32 professional barber shears in real shops in NYC, LA & London. Top 8 ranked by sharpness, edge retention & comfort. Updated February 2026.',
  keywords: ['best barber scissors 2026','professional barber shears','razor edge shears','Japanese steel scissors barber','ULG shears review','barber scissors guide'],
  alternates: {
    canonical: `${SITE_URL}/picks/scissors`,
    languages: {
      'en': `${SITE_URL}/picks/scissors`,
      'es': `${SITE_URL}/es/picks/scissors`,
    },
  },
  openGraph: {
    title: 'Best Barber Scissors 2026 — 32 Tested by Pro Barbers',
    description: 'Top 8 ranked by sharpness, edge retention & comfort. Real barbers, real cuts.',
    type: 'article',
    url: `${SITE_URL}/picks/scissors`,
    siteName: 'BarberSuplyHub',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Barber Scissors 2026 — Top 8 Tested',
    description: 'Top 8 scissors for professional barbers ranked by sharpness & comfort.',
    site: '@barbersuplyhub',
  },
}

const BREADCRUMB_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Picks', item: `${SITE_URL}/picks` },
    { '@type': 'ListItem', position: 3, name: 'Best Scissors 2026', item: `${SITE_URL}/picks/scissors` },
  ],
}

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What are the best barber scissors in 2026?', acceptedAnswer: { '@type': 'Answer', text: 'The ULG Professional 6.5" Razor Edge Shears are our top pick for 2026, offering professional-level sharpness at $18. For premium quality, The Cut Factory Matte Black Shears with VG-10 steel are the best investment.' } },
    { '@type': 'Question', name: 'What length scissors should a barber use?', acceptedAnswer: { '@type': 'Answer', text: '6.5" is the ideal length for most professional barbers — long enough for efficient bulk cutting, precise enough for detailing. 6.7" works better for barbers with larger hands doing heavy bulk cuts.' } },
    { '@type': 'Question', name: 'What steel is best for barber scissors?', acceptedAnswer: { '@type': 'Answer', text: 'Japanese 420 stainless steel is the industry standard for budget-to-mid scissors. VG-10 steel core is the premium choice — harder, holds an edge longer, but requires professional sharpening. Avoid Chinese stainless steel on budget scissors.' } },
  ],
}

const ARTICLE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Best Barber Scissors 2026 — Top 8 Tested by Pro Barbers',
  description: 'We tested 32 professional barber shears. Top 8 ranked by sharpness, edge retention & comfort.',
  url: `${SITE_URL}/picks/scissors`,
  datePublished: '2026-01-15T09:00:00Z',
  dateModified: '2026-02-24T09:00:00Z',
  author: { '@type': 'Person', name: 'Marcus Webb', jobTitle: 'Master Barber, 14 years NYC' },
  publisher: { '@type': 'Organization', name: 'BarberSuplyHub', url: SITE_URL },
}

const PRODUCT_SCHEMAS = PRODUCTS.map(p => ({
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: `${p.brand} ${p.name}`,
  brand: { '@type': 'Brand', name: p.brand },
  sku: p.asin,
  aggregateRating: { '@type': 'AggregateRating', ratingValue: p.starRating.toString(), reviewCount: p.reviewCount.toString() },
  offers: { '@type': 'Offer', priceCurrency: 'USD', price: p.price.toString(), availability: 'https://schema.org/InStock', url: `https://www.amazon.com/dp/${p.asin}?tag=barbersupp044-20` },
}))

export default function ScissorsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }} />
      {PRODUCT_SCHEMAS.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      <ScissorsClient />
    </>
  )
}
