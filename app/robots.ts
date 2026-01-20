import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // disallow: '/private/', // Example: hide a private folder if you have one
    },
    sitemap: 'https://kgmats.cc/sitemap.xml',
  }
}
