import Article from '@/components/common/Article';
import s from './page.module.scss';
import { ProjectDocument } from '@/graphql';
import { apiQuery } from 'next-dato-utils/api';
import { DraftMode } from 'next-dato-utils/components';
import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';

export default async function Home({ params }: PageProps) {
	const { locale } = await params;
	setRequestLocale(locale);

	const { project, draftUrl } = await apiQuery<ProjectQuery, ProjectQueryVariables>(
		ProjectDocument,
		{
			variables: {
				locale,
			},
		}
	);

	if (!project) return notFound();
	const { title } = project;
	return (
		<>
			<Article title={title} />
			<DraftMode url={draftUrl} path={`/`} />
		</>
	);
}
