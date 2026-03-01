import type { Metadata } from 'next'
import BaldFadeClient from './BaldFadeClient'
import { SITE_URL } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Best Clippers for Bald Fades 2026 — Wahl Balding & More Tested',
  description: 'Top clippers for bald fades and head shaves tested by pro barbers. Wahl 5-Star Balding #8110 review, BaByliss GoldFX, and more. Updated February 2026.',
  keywords: ['best clipper bald fade 2026','wahl balding clipper 8110 review','best clipper head shave barber','bald fade clipper professional','skin fade clipper test'],
  alternates: {
    canonical: `${SITE_URL}/picks/bald-fade-clippers`,
    languages: {
      'en': `${SITE_URL}/picks/bald-fade-clippers`,
      'es': `${SITE_URL}/es/picks/bald-fade-clippers`,
      'de': `${SITE_URL}/de/picks/bald-fade-clippers`,
    },
  },
  openGraph: {
    title: 'Best Clippers for Bald Fades 2026 — Pro Barber Tested',
    description: 'Wahl Balding #8110 vs BaByliss GoldFX — tested in real barbershops.',
    type: 'article',
  },
}

const BREADCRUMB = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Picks', item: `${SITE_URL}/picks` },
    { '@type': 'ListItem', position: 3, name: 'Best Bald Fade Clippers', item: `${SITE_URL}/picks/bald-fade-clippers` },
  ],
}

const FAQ_SCHEMA = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is the best clipper for bald fades in 2026?', acceptedAnswer: { '@type': 'Answer', text: 'The Wahl 5-Star Balding Clipper #8110 ($44.99, 9.0/10) is the best clipper for bald fades. V5000+ electromagnetic motor runs at twice the speed of pivot motors for surgically close cuts. 18,000+ Amazon reviews at 4.8 stars. Every barbershop should own one.' } },
    { '@type': 'Question', name: '¿Cuál es la mejor cortadora para fades al cero en 2026?', acceptedAnswer: { '@type': 'Answer', text: 'La Wahl 5-Star Balding Clipper #8110 ($44.99, 9.0/10). Motor electromagnético V5000+ a doble velocidad. Estándar de oro para fades al cero quirúrgicamente cerca en barberías profesionales.' } },
    { '@type': 'Question', name: 'Welcher Clipper ist 2026 der beste für Bald Fades?', acceptedAnswer: { '@type': 'Answer', text: 'Der Wahl 5-Star Balding Clipper #8110 ($44,99, 9,0/10). V5000+ Elektromagnetmotor mit doppelter Geschwindigkeit. 18.000+ Amazon-Bewertungen bei 4,8 Sternen.' } },
  ],
}

export default function BaldFadePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <BaldFadeClient />
    </>
  )
}
