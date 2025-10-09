import { buildMetadata } from '@/app/layout';
import { AllNewsCategoriesDocument } from '@/graphql';
import { getPathname } from '@/i18n/routing';
import { Metadata } from 'next';
import { apiQuery } from 'next-dato-utils/api';
import NewsPage from '../page';

export default async function NewsCategoryPage({ params }: PageProps) {
	return <NewsPage params={params} />;
}

export async function generateMetadata({ params }): Promise<Metadata> {
	const { locale, category } = await params;

	const pathname = getPathname({ locale, href: { pathname: '/nyheter/[category]', params: { category } } });
	return await buildMetadata({
		//title: about.seoMeta.title,
		//description: about.seoMeta.description,
		pathname,
		locale,
	});
}

export async function generateStaticParams({ params }) {
	const { locale } = await params;
	const { allNewsCategories } = await apiQuery<AllNewsCategoriesQuery, AllNewsCategoriesQueryVariables>(
		AllNewsCategoriesDocument,
		{
			all: true,
			variables: {
				locale,
			},
		}
	);

	return allNewsCategories.map(({ slug: category }) => ({ category }));
}
