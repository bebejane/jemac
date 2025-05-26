import s from './page.module.scss';
import { JoinDocument } from '@/graphql';
import { apiQuery } from 'next-dato-utils/api';
import { DraftMode } from 'next-dato-utils/components';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import Article from '@/components/common/Article';

export default async function JoinPage({ params }: PageProps) {
	const { locale } = await params;
	setRequestLocale(locale);

	const { join, draftUrl } = await apiQuery<JoinQuery, JoinQueryVariables>(JoinDocument, {
		variables: {
			locale,
		},
	});

	if (!join) return notFound();
	const { title } = join;

	return (
		<>
			<Article title={title} />
			<DraftMode url={draftUrl} path={`/`} />
		</>
	);
}
