import 'dotenv/config';
import { DatoCmsConfig, getItemReferenceRoutes, getUploadReferenceRoutes } from 'next-dato-utils/config';
import { AllProjectsDocument, NewsItemDocument, AllNewsItemsDocument } from '@/graphql';
import { apiQuery } from 'next-dato-utils/api';
import { getPathname, defaultLocale, locales, routing } from '@/i18n/routing';
import { MetadataRoute } from 'next';

export default {
	i18n: {
		defaultLocale,
		locales,
	},
	routes: {
		start: async (record, locale) => [getPathname({ locale, href: '/' })],
		about: async (record, locale) => [getPathname({ locale, href: '/om-oss' })],
		contact: async (record, locale) => [getPathname({ locale, href: '/kontakt' })],
		offer: async (record, locale) => [getPathname({ locale, href: '/erbjudande' })],
		join_us: async (record, locale) => [getPathname({ locale, href: '/bli-en-av-oss' })],
		join: async (record, locale) => [getPathname({ locale, href: '/bli-en-av-oss' })],
		showcase: async (record, locale) => [getPathname({ locale, href: '/projekt' })],
		staff: async (record, locale) => [getPathname({ locale, href: '/om-oss' })],
		client: async (record, locale) => [getPathname({ locale, href: `/projekt` }), getPathname({ locale, href: '/' })],
		news_start: async (record, locale) => [getPathname({ locale, href: '/nyheter' })],
		news_category: async ({ id, slug }, locale) => [
			getPathname({ locale, href: { pathname: `/nyheter/[category]`, params: { category: slug[locale] ?? slug } } }),
			getPathname({ locale, href: { pathname: `/nyheter` } }),
			...(await getItemReferenceRoutes(id, locales)),
		],
		news_item: async ({ id, slug }, locale) => {
			console.log(slug, locale);
			const { newsItem } = await apiQuery(NewsItemDocument, {
				variables: {
					locale: locale as SiteLocale,
					slug: slug[locale] ?? slug,
				},
			});

			if (!newsItem) return [];

			return [
				getPathname({
					locale,
					href: {
						pathname: `/nyheter/[category]/[newsitem]`,
						params: { category: newsItem.category.slug, newsitem: newsItem.slug },
					},
				}),
				getPathname({
					locale,
					href: { pathname: '/nyheter/[category]', params: { category: newsItem.category.slug } },
				}),
				getPathname({ locale, href: '/nyheter' }),
				getPathname({ locale, href: '/' }),
			];
		},
		project: async ({ slug, id }, locale) => [
			getPathname({ locale, href: { pathname: `/projekt/[project]`, params: { project: slug[locale] ?? slug } } }),
			getPathname({ locale, href: '/projekt' }),
			getPathname({ locale, href: '/' }),
			...(await getItemReferenceRoutes(id, locales)),
		],
		project_footer: async (record, locale) => {
			const { allProjects } = await apiQuery(AllProjectsDocument, {
				all: true,
				variables: { locale: locale as SiteLocale },
			});
			const paths = allProjects.map(({ slug }) =>
				getPathname({
					locale,
					href: { pathname: `/projekt/[project]`, params: { project: slug } },
				})
			);
			return paths;
		},
		upload: async ({ id }) => await getUploadReferenceRoutes(id, locales),
	},
	sitemap: async () => {
		const locale = 'sv';
		const { allProjects } = await apiQuery(AllProjectsDocument, {
			all: true,
			variables: { locale: locale as SiteLocale },
		});

		const { allNewsItems } = await apiQuery(AllNewsItemsDocument, {
			all: true,
			variables: { locale: locale as SiteLocale },
		});

		const staticRoutes = Object.keys(routing.pathnames)
			.filter((p) => !p.includes('['))
			.map((pathname) => ({
				url: `${process.env.NEXT_PUBLIC_SITE_URL}${pathname}`,
				lastModified: new Date().toISOString(),
				changeFrequency: pathname === '/' ? 'weekly' : 'monthly',
				priority: pathname === '/' ? 1 : 0.8,
			}));

		const projectRoutes = allProjects
			.map(({ slug }) =>
				getPathname({
					locale,
					href: { pathname: `/projekt/[project]`, params: { project: slug } },
				})
			)
			.map((p) => ({
				url: `${process.env.NEXT_PUBLIC_SITE_URL}${p}`,
				lastModified: new Date().toISOString(),
				changeFrequency: 'weekly',
				priority: 0.8,
			}));

		const newsRoutes = allNewsItems.map(({ slug, category, _createdAt }) => ({
			url: `${process.env.NEXT_PUBLIC_SITE_URL}${getPathname({
				locale,
				href: { pathname: `/nyheter/[category]/[newsitem]`, params: { category: category.slug, newsitem: slug } },
			})}`,
			lastModified: new Date(_createdAt).toISOString(),
			changeFrequency: 'monthly',
			priority: 0.8,
		}));
		return [...staticRoutes, ...projectRoutes, ...newsRoutes] as MetadataRoute.Sitemap;
	},
	manifest: async () => {
		return {
			name: 'JEMAC',
			short_name: 'JEMAC',
			description: 'JEMAC website',
			start_url: '/',
			display: 'standalone',
			background_color: '#ffffff',
			theme_color: '#5a5a5a',
			icons: [
				{
					src: '/favicon.ico',
					sizes: 'any',
					type: 'image/x-icon',
				},
			],
		} satisfies MetadataRoute.Manifest;
	},
	robots: async () => {
		return {
			rules: {
				userAgent: '*',
				allow: '/',
			},
		};
	},
} satisfies DatoCmsConfig;
