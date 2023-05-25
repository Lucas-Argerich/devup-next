import React from 'react';
import styles from './index.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.h1}>DevUp</h1>
      <div>login/userimage</div>
    </header>
  );
}
