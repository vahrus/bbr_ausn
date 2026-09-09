import { AUTH_URL, eligibilityCriteria } from "@/config/site";
import { ArrowIcon } from "./Icons";
import styles from "./Sections.module.css";

export function EligibilitySection() {
  return (
    <section className={`${styles.section} ${styles.eligibility}`}>
      <div className="container">
        <div className={styles.eligibilityPanel}>
          <div className={styles.eligibilityIntro}>
            <p className="eyebrow">Основные условия</p>
            <h2 className="sectionTitle">Подходит ли АУСН вашему бизнесу?</h2>
            <p className="sectionLead">
              Быстро сверьтесь с ключевыми критериями режима.
            </p>
          </div>

          <div className={styles.criteriaGrid}>
            {eligibilityCriteria.map((criterion) => (
              <div className={styles.criterion} key={criterion.value}>
                <strong>{criterion.value}</strong>
                <span>{criterion.label}</span>
              </div>
            ))}
          </div>

          <div className={styles.eligibilityFooter}>
            <p>
              Указаны основные условия применения АУСН. Полный перечень
              требований определяется действующим законодательством.
            </p>
            <a className="textLink" href={AUTH_URL}>
              Перейти к оформлению
              <ArrowIcon />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
