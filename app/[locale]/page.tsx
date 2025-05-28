import s from './page.module.scss';
import { StartDocument } from '@/graphql';
import { apiQuery } from 'next-dato-utils/api';
import { DraftMode } from 'next-dato-utils/components';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import Footer from '@/components/layout/Footer';
import Article from '@/components/layout/Article';
import Link from 'next/link';
import { Image } from 'react-datocms';
import Content from '@/components/common/Content';
import Shortcut from '@/components/common/Shortcut';

export default async function Home({ params }: PageProps) {
	const { locale } = await params;
	setRequestLocale(locale);

	const { start, draftUrl } = await apiQuery<StartQuery, StartQueryVariables>(StartDocument, {
		variables: {
			locale,
		},
	});

	if (!start) return notFound();

	const { header, footer, shortcuts } = start;

	return (
		<>
			<Article header={header as HeaderRecord}>
				<ul className={s.shortcuts}>
					{shortcuts?.map((shortcut) => (
						<li key={shortcut.id}>
							<Shortcut shortcut={shortcut as ShortcutRecord} />
						</li>
					))}
				</ul>
			</Article>
			<Footer footer={footer as FooterRecord} />
			<DraftMode url={draftUrl} path={`/`} />
		</>
	);
}
