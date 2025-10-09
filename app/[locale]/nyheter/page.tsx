import s from './page.module.scss';
import Article from '@/components/layout/Article';
import { AllNewsItemsDocument, AllNewsCategoriesDocument } from '@/graphql';
import { apiQuery } from 'next-dato-utils/api';
import { DraftMode } from 'next-dato-utils/components';
import { setRequestLocale } from 'next-intl/server';
import { Image } from 'react-datocms';
import Section from '@/components/layout/Section';
import Footer from '@/components/layout/Footer';
import Content from '@/components/common/Content';
import classNames from 'classnames';
import { buildMetadata } from '@/app/layout';
import { Metadata } from 'next';
import { getPathname, Link } from '@/i18n/routing';
import { format } from 'path';
import { sv } from 'date-fns/locale';
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

	const news = allNewsItems.filter((item) => !category || item.category.slug === category);

	return (
		<>
			<Article title={'News'}>
				<section className={s.news}>
					<div className={s.header}>
						<h3>Senaste nytt</h3>
						<ul className={s.subnav}>
							{allNewsCategories.map(({ id, title, slug }) => (
								<li key={id}>
									<Link href={{ pathname: '/nyheter/[category]', params: { category: slug } }}>{title}</Link>
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
									</Link>
								</li>
							))}
						</ul>
					)}
					{news.length === 0 && <p className={s.empty}>Det finns inga nyheter i denna kategori</p>}
				</section>
			</Article>
			<DraftMode url={draftUrl} path={`/nyheter`} />
		</>
	);
}
