"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AUTH_URL, navigation } from "@/config/site";
import { LoginIcon } from "./Icons";
import styles from "./Header.module.css";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("keydown", handleEscape);
    document.body.classList.add("menu-open");

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.classList.remove("menu-open");
    };
  }, [isOpen]);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a className={styles.logoLink} href="#top" aria-label="ББР Банк — на главную">
          <Image
            src="/images/logo_rus.png"
            alt="ББР Банк"
            width={1000}
            height={500}
            className={styles.logo}
            priority
          />
        </a>

        <nav className={styles.desktopNav} aria-label="Основная навигация">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className={styles.loginButton} href={AUTH_URL}>
          <LoginIcon />
          <span>Войти</span>
        </a>

        <button
          className={styles.menuButton}
          type="button"
          aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div
        className={`${styles.mobilePanel} ${isOpen ? styles.mobilePanelOpen : ""}`}
        id="mobile-navigation"
        aria-hidden={!isOpen}
      >
        <nav aria-label="Мобильная навигация">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setIsOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>
        <a className={styles.mobileLogin} href={AUTH_URL}>
          Войти в сервис
          <LoginIcon />
        </a>
      </div>
    </header>
  );
}
