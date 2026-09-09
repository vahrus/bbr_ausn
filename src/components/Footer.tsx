import Image from "next/image";
import { navigation } from "@/config/site";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <a href="#top" aria-label="ББР Банк — наверх">
            <Image
              src="/images/logo_rus.png"
              alt="ББР Банк"
              width={1000}
              height={500}
              className={styles.logo}
            />
          </a>
          <p>Цифровой сервис для перехода на АУСН.</p>
        </div>

        <nav className={styles.navigation} aria-label="Навигация в подвале">
          <span>АУСН</span>
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className={styles.note}>
          <span>Информация</span>
          <p>
            Условия применения режима определяются действующим
            законодательством.
          </p>
        </div>
      </div>
      <div className={styles.bottom}>
        <span>ББР Банк</span>
        <span>АУСН · Информационная страница</span>
      </div>
    </footer>
  );
}
