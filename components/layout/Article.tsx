'use client';

import s from './Article.module.scss';
import cn from 'classnames';
import Link from 'next/link';
import { Image } from 'react-datocms';
import { Markdown } from 'next-dato-utils/components';
import Content from '@/components/common/Content';
import Header from '@/components/layout/Header';

export type ArticleProps = {
	title?: string;
	header?: HeaderRecord;
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
	header,
	intro,
	content,
	link,
	className,
	children,
}: ArticleProps) {
	return (
		<article className={cn(s.article, className)}>
			{header && <Header header={header} />}
			{content && <Content content={content} className={s.content} />}
			{children}
		</article>
	);
}
