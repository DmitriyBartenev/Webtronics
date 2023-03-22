import React from 'react';
import Image from 'next/image';

import styles from '../../styles/Gallery.module.scss';

import { images } from '../../public';

const Gallery: React.FC = () => {
	const { Programmer, Developer, Worktable } = images;

	return (
		<section className={styles.gallery}>
			<h2>Gallery</h2>
			<div className={styles.gallery__container}>
				<div className={styles.first_col}>
					<p>
						By the end of this course, you will be able to develop and publish
						your very own Google Chrome extension! In this course we will focus
						on coding exercises and projects.{' '}
					</p>
					<Image src={Programmer} alt="programmer" draggable={false} />
				</div>
				<div className={styles.second_col}>
					<div>
						<Image src={Developer} alt="programmer" draggable={false} />
						<Image src={Worktable} alt="programmer" draggable={false} />
					</div>
					<p>
						If you would like to learn web development and get a job in the tech
						industry, you are going to LOVE this course! Learn HTML, CSS,
						JavaScript, Bootstrap and more with over 15 hours of HD video
						tutorials! This course was designed to be extremely beginner
						friendly. We will begin with the very basics of HTML and build a
						simple web page.
					</p>
				</div>
			</div>
		</section>
	);
};

export default Gallery;
