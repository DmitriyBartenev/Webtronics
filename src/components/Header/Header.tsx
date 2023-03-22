import React from 'react';
import Image from 'next/image';

import styles from '../../styles/Header.module.scss';

import { icons } from '../../public';

const Header: React.FC = () => {
	const { MainLogo } = icons;

	return (
		<header className={styles.header}>
			<a href="#">
				<Image
					src={MainLogo}
					alt="Webtronics main logo"
					width={169}
					height={33}
				/>
			</a>
			<nav>
				<a href="#about">About</a>
				<a href="#programs">Programs</a>
				<a href="#steps">Steps</a>
				<a href="#questions">Questions</a>
				<a href="#getintouch">Get in touch</a>
			</nav>
		</header>
	);
};

export default Header;
