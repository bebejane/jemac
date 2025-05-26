import { apiQuery } from 'next-dato-utils/api';
import { ContactDocument } from '@/graphql';
import { DraftMode } from 'next-dato-utils/components';
import { notFound } from 'next/navigation';
import Article from '@/components/common/Article';
import { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';

export default async function ContactPage({ params }: PageProps) {
	const { locale } = await params;
	setRequestLocale(locale);

	const { contact, draftUrl } = await apiQuery<ContactQuery, ContactQueryVariables>(
		ContactDocument,
		{
			variables: {
				locale,
			},
		}
	);

	if (!contact) return notFound();
	const { title, intro } = contact;

	return (
		<>
			<Article title={title} intro={intro}></Article>
			<DraftMode url={draftUrl} path={'/kontakt'} />
		</>
	);
}

export async function generateMetadata({ params }) {
	return {
		title: 'Kontakt',
	} as Metadata;
}
