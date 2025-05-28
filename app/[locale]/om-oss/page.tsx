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
					/>
				))}
				<ul className={s.staff}>
					{allStaffs.map(({ id, name, image, text }) => (
						<li key={id}>
							<Image data={image.responsiveImage} imgClassName={s.image} />
							<h4>{name}</h4>
							<Content content={text} className={classNames("mid", s.content)} />
						</li>
					))}
				</ul>
			</Article>
			<Footer footer={footer as FooterRecord} />
			<DraftMode url={draftUrl} path={`/`} />
		</>
	);
}
