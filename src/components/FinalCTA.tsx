import { AUTH_URL } from "@/config/site";
import { ArrowIcon, LoginIcon } from "./Icons";
import styles from "./Sections.module.css";

export function FinalCTA() {
  return (
    <section className={styles.finalSection} aria-labelledby="final-cta-title">
      <div className="container">
        <div className={styles.finalPanel}>
          <div className={styles.finalGlow} aria-hidden="true" />
          <p>Следующий шаг</p>
          <h2 id="final-cta-title">Готовы перейти на АУСН?</h2>
          <span>Продолжите оформление в сервисе ББР Банка.</span>
          <div className={styles.finalActions}>
            <a className={styles.finalPrimary} href={AUTH_URL}>
              Перейти на АУСН
              <ArrowIcon />
            </a>
            <a className={styles.finalSecondary} href={AUTH_URL}>
              <LoginIcon />
              Войти
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
