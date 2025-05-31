import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          src="/mowmatters-logo.png"
          alt="MowMatters Logo"
          fill={true}
          priority
        />
        <h1>Coming Soon!</h1>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
