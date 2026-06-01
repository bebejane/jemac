'use client';

import Content from '@/components/common/Content';
import s from './Shortcut.module.scss';
import cn from 'classnames';
import Link from '@/components/nav/Link';
import { Image } from 'react-datocms';
import { usePathname } from '@/i18n/routing';

type Props = {
	shortcut: ShortcutRecord;
};

export default function FilterBar({ shortcut }: Props) {
	if (!shortcut) return null;
	const pathname = usePathname();
	const { headline, text, id, image, linkText } = shortcut;

	return (
		<li className={s.shortcut}>
			<figure>
				<div className={s.fade}></div>
				<Image data={image.responsiveImage} className={s.image} />
			</figure>

			<Link href={`/${pathname}#${shortcut.sectionId}`}>
				<div className={s.text}>
					<Content content={headline} className={s.headline} />
					<Content content={text} className={s.content} />
				</div>
				<span className='mid'>{linkText} →</span>
			</Link>
		</li>
	);
}
