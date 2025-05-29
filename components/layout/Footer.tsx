'use client';

import s from './Footer.module.scss';
import Link from 'next/link';
import Content from '@/components/common/Content';
import classNames from 'classnames';

type FooterProps = {
	footer?: FooterRecord;
};

export default function Footer({ footer }: FooterProps) {
	if (!footer) return null;
	const { headline, text, buttonText } = footer;

	return (
		<footer className={s.footer}>
			<div className={s.wrap}>
				<Content content={headline} className={s.headline} />
				<Content content={text} className={classNames(s.text, 'intro')} />
				<Link href='mailto:info@jemac.se'>
					<button>{buttonText}</button>
				</Link>
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
