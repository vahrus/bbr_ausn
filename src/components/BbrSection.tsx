import { BankIcon, BuildingIcon, GovernmentIcon } from "./Icons";
import styles from "./Sections.module.css";

export function BbrSection() {
  return (
    <section className={`${styles.section} ${styles.bbrSection}`}>
      <div className="container">
        <div className={styles.bbrPanel}>
          <div className={styles.bbrCopy}>
            <p className={styles.lightEyebrow}>Цифровая среда банка</p>
            <h2>АУСН с ББР Банком</h2>
            <p>
              ББР Банк помогает сделать взаимодействие с новым налоговым режимом
              понятным и удобным — в привычной цифровой среде Банка.
            </p>
          </div>

          <div
            className={styles.bbrVisual}
            role="img"
            aria-label="Поток данных: бизнес, ББР Банк, ФНС"
          >
            <div className={styles.networkGlow} />
            <div className={styles.networkLine} aria-hidden="true">
              <i />
              <i />
              <i />
            </div>
            <div className={styles.networkNode}>
              <BuildingIcon />
              <span>Бизнес</span>
            </div>
            <div className={`${styles.networkNode} ${styles.bankNode}`}>
              <BankIcon />
              <span>ББР Банк</span>
            </div>
            <div className={styles.networkNode}>
              <GovernmentIcon />
              <span>ФНС</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
