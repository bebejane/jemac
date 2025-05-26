import { createNavigation } from 'next-intl/navigation';
import { defineRouting } from 'next-intl/routing';

export const locales = ['sv', 'en'];
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
    },
    '/kontakt': {
      en: '/contact',
    },
    '/projekt': {
      en: '/projects'
    },
    '/projekt/[project]': {
      en: '/projects/[project]'
    },
    '/om-oss': {
      en: '/about-us',
    },
    '/bli-en-av-oss': {
      en: '/join-us',
    },
  }
});

export type AppPathnames = keyof typeof routing.pathnames;

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);

