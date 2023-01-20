import React from 'react'
import Image from 'next/image';

import HeaderLogo from '../../public/header_logo.svg';
import styles from '../../styles/Header.module.scss';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
        <a href='#'>
          <Image src = {HeaderLogo} alt='Webtronics main logo' width={169} height={33}/>
        </a>
        <nav>
            <a href='#about'>About</a>
            <a href='#programs'>Programs</a>
            <a href='#steps'>Steps</a>
            <a href='#questions'>Questions</a>
            <a href='#getintouch'>Get in touch</a>
        </nav>
    </header>
  )
}

export default Header