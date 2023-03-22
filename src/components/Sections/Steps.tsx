import React from 'react';
import Image from 'next/image';

import { images } from '../../public';

import styles from '../../styles/Steps.module.scss';

const Steps: React.FC = () => {
	const { GroupSteps } = images;

	return (
		<section className={styles.steps} id="steps">
			<h2>Steps</h2>
			<Image src={GroupSteps} alt="group steps" draggable={false} />
		</section>
	);
};

export default Steps;
