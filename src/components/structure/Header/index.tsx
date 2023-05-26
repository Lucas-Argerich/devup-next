import React from 'react';
import styles from './index.module.css';
import Button from '@/components/common/Button';

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.h1}>DevUp</h1>
      <div className={styles.div}>
        <Button type="secondary">Sign Up</Button>
        userimage
      </div>
    </header>
  );
}
