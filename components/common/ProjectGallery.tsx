'use client';

import 'swiper/css';
import s from './ProjectGallery.module.scss';
import cn from 'classnames';
import { Swiper as SwiperReact, SwiperSlide } from 'swiper/react';
import type { Swiper } from 'swiper';
import { Mousewheel } from 'swiper/modules';
import { useRef, useState } from 'react';
import { useInViewRef } from 'rooks';
import Content from '@/components/common/Content';
import Link from '@/components/nav/Link';

type Props = {
	projects: AllShowcaseProjectsQuery['allProjects'];
	noborder?: boolean;
	title: string;
};

export default function ProjectGallery({ projects, noborder, title }: Props) {
	const swiperRef = useRef<Swiper | null>(null);
	const [index, setIndex] = useState(0);
	const [ref, inView] = useInViewRef({ threshold: 0.4 });

	return (
		<>
			<div className={cn(s.header, noborder && s.noborder)}>
				<h3>{title}</h3>
				<div className={s.arrows}>
					<button className={cn(s.back)} onClick={() => swiperRef.current?.slidePrev()}>
						<img src='/images/arrow.svg' alt='‹' />
					</button>
					<button className={cn(s.forward)} onClick={() => swiperRef.current?.slideNext()}>
						<img src='/images/arrow.svg' alt='‹' />
					</button>
				</div>
			</div>
			<div className={s.projects} ref={ref}>
				<SwiperReact
					id={`clients-start`}
					modules={[Mousewheel]}
					className={s.swiper}
					wrapperClass={s.slideWrap}
					loop={true}
					slidesPerView={'auto'}
					initialSlide={index}
					direction={'horizontal'}
					mousewheel={{
						forceToAxis: true,
						releaseOnEdges: true,
						invert: false,
						sensitivity: 1,
						//thresholdDelta: 100,
						//thresholdTime: 100,
					}}
					onSlideChange={({ realIndex }) => setIndex(realIndex)}
					onSwiper={(swiper) => (swiperRef.current = swiper)}
				>
					{projects.map((project, idx) => (
						<SwiperSlide key={idx} className={s.slide}>
							<Link href={`/projekt/${project.slug}`}>
								<div className={s.bar}>
									<div className={s.logo}>
										{project.client?.logo && <img src={project.client?.logo.url} alt={project.client?.name} />}
									</div>
									<div className={s.arrow}>
										<button>›</button>
									</div>
								</div>
								<h4>{project.title}</h4>
								<Content content={project.text} className={cn(s.text, 'mid')} />
							</Link>
						</SwiperSlide>
					))}
				</SwiperReact>
			</div>
		</>
	);
}
