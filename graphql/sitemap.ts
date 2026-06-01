import { TypedDocumentNode } from '@graphql-typed-document-node/core';
import { parse } from 'graphql/language';

const query = parse(`
	query Sitemap {
		allProjects(first: 500) {
			slug
			_allSlugLocales {
				locale
				value
			}
		}
		allNewsItems(first: 500) {
			slug
			_allSlugLocales {
				locale
				value
			}
			category {
				slug
				_allSlugLocales {
					locale
					value
				}
			}
			_createdAt
		}
	}
`);

type StringMultiLocaleField = {
	locale?: string | null;
	value: string;
};

export type SitemapResult = {
	allProjects: Array<{
		slug: string;
		_allSlugLocales: StringMultiLocaleField[];
	}>;
	allNewsItems: Array<{
		slug: string;
		_allSlugLocales: StringMultiLocaleField[];
		category: {
			slug: string;
			_allSlugLocales: StringMultiLocaleField[];
		};
		_createdAt: string;
	}>;
};

export const SitemapDocument = query as unknown as TypedDocumentNode<SitemapResult>;
