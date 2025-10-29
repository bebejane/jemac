import { buildMetadata } from '@/app/layout';
import { AllNewsCategoriesDocument, NewsStartDocument } from '@/graphql';
import { getPathname } from '@/i18n/routing';
import { Metadata } from 'next';
import { apiQuery } from 'next-dato-utils/api';
import NewsPage from '../page';

export default async function NewsCategoryPage({ params }: PageProps) {
	return <NewsPage params={params} />;
}

export async function generateMetadata({ params }): Promise<Metadata> {
	const { locale, category } = await params;

	const { newsStart } = await apiQuery(NewsStartDocument, {
		variables: {
			locale,
		},
	});

	return await buildMetadata({
		title: newsStart?.seoMeta.title,
		description: newsStart?.seoMeta.description,
		pathname: getPathname({ locale, href: { pathname: '/nyheter/[category]', params: { category } } }),
		locale,
	});
}

export async function generateStaticParams({ params }) {
	const { locale } = await params;
	const { allNewsCategories } = await apiQuery(AllNewsCategoriesDocument, {
		all: true,
		variables: {
			locale,
		},
	});

	return allNewsCategories.map(({ slug: category }) => ({ category }));
}
