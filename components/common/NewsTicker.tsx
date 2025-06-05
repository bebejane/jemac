'use client';

import { useEffect, useState } from 'react';
import s from './NewsTicker.module.scss';
import cn from 'classnames';
import Link from 'next/link';
import { useIntervalWhen } from 'rooks';

export type Props = {
	headline: string;
	news: StartQuery['start']['news'];
};

export default function NewsTicker({ headline, news }: Props) {
	const [index, setIndex] = useState(0);

	useIntervalWhen(() => {
		setIndex((index) => (index >= news.length - 1 ? 0 : index + 1));
	}, 4000);

	const newsItem = news[index];

	return (
		<div className={s.news}>
			<h5>{headline}</h5>
			<h3>{newsItem?.text}</h3>
			{newsItem?.url && <Link target="_blank"
				rel="noopener noreferrer"
				className="mid" href={newsItem?.url}>Läs mer →</Link>}
		</div>
	);
}
