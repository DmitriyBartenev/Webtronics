import React from 'react';
import Image from 'next/image';

import { images } from '../../public';

import styles from '../../styles/Technologies.module.scss';

const Technologies: React.FC = () => {
	const { AngularLogo, ReactLogo, VueLogo, JavaScriptLogo } = images;

	return (
		<section className={styles.technologies} id="programs">
			<h2>Programming technologies</h2>
			<p>
				By the end, you’ll have the portfolio and interview skills you need to
				start your new career.
			</p>
			<div className={styles.cards}>
				<Image src={AngularLogo} alt="angular logo" width={182} height={230} />
				<Image src={ReactLogo} alt="react logo" width={182} height={230} />
				<Image src={VueLogo} alt="vue logo" width={182} height={230} />
				<Image
					src={JavaScriptLogo}
					alt="javascript logo"
					width={182}
					height={230}
				/>
			</div>
		</section>
	);
};

export default Technologies;
