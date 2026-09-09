import { AUTH_URL, steps } from "@/config/site";
import { ArrowIcon } from "./Icons";
import styles from "./Sections.module.css";

export function StepsSection() {
  return (
    <section className={`${styles.section} ${styles.steps}`} id="how-it-works">
      <div className="container">
        <div className={styles.sectionHeading}>
          <p className="eyebrow">Понятный путь</p>
          <h2 className="sectionTitle">Три шага к АУСН</h2>
        </div>

        <div className={styles.stepsFlow}>
          <div className={styles.progressLine} aria-hidden="true" />
          {steps.map((step) => (
            <article className={styles.step} key={step.number}>
              <div className={styles.stepNumber}>{step.number}</div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>

        <a className="button buttonSecondary" href={AUTH_URL}>
          Перейти в сервис
          <ArrowIcon />
        </a>
      </div>
    </section>
  );
}
