import s from './page.module.scss';
import cn from 'classnames';
import { apiQuery } from 'next-dato-utils/api';
import { AllNewsItemsDocument, NewsItemDocument } from '@/graphql';
import { notFound } from 'next/navigation';
import Article from '@/components/layout/Article';
import { DraftMode } from 'next-dato-utils/components';
import { Metadata } from 'next';
import { Image } from 'react-datocms';
import Content from '@/components/common/Content';
import { setRequestLocale } from 'next-intl/server';
import { buildMetadata } from '@/app/layout';
import Footer from '@/components/layout/Footer';
import { getPathname, Link } from '@/i18n/routing';
import { format } from 'date-fns';
import { sv, enUS } from 'date-fns/locale';
import { formatDate } from '@/lib/utils';

export type NewsItemProps = {
	params: Promise<{ category: string; newsitem: string; locale: SiteLocale }>;
};

export const dynamic = 'force-dynamic';

export default async function NewsItemPage({ params }: NewsItemProps) {
	const { newsitem: slug, locale } = await params;
	setRequestLocale(locale);

	const { newsItem, draftUrl } = await apiQuery<NewsItemQuery, NewsItemQueryVariables>(NewsItemDocument, {
		variables: {
			locale,
			slug,
		},
	});

	if (!newsItem) return notFound();

	const { id, title, headline, text, image, category, _publishedAt } = newsItem;
	//const { footer } = newsItemFooter;

	return (
		<>
			<Article title={title} className={s.page}>
				<header className={s.header}>
					<div className={s.image}>
						{image?.responsiveImage && <Image data={image.responsiveImage} />}

						<Link className={s.back} href={{ pathname: '/nyheter/[category]', params: { category: category.slug } }}>
							Alla {category.title}
						</Link>
					</div>

					<div className={s.content}>
						<h5>
							{category.title} — {formatDate(_publishedAt, locale)}
						</h5>
						<Content content={headline} className={s.headline} />
						<Content content={text} className={cn(s.text)} />
					</div>
				</header>
			</Article>
			<DraftMode url={draftUrl} path={`/projekt/${slug}`} />
		</>
	);
}

export async function generateStaticParams({ params }) {
	const { locale, category } = await params;

	const { allNewsItems } = await apiQuery<AllNewsItemsQuery, AllNewsItemsQueryVariables>(AllNewsItemsDocument, {
		all: true,
		variables: {
			locale: 'sv' as SiteLocale,
		},
	});

	return allNewsItems.map(({ slug: newsitem, category }) => ({ newsitem, category: category.slug }));
}

export async function generateMetadata({ params }): Promise<Metadata> {
	const { locale } = await params;

	const pathname = getPathname({ locale, href: { pathname: '/nyheter' } });
	return await buildMetadata({
		//title: about.seoMeta.title,
		//description: about.seoMeta.description,
		pathname,
		locale,
	});
}
