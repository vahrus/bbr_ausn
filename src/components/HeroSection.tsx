import { AUTH_URL } from "@/config/site";
import { ArrowIcon, ShieldCheckIcon } from "./Icons";
import { AusnDataVisual } from "./AusnDataVisual";
import styles from "./HeroSection.module.css";

export function HeroSection() {
  return (
    <section className={styles.hero} id="top">
      <div className={styles.backgroundGrid} aria-hidden="true" />
      <div className={styles.inner}>
        <div className={styles.content}>
          <div className={styles.pill}>
            <span>АУСН</span>
            <i aria-hidden="true">×</i>
            <span>ББР БАНК</span>
          </div>

          <h1>
            <span>Налоги проще.</span>
            <strong>
              Больше времени
              <br />
              на бизнес.
            </strong>
          </h1>

          <p className={styles.description}>
            Автоматизированная упрощённая система налогообложения — специальный
            налоговый режим, при котором налог рассчитывается автоматически, а
            значительная часть отчётности больше не требуется.
          </p>

          <div className={styles.actions}>
            <a className="button buttonPrimary" href={AUTH_URL}>
              Перейти на АУСН
              <ArrowIcon />
            </a>
            <a className="button buttonSecondary" href={AUTH_URL}>
              Уже подключены? Войти
              <ArrowIcon />
            </a>
          </div>

          <div className={styles.trust}>
            <span>
              <ShieldCheckIcon />
              Переход добровольный
            </span>
            <i aria-hidden="true" />
            <span>Взаимодействие через уполномоченный банк</span>
          </div>
        </div>

        <div className={styles.visualWrap}>
          <AusnDataVisual />
        </div>
      </div>
    </section>
  );
}
