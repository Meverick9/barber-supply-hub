import type { Metadata } from 'next'
import CompareClient from './CompareClient'
import { SITE_URL } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Compare Barber Clippers & Trimmers 2026 — Side-by-Side',
  description: 'Compare all 7 professional barber clippers and trimmers side-by-side. Wahl Magic Clip vs Andis Master vs BaByliss FX870. Filter by price, motor, battery. Updated February 2026.',
  keywords: ['compare barber clippers 2026','wahl vs andis clipper','babyliss fx870 vs wahl magic clip','best barber clipper comparison','barber tool comparison chart'],
  alternates: { canonical: `${SITE_URL}/compare` },
  openGraph: { title: 'Compare Barber Clippers 2026 — Full Side-by-Side Chart', description: 'All 7 pro clippers & trimmers compared by score, price, motor, battery.', type: 'website' },
}

export default function ComparePage() {
  return <CompareClient />
}
