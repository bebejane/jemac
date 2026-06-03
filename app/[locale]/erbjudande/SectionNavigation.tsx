'use client';

import { Link } from '@/i18n/routing';
import s from './SectionNavigation.module.scss';
import cn from 'classnames';
import { useScrollInfo } from 'next-dato-utils/hooks';
import { useLocale, useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';

export default function SectionNavigation({
	sections: _sections,
}: {
	sections: OfferQuery['offer']['sections'];
}) {
	const { scrolledPosition, documentHeight, viewportHeight } = useScrollInfo();
	const [hide, setHide] = useState(false);
	const locale = useLocale();
	const [sections, setSections] = useState(
		_sections
			.filter((s) => s.menuItem)
			.map((s) => ({ id: s.sectionId, title: s.menuItem, active: false })),
	);

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
				<Link
					key={id}
					locale={locale}
					className={active ? s.active : undefined}
					href={{
						pathname: '/erbjudande',
						hash: id,
					}}
				>
					{title}
				</Link>
			))}
		</nav>
	);
}
