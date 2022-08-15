import styles from "./Navbar.module.scss";
import Link from "next/link";
export default function Navbar() {
  return (
    <div className={styles.container}>
      <figure className={styles.logoContainer}>rifeth.</figure>
      <figure className={styles.optionContainer}>
        <Link href={'/'}>
          <span className={styles.option}>Contact</span>
        </Link>
        <Link href={'/'}>
          <span className={styles.option}>About</span>
        </Link>
      </figure>
    </div>
  );
}
