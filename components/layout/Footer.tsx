'use client';

import s from './Footer.module.scss';
import cn from 'classnames';
import Link from '@/components/nav/Link';
import Content from '@/components/common/Content';
import classNames from 'classnames';
import { useScrollInfo } from 'next-dato-utils/hooks';

type FooterProps = {
	footer?: FooterRecord;
};

export default function Footer({ footer }: FooterProps) {
	const { scrolledPosition, documentHeight, viewportHeight } = useScrollInfo();

	if (!footer) return null;
	const { headline, text, buttonText } = footer;
	const showFooter = scrolledPosition > documentHeight - viewportHeight * 2;
	//console.log(showFooter, scrolledPosition, documentHeight, viewportHeight);
	return (
		<footer className={cn(s.footer, showFooter && s.show)}>
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
