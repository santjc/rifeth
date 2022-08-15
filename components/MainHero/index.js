import PrimaryButton from "../PrimaryButton";
import styles from './MainHero.module.scss'
export default function MainHero({title,hlTitle,subtitle,excerpt,firstButton}) {
  return (
    <div className={styles.hero}>
      <figure className={styles.heroColumn}>
        <h1 className={styles.heroTitle}>
          {title}<span>{hlTitle}</span>
        </h1>
        <h3 className={styles.heroSubtitle}>
          {subtitle}
        </h3>
        <h4 className={styles.heroExcerpt}>
          {excerpt}
        </h4>
        <span className={styles.heroButton}>
          <PrimaryButton>{firstButton}</PrimaryButton>
        </span>
      </figure>
      <figure className={styles.heroColumn}></figure>
    </div>
  );
}
