"use client";

import { useState } from "react";
import { faqItems } from "@/config/site";
import { ChevronIcon } from "./Icons";
import styles from "./FaqSection.module.css";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className={styles.faq} id="faq">
      <div className="container">
        <div className={styles.layout}>
          <div className={styles.intro}>
            <p className="eyebrow">Коротко о главном</p>
            <h2 className="sectionTitle">Вопросы об АУСН</h2>
            <p className="sectionLead">
              Ответы на основные вопросы перед переходом в сервис.
            </p>
          </div>

          <div className={styles.list}>
            {faqItems.map((item, index) => {
              const isOpen = openIndex === index;
              const answerId = `faq-answer-${index}`;

              return (
                <article className={styles.item} key={item.question}>
                  <h3>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={answerId}
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                    >
                      <span>{item.question}</span>
                      <ChevronIcon />
                    </button>
                  </h3>
                  <div
                    className={styles.answer}
                    id={answerId}
                    role="region"
                    aria-hidden={!isOpen}
                  >
                    <div>
                      <p>{item.answer}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
