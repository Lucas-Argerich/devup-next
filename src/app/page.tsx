import Image from 'next/image';
import styles from './page.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <Image alt="platform logo" src="/Logo.svg" width={264} height={100} />
        <h2>Welcome to DevUp Project!</h2>
        <p className={styles.p}>
          The free-space for developers to share their endeavors and interact
          with each others
        </p>
      </section>
      <section className={styles.section}>
        <Link href="/auth/signup">Sign Up</Link>
        {/*Will be a button component*/}
        <Link href="/auth/login">Log in</Link>
        {/*Will be a button component*/}
      </section>
    </main>
  );
}
