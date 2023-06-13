import React from 'react';
import styles from './page.module.css';
import EmailForm from '@/components/structure/EmailForm';

export default function Page() {
  return (
    <main className={styles.name}>
      <section className={styles.section}>
        <h2>Create your DevUp Account</h2>
        <EmailForm />
      </section>
    </main>
  );
}
