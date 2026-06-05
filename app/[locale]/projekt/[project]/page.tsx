import s from './page.module.scss';
import { apiQuery } from 'next-dato-utils/api';
import { AllShowcaseProjectsDocument, ProjectDocument, ProjectFooterDocument } from '@/graphql';
import { notFound } from 'next/navigation';
import Article from '@/components/layout/Article';
import { DraftMode } from 'next-dato-utils/components';
import { Metadata } from 'next';
import ProjectGallery from '@/components/common/ProjectGallery';
import { Image } from 'react-datocms';
import Content from '@/components/common/Content';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import cn from 'classnames';
import { buildMetadata } from '@/app/[locale]/layout';
import Footer from '@/components/layout/Footer';
import { getPathname } from '@/i18n/routing';

export type ProjectProps = {
	params: Promise<{ project: string; locale: SiteLocale }>;
};

export const dynamic = 'force-dynamic';

export default async function ProjectPage({ params }: ProjectProps) {
	const { project: slug, locale } = await params;
	setRequestLocale(locale);

	const [
		{ project, draftUrl },
		{ projectFooter, draftUrl: footerDraftUrl },
		{ allProjects, draftUrl: allProjectsDraftUrl },
	] = await Promise.all([
		apiQuery(ProjectDocument, {
			variables: {
				locale,
				slug,
			},
		}),
		apiQuery(ProjectFooterDocument, {
			variables: {
				locale,
			},
		}),
		apiQuery(AllShowcaseProjectsDocument, {
			variables: {
				locale,
				slug,
			},
		}),
	]);

	if (!project) return notFound();

	const t = await getTranslations('Projects');
	const { title, headline, text, client, result, what, why, image } = project;
	const { footer } = projectFooter;

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
						<h5>{t('startingPoint')}</h5>
						<h3>{t('whatWasNeeded')}</h3>
					</div>
					<Content content={why} className={s.content} />
				</section>
				<section className={s.section}>
					<div className={s.header}>
						<h5>{t('solution')}</h5>
						<h3>{t('whatWeDid')}</h3>
					</div>
					<Content content={what} className={s.content} />
				</section>
				<section className={s.section}>
					<div className={s.header}>
						<h5>{t('result')}</h5>
						<h3>{t('effect')}</h3>
					</div>
					<Content content={result} className={s.content} />
				</section>
				<section>
					<ProjectGallery projects={allProjects as ProjectRecord[]} title={t('moreExamples')} />
				</section>
			</Article>
			<Footer footer={footer as FooterRecord} />
			<DraftMode
				url={[draftUrl, footerDraftUrl, allProjectsDraftUrl]}
				path={getPathname({
					locale,
					href: { pathname: '/projekt/[project]', params: { project: slug } },
				})}
			/>
		</>
	);
}

export async function generateStaticParams() {
	const { allProjects } = await apiQuery(AllShowcaseProjectsDocument, {
		all: true,
	});

	return allProjects.map(({ slug: project }) => ({ project }));
}

export async function generateMetadata({ params }: ProjectProps): Promise<Metadata> {
	const { project: slug, locale } = await params;

	setRequestLocale(locale);

	const { project } = await apiQuery(ProjectDocument, {
		variables: {
			slug,
			locale,
		},
	});

	const pathname = getPathname({
		locale,
		href: { pathname: `/projekt/[project]`, params: { project: slug } },
	});

	return await buildMetadata({
		title: project?.seoMeta.title,
		description: project?.seoMeta.description,
		pathname,
		locale,
	});
}
