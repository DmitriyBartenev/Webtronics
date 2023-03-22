import React from 'react';
import Header from '../Header/Header';

import styles from '../../styles/Main.module.scss';

const Main: React.FC = () => {
	return (
		<main className={styles.main}>
			<Header />
			<div className={styles.main__container}>
				<div className={styles.title}>
					<h1>Front-End</h1>
					<p>
						Make UIs and websites beautiful, functional, and fast. Cover all the
						topics that expensive bootcamps teach (and more).{' '}
					</p>
				</div>
				<div className={styles.title2}>
					<button>Start my career change</button>
					<h1>Developer</h1>
				</div>
				<p className={styles.title3}>Courses</p>
			</div>
		</main>
	);
};

export default Main;
