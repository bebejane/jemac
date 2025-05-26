import Article from '@/components/common/Article';
import s from './page.module.scss';
import { AboutDocument } from '@/graphql';
import { apiQuery } from 'next-dato-utils/api';
import { DraftMode } from 'next-dato-utils/components';
import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';

export default async function AboutPage({ params }: PageProps) {
	const { locale } = await params;
	setRequestLocale(locale);

	const { about, draftUrl } = await apiQuery<AboutQuery, AboutQueryVariables>(AboutDocument, {
		variables: {
			locale,
		},
	});

	if (!about) return notFound();
	const { title } = about;
	return (
		<>
			<Article title={title} />
			<DraftMode url={draftUrl} path={`/`} />
		</>
	);
}
