import s from './page.module.scss';
import { StartDocument, AllProjectsDocument } from '@/graphql';
import { apiQuery } from 'next-dato-utils/api';
import { DraftMode } from 'next-dato-utils/components';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { Image } from 'react-datocms';
import Footer from '@/components/layout/Footer';
import Article from '@/components/layout/Article';
import Content from '@/components/common/Content';
import Shortcut from '@/components/common/Shortcut';
import ProjectGallery from '@/components/common/ProjectGallery';

export default async function Home({ params }: PageProps) {
	const { locale } = await params;
	setRequestLocale(locale);

	const { start, draftUrl } = await apiQuery<StartQuery, StartQueryVariables>(StartDocument, {
		variables: {
			locale,
		},
	});

	const { allProjects } = await apiQuery<AllProjectsQuery, AllProjectsQueryVariables>(
		AllProjectsDocument,
		{
			variables: {
				locale,
				first: 2,
			},
		}
	);

	if (!start) return notFound();

	const { header, footer, shortcuts, textHeadline, textText, jobsHeadline, jobsImage, jobsText } =
		start;
	console.log(allProjects);
	return (
		<>
			<Article header={header as HeaderRecord}>
				<section className={s.shortcuts}>
					<ul>
						{shortcuts?.map((shortcut) => (
							<Shortcut key={shortcut.id} shortcut={shortcut as ShortcutRecord} />
						))}
					</ul>
				</section>
				<section className={s.text}>
					<div>
						<Content content={textHeadline} className={s.headline} />
					</div>
					<div>
						<Content content={textText} className={s.text} />
					</div>
				</section>
				<section className={s.projects}>
					<ProjectGallery projects={allProjects} />
				</section>
				<section className={s.jobs}>
					<div>
						{jobsImage && <Image data={jobsImage.responsiveImage} imgClassName={s.image} />}
					</div>
					<div>
						<Content content={jobsHeadline} className={s.headline} />
						<Content content={jobsText} className={s.text} />
					</div>
				</section>
			</Article>
			<Footer footer={footer as FooterRecord} />
			<DraftMode url={draftUrl} path={`/`} />
		</>
	);
}
