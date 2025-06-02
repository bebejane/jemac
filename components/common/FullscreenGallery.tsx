'use client';

import 'swiper/css';
import s from './FullscreenGallery.module.scss';
import cn from 'classnames';
import React from 'react';
import { Image } from 'react-datocms';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState, useRef, useEffect } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import { useStore, useShallow } from '@/lib/store';

export type GalleryProps = {};

export default function FullscreenGallery({}: GalleryProps) {
	const swiperRef = useRef<SwiperType | undefined>();
	const [realIndex, setRealIndex] = useState(0);
	const [title, setTitle] = useState<string>();
	const [loaded, setLoaded] = useState<{ [key: string]: boolean }>({});
	const [initLoaded, setInitLoaded] = useState(false);
	const [gallery, galleryId, setGallery, setGalleryId] = useStore(
		useShallow((state) => [state.gallery, state.galleryId, state.setGallery, state.setGalleryId])
	);
	const isSingleSlide = gallery?.length === 1;
	const isHidden = !gallery || !galleryId;

	useEffect(() => {
		if (gallery) setTitle(gallery[realIndex]?.title);
	}, [realIndex, gallery, setTitle]);

	useEffect(() => {
		const index =
			gallery?.findIndex((image) => image.id === galleryId) > -1
				? gallery.findIndex((image) => image.id === galleryId)
				: 0;
		swiperRef.current?.slideTo(index, 0, false);
		setRealIndex(index);
	}, [galleryId]);

	useEffect(() => {
		// handle  keys
		const handleKeys = (e: KeyboardEvent) => {
			if (isHidden) return;
			if (e.key === 'ArrowRight') swiperRef?.current?.slideNext();
			if (e.key === 'ArrowLeft') swiperRef?.current?.slidePrev();
			if (e.key === 'Escape') setGalleryId(null);
		};
		document.addEventListener('keydown', handleKeys);
		return () => document.removeEventListener('keydown', handleKeys);
	}, [isHidden]);

	useEffect(() => {
		setTimeout(() => setInitLoaded(true), 300);
	}, [initLoaded]); // Delay loader

	if (isHidden) return null;

	return (
		<div className={cn(s.gallery, gallery.length <= 1 && s.noArrows, isSingleSlide && s.noArrows)}>
			<div
				role='button'
				aria-label='Previous image'
				className={s.back}
				onClick={() => swiperRef.current?.slidePrev()}
			>
				<img src='/images/arrow.svg' className={s.arrow} />
			</div>

			<Swiper
				id={`main-gallery`}
				loop={true}
				spaceBetween={500}
				simulateTouch={!isSingleSlide}
				slidesPerView={1}
				initialSlide={0}
				onSlideChange={({ realIndex }) => setRealIndex(realIndex)}
				onSwiper={(swiper) => (swiperRef.current = swiper)}
				onClick={() => swiperRef.current?.slideNext()}
			>
				{gallery?.map((image, idx) => (
					<SwiperSlide key={idx} className={cn(s.slide)}>
						{image.responsiveImage ? (
							<Image
								imgClassName={s.image}
								data={image.responsiveImage}
								usePlaceholder={false}
								onLoad={() => setLoaded((prevState) => ({ ...prevState, [image.id]: true }))}
							/>
						) : (
							<div className={s.svg}>
								<img
									src={image.url}
									className={s.image}
									onLoad={() => setLoaded((prevState) => ({ ...prevState, [image.id]: true }))}
								/>
							</div>
						)}
						{!loaded[image.id] && initLoaded && <div className={s.loading}>Loading...</div>}
					</SwiperSlide>
				))}
			</Swiper>

			<div
				role='button'
				aria-label='Next image'
				className={s.forward}
				onClick={() => swiperRef.current?.slideNext()}
			>
				<img src='/images/arrow.svg' className={s.arrow} />
			</div>
			<div className={s.caption}>{title && <p className='medium'>{title}</p>}</div>
			<div role='button' className={s.close} onClick={() => setGalleryId(null)}>
				<img src='/images/close.svg' alt='Close' />
			</div>
		</div>
	);
}
