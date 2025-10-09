import s from './page.module.scss';
import Article, { HeaderProps } from '@/components/layout/Article';
import { AllNewsItemsDocument, AllNewsCategoriesDocument, NewsStartDocument } from '@/graphql';
import { apiQuery } from 'next-dato-utils/api';
import { DraftMode } from 'next-dato-utils/components';
import { setRequestLocale } from 'next-intl/server';
import Footer from '@/components/layout/Footer';
import Content from '@/components/common/Content';
import { buildMetadata } from '@/app/layout';
import { Metadata } from 'next';
import { getPathname, Link } from '@/i18n/routing';
import { formatDate } from '@/lib/utils';

export default async function NewsPage({ params }: PageProps) {
	const { locale, category } = await params;
	setRequestLocale(locale);

	const { allNewsItems, draftUrl } = await apiQuery<AllNewsItemsQuery, AllNewsItemsQueryVariables>(
		AllNewsItemsDocument,
		{
			variables: {
				locale,
			},
		}
	);

	const { allNewsCategories } = await apiQuery<AllNewsCategoriesQuery, AllNewsCategoriesQueryVariables>(
		AllNewsCategoriesDocument,
		{
			all: true,
			variables: {
				locale,
			},
		}
	);

	const { newsStart } = await apiQuery<NewsStartQuery, NewsStartQueryVariables>(NewsStartDocument, {
		variables: {
			locale,
		},
	});

	const news = allNewsItems.filter((item) => !category || item.category.slug === category);
	const headerNews = news[0]
		? {
				id: news[0].id,
				headline: news[0].headline,
				text: news[0].intro,
				image: news[0].image,
				align: 'left',
				date: formatDate(news[0]._publishedAt, locale),
				link: {
					href: getPathname({
						locale,
						href: {
							pathname: '/nyheter/[category]/[newsitem]',
							params: { category: news[0].category.slug, newsitem: news[0].slug },
						},
					}),
					text: 'Läs mer',
				},
			}
		: null;

	return (
		<>
			<Article title={'News'} header={headerNews !== null ? (headerNews as any as HeaderProps) : undefined}>
				<section className={s.news}>
					<div className={s.header}>
						<h3>Senaste nytt</h3>
						<ul className={s.subnav}>
							{allNewsCategories.map(({ id, title, slug }) => (
								<li key={id}>
									<Link
										className={category === slug ? s.active : null}
										href={{ pathname: '/nyheter/[category]', params: { category: slug } }}
									>
										{title}
									</Link>
								</li>
							))}
						</ul>
					</div>
					{news.length > 0 && (
						<ul className={s.newsItems}>
							{news.map((item) => (
								<li key={item.id}>
									<Link
										href={{
											pathname: '/nyheter/[category]/[newsitem]',
											params: { category: item.category.slug, newsitem: item.slug },
										}}
									>
										<h5>
											<span className={s.date}>{formatDate(item._publishedAt, locale)}</span>
										</h5>

										<h2 className='smaller'>{item.title}</h2>
										<Content content={item.intro} className={s.text} />
									</Link>
								</li>
							))}
						</ul>
					)}
					{news.length === 0 && <p className={s.empty}>Det finns inga nyheter i denna kategori</p>}
				</section>
				<Footer footer={newsStart?.footer as FooterRecord} />
			</Article>
			<DraftMode url={draftUrl} path={`/nyheter`} />
		</>
	);
}

export async function generateMetadata({ params }): Promise<Metadata> {
	const { locale, category } = await params;

	const { newsStart } = await apiQuery<NewsStartQuery, NewsStartQueryVariables>(NewsStartDocument, {
		variables: {
			locale,
		},
	});

	return await buildMetadata({
		title: newsStart?.seoMeta.title,
		description: newsStart?.seoMeta.description,
		pathname: getPathname({ locale, href: { pathname: '/nyheter' } }),
		locale,
	});
}
