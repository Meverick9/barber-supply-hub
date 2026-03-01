import type { Metadata } from 'next'
import { SITE_URL } from '@/lib/data'
import RazorsClient from './RazorsClient'

const title = 'Best Barber Razors 2026 — Top Straight Razors & Shavettes Tested'
const description = 'We tested 18 professional barber razors and shavettes in real barbershops. Top picks ranked by blade precision, client comfort & value. Updated February 2026.'
const url = `${SITE_URL}/picks/razors`

export const metadata: Metadata = {
  title,
  description,
  keywords: ['best barber razor 2026','professional shavette','Parker SRX review','straight razor barber','barber razor guide','half DE blade razor'],
  alternates: { canonical: url, languages: { 'en': url, 'es': `${SITE_URL}/es/picks/razors` } },
  openGraph: { title, description, type: 'article', url, siteName: 'BarberSuplyHub' },
  twitter: { card: 'summary_large_image', title, description, site: '@barbersuplyhub' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Picks', item: `${SITE_URL}/picks/best-clippers` },
      { '@type': 'ListItem', position: 3, name: 'Best Razors 2026', item: url },
    ]},
    { '@type': 'Article', headline: title, datePublished: '2026-01-01', dateModified: '2026-02-28', author: { '@type': 'Person', name: 'Marcus Webb' } },
  ],
}

export default function RazorsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <RazorsClient />
    </>
  )
}
