import { DatoCmsConfig } from 'next-dato-utils/config';
import client from './lib/client';
import { getPathname } from "@/i18n/routing"

const routes: DatoCmsConfig['routes'] = {
  "start": async (record, locale) => [getPathname({ locale, href: '/' })],
  "about": async (record, locale) => [getPathname({ locale, href: '/om-oss' })],
  "contact": async (record, locale) => [getPathname({ locale, href: '/kontakt' })],
  "offer": async (record, locale) => [getPathname({ locale, href: '/erbjudande' })],
  "join_us": async (record, locale) => [getPathname({ locale, href: '/bli-en-av-oss' })],
  "join": async (record, locale) => [getPathname({ locale, href: '/bli-en-av-oss' })],
  "showcase": async (record, locale) => [getPathname({ locale, href: '/projekt' })],
  "staff": async (record, locale) => [getPathname({ locale, href: '/om-oss' })],
  "client": async (record, locale) => [
    getPathname({ locale, href: `/projekt` }),
    getPathname({ locale, href: '/' })
  ],
  "project": async ({ slug }, locale) => [
    getPathname({ locale, href: { pathname: `/projekt/[project]`, params: { project: slug[locale] } } }),
    getPathname({ locale, href: '/projekt' }),
    getPathname({ locale, href: '/' })
  ]

}

export default {
  description: 'Kollektiva konstnärsverkstäders Riksorganisation, KKV-Riks, har som syfte att, på olika sätt, stödja sina kollektiva medlemsverkstäder runt om i Sverige.',
  name: 'KKV-Riks',
  url: {
    dev: 'http://localhost:3000',
    public: 'https://kkv-riks.vercel.app',
  },
  theme: {
    background: '#efefef',
    color: '#cd3a00',
  },
  routes,
  sitemap: async () => {
    return [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL}`,
        lastmod: new Date().toISOString(),
        changefreq: 'daily',
        priority: 1,
      },
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/kontakt`,
        lastmod: new Date().toISOString(),
        changefreq: 'monthly',
        priority: 0.7,
      }, {
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/erbjudande`,
        lastmod: new Date().toISOString(),
        changefreq: 'weekly',
        priority: 0.8,
      },
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/om-oss`,
        lastmod: new Date().toISOString(),
        changefreq: 'weekly',
        priority: 0.8,
      },
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/bli-en-av-oss`,
        lastmod: new Date().toISOString(),
        changefreq: 'weekly',
        priority: 0.8,
      },
    ]
  }

} satisfies DatoCmsConfig

async function references(itemId: string): Promise<string[]> {
  if (!itemId) throw new Error('Missing reference: itemId')
  const paths: string[] = []
  const itemTypes = await client.itemTypes.list()
  const items = await client.items.references(itemId, { version: 'published', limit: 500, nested: true })

  for (const item of items) {
    const itemType = itemTypes.find(({ id }) => id === item.item_type.id)
    if (!itemType) continue
    const p = await routes[itemType.api_key]?.(item)
    p && paths.push.apply(paths, p)
  }
  console.log('refs', paths)
  return paths
}
