import '@/styles/index.scss';
import s from './layout.module.scss';
import { apiQuery } from 'next-dato-utils/api';
import { GlobalDocument } from '@/graphql';
import { Metadata } from 'next';
import { Icon } from 'next/dist/lib/metadata/types/metadata-types';
import { buildMenu } from '@/lib/menu';
import Navbar from '@/components/nav/Navbar';
import NavbarMobile from '@/components/nav/NavbarMobile';
import { setRequestLocale } from 'next-intl/server';
import { NextIntlClientProvider, useMessages } from 'next-intl';
import { Suspense } from 'react';
import { getPathname, routing } from '@/i18n/routing';
import FullscreenGallery from '@/components/common/FullscreenGallery';

export type LayoutProps = {
	children: React.ReactNode;
	params: LocaleParams['params'];
};

export default async function RootLayout({ children, params }: LayoutProps) {
	const { locale } = await params;
	setRequestLocale(locale);

	const menu = await buildMenu(locale);
	console.log('layout', locale);
	return (
		<>
			<html lang={locale === 'sv' ? 'se-SE' : 'en-US'}>
				<body>
					<NextIntlClientProvider locale={locale}>
						<Suspense fallback={null}>
							<Navbar menu={menu} />
							<NavbarMobile menu={menu} />
							<main className={s.main}>{children}</main>
							<FullscreenGallery />
						</Suspense>
					</NextIntlClientProvider>
					<div id='page-transition' />
					<div id='page-fade-transition' />
				</body>
			</html>
		</>
	);
}

export function generateStaticParams() {
	return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }): Promise<Metadata> {
	const { locale } = await params;
	const {
		site: { globalSeo, faviconMetaTags },
	} = await apiQuery<GlobalQuery, GlobalQueryVariables>(GlobalDocument, {
		variables: { locale },
		revalidate: 60 * 60,
	});

	const siteName = globalSeo?.siteName ?? '';

	return {
		metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL as string),
		icons: faviconMetaTags.map(({ attributes: { rel, sizes, type, href: url } }) => ({
			rel,
			url,
			sizes,
			type,
		})) as Icon[],
		...(await buildMetadata({
			title: {
				template: `${siteName} — %s`,
				default: siteName ?? '',
			},
			description: globalSeo?.fallbackSeo?.description?.substring(0, 157),
			pathname: getPathname({ locale, href: '/' }),
			image: globalSeo?.fallbackSeo?.image as FileField,
			locale,
		})),
	};
}

export type BuildMetadataProps = {
	title?: string | any;
	description?: string | null | undefined;
	pathname?: string;
	image?: FileField | null | undefined;
	locale: SiteLocale;
};

export async function buildMetadata({
	title,
	description,
	pathname,
	image,
	locale,
}: BuildMetadataProps): Promise<Metadata> {
	description = !description ? '' : description.length > 160 ? `${description.substring(0, 157)}...` : description;
	const url = pathname ? `${process.env.NEXT_PUBLIC_SITE_URL}${pathname}` : undefined;

	return {
		title,
		alternates: {
			canonical: url,
		},
		description,
		openGraph: {
			title,
			description,
			url,
			images: image
				? [
						{
							url: `${image?.url}?w=1200&h=630&fit=fill&q=80`,
							width: 800,
							height: 600,
							alt: title,
						},
						{
							url: `${image?.url}?w=1600&h=800&fit=fill&q=80`,
							width: 1600,
							height: 800,
							alt: title,
						},
						{
							url: `${image?.url}?w=790&h=627&fit=crop&q=80`,
							width: 790,
							height: 627,
							alt: title,
						},
					]
				: undefined,
			locale: locale === 'sv' ? 'sv_SE' : 'en_US',
			type: 'website',
		},
	};
}
