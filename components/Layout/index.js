import Navbar from "../Navbar";
import styles from "./Layout.module.scss";

export default function Layout({children}) {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.childrenContainer}>{children}</div>
    </div>
  );
}
