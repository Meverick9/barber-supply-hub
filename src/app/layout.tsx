import type { Metadata } from 'next'
import '@/styles/globals.css'
import { ThemeProvider } from '@/components/ui/ThemeProvider'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { GA4_ID, SITE_URL } from '@/lib/data'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: '%s | BarberSupplyHub',
    default: 'Best Barber Clippers & Tools 2026 — Tested by Pro Barbers | BarberSupplyHub',
  },
  description: 'Independent reviews of professional barber clippers, trimmers & tools. Ranked by working barbers in NYC, LA & London. Updated monthly.',
  keywords: ['best barber clippers 2026','professional hair clippers','wahl vs andis','barber tools review','best clippers for fades'],
  openGraph: { siteName:'BarberSupplyHub', type:'website', images:[{ url:'/og-image.jpg', width:1200, height:630 }] },
  twitter: { card:'summary_large_image' },
  alternates: {
    languages: {
      'en': SITE_URL,
      'es': `${SITE_URL}/es`,
      'de': `${SITE_URL}/de`,
    },
  },
  robots: { index:true, follow:true, googleBot:{ index:true, follow:true, 'max-image-preview':'large' } },
}

const WEBSITE_SCHEMA = {
  '@context':'https://schema.org', '@type':'WebSite',
  name:'BarberSupplyHub', url:SITE_URL,
  inLanguage:['en','es','de'],
  description:'Independent barber tool reviews by professional barbers',
  potentialAction:{ '@type':'SearchAction', target:`${SITE_URL}/search?q={search_term_string}`, 'query-input':'required name=search_term_string' },
}

const ORG_SCHEMA = {
  '@context':'https://schema.org', '@type':'Organization',
  name:'BarberSupplyHub', url:SITE_URL,
  description:'Independent barber tool review publication run by professional barbers.',
  sameAs:['https://youtube.com/@barbersupplyhub','https://instagram.com/barbersupplyhub'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="amber" data-lang="en">
      <head>
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`} />
        <script dangerouslySetInnerHTML={{ __html: `
          window.dataLayer=window.dataLayer||[];
          function gtag(){dataLayer.push(arguments);}
          gtag('js',new Date());
          gtag('config','${GA4_ID}');
        `}} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBSITE_SCHEMA) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_SCHEMA) }} />
        <link rel="alternate" type="text/plain" href="/llms.txt" title="AI Context" />
      </head>
      <body>
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}