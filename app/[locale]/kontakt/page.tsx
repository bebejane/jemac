import s from './page.module.scss';
import { apiQuery } from 'next-dato-utils/api';
import { ContactDocument } from '@/graphql';
import { DraftMode } from 'next-dato-utils/components';
import { notFound } from 'next/navigation';
import Article from '@/components/layout/Article';
import { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { Image } from 'react-datocms';
import Content from '@/components/common/Content';
import Section from '@/components/layout/Section';
import Footer from '@/components/layout/Footer';

export default async function ContactPage({ params }: PageProps) {
	const { locale } = await params;
	setRequestLocale(locale);

	const { contact, draftUrl } = await apiQuery<ContactQuery, ContactQueryVariables>(ContactDocument, {
		variables: {
			locale,
		},
	});

	if (!contact) return notFound();
	const { title, sections, footer, header } = contact;

	return (
		<>
			<Article
				title={title}
				header={header as HeaderRecord}
			>
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
			<DraftMode
				url={draftUrl}
				path={'/kontakt'}
			/>
		</>
	);
}

export async function generateMetadata({ params }) {
	return {
		title: 'Kontakt',
	} as Metadata;
}
