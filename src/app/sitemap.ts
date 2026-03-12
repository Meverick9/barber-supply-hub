import { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/data'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString()

  const staticPages = [
    // Core
    { url: SITE_URL,                                    priority: 1.0, changefreq: 'weekly' },
    { url: `${SITE_URL}/picks`,                         priority: 0.9, changefreq: 'weekly' },
    { url: `${SITE_URL}/barbers`,                       priority: 0.6, changefreq: 'monthly' },

    // Pro tool pages — highest SEO value
    { url: `${SITE_URL}/picks/best-clippers`,           priority: 0.9, changefreq: 'weekly' },
    { url: `${SITE_URL}/picks/best-trimmers`,           priority: 0.9, changefreq: 'weekly' },
    { url: `${SITE_URL}/picks/shavers`,                 priority: 0.8, changefreq: 'weekly' },
    { url: `${SITE_URL}/picks/scissors`,                priority: 0.8, changefreq: 'weekly' },
    { url: `${SITE_URL}/picks/razors`,                  priority: 0.8, changefreq: 'weekly' },
    { url: `${SITE_URL}/picks/bald-fade-clippers`,      priority: 0.8, changefreq: 'weekly' },
    { url: `${SITE_URL}/picks/starter-kit`,             priority: 0.8, changefreq: 'weekly' },

    // Essential supply pages
    { url: `${SITE_URL}/picks/capes`,                   priority: 0.6, changefreq: 'monthly' },
    { url: `${SITE_URL}/picks/styling`,                 priority: 0.6, changefreq: 'monthly' },
    { url: `${SITE_URL}/picks/shaving-care`,            priority: 0.6, changefreq: 'monthly' },
    { url: `${SITE_URL}/picks/accessories`,             priority: 0.6, changefreq: 'monthly' },
    { url: `${SITE_URL}/picks/bags`,                    priority: 0.5, changefreq: 'monthly' },

    // Guides — only real pages
    { url: `${SITE_URL}/guides`,                        priority: 0.8, changefreq: 'monthly' },
    { url: `${SITE_URL}/guides/how-to-bald-fade`,       priority: 0.8, changefreq: 'monthly' },
    { url: `${SITE_URL}/guides/how-to-choose-clipper`,  priority: 0.8, changefreq: 'monthly' },
    { url: `${SITE_URL}/guides/how-to-lineup`,          priority: 0.7, changefreq: 'monthly' },
    { url: `${SITE_URL}/guides/zero-gap-guide`,         priority: 0.7, changefreq: 'monthly' },
    { url: `${SITE_URL}/guides/barber-sanitation`,      priority: 0.7, changefreq: 'monthly' },
    { url: `${SITE_URL}/guides/blade-maintenance`,      priority: 0.7, changefreq: 'monthly' },
  ]

  return staticPages.map(p => ({
    url: p.url,
    lastModified: now,
    changeFrequency: p.changefreq as MetadataRoute.Sitemap[number]['changeFrequency'],
    priority: p.priority,
  }))
}