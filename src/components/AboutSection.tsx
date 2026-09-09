import { CheckIcon } from "./Icons";
import styles from "./Sections.module.css";

export function AboutSection() {
  return (
    <section className={`${styles.section} ${styles.about}`} id="ausn">
      <div className="container">
        <div className={styles.aboutGrid}>
          <div>
            <p className="eyebrow">
              Проще, чем обычная система налогообложения
            </p>
            <h2 className="sectionTitle">АУСН берёт рутину на себя</h2>
          </div>
          <div className={styles.aboutCopy}>
            <p>
              Автоматизированная упрощённая система налогообложения помогает
              снизить объём налоговой рутины: расчёт налога выполняется
              автоматически на основании данных, поступающих в систему.
            </p>
          </div>
        </div>

        <div className={styles.aboutFlow} aria-label="Как работает АУСН">
          <div className={styles.flowSource}>
            <span>Данные бизнеса</span>
            <small>Доходы · Расходы · Операции</small>
          </div>
          <div className={styles.flowLine} aria-hidden="true">
            <i />
          </div>
          <div className={styles.flowCore}>АУСН</div>
          <div className={styles.flowLine} aria-hidden="true">
            <i />
          </div>
          <div className={styles.flowResult}>
            <CheckIcon />
            <span>Налог рассчитан</span>
          </div>
        </div>
      </div>
    </section>
  );
}
