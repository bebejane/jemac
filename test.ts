import 'dotenv/config';
import client from '@/lib/client';
import { apiQuery } from 'next-dato-utils/api';
import { getPathname } from '@/i18n/routing';
import { AllProjectsDocument } from '@/graphql';

(async () => {
	const items = await client.items.list({
		limit: 2,
		version: 'published',
		nested: true,
		filter: { type: 'project' },
	});
	//console.log(items);
})();
