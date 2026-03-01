import type { Metadata } from 'next'
import GuidesClient from './GuidesClient'
import { SITE_URL } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Barber Guides 2026 — How to Fade, Choose Clippers & More',
  description: 'Professional barber guides: how to do a bald fade, choose the right clipper, maintain blades, and build your first barber kit. Written by working barbers. Updated February 2026.',
  keywords: ['barber guide 2026','how to fade haircut','best clipper for fades guide','barber blade maintenance','how to zero gap clippers','barber starter guide'],
  alternates: { canonical: `${SITE_URL}/guides` },
  openGraph: { title: 'Barber Guides 2026 — Written by Pro Barbers', description: 'Fading, blade care, choosing clippers — guides from working barbers.', type: 'website' },
}

export default function GuidesPage() {
  return <GuidesClient />
}
