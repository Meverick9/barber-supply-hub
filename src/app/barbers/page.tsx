import type { Metadata } from 'next'
import BarbersClient from './BarbersClient'
import { SITE_URL } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Pro Barbers — Our Testers & Their Tool Stacks 2026',
  description: 'Meet the professional barbers who test every tool on BarberSuplyHub. See their barbershop setups, preferred clippers, and years of experience. Trust our rankings.',
  keywords: ['pro barber tool stack','barber clipper setup','professional barber kit 2026','barber tester profile','best barber clippers pros use'],
  alternates: { canonical: `${SITE_URL}/barbers` },
  openGraph: { title: 'Meet Our Pro Barber Testers — BarberSuplyHub', description: 'Real barbers, real barbershops, real tests. Meet who ranks our tools.', type: 'website' },
}

export default function BarbersPage() {
  return <BarbersClient />
}
