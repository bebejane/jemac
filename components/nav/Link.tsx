'use client';

import { usePathname, useRouter } from '@/i18n/routing';
import { Link as NextLink } from '@/i18n/routing';
import { LinkProps } from 'next/link';
import { HTMLProps, FC } from 'react';
import { sleep } from 'next-dato-utils/utils';
import { useEffect } from 'react';

const transitionTime = 700;

const Link: FC<LinkProps & HTMLProps<HTMLAnchorElement>> = (props) => {
	const router = useRouter();
	const pathname = usePathname();

	const handleClick = async (e: any) => {
		e.preventDefault();

		if (pathname === props.href) return router.push(props.href as any);

		const pt = document.getElementById('page-transition');
		const pft = document.getElementById('page-fade-transition');

		if (pt && pft) {
			pt.setAttribute('pathname', pathname);
			pt.classList.toggle('exit', true);
			pt.classList.toggle('enter', false);
			pft.classList.toggle('enter', false);
		}

		router.prefetch(props.href as any);
		await sleep(transitionTime);
		router.push(props.href as any);
	};

	useEffect(() => {
		const pt = document.getElementById('page-transition');
		const pft = document.getElementById('page-fade-transition');

		if (!pt || !pft) return;

		const prevPathname = pt.getAttribute('pathname');

		if (prevPathname !== pathname && prevPathname) {
			pt.classList.toggle('enter', true);
			pt.classList.toggle('exit', false);
			pft.classList.toggle('enter', true);
		} else pt.classList.toggle('enter', true);
	}, [pathname]);

	return (
		//@ts-ignore
		<NextLink {...props} onClick={handleClick}>
			{props.children}
		</NextLink>
	);
};

export default Link;
