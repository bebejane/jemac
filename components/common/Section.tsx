'use client';

import Content from '@/components/common/Content';
import s from './Section.module.scss';
import cn from 'classnames';

type Props = {
	headline: any;
	text: any;
	project?: ProjectRecord;
};

export default function Header({ headline, text, project }: Props) {
	return (
		<section className={cn(s.section)}>
			<div>{headline && <Content content={headline} className={s.headline} />}</div>
			<div>{text && <Content content={text} className={s.content} />}</div>
		</section>
	);
}
