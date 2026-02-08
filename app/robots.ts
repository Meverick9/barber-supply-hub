import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://barber-supply-hub.vercel.app'

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/'], // Блокируй только служебные
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}