import s from './page.module.scss';
import { apiQuery } from 'next-dato-utils/api';
import { AllShowcaseProjectsDocument, ProjectDocument, ShowcaseFooterDocument } from '@/graphql';
import { notFound } from 'next/navigation';
import Article from '@/components/layout/Article';
import { DraftMode } from 'next-dato-utils/components';
import { Metadata } from 'next';
import ProjectGallery from '@/components/common/ProjectGallery';
import { Image } from 'react-datocms';
import Content from '@/components/common/Content';
import { setRequestLocale } from 'next-intl/server';
import cn from 'classnames';
import Footer from '@/components/layout/Footer';

export type ProjectProps = {
	params: Promise<{ project: string; locale: SiteLocale }>;
};

export const dynamic = 'force-dynamic';

export default async function ProjectPage({ params }: ProjectProps) {
	const { project: slug, locale } = await params;
	setRequestLocale(locale);

	const { project, draftUrl } = await apiQuery<ProjectQuery, ProjectQueryVariables>(
		ProjectDocument,
		{
			variables: {
				locale,
				slug,
			},
		}
	);

	const { showcase } = await apiQuery<ShowcaseFooterQuery, ShowcaseFooterQueryVariables>(
		ShowcaseFooterDocument,
		{
			variables: {
				locale,
			},
		}
	);

	const { allProjects } = await apiQuery<
		AllShowcaseProjectsQuery,
		AllShowcaseProjectsQueryVariables
	>(AllShowcaseProjectsDocument, {
		variables: {
			locale,
			slug: project.slug,
		},
	});

	if (!project) return notFound();

	const { title, headline, text, client, result, what, why, image } = project;
	const { footer } = showcase;

	return (
		<>
			<Article title={title} className={s.page}>
				<header className={s.header}>
					<div className={s.image}>
						{image?.responsiveImage && <Image data={image.responsiveImage} />}
					</div>
					<div className={s.content}>
						<img className={s.logo} src={client?.logo?.url} alt={client?.name} />
						<Content content={headline} className={s.headline} />
						<Content content={text} className={cn(s.text, 'intro')} />
					</div>
				</header>
				<section className={s.section}>
					<div className={s.header}>
						<h5>Utgångspunkt</h5>
						<h3>Vad behövdes för projektet</h3>
					</div>
					<Content content={why} className={s.content} />
				</section>
				<section className={s.section}>
					<div className={s.header}>
						<h5>Lösningen</h5>
						<h3>Vad gjorde vi?</h3>
					</div>
					<Content content={what} className={s.content} />
				</section>
				<section className={s.section}>
					<div className={s.header}>
						<h5>Resultat</h5>
						<h3>Vad blev effekten?</h3>
					</div>
					<Content content={result} className={s.content} />
				</section>
				<section>
					<ProjectGallery projects={allProjects} />
				</section>
			</Article>
			<Footer footer={footer as FooterRecord} />
			<DraftMode url={draftUrl} path={`/projekt/${slug}`} />
		</>
	);
}

export async function generateStaticParams() {
	const { allProjects } = await apiQuery<
		AllShowcaseProjectsQuery,
		AllShowcaseProjectsQueryVariables
	>(AllShowcaseProjectsDocument, {
		all: true,
	});

	return allProjects.map(({ slug: project }) => ({ project }));
}

export async function generateMetadata({ params }: ProjectProps): Promise<Metadata> {
	const { project: slug, locale } = await params;

	setRequestLocale(locale);

	const { project } = await apiQuery<ProjectQuery, ProjectQueryVariables>(ProjectDocument, {
		variables: {
			slug,
			locale,
		},
	});

	return {
		title: project?.title,
	} as Metadata;
}
