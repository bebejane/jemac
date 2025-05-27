'use client';

import s from './Article.module.scss';
import cn from 'classnames';
import Link from 'next/link';
import { Image } from 'react-datocms';
import { Markdown } from 'next-dato-utils/components';
import Content from './Content';
import Header from '@/components/common/Header';

export type ArticleProps = {
	title?: string;
	headline: any;
	image?: FileField;
	headerPosition?: 'left' | 'right';
	intro?: any;
	content?: any;
	markdown?: boolean;
	link?: {
		href: string;
		text: string;
	};
	className?: string;
	children?: React.ReactNode | React.ReactNode[];
};

export default function Article({
	title,
	headline,
	image,
	intro,
	headerPosition = 'left',
	content,
	link,
	className,
	children,
}: ArticleProps) {
	return (
		<article className={cn(s.article, className)}>
			{headline && (
				<Header
					headline={headline}
					image={image as FileField}
					text={intro}
					position={headerPosition}
				/>
			)}
			{content && <Content content={content} className={s.content} />}
			{children}
		</article>
	);
}
