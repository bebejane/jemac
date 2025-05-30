'use client';

import Content from '@/components/common/Content';
import s from './Shortcut.module.scss';
import cn from 'classnames';
import { Link } from '@/i18n/routing';
import { Image } from 'react-datocms';

type Props = {
	shortcut: ShortcutRecord;
};

export default function FilterBar({ shortcut }: Props) {
	if (!shortcut) return null;

	const { headline, text, id, image, linkText } = shortcut;

	return (
		<li className={s.shortcut}>
			<figure>
				<Image data={image.responsiveImage} className={s.image} />
			</figure>

			<Link href={`/`}>
				<div className={s.text}>
					<Content content={headline} className={s.headline} />
					<Content content={text} className={s.content} />
				</div>
				<span>{linkText}</span>
			</Link>
		</li>
	);
}
