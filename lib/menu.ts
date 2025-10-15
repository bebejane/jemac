import { getTranslations } from "next-intl/server"

export type MenuItem = {
  id: string,
  title: string,
  slug?: string,
  href?: string,
  sub?: MenuItem[]

}

export type Menu = MenuItem[]

export const buildMenu = async (locale: SiteLocale): Promise<Menu> => {
  const t = await getTranslations('menu');

  const menu: Menu = [{
    id: 'offer',
    title: t('offer'),
    slug: '/erbjudande',
  }, {
    id: 'projects',
    title: t('projects'),
    slug: '/projekt',
  }, {
    id: 'join-us',
    title: t('join'),
    slug: '/bli-en-av-oss',
  }, {
    id: 'about',
    title: t('about'),
    slug: '/om-oss',
  }, {
    id: 'news',
    title: t('news'),
    slug: '/nyheter',
  }, {
    id: 'contact',
    title: t('contact'),
    slug: '/kontakt',
  }]
  return menu
}