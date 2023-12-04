// NotFound.js

import React from 'react';
import Link from 'next/link';
import styles from './styles.module.css';

const NotFound = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404 - Sayfa Bulunamadı</h1>
      <h4 className={styles.subtitle}>Aradığınız şey burada yok...</h4>
      <p className={styles.description}>
        Harika sitemi keşfetmek için aşağıdaki bağlantılara tıklayınız.
      </p>

      <div className={styles.linksContainer}>
        <Link className={styles.link} href='/'>Anasayfa</Link>
        <Link className={styles.link} href='/contact'>İletişim</Link>
      </div>
    </div>
  );
};

export default NotFound;
