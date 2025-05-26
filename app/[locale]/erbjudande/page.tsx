import Article from '@/components/common/Article';
import s from './page.module.scss';
import { OfferDocument } from '@/graphql';
import { apiQuery } from 'next-dato-utils/api';
import { DraftMode } from 'next-dato-utils/components';
import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';

export default async function OfferPage({ params }: PageProps) {
	const { locale } = await params;
	setRequestLocale(locale);

	const { offer, draftUrl } = await apiQuery<OfferQuery, OfferQueryVariables>(OfferDocument, {
		variables: {
			locale,
		},
	});

	if (!offer) return notFound();
	const { title } = offer;

	return (
		<>
			<Article title={title} />
			<DraftMode url={draftUrl} path={`/`} />
		</>
	);
}
