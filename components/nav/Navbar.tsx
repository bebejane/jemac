'use client';

import s from './Navbar.module.scss';
import cn from 'classnames';
import { usePathname, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { CSSProperties, useEffect, useRef, useState } from 'react';
import { Menu, MenuItem } from '@/lib/menu';
import { useWindowSize } from 'rooks';
import { useScrollInfo } from 'next-dato-utils/hooks';

export type NavbarProps = {
	menu: Menu;
	bottom?: boolean;
};

export default function Navbar({ menu, bottom }: NavbarProps) {
	const path = usePathname();
	const qs = useSearchParams().toString();
	const pathname = `${path}${qs.length > 0 ? `?${qs}` : ''}`;
	const [selected, setSelected] = useState<string | null>(null);
	const logoRef = useRef<HTMLImageElement>(null);

	function isSelected(item: MenuItem) {
		return pathname.startsWith(item.slug) || pathname === item.slug;
	}

	function handleLeave() {
		setSelected(null);
	}
	function handleEnter(id: string) {
		setSelected(id);
	}
	return (
		<>
			<nav className={cn(s.navbar, bottom && s.bottom)}>
				<figure className={s.logo}>
					<Link href={'/'}>
						<img src='/images/logo.svg' alt='Logo' ref={logoRef} />
					</Link>
				</figure>

				<ul className={s.menu} onMouseLeave={handleLeave}>
					{menu.map((item, idx) => (
						<li
							id={`${item.id}-menu`}
							key={`${item.id}-menu`}
							className={cn(isSelected(item) && s.active)}
							onMouseEnter={() => handleEnter(item.sub ? item.id : null)}
						>
							<Link href={item.slug ?? item.href}>{item.title}</Link>
						</li>
					))}
				</ul>
			</nav>
		</>
	);
}
