import { createNavigation } from 'next-intl/navigation';
import { defineRouting } from 'next-intl/routing';

export const locales = ['sv', 'en', 'fi'];
export const defaultLocale = 'sv';
export const localePrefix = 'as-needed';
export const routing = defineRouting({
	locales,
	localePrefix,
	defaultLocale,
	localeDetection: false,
	pathnames: {
		'/': '/',
		'/erbjudande': {
			en: '/offer',
			fi: '/tarjous',
		},
		'/kontakt': {
			en: '/contact',
			fi: '/yhteystiedot',
		},
		'/projekt': {
			en: '/projects',
			fi: '/projektit',
		},
		'/projekt/[project]': {
			en: '/projects/[project]',
			fi: '/projektit/[project]',
		},
		'/om-oss': {
			en: '/about-us',
			fi: '/meista',
		},
		'/bli-en-av-oss': {
			en: '/join-us',
			fi: '/liity-mukaan',
		},
		'/nyheter': {
			en: '/news',
			fi: '/uutiset',
		},
		'/nyheter/[category]': {
			en: '/news/[category]',
			fi: '/uutiset/[category]',
		},
		'/nyheter/[category]/[newsitem]': {
			en: '/news/[category]/[newsitem]',
			fi: '/uutiset/[category]/[newsitem]',
		},
	},
});

export type AppPathnames = keyof typeof routing.pathnames;

export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(routing);
