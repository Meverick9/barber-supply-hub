import type { Metadata } from 'next'
import StarterKitClient from './StarterKitClient'
import { SITE_URL } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Barber Starter Kit 2026 — Everything a New Barber Needs',
  description: 'Complete barber starter kit guide for 2026. Best clipper, trimmer, and accessories for new barbers. Budget build ($180) and pro build ($350). Updated February 2026.',
  keywords: ['barber starter kit 2026','best clipper for beginner barber','new barber tool kit','barber school supply list','best first barber clipper','barber kit under 200'],
  alternates: { canonical: `${SITE_URL}/picks/starter-kit` },
  openGraph: { title: 'Barber Starter Kit 2026 — Budget & Pro Builds', description: 'Complete tool list for new barbers. Budget ($180) and Pro ($350) builds.', type: 'article' },
}

const SCHEMA = {
  '@context':'https://schema.org','@type':'FAQPage',
  mainEntity:[
    {'@type':'Question',name:'What is the best starter clipper for a new barber in 2026?',acceptedAnswer:{'@type':'Answer',text:'The Wahl 5-Star Magic Clip ($89.99) is the best starter clipper for new barbers in 2026. It is the most forgiving clipper for learning fades, has the largest community of tutorials and support, and its taper lever is ideal for blending. 22,739 reviews at 4.8 stars.'}},
    {'@type':'Question',name:'How much should a new barber spend on their first tool kit?',acceptedAnswer:{'@type':'Answer',text:'A complete functional starter kit costs $180-$220: Wahl Magic Clip ($89.99) + Andis T-Outliner ($89.99) + blade oil + Cool Care spray. A pro setup with all essentials runs $320-$400. Do not start with cheap clippers — they slow learning and damage client hair.'}},
    {'@type':'Question',name:'¿Cuál es el mejor kit de inicio para un barbero nuevo en 2026?',acceptedAnswer:{'@type':'Answer',text:'Kit de inicio recomendado: Wahl 5-Star Magic Clip ($89.99) como cortadora principal + Andis T-Outliner Cordless ($89.99) como recortadora. Total: $180. El 90% de los barberos profesionales comenzaron con la Magic Clip.'}},
  ]
}

export default function StarterKitPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(SCHEMA)}}/>
      <StarterKitClient />
    </>
  )
}
