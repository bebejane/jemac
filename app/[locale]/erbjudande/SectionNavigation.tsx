'use client';

import s from './SectionNavigation.module.scss';
import cn from 'classnames';
import { useScrollInfo } from 'next-dato-utils/hooks';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';

export default function SectionNavigation() {
	const { scrolledPosition, documentHeight, viewportHeight } = useScrollInfo();
	const [hide, setHide] = useState(false);
	const t = useTranslations('Offer');
	const [sections, setSections] = useState([
		{ id: 'services', title: t('services'), active: false },
		{ id: 'products', title: t('products'), active: false },
	]);

	useEffect(() => {
		const atBottom = scrolledPosition >= documentHeight - viewportHeight * 2;
		setHide(scrolledPosition === 0 || atBottom);
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
				<a id={id} key={id} href={`#${id}`} className={active ? s.active : undefined}>
					{title}
				</a>
			))}
		</nav>
	);
}
