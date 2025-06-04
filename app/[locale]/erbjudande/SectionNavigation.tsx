'use client';

import s from './SectionNavigation.module.scss';
import cn from 'classnames';
import { useScrollInfo } from 'next-dato-utils/hooks';
import { useEffect, useState } from 'react';

export default function SectionNavigation() {
	const { scrolledPosition } = useScrollInfo();
	const [hide, setHide] = useState(false);
	const [sections, setSections] = useState([
		{ id: 'tjanster', title: 'Tjänster', active: false },
		{ id: 'produkter', title: 'Produkter', active: false },
	]);

	useEffect(() => {
		setHide(scrolledPosition === 0);
	}, [scrolledPosition]);

	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					setSections((prev) => {
						return prev.map((section) => {
							return { ...section, active: section.id === entry.target.id };
						});
					});
				}
			});
		});

		sections.forEach((section) => {
			observer.observe(document.getElementById(section.id));
		});
	}, []);

	return (
		<nav className={cn(s.nav, hide && s.hide)}>
			{sections.map(({ id, title, active }) => (
				<a key={id} href={`#${id}`} className={active ? s.active : undefined}>
					{title}
				</a>
			))}
		</nav>
	);
}
