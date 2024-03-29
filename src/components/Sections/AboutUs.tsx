import React from 'react';
import Image from 'next/image';

import styles from '../../styles/AboutUs.module.scss';

import { images } from '../../public';

const AboutUs: React.FC = () => {
	const { Mentors } = images;

	return (
		<section className={styles.section__about_us} id="about">
			<h2>About Us</h2>
			<div className={styles.section__mentors}>
				<Image src={Mentors} alt="mentors" draggable={false} />
				<p>
					Front-end engineers work closely with designers to make websites
					beautiful, functional, and fast. This Career Path will teach you not
					only the necessary languages and technologies, but how to think like a
					front-end engineer, too.
				</p>
			</div>
		</section>
	);
};

export default AboutUs;
