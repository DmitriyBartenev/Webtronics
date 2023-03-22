import React from 'react';
import Image from 'next/image';

import styles from '../../styles/Footer.module.scss';

import { icons } from '../../public';

const Footer: React.FC = () => {
	const { MainLogo, MetaLogo, SocialLogo, Twitter, LinkedIn } = icons;

	return (
		<footer className={styles.footer}>
			<div className={styles.footer__container}>
				<div className={styles.footer__container__address}>
					<Image src={MainLogo} alt="main logo" />
					<p>
						Wisconsin Ave, Suite 700
						<br />
						Chevy Chase, Maryland 20815
					</p>
				</div>
				<div className={styles.footer__container__about}>
					<p>Company</p>
					<div className={styles.items}>
						<p>About Us</p>
						<p>Steps</p>
						<p>FAQs</p>
						<p>Review</p>
						<p>Gallery</p>
					</div>
				</div>
				<div className={styles.footer__container__social}>
					<p>Social media</p>
					<div>
						<Image src={MetaLogo} alt="social media icon" />
						<Image src={SocialLogo} alt="social media icon" />
						<Image src={Twitter} alt="social media icon" />
						<Image src={LinkedIn} alt="social media icon" />
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
