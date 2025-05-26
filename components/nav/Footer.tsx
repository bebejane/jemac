'use client';

import { Menu } from '@/lib/menu';
import s from './Footer.module.scss';
import Link from 'next/link';
import Content from '@/components/common/Content';

type FooterProps = {
	headline: any;
	text: any;
	buttonText: string;
};

export default function Footer({ headline, text, buttonText }: FooterProps) {
	return (
		<footer className={s.footer}>
			<div className={s.wrap}>
				<h3>
					<Content content={headline} className={s.headline} />
				</h3>
				<Content content={text} className={s.text} />
				<button>{buttonText}</button>
			</div>
		</footer>
	);
}
