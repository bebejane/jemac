'use client';

import s from './Article.module.scss';
import cn from 'classnames';
import Link from '@/components/nav/Link';
import { Image } from 'react-datocms';
import { Markdown } from 'next-dato-utils/components';
import Content from '@/components/common/Content';
import Header from '@/components/layout/Header';

export type HeaderProps = HeaderRecord & { date?: string; link?: { href: string; text: string } };
export type ArticleProps = {
	title?: string;
	header?: HeaderProps;
	intro?: any;
	content?: any;
	markdown?: boolean;
	className?: string;
	children?: React.ReactNode | React.ReactNode[];
};

export default function Article({ header, content, className, children }: ArticleProps) {
	return (
		<article className={cn(s.article, className)}>
			{header && <Header header={header} />}
			{content && <Content content={content} className={s.content} />}
			{children}
		</article>
	);
}
