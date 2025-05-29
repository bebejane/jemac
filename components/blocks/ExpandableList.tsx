'use client';

import s from './ExpandableList.module.scss';
import cn from 'classnames';
import { useEffect, useState } from 'react';
import Content from '../common/Content';
import { useWindowSize } from 'rooks';

export type ExpandableListProps = {
	data: ExpandableListRecord;
};
export default function ExpandableList({ data }: ExpandableListProps) {
	const [toggles, setToggles] = useState<{ [id: string]: { open: boolean; height: number } }>({});
	const { innerHeight, innerWidth } = useWindowSize();

	function toggle(id: string) {
		setToggles((state) => ({
			...state,
			[id]: { ...state[id], open: !state[id]?.open ? true : false },
		}));
	}

	useEffect(() => {
		const t = {};
		data.items.forEach(
			(item) =>
				(t[item.id] = {
					...toggles[item.id],
					height: document.getElementById(`list-${item.id}`)?.scrollHeight ?? 0,
				})
		);
		setToggles(t);
	}, [innerHeight, innerWidth]);

	return (
		<ul className={s.list} role='list'>
			{data.items?.map((item) => (
				<li
					id={`list-${item.id}`}
					key={item.id}
					role='listitem'
					className={s.wrap}
					onClick={() => toggle(item.id)}
					style={{ maxHeight: toggles[item.id]?.open ? `${toggles[item.id]?.height}px` : '0px' }}
				>
					<div className={s.item}>
						<div className={s.title}>{item.title}</div>
						<div className={s.icon}>{toggles[item.id]?.open ? '-' : '+'}</div>
					</div>
					<Content content={item.text} className={cn(s.content, s.open)} />
				</li>
			))}
		</ul>
	);
}
