import type { Metadata } from 'next'
import ShaversClient from './ShaversClient'
import { SITE_URL } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Best Barber Shavers 2026 — Professional Foil Shavers Tested',
  description: 'Top professional foil shavers for barbers. Andis ProFoil vs BaByliss FoilFX02 — tested for skin-close finish, motor power & durability. Updated 2026.',
  keywords: ['best barber shaver 2026','professional foil shaver','andis profoil','babyliss foilfx02','barber electric shaver','skin fade shaver'],
  alternates: {
    canonical: `${SITE_URL}/picks/shavers`,
    languages: {
      'en': `${SITE_URL}/picks/shavers`,
      'es': `${SITE_URL}/es/picks/shavers`,
      'de': `${SITE_URL}/de/picks/shavers`,
    },
  },
  openGraph: {
    title: 'Best Barber Shavers 2026 — Foil Shavers for Skin Fades',
    description: 'Andis ProFoil vs BaByliss FoilFX02. Tested by pro barbers for skin-close finish.',
    type: 'article',
  },
}

const BREADCRUMB_SCHEMA = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Picks', item: `${SITE_URL}/picks` },
    { '@type': 'ListItem', position: 3, name: 'Best Shavers 2026', item: `${SITE_URL}/picks/shavers` },
  ],
}

const FAQ_SCHEMA = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the best foil shaver for barbers in 2026?',
      acceptedAnswer: { '@type': 'Answer', text: 'The Andis ProFoil ($59.99) is our top pick for professional barbers. Hypoallergenic gold titanium foil, powerful motor, ideal for skin-close finishes on fades and lineups.' }
    },
    {
      '@type': 'Question',
      name: 'Andis ProFoil vs BaByliss FoilFX02 — which is better?',
      acceptedAnswer: { '@type': 'Answer', text: 'Andis ProFoil is better value at $59.99 with proven durability. BaByliss FoilFX02 at $79.99 offers a quieter motor and slightly closer shave. Both are industry standard.' }
    },
    {
      '@type': 'Question',
      name: 'Do I need a foil shaver as a barber?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes — for skin fades and clean necklines, a foil shaver finishes what clippers cannot. The flat foil head follows skin contours for a razor-close result without irritation.' }
    },
  ],
}

const ARTICLE_SCHEMA = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: 'Best Barber Shavers 2026 — Professional Foil Shavers Tested',
  description: 'Top professional foil shavers for barbers. Tested for skin-close finish, motor power & durability.',
  url: `${SITE_URL}/picks/shavers`,
  datePublished: '2026-01-20T09:00:00Z',
  dateModified: '2026-03-01T09:00:00Z',
  author: { '@type': 'Person', name: 'Marcus Webb', jobTitle: 'Master Barber, 14 years NYC' },
  publisher: { '@type': 'Organization', name: 'BarberSupplyHub', url: SITE_URL },
}

export default function ShaversPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }} />
      <ShaversClient />
    </>
  )
}