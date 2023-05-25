import Image from 'next/image';
import styles from './page.module.css';
import Button from '@/components/common/Button';

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
        <Button>Sign Up</Button>
        <Button type='tertiary'>Log in</Button>
      </section>
    </main>
  );
}
