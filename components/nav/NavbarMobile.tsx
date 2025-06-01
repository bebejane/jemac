'use client';

import s from './NavbarMobile.module.scss';
import cn from 'classnames';
import { usePathname, useSearchParams } from 'next/navigation';
import Link from '@/components/nav/Link';
import { useEffect, useState } from 'react';
import { Menu } from '@/lib/menu';
import Hamburger from './Hamburger';

export type NavbarMobileProps = {
	menu: Menu;
};

export default function NavbarMobile({ menu }: NavbarMobileProps) {
	const path = usePathname();
	const qs = useSearchParams().toString();
	const pathname = `${path}${qs.length > 0 ? `?${qs}` : ''}`;
	const [selected, setSelected] = useState<string | null>(null);
	const [open, setOpen] = useState(false);
	const member = menu.find(({ id }) => id === 'member');

	useEffect(() => {
		setOpen(false);
		//setSelected(getSelectedMenuItem(menu, path, qs)?.id ?? null);
	}, [path, qs]);

	return (
		<>
			<div className={cn(s.topbar, open && s.open)}>
				<figure className={s.logo}>
					<Link href={'/'}>
						<img src={'/images/logo.svg'} alt='Logo' />
					</Link>
				</figure>
				<div className={s.hamburger}>
					<Hamburger
						toggled={open}
						color={open ? 'white' : 'black'}
						size={36}
						onToggle={(state) => setOpen(state)}
					/>
				</div>
			</div>
			<nav className={cn(s.navbarMobile, open && s.open)}>
				<ul className={s.menu}>
					{menu
						//.filter(({ id }) => id !== 'member')
						.map(({ id, title, href, slug, sub }) => (
							<li
								key={id}
								className={cn(sub && s.dropdown, pathname.startsWith(slug) && s.active)}
								onClick={() => setSelected(selected === id ? null : id)}
							>
								<Link href={slug ?? href}>{title}</Link>
							</li>
						))}
				</ul>
			</nav>
		</>
	);
}
