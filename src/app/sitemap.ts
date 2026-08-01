import { MetadataRoute } from 'next'
import { personalData } from '@/data/personal'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = personalData.siteUrl

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}
