'use client';

import Content from '@/components/common/Content';
import s from './Section.module.scss';
import cn from 'classnames';
import { Image } from 'react-datocms';
import Link from '@/components/nav/Link';

type Props = {
	headline: any | string;
	text: any;
	project?: ProjectRecord;
};

export default function Section({ headline, text, project }: Props) {
	return (
		<section className={cn(s.section)}>
			<div className={s.header}>
				{typeof headline === 'object' && <Content content={headline} className={s.headline} />}
				{typeof headline === 'string' && <h4 className={s.headline}>{headline}</h4>}
				{project && (
					<Link href={`/projekt/${project.slug}`} className={s.project}>
						<div className={s.imageWrap}>
							{project.image && (
								<Image data={project.image.responsiveImage} imgClassName={s.image} />
							)}
						</div>
						<div className={s.projectInfo}>
							<h4>{project.client?.name}</h4>
							<span>{project.title}</span>
						</div>
					</Link>
				)}
			</div>
			{text && (
				<div className={s.content}>
					<Content content={text} className={s.content} />
				</div>
			)}
		</section>
	);
}
