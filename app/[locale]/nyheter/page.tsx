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

	return (
		<>
			<Article title={'News'}>
				<section className={s.wrap}>
					<div className={s.header}>
						<h3>Senaste nytt</h3>
						<ul>
							{allNewsCategories.map(({ id, title, slug }) => (
								<li key={id}>
									<Link href={{ pathname: '/nyheter/[category]', params: { category: slug } }}>{title}</Link>
								</li>
							))}
						</ul>
					</div>
					<ul className={s.news}>
						{allNewsItems
							.filter((item) => !category || item.category.slug === category)
							.map((item) => (
								<li key={item.id}>
									<Link
										href={{
											pathname: '/nyheter/[category]/[newsitem]',
											params: { category: item.category.slug, newsitem: item.slug },
										}}
									>
										{item.image?.responsiveImage && <Image data={item.image.responsiveImage} imgClassName={s.image} />}
										<h4>{item.title}</h4>
										<Content content={item.headline} className={classNames('mid', s.content)} />
									</Link>
								</li>
							))}
					</ul>
				</section>
			</Article>
			<DraftMode url={draftUrl} path={`/`} />
		</>
	);
}
