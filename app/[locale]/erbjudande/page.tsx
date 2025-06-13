import s from './page.module.scss';
import Article from '@/components/layout/Article';
import { OfferDocument } from '@/graphql';
import { apiQuery } from 'next-dato-utils/api';
import { DraftMode } from 'next-dato-utils/components';
import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import Section from '@/components/layout/Section';
import Footer from '@/components/layout/Footer';
import SectionNavigation from '@/app/[locale]/erbjudande/SectionNavigation';
import { buildMetadata } from '@/app/layout';
import { Metadata } from 'next';
import { getPathname } from '@/i18n/routing';

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
			<Article title={title} header={header as HeaderRecord}>
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
			<DraftMode url={draftUrl} path={`/`} />
		</>
	);
}

export async function generateMetadata({ params }): Promise<Metadata> {
	const { locale } = await params;
	const { offer } = await apiQuery<OfferQuery, OfferQueryVariables>(OfferDocument, {
		variables: {
			locale,
		},
	});
	const pathname = getPathname({ locale, href: { pathname: '/erbjudande' } });
	return await buildMetadata({
		title: offer.seoMeta.title,
		description: offer.seoMeta.description,
		pathname,
		locale,
	});
}
