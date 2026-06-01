import 'dotenv/config';
import { DatoCmsConfig, getItemReferenceRoutes, getUploadReferenceRoutes } from 'next-dato-utils/config';
import { AllProjectsDocument, NewsItemDocument } from '@/graphql';
import { SitemapDocument } from '@/graphql/sitemap';
import { apiQuery } from 'next-dato-utils/api';
import { getInternalPath, getPathname, defaultLocale, locales, routing } from '@/i18n/routing';
import { MetadataRoute } from 'next';

export default {
	i18n: {
		defaultLocale,
		locales,
	},
	routes: {
		start: async (record, locale) => [getInternalPath('/', locale)],
		about: async (record, locale) => [getInternalPath('/om-oss', locale)],
		contact: async (record, locale) => [getInternalPath('/kontakt', locale)],
		offer: async (record, locale) => [getInternalPath('/erbjudande', locale)],
		join_us: async (record, locale) => [getInternalPath('/bli-en-av-oss', locale)],
		join: async (record, locale) => [getInternalPath('/bli-en-av-oss', locale)],
		showcase: async (record, locale) => [getInternalPath('/projekt', locale)],
		staff: async (record, locale) => [getInternalPath('/om-oss', locale)],
		client: async (record, locale) => [getInternalPath('/projekt', locale), getInternalPath('/', locale)],
		news_start: async (record, locale) => [getInternalPath('/nyheter', locale)],
		news_category: async ({ id, slug }, locale) => [
			getInternalPath(`/nyheter/[category]`, locale, { category: slug[locale] ?? slug }),
			getInternalPath(`/nyheter`, locale),
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
				getInternalPath(`/nyheter/[category]/[newsitem]`, locale, { category: newsItem.category.slug, newsitem: newsItem.slug }),
				getInternalPath(`/nyheter/[category]`, locale, { category: newsItem.category.slug }),
				getInternalPath(`/nyheter`, locale),
				getInternalPath(`/`, locale),
			];
		},
		project: async ({ slug, id }, locale) => [
			getInternalPath(`/projekt/[project]`, locale, { project: slug[locale] ?? slug }),
			getInternalPath(`/projekt`, locale),
			getInternalPath(`/`, locale),
			...(await getItemReferenceRoutes(id, locales)),
		],
		project_footer: async (record, locale) => {
			const { allProjects } = await apiQuery(AllProjectsDocument, {
				all: true,
				variables: { locale: locale as SiteLocale },
			});
			const paths = allProjects.map(({ slug }) =>
				getInternalPath(`/projekt/[project]`, locale, { project: slug })
			);
			return paths;
		},
		upload: async ({ id }) => await getUploadReferenceRoutes(id, locales),
	},
	sitemap: async () => {
		const otherLocales = locales.filter((l) => l !== defaultLocale);

		const { allProjects, allNewsItems } = await apiQuery(SitemapDocument);

		const staticRoutes = Object.keys(routing.pathnames)
			.filter((p) => !p.includes('['))
			.map((pathname) => ({
				url: `${process.env.NEXT_PUBLIC_SITE_URL}${getPathname({ href: { pathname: pathname as any }, locale: defaultLocale })}`,
				lastModified: new Date().toISOString(),
				changeFrequency: pathname === '/' ? 'weekly' : 'monthly',
				priority: pathname === '/' ? 1 : 0.8,
				alternates: {
					languages: otherLocales.reduce(
						(acc, l) => {
							acc[l] = `${process.env.NEXT_PUBLIC_SITE_URL}${getPathname({ href: { pathname: pathname as any }, locale: l })}`;
							return acc;
						},
						{} as Record<string, string>,
					),
				},
			}));

		const projectRoutes = allProjects.map(({ slug, _allSlugLocales }) => ({
			url: `${process.env.NEXT_PUBLIC_SITE_URL}${getPathname({ href: { pathname: '/projekt/[project]', params: { project: slug } }, locale: defaultLocale })}`,
			lastModified: new Date().toISOString(),
			changeFrequency: 'weekly',
			priority: 0.8,
			alternates: {
				languages: (_allSlugLocales ?? []).reduce(
					(acc, { locale, value }) => {
						if (!locale || locale === defaultLocale) return acc;
						acc[locale] = `${process.env.NEXT_PUBLIC_SITE_URL}${getPathname({ href: { pathname: '/projekt/[project]', params: { project: value } }, locale })}`;
						return acc;
					},
					{} as Record<string, string>,
				),
			},
		}));

		const newsRoutes = allNewsItems.map(({ slug, _allSlugLocales, category: { slug: catSlug, _allSlugLocales: catSlugLocales }, _createdAt }) => ({
			url: `${process.env.NEXT_PUBLIC_SITE_URL}${getPathname({ href: { pathname: '/nyheter/[category]/[newsitem]', params: { category: catSlug, newsitem: slug } }, locale: defaultLocale })}`,
			lastModified: new Date(_createdAt).toISOString(),
			changeFrequency: 'monthly',
			priority: 0.8,
			alternates: {
				languages: (_allSlugLocales ?? []).reduce(
					(acc, { locale, value }) => {
						if (!locale || locale === defaultLocale) return acc;
						const itemSlug = value;
						const catSlugLocale = (catSlugLocales ?? []).find((l) => l.locale === locale);
						const localizedCatSlug = catSlugLocale?.value ?? catSlug;
						acc[locale] = `${process.env.NEXT_PUBLIC_SITE_URL}${getPathname({ href: { pathname: '/nyheter/[category]/[newsitem]', params: { category: localizedCatSlug, newsitem: itemSlug } }, locale })}`;
						return acc;
					},
					{} as Record<string, string>,
				),
			},
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
