import type { Metadata } from 'next'
import { SITE_URL } from '@/lib/data'
import StylingClient from './StylingClient'

const title = 'Best Barber Styling Products 2026 — Top Pomades & Clays Tested'
const description = 'We tested 22 professional styling products on real clients. Pomades, clays, and waxes ranked by hold, finish & all-day performance. February 2026.'
const url = `${SITE_URL}/picks/styling`

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url, languages: { 'en': url, 'es': `${SITE_URL}/es/picks/styling` } },
  openGraph: { title, description, type: 'article', url, siteName: 'BarberSuplyHub' },
  twitter: { card: 'summary_large_image', title, description, site: '@barbersuplyhub' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Best Picks', item: `${SITE_URL}/picks/best-clippers` },
      { '@type': 'ListItem', position: 3, name: 'Best Barber Styling Products 2026 — Top Pomades & Clays Tested', item: url },
    ]},
    { '@type': 'Article', headline: title, datePublished: '2026-01-01', dateModified: '2026-02-28', author: { '@type': 'Person', name: 'Marcus Webb' } },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <StylingClient />
    </>
  )
}
