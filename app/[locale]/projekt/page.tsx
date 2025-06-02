import Article from '@/components/layout/Article';
import Section from '@/components/layout/Section';
import Footer from '@/components/layout/Footer';
import { AllProjectsShowcaseDocument, ShowcaseDocument } from '@/graphql';
import { apiQuery } from 'next-dato-utils/api';
import { DraftMode } from 'next-dato-utils/components';
import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import ProjectGallery from '@/components/common/ProjectGallery';
import s from './page.module.scss';


export default async function ShowcasePage({ params }: PageProps) {
	const { locale } = await params;
	setRequestLocale(locale);

	const { showcase, draftUrl } = await apiQuery<ShowcaseQuery, ShowcaseQueryVariables>(
		ShowcaseDocument,
		{
			variables: {
				locale,
			},
		}
	);

	const { allProjects } = await apiQuery<
		AllProjectsShowcaseQuery,
		AllProjectsShowcaseQueryVariables
	>(AllProjectsShowcaseDocument, {
		variables: {
			locale,
		},
	});

	if (!showcase) return notFound();
	const { header, sections, title, footer } = showcase;

	return (
		<>
			<Article title={title} header={header as HeaderRecord}>
				<section>
					<ProjectGallery projects={allProjects} />
				</section>
				{sections.map((section) => (
					<Section
						key={section.id}
						project={section.referenceProject as ProjectRecord}
						headline={section.headline}
						text={section.text}
						className={s.desc}
					/>
				))}
			</Article>
			<Footer footer={footer as FooterRecord} />
			<DraftMode url={draftUrl} path={`/`} />
		</>
	);
}
