import s from './page.module.scss';
import { JoinDocument } from '@/graphql';
import { apiQuery } from 'next-dato-utils/api';
import { DraftMode } from 'next-dato-utils/components';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import Article from '@/components/layout/Article';
import Footer from '@/components/layout/Footer';
import Section from '@/components/layout/Section';
import { buildMetadata } from '@/app/layout';
import { Metadata } from 'next';

export default async function JoinPage({ params }: PageProps) {
	const { locale } = await params;
	setRequestLocale(locale);

	const { join, draftUrl } = await apiQuery<JoinQuery, JoinQueryVariables>(JoinDocument, {
		variables: {
			locale,
		},
	});

	if (!join) return notFound();
	const { title, header, sections, footer } = join;

	return (
		<>
			<Article title={title} header={header as HeaderRecord}>
				{sections.map((section) => (
					<Section
						key={section.id}
						project={section.referenceProject as ProjectRecord}
						headline={section.headline}
						text={section.text}
						image={section.image as FileField}
					/>
				))}
			</Article>
			<Footer footer={footer as FooterRecord} />
			<DraftMode url={draftUrl} path={`/`} />
		</>
	);
}

export async function generateMetadata({ params }): Promise<Metadata> {
	const { locale } = await params;
	const { join } = await apiQuery<JoinQuery, JoinQueryVariables>(JoinDocument, {
		variables: {
			locale,
		},
	});
	return await buildMetadata({
		title: join.seoMeta.title,
		description: join.seoMeta.description,
	});
}
