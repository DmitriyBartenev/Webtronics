import React from 'react'
import Image from 'next/image';

import HeaderLogo from '../../public/header_logo.svg';
import styles from '../../styles/header.module.scss';

function Header() {
  return (
    <header className={styles.header}>
        <Image src = {HeaderLogo} alt='Webtronics main logo' width={169} height={33}/>
        <nav>
            <a href='#'>About</a>
            <a href='#'>Programs</a>
            <a href='#'>Steps</a>
            <a href='#'>Questions</a>
            <a href='#'>Get in touch</a>
        </nav>
    </header>
  )
}

export default Header