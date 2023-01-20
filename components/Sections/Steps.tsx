import React from 'react';
import Image from 'next/image';

import GroupSteps from '../../public/GroupSteps.png';

import styles from '../../styles/Steps.module.scss';

const Steps: React.FC = () => {
  return (
    <section className={styles.steps} id='steps'>
        <h2>Steps</h2>
        <Image src={GroupSteps} alt='group steps'/>
    </section>
  )
}

export default Steps