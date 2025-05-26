'use client';

import Content from '@/components/common/Content';
import s from './Header.module.scss';
import cn from 'classnames';
import Link from 'next/link';
import { StructuredTextDocument } from 'react-datocms/structured-text';
import { Image } from 'react-datocms';

type Props = {
	headline: any;
	image?: FileField;
	text?: any;
};

export default function Header({ headline, image, text }: Props) {
	return (
		<header className={s.header}>
			{image?.responsiveImage && <Image data={image.responsiveImage} className={s.image} />}
			<div className={s.text}>
				{headline && <Content content={headline} className={s.headline} />}
				{text && <Content content={text} className={s.content} />}
			</div>
		</header>
	);
}
