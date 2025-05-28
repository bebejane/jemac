'use client';

import Content from '@/components/common/Content';
import s from './Shortcut.module.scss';
import cn from 'classnames';
import Link from 'next/link';
import { Image } from 'react-datocms';

type Props = {
	shortcut: ShortcutRecord;
};

export default function FilterBar({ shortcut }: Props) {
	if (!shortcut) return null;

	const { headline, text, id, image, linkText } = shortcut;

	return (
		<div className={cn(s.shortcut)}>
			<Content content={headline} className={s.headline} />
			<Content content={text} className={s.content} />
			<Link href={'/'} className={s.link}>
				{linkText}
			</Link>
		</div>
	);
}
