import styles from "./PrimaryButton.module.scss";
export default function PrimaryButton({ children, onClick }) {
  return (
    <div className={styles.container}>
      <div className={styles.button} onClick={onClick}>
        {children}
      </div>
    </div>
  );
}
