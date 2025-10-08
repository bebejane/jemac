import format from 'date-fns/format';
import { sv, enUS } from 'date-fns/locale';
import { capitalize } from 'next-dato-utils/utils';

export function formatDate(date: string, locale: 'sv' | 'en') {
	return capitalize(format(new Date(date), 'd MMM yyyy', { locale: locale === 'sv' ? sv : enUS }).replaceAll('.', ''));
}
