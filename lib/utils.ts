import format from 'date-fns/format';
import { sv, enUS, fi } from 'date-fns/locale';
import { capitalize } from 'next-dato-utils/utils';

export function formatDate(date: string, locale: 'sv' | 'en' | 'fi') {
	return capitalize(
		format(new Date(date), 'd MMM yyyy', {
			locale: locale === 'sv' ? sv : locale === 'fi' ? fi : enUS,
		}).replaceAll('.', ''),
	);
}
