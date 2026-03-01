import { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/data'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString()

  const staticPages = [
    { url: SITE_URL, priority: 1.0, changefreq: 'weekly' },
    { url: `${SITE_URL}/picks`, priority: 0.9, changefreq: 'weekly' },
    { url: `${SITE_URL}/picks/best-clippers`, priority: 0.9, changefreq: 'weekly' },
    { url: `${SITE_URL}/picks/best-trimmers`, priority: 0.9, changefreq: 'weekly' },
    { url: `${SITE_URL}/picks/bald-fade-clippers`, priority: 0.8, changefreq: 'weekly' },
    { url: `${SITE_URL}/picks/starter-kit`, priority: 0.8, changefreq: 'weekly' },
    { url: `${SITE_URL}/picks/cordless`, priority: 0.8, changefreq: 'weekly' },
    { url: `${SITE_URL}/picks/scissors`, priority: 0.8, changefreq: 'weekly' },
    { url: `${SITE_URL}/picks/razors`, priority: 0.8, changefreq: 'weekly' },
    { url: `${SITE_URL}/picks/capes`, priority: 0.7, changefreq: 'weekly' },
    { url: `${SITE_URL}/picks/styling`, priority: 0.7, changefreq: 'weekly' },
    { url: `${SITE_URL}/picks/shaving-care`, priority: 0.7, changefreq: 'weekly' },
    { url: `${SITE_URL}/picks/accessories`, priority: 0.7, changefreq: 'weekly' },
    { url: `${SITE_URL}/picks/bags`, priority: 0.6, changefreq: 'monthly' },
    { url: `${SITE_URL}/guides`, priority: 0.8, changefreq: 'monthly' },
    { url: `${SITE_URL}/guides/how-to-fade`, priority: 0.8, changefreq: 'monthly' },
    { url: `${SITE_URL}/guides/wahl-vs-andis`, priority: 0.8, changefreq: 'monthly' },
    { url: `${SITE_URL}/guides/blade-care`, priority: 0.7, changefreq: 'monthly' },
    { url: `${SITE_URL}/guides/starter`, priority: 0.7, changefreq: 'monthly' },
    { url: `${SITE_URL}/compare`, priority: 0.8, changefreq: 'weekly' },
    { url: `${SITE_URL}/barbers`, priority: 0.7, changefreq: 'monthly' },
  ]

  // Spanish mirrors
  const esPages = staticPages.map(p => ({
    ...p,
    url: p.url.replace(SITE_URL, `${SITE_URL}/es`),
    priority: (p.priority as number) - 0.1,
  }))

  return [...staticPages, ...esPages].map(p => ({
    url: p.url,
    lastModified: now,
    changeFrequency: p.changefreq as MetadataRoute.Sitemap[number]['changeFrequency'],
    priority: p.priority,
  }))
}
