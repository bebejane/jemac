'use client';

import Content from '@/components/common/Content';
import s from './Header.module.scss';
import cn from 'classnames';
import { Image } from 'react-datocms';
import { HeaderProps } from '@/components/layout/Article';
import Link from 'next/link';

type Props = {
	header: HeaderProps;
};

export default function Header({ header }: Props) {
	const { headline, image, text, align, link, date } = header;
	return (
		<header className={cn(s.header, s[align])}>
			{image?.responsiveImage && <Image data={image.responsiveImage} imgClassName={s.image} fadeInDuration={0} />}
			<div className={s.fade} />
			<div className={s.text}>
				<div className={s.wrap}>
					{headline && <Content content={headline} className={s.headline} />}
					{text && (
						<>
							{date && <span className={s.date}>{date}</span>}
							<Content content={text} className={cn(s.content, 'intro')} />
							{link && (
								<Link className={s.more} href={link.href}>
									{link.text}
								</Link>
							)}
						</>
					)}
				</div>
			</div>
		</header>
	);
}
