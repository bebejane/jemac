'use client';

import s from './SectionNavigation.module.scss';
import cn from 'classnames';
import { useScrollInfo } from 'next-dato-utils/hooks';
import { useEffect, useState } from 'react';

export default function SectionNavigation() {
	const { scrolledPosition } = useScrollInfo();
	const [hide, setHide] = useState(false);

	useEffect(() => {
		setHide(scrolledPosition > 0);
	}, [scrolledPosition]);

	return (
		<nav className={cn(s.nav, hide && s.hide)}>
			<a href={`#tjanster`}>Tjänster</a>
			<a href={`#produkter`}>Produkter</a>
		</nav>
	);
}
