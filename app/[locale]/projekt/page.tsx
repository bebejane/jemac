import s from './page.module.scss';
import Article from '@/components/layout/Article';
import Section from '@/components/layout/Section';
import Footer from '@/components/layout/Footer';
import { AllShowcaseProjectsDocument, ShowcaseDocument } from '@/graphql';
import { apiQuery } from 'next-dato-utils/api';
import { DraftMode } from 'next-dato-utils/components';
import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import ProjectGallery from '@/components/common/ProjectGallery';
import { buildMetadata } from '@/app/layout';
import { Metadata } from 'next';
import { getPathname } from '@/i18n/routing';

export default async function ShowcasePage({ params }: PageProps) {
	const { locale } = await params;
	setRequestLocale(locale);

	const { showcase, draftUrl } = await apiQuery(ShowcaseDocument, {
		variables: {
			locale,
		},
	});

	const { allProjects } = await apiQuery(AllShowcaseProjectsDocument, {
		variables: {
			locale,
		},
	});

	if (!showcase) return notFound();
	const { header, sections, title, footer } = showcase;

	return (
		<>
			<Article title={title} header={header as HeaderRecord}>
				<section className={s.gallery}>
					<ProjectGallery projects={allProjects} noborder={true} title='Exempel på vad vi gjort' />
				</section>
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
	const { showcase } = await apiQuery(ShowcaseDocument, {
		variables: {
			locale,
		},
	});

	const pathname = getPathname({ locale, href: { pathname: '/projekt' } });

	return await buildMetadata({
		title: showcase.seoMeta.title,
		description: showcase.seoMeta.description,
		locale,
		pathname,
	});
}
