import s from './page.module.scss';
import Article from '@/components/layout/Article';
import { AboutDocument } from '@/graphql';
import { apiQuery } from 'next-dato-utils/api';
import { DraftMode } from 'next-dato-utils/components';
import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Image } from 'react-datocms';
import Section from '@/components/layout/Section';
import Footer from '@/components/layout/Footer';
import Content from '@/components/common/Content';
import classNames from 'classnames';
import { buildMetadata } from '@/app/layout';
import { Metadata } from 'next';

export default async function AboutPage({ params }: PageProps) {
	const { locale } = await params;
	setRequestLocale(locale);

	const { about, allStaffs, draftUrl } = await apiQuery<AboutQuery, AboutQueryVariables>(
		AboutDocument,
		{
			variables: {
				locale,
			},
		}
	);

	if (!about) return notFound();

	const { title, header, sections, footer } = about;

	return (
		<>
			<Article title={title} header={header as HeaderRecord}>
				{sections.map((section) => (
					<Section
						key={section.id}
						project={section.referenceProject as ProjectRecord}
						headline={section.headline}
						text={section.text}
						image={section.image as FileField}
					/>
				))}
				<h2 className={s.headerStaff}>Människorna bakom</h2>
				<ul className={s.staff}>
					{allStaffs.map(({ id, name, image, text, email }) => (
						<li key={id}>
							<Image data={image.responsiveImage} imgClassName={s.image} />
							<h4>{name}</h4>
							{email && <a className={classNames(s.email, "mid")} href={`mailto:${email}`}>{email}</a>}
							<Content content={text} className={classNames('mid', s.content)} />
						</li>
					))}
				</ul>
			</Article>
			<Footer footer={footer as FooterRecord} />
			<DraftMode url={draftUrl} path={`/`} />
		</>
	);
}

export async function generateMetadata({ params }): Promise<Metadata> {
	const { locale } = await params;
	const { about } = await apiQuery<AboutQuery, AboutQueryVariables>(AboutDocument, {
		variables: {
			locale,
		},
	});
	return await buildMetadata({
		title: about.seoMeta.title,
		description: about.seoMeta.description,
	});
}
