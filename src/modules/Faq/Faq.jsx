import React from "react";
import { ButtonAcc } from "../../components/ButtonAcc/ButtonAcc";
import styles from "./Faq.module.sass";
import { accordionData } from "../../utils/accordion";

export const Faq = () => {
  return (
      <div className={styles.faq}>
        <h3 className={styles.title}>Часто задаваемые вопросы</h3>
        <div className={styles.wrapper}>
          {accordionData.map(({ title, text, id }) => (
            <ButtonAcc key={id} title={title} text={text} />
          ))}
        </div>
      </div>
  );
};
