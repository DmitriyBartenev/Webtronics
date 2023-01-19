import React from 'react';
import Image from 'next/image';

import GroupSteps from '../../public/GroupSteps.png';

import styles from '../../styles/steps.module.scss';

function Steps() {
  return (
    <section className={styles.steps}>
        <h2>Steps</h2>
        <Image src={GroupSteps} alt='group steps'/>
    </section>
  )
}

export default Steps