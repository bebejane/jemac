'use client';

import Content from '@/components/common/Content';
import s from './Header.module.scss';
import cn from 'classnames';
import Link from 'next/link';
import { StructuredTextDocument } from 'react-datocms/structured-text';
import { Image } from 'react-datocms';

type Props = {
	header: HeaderRecord;
};

export default function Header({ header }: Props) {
	const { headline, image, text, align } = header;
	return (
		<header className={cn(s.header, s[align])}>
			{image?.responsiveImage && <Image data={image.responsiveImage} imgClassName={s.image} />}
			<div className={s.fade} />
			<div className={s.text}>
				<div className={s.wrap}>
					{headline && <Content content={headline} className={s.headline} />}
					{text && <Content content={text} className={cn(s.content, "intro")} />}
				</div>
			</div>
		</header>
	);
}
