import React from 'react'
import Image from 'next/image'

import Mentors from '../../public/mentors.png';
import styles from '../../styles/AboutUs.module.scss';

function AboutUs() {
  return (
    <section className={styles.section__about_us}>
        <h2>About Us</h2>
        <div className={styles.section__mentors}>
            <Image src={Mentors} alt='mentors'/>
            <p>
                Front-end engineers work closely with designers to make websites beautiful, functional, and fast. 
                This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.
            </p>
        </div>
    </section>
  )
}

export default AboutUs