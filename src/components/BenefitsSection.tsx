import { benefits } from "@/config/site";
import {
  BankIcon,
  CalculateIcon,
  ReportIcon,
  TimeIcon,
} from "./Icons";
import styles from "./Sections.module.css";

const benefitIcons = {
  report: ReportIcon,
  calculate: CalculateIcon,
  bank: BankIcon,
  time: TimeIcon,
} as const;

export function BenefitsSection() {
  return (
    <section className={`${styles.section} ${styles.benefits}`} id="benefits">
      <div className="container">
        <div className={styles.sectionHeading}>
          <p className="eyebrow">Главное — автоматически</p>
          <h2 className="sectionTitle">Меньше рутины. Больше контроля.</h2>
          <p className="sectionLead">
            Новый налоговый режим освобождает ресурсы для задач, которые
            действительно двигают бизнес вперёд.
          </p>
        </div>

        <div className={styles.benefitGrid}>
          {benefits.map((benefit, index) => {
            const Icon = benefitIcons[benefit.icon];
            return (
              <article className={styles.benefitCard} key={benefit.title}>
                <span className={styles.cardNumber}>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className={styles.iconBox}>
                  <Icon />
                </div>
                <h3>{benefit.title}</h3>
                <p>{benefit.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
