import React from 'react'
import Image from 'next/image'

import AngularLogo from '../../public/angular.png';
import ReactLogo from '../../public/react.png';
import VueLogo from '../../public/vue.png';
import JavaScriptLogo from '../../public/javascript.png';

import styles from '../../styles/Technologies.module.scss';

const Technologies: React.FC = () => {
  return (
    <section className={styles.technologies}>
        <h2>Programming technologies</h2>
        <p>By the end, you’ll have the portfolio and interview skills you need to start your new career.</p>
        <div className={styles.cards}>
            <Image src={AngularLogo} alt='angular logo' width={182} height={230}/>
            <Image src={ReactLogo} alt='react logo' width={182} height={230}/>
            <Image src={VueLogo} alt='vue logo' width={182} height={230}/>
            <Image src={JavaScriptLogo} alt='javascript logo' width={182} height={230}/>
        </div>
    </section>
  )
}

export default Technologies