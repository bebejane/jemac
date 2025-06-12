'use client';

import Content from '@/components/common/Content';
import s from './Section.module.scss';
import cn from 'classnames';
import { Image } from 'react-datocms';
import Link from '@/components/nav/Link';

type Props = {
	id?: string;
	headline: any | string;
	text: any;
	project?: ProjectRecord;
	image?: FileField;
	className?: string;
};

export default function Section({ id, headline, text, image, project, className }: Props) {
	return (
		<section
			id={id}
			className={cn(s.section, className)}
		>
			<div className={s.header}>
				{typeof headline === 'object' && (
					<Content
						content={headline}
						className={s.headline}
					/>
				)}
				{typeof headline === 'string' && <h4 className={s.headline}>{headline}</h4>}
				{image && (
					<Image
						data={image.responsiveImage}
						imgClassName={s.largeImage}
					/>
				)}
			</div>
			{text && (
				<div className={s.content}>
					<Content
						content={text}
						className={s.content}
					/>
				</div>
			)}
			{project && (
				<Link
					href={`/projekt/${project.slug}`}
					className={s.project}
				>
					<div className={s.imageWrap}>
						{project.image && (
							<Image
								data={project.image.responsiveImage}
								imgClassName={s.image}
							/>
						)}
					</div>
					<div className={s.projectInfo}>
						<h6>UPPDRAG</h6>
						<h4>{project.client?.name}</h4>
						<span className='mid'>{project.title}</span>
					</div>
				</Link>
			)}
		</section>
	);
}
