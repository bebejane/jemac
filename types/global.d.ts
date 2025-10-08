type SiteLocale = 'en' | 'se';
type LocaleParams<K = string, T = string> = {
	params: Promise<{ locale: SiteLocale; [key: string]: T }>;
	searchParams?: any;
};
type PageProps = {
	params: LocaleParams['params'];
};
