import { apiQuery } from 'next-dato-utils/api';
import { AllProjectsDocument, ProjectDocument } from '@/graphql';
import { notFound } from 'next/navigation';
import Article from '@/components/layout/Article';
import { DraftMode } from 'next-dato-utils/components';
import { Metadata } from 'next';
import ProjectGallery from '@/components/common/ProjectGallery';

export type ProjectProps = {
	params: Promise<{ project: string; locale: SiteLocale }>;
};

export default async function ProjectPage({ params }: ProjectProps) {
	const { project: slug, locale } = await params;
	const { project, draftUrl } = await apiQuery<ProjectQuery, ProjectQueryVariables>(
		ProjectDocument,
		{
			variables: {
				slug,
			},
		}
	);

	const { allProjects } = await apiQuery<AllProjectsQuery, AllProjectsQueryVariables>(
		AllProjectsDocument,
		{
			variables: {
				locale,
				first: 2,
			},
		}
	);

	if (!project) return notFound();

	const { title, header, image, summary, client, result, what, why } = project;

	return (
		<>
			<Article title={title} header={header as HeaderRecord}>
				<section>
					<ProjectGallery projects={allProjects} />
				</section>
			</Article>
			<DraftMode url={draftUrl} path={`/projekt/${slug}`} />
		</>
	);
}

export async function generateStaticParams() {
	const { allProjects } = await apiQuery<AllProjectsQuery, AllProjectsQueryVariables>(
		AllProjectsDocument,
		{
			all: true,
		}
	);

	return allProjects.map(({ slug: project }) => ({ project }));
}

export async function generateMetadata({ params }: ProjectProps): Promise<Metadata> {
	const { project: slug } = await params;
	const { project } = await apiQuery<ProjectQuery, ProjectQueryVariables>(ProjectDocument, {
		variables: {
			slug,
		},
	});

	return {
		title: project?.title,
	} as Metadata;
}
