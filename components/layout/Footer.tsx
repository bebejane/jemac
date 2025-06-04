'use client';

import s from './Footer.module.scss';
import cn from 'classnames';
import Link from '@/components/nav/Link';
import Content from '@/components/common/Content';
import classNames from 'classnames';
import { useScrollInfo } from 'next-dato-utils/hooks';
import { use, useEffect, useRef, useState } from 'react';
import { useWindowSize } from 'rooks';

type FooterProps = {
	footer?: FooterRecord;
};

export default function Footer({ footer }: FooterProps) {
	const { scrolledPosition, documentHeight, viewportHeight } = useScrollInfo();
	const { innerWidth, innerHeight } = useWindowSize();
	const [show, setShow] = useState<boolean>(false);
	const [hide, setHide] = useState<boolean>(true);
	const ref = useRef<HTMLDivElement>(null);

	if (!footer) return null;

	const { headline, text, buttonText } = footer;

	useEffect(() => {
		document.body.style.marginBottom = ref.current?.offsetHeight + 'px';
		const show =
			ref.current && scrolledPosition > documentHeight - ref.current.offsetHeight - viewportHeight;
		setShow(show ? true : false);
		setHide(scrolledPosition < viewportHeight && !show);
	}, [innerHeight, innerWidth, scrolledPosition]);

	return (
		<footer className={cn(s.footer, show && s.show, hide && s.hide)} ref={ref}>
			<div className={s.wrap}>
				<Content content={headline} className={s.headline} />
				<Content content={text} className={classNames(s.text, 'intro')} />
				<Link href='/kontakt'>
					<button>{buttonText}</button>
				</Link>
			</div>
			<div className={s.copyright}>
				<p>
					Jemac Sweden AB<span>&emsp;Trångsundsvägen 20F&emsp;393 56 Kalmar</span>
				</p>
				<p>
					<Link href='https://www.linkedin.com/company/jemac-sweden-ab'>Följ oss på LinkedIn</Link>
				</p>
			</div>
		</footer>
	);
}
