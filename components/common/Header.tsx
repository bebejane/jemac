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
	position: 'left' | 'right';
};

export default function Header({ headline, image, text, position = 'left' }: Props) {
	return (
		<header className={cn(s.header, s[position])}>
			{image?.responsiveImage && <Image data={image.responsiveImage} className={s.image} />}
			<div className={s.fade} />
			<div className={s.text}>
				<div className={s.wrap}>
					{headline && <Content content={headline} className={s.headline} />}
					{text && <Content content={text} className={s.content} />}
				</div>
			</div>
		</header>
	);
}
