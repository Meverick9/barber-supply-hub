import type { Metadata } from 'next'
import BestTrimmersClient from './BestTrimmersClient'
import { SITE_URL } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Best Barber Trimmers 2026 — Lineup, Detail & Fade Trimmers Tested',
  description: 'Top 5 professional barber trimmers tested in real barbershops. Ranked by lineup precision, battery life & value. Andis T-Outliner vs Slimline Pro Li. Updated February 2026.',
  keywords: ['best barber trimmer 2026','andis t-outliner cordless review','andis slimline pro li review','professional lineup trimmer','barber trimmer for fades','best cordless trimmer barbers'],
  alternates: {
    canonical: `${SITE_URL}/picks/best-trimmers`,
    languages: {
      'en': `${SITE_URL}/picks/best-trimmers`,
      'es': `${SITE_URL}/es/picks/best-trimmers`,
      'de': `${SITE_URL}/de/picks/best-trimmers`,
    },
  },
  openGraph: {
    title: 'Best Barber Trimmers 2026 — Tested by Pro Barbers',
    description: 'Lineup, detail & fade trimmers ranked by working barbers. Updated February 2026.',
    type: 'article',
  },
}

const BREADCRUMB_SCHEMA = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Picks', item: `${SITE_URL}/picks` },
    { '@type': 'ListItem', position: 3, name: 'Best Trimmers 2026', item: `${SITE_URL}/picks/best-trimmers` },
  ],
}

const FAQ_SCHEMA = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is the best barber trimmer for lineups in 2026?', acceptedAnswer: { '@type': 'Answer', text: 'The Andis T-Outliner Cordless (74055) is the best trimmer for lineups in 2026. Carbon steel T-blade, 7,200 SPM constant-speed motor, 100-minute cordless runtime. At $89.99 it delivers surgical lineup precision used by top barbers worldwide.' } },
    { '@type': 'Question', name: 'What is the difference between Andis T-Outliner and Slimline Pro Li?', acceptedAnswer: { '@type': 'Answer', text: 'The T-Outliner is a heavy-duty lineup trimmer — more powerful (7,200 SPM), heavier, better for dense hairlines and strong outlines. The Slimline Pro Li is ultra-slim (0.3 lbs), lighter, better for detail work, temples, ears, and kid cuts. Most pros use both: T-Outliner for primary lineup, Slimline for fine detail.' } },
    { '@type': 'Question', name: '¿Cuál es el mejor recortador para lineups en 2026?', acceptedAnswer: { '@type': 'Answer', text: 'El Andis T-Outliner Cordless (74055) con 9.2/10. Cuchilla T de carbono, motor 7,200 SPM de velocidad constante, 100 min inalámbrica. La elección de barberos profesionales en todo el mundo.' } },
    { '@type': 'Question', name: 'Welcher Trimmer ist 2026 der beste für Lineups?', acceptedAnswer: { '@type': 'Answer', text: 'Der Andis T-Outliner Cordless (74055) mit 9,2/10. Karbonstahl-T-Klinge, 7.200 SPM Konstantgeschwindigkeitsmotor, 100 Min kabellos. Die Wahl professioneller Barbiere weltweit.' } },
  ],
}

const ARTICLE_SCHEMA = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: 'Best Barber Trimmers 2026 — Lineup, Detail & Fade Trimmers Tested',
  url: `${SITE_URL}/picks/best-trimmers`,
  datePublished: '2026-01-20T09:00:00Z',
  dateModified: '2026-02-24T09:00:00Z',
  author: { '@type': 'Person', name: 'Diego Reyes', jobTitle: 'Master Barber, 11 years LA' },
  publisher: { '@type': 'Organization', name: 'BarberSuplyHub', url: SITE_URL },
}

export default function BestTrimmersPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }} />
      <BestTrimmersClient />
    </>
  )
}
