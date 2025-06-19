'use client';

import { useEffect, useState } from 'react';
import s from './NewsTicker.module.scss';
import Link from 'next/link';
import { useIntervalWhen } from 'rooks';
import { AnimatePresence, motion } from 'motion/react';
import useIsDesktop from '@/lib/hooks/useIsDesktop';

export type Props = {
	headline: string;
	news: StartQuery['start']['news'];
};

export default function NewsTicker({ headline, news }: Props) {
	const [index, setIndex] = useState(0);
	const isDesktop = useIsDesktop();

	useIntervalWhen(() => {
		setIndex((index) => (index >= news.length - 1 ? 0 : index + 1));
	}, 4000);

	const newsItem = news[index];

	const variants = isDesktop
		? {
				initial: { translateY: 0 },
				exit: { translateY: -100 },
				animate: { translateY: 0 },
			}
		: {
				initial: { translateX: `0%` },
				exit: { translateX: `-100%` },
				animate: { translateX: 0 },
			};

	return (
		<Link className={s.news} target='_blank' rel='noopener noreferrer' href={newsItem?.url}>
			<h5>{headline}</h5>
			<AnimatePresence mode={'wait'}>
				<motion.h3
					key={index}
					layout
					variants={variants}
					initial='initial'
					animate='animate'
					exit='exit'
					transition={{ duration: 0.3, type: 'ease' }}
				>
					{newsItem?.text}
				</motion.h3>
			</AnimatePresence>
			{newsItem?.url && <span className='mid'>Läs mer →</span>}
		</Link>
	);
}
