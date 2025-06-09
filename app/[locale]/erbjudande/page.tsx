import s from './page.module.scss';
import Article from '@/components/layout/Article';
import { OfferDocument } from '@/graphql';
import { apiQuery } from 'next-dato-utils/api';
import { DraftMode } from 'next-dato-utils/components';
import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import Section from '@/components/layout/Section';
import Footer from '@/components/layout/Footer';
import { render, StructuredTextDocument } from 'datocms-structured-text-to-plain-text';
import { Link } from '@/i18n/routing';
import SectionNavigation from '@/app/[locale]/erbjudande/SectionNavigation';

export default async function OfferPage({ params }: PageProps) {
	const { locale } = await params;
	setRequestLocale(locale);

	const { offer, draftUrl } = await apiQuery<OfferQuery, OfferQueryVariables>(OfferDocument, {
		variables: {
			locale,
		},
	});

	if (!offer) return notFound();

	const { title, header, sections, footer } = offer;

	return (
		<>
			<Article
				title={title}
				header={header as HeaderRecord}
			>
				<SectionNavigation />
				{sections.map((section, idx) => (
					<Section
						id={section.sectionId}
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
				path={`/`}
			/>
		</>
	);
}
