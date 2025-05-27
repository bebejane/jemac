import s from './page.module.scss';
import { StartDocument } from '@/graphql';
import { apiQuery } from 'next-dato-utils/api';
import { DraftMode } from 'next-dato-utils/components';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Article from '@/components/common/Article';

export default async function Home({ params }: PageProps) {
	const { locale } = await params;
	setRequestLocale(locale);

	const { start, draftUrl } = await apiQuery<StartQuery, StartQueryVariables>(StartDocument, {
		variables: {
			locale,
		},
	});

	if (!start) return notFound();

	const { headerHeadline, headerImage, headerText } = start;

	return (
		<>
			<Article
				headline={headerHeadline}
				image={headerImage as FileField}
				intro={headerText}
				headerPosition='left'
			/>
			<Footer footer={start.footer as FooterRecord} />
			<DraftMode url={draftUrl} path={`/`} />
		</>
	);
}
