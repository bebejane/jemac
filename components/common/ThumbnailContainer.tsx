import Link from '@/components/nav/Link';
import s from './ThumbnailContainer.module.scss';
import cn from 'classnames';
import { getTranslations } from 'next-intl/server';

export type ThumbnailProps = {
	children: any;
	className?: string;
	header?: {
		title: string;
		href: string;
	};
};

export default async function ThumbnailContainer({ children, header, className }: ThumbnailProps) {
	const t = await getTranslations('Common');
	return (
		<>
			{header && (
				<header className={s.header}>
					<h2>{header.title}</h2>
					<Link href={header.href}>{t('showAll')}</Link>
				</header>
			)}
			<ul className={cn(s.container, className)}>{children}</ul>
		</>
	);
}
