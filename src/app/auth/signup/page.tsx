import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import Button from '@/components/common/Button';
import { Email, Github, Google } from '@/components/icons/Logos';

export default function Page() {
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <Image alt="platform logo" src="/Logo.svg" width={264} height={100} />
      </section>
      <section className={styles.section}>
        <h2>Create your DevUp Account</h2>
        <Button fill>
          <>
            <Github />
            <span>Sign In with Github</span>
          </>
        </Button>
        <Button fill>
          <>
            <Google />
            <span>Sign In with Google</span>
          </>
        </Button>
        <span className={styles.separator}>or</span>
        <Button fill>
          <>
            <Email />
            <span>Sign Up with Email</span>
          </>
        </Button>
        <div className={styles.div}>
          <span>Already have an account?</span>
          <Button type='tertiary'>Sign In</Button>
        </div>
      </section>
    </main>
  );
}
