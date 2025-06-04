'use client';

import s from './SectionNavigation.module.scss';
import cn from 'classnames';
import { useScrollInfo } from 'next-dato-utils/hooks';

export default function SectionNavigation() {
	const { scrolledPosition } = useScrollInfo();

	return (
		<nav className={cn(s.nav, scrolledPosition > 0 && s.hide)}>
			<a href={`#tjanster`}>Tjänster</a>
			<a href={`#produkter`}>Produkter</a>
		</nav>
	);
}
