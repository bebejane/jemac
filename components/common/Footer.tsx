'use client';

import { Menu } from '@/lib/menu';
import s from './Footer.module.scss';
import Link from 'next/link';
import Content from '@/components/common/Content';

type FooterProps = {
	footer: FooterRecord;
};

export default function Footer({ footer: { headline, text, buttonText } }: FooterProps) {
	return (
		<footer className={s.footer}>
			<div className={s.wrap}>
				<h3>
					<Content content={headline} className={s.headline} />
				</h3>
				<Content content={text} className={s.text} />
				<button>{buttonText}</button>
			</div>
			<div className={s.copyright}>
				<span>Jemac Trångsundsvägen 20F393 56 Kalmar</span>
				<span>
					<Link href='https://www.linkedin.com/company/jemac-sweden-ab'>Följ oss på LinkedIn</Link>
				</span>
			</div>
		</footer>
	);
}
