import s from './page.module.scss';
import { StartDocument, AllShowcaseProjectsDocument } from '@/graphql';
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
import NewsTicker from '@/components/common/NewsTicker';
import { buildMetadata } from '@/app/layout';
import { Metadata } from 'next';
import { getPathname } from '@/i18n/routing';

export default async function Home({ params }: PageProps) {
	const { locale } = await params;
	setRequestLocale(locale);

	const { start, draftUrl } = await apiQuery<StartQuery, StartQueryVariables>(StartDocument, {
		variables: {
			locale,
		},
	});

	const { allProjects } = await apiQuery<AllShowcaseProjectsQuery, AllShowcaseProjectsQueryVariables>(
		AllShowcaseProjectsDocument,
		{
			variables: {
				locale,
			},
		}
	);

	if (!start) return notFound();

	const { header, footer, shortcuts, textHeadline, textText, jobsHeadline, jobsImage, jobsText, newsHeadline, news } =
		start;

	return (
		<>
			<Article header={header as HeaderRecord}>
				<section className={s.shortcuts}>
					<ul>{shortcuts?.map((shortcut) => <Shortcut key={shortcut.id} shortcut={shortcut as ShortcutRecord} />)}</ul>
				</section>
				<section className={s.news}>
					<NewsTicker headline={newsHeadline} news={news} />
				</section>
				<section className={s.text}>
					<div>
						<Content content={textHeadline} className={s.headline} />
					</div>
					<div>
						<Content content={textText} className={s.texts} />
					</div>
				</section>
				<section className={s.projects}>
					<ProjectGallery projects={allProjects} title='Exempel på vad vi gjort' />
				</section>
				<section className={s.jobs}>
					<div>{jobsImage && <Image data={jobsImage.responsiveImage} imgClassName={s.image} />}</div>
					<div>
						<Content content={jobsHeadline} className={s.headline} />
						<Content content={jobsText} className={s.jobtext} />
					</div>
				</section>
			</Article>
			<Footer footer={footer as FooterRecord} />
			<DraftMode url={draftUrl} path={`/`} />
		</>
	);
}

export async function generateMetadata({ params }): Promise<Metadata> {
	const { locale } = await params;
	const { start } = await apiQuery<StartQuery, StartQueryVariables>(StartDocument, {
		variables: {
			locale,
		},
	});

	return await buildMetadata({
		title: start.seoMeta.title,
		description: start.seoMeta.description,
		pathname: getPathname({ locale, href: '/' }),
		locale,
	});
}
