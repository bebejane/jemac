import { StartDocument } from '@/graphql';
import { apiQuery } from 'next-dato-utils/api';
import { DraftMode } from 'next-dato-utils/components';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import Footer from '@/components/layout/Footer';
import Article from '@/components/layout/Article';

export default async function Home({ params }: PageProps) {
	const { locale } = await params;
	setRequestLocale(locale);

	const { start, draftUrl } = await apiQuery<StartQuery, StartQueryVariables>(StartDocument, {
		variables: {
			locale,
		},
	});

	if (!start) return notFound();

	const { header, footer } = start;

	return (
		<>
			<Article header={header as HeaderRecord} />
			<Footer footer={footer as FooterRecord} />
			<DraftMode url={draftUrl} path={`/`} />
		</>
	);
}
