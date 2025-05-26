import { apiQuery } from 'next-dato-utils/api';
import { AllProjectsDocument, ProjectDocument } from '@/graphql';
import { notFound } from 'next/navigation';
import Article from '@/components/common/Article';
import { DraftMode } from 'next-dato-utils/components';
import { Metadata } from 'next';

export type ProjectProps = {
	params: Promise<{ project: string }>;
	draft?: boolean;
};

export default async function ProjectPage(props: ProjectProps) {
	const { params, draft } = props;
	const { project: slug } = await params;
	const { project, draftUrl } = await apiQuery<ProjectQuery, ProjectQueryVariables>(
		ProjectDocument,
		{
			variables: {
				slug,
			},
		}
	);

	if (!project) return notFound();

	const { title } = project;

	return (
		<>
			<Article title={title}></Article>
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
