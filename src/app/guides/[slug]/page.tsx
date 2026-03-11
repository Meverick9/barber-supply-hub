import { redirect, notFound } from 'next/navigation'
import type { Metadata } from 'next'

// All valid guide slugs that have their own static pages
const VALID_SLUGS = [
  'how-to-bald-fade',
  'how-to-choose-clipper',
  'how-to-lineup',
  'zero-gap-guide',
  'barber-sanitation',
  'blade-maintenance',
  'blade-care',
  'how-to-fade',
  'starter',
  'wahl-vs-andis',
]

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return VALID_SLUGS.map(slug => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params
  if (!VALID_SLUGS.includes(slug)) return {}

  const titleMap: Record<string, string> = {
    'how-to-bald-fade': 'How to Do a Bald Fade — Step by Step Guide | BarberSupplyHub',
    'how-to-choose-clipper': 'How to Choose a Barber Clipper in 2026 | BarberSupplyHub',
    'how-to-lineup': 'How to Do a Lineup — Pro Barber Guide | BarberSupplyHub',
    'zero-gap-guide': 'Zero Gap Clippers — Complete Guide | BarberSupplyHub',
    'barber-sanitation': 'Barber Sanitation & Tool Hygiene Guide | BarberSupplyHub',
    'blade-maintenance': 'Clipper Blade Maintenance Guide | BarberSupplyHub',
    'blade-care': 'Barber Blade Care & Sharpening Guide | BarberSupplyHub',
    'how-to-fade': 'How to Fade Hair — Complete Barber Guide | BarberSupplyHub',
    'starter': 'Beginner Barber Starter Kit Guide | BarberSupplyHub',
    'wahl-vs-andis': 'Wahl vs Andis — Which Clipper is Better? | BarberSupplyHub',
  }

  const descMap: Record<string, string> = {
    'how-to-bald-fade': 'Step-by-step guide to achieving a perfect bald fade. Techniques, clipper settings, and pro tips from working barbers.',
    'how-to-choose-clipper': 'How to pick the right professional clipper for your barbershop. Motor types, blade systems, and what pros actually use.',
    'how-to-lineup': 'Master the perfect hairline lineup. Techniques, tools, and common mistakes to avoid.',
    'zero-gap-guide': 'Everything you need to know about zero-gapping your clippers safely for skin-close fades.',
    'barber-sanitation': 'Complete guide to barbershop sanitation, tool disinfection, and hygiene protocols.',
    'blade-maintenance': 'Keep your clipper blades sharp, clean, and performing at their best with this maintenance guide.',
    'blade-care': 'Professional blade care techniques to extend the life of your barber tools.',
    'how-to-fade': 'Complete guide to fading hair — from low fades to high skin fades. Step by step for all skill levels.',
    'starter': 'Best starter kit for beginner barbers. Essential tools, recommended brands, and what to buy first.',
    'wahl-vs-andis': 'Wahl vs Andis — an honest comparison of the two biggest names in professional barbering.',
  }

  return {
    title: titleMap[slug] ?? 'Barber Guide | BarberSupplyHub',
    description: descMap[slug] ?? 'Professional barber guide from BarberSupplyHub.',
    alternates: {
      canonical: `https://barbersupplyhub.com/guides/${slug}`,
    },
  }
}

export default function GuideSlugPage({ params }: Props) {
  const { slug } = params

  if (!VALID_SLUGS.includes(slug)) {
    notFound()
  }

  // Redirect to the static guide page
  redirect(`/guides/${slug}`)
}
