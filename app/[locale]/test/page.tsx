import s from './page.module.scss';
import { TestDocument, AllShowcaseProjectsDocument } from '@/graphql';
import { apiQuery } from 'next-dato-utils/api';
import { DraftMode } from 'next-dato-utils/components';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import Article from '@/components/layout/Article';
import { buildMetadata } from '@/app/layout';
import { Metadata } from 'next';

export default async function Home({ params }: PageProps) {
	const { locale } = await params;
	setRequestLocale(locale);

	const { test, draftUrl } = await apiQuery<TestQuery, TestQueryVariables>(TestDocument, {
		variables: {
			locale,
		},
	});

	if (!test) return notFound();

	return (
		<>
			<Article>
				<h1>{test.title}</h1>
				<div className={s.container} style={{ backgroundColor: test.color.hex, width: '100px', height: '100px' }} />
			</Article>

			<DraftMode url={draftUrl} path={`/test`} />
		</>
	);
}

export async function generateMetadata({ params }): Promise<Metadata> {
	const { locale } = await params;
	const { test } = await apiQuery<TestQuery, TestQueryVariables>(TestDocument, {
		variables: {
			locale,
		},
	});

	return await buildMetadata({
		title: test.title,
	});
}
