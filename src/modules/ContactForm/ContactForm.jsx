import React from "react";
import { Input } from "../../components/Input/Input";
import { InputRadio } from "../../components/InputRadio/InputRadio";
import styles from "./ContactForm.module.sass";

export const ContactForm = () => {
  return (
    <>
      <div className={styles.contact}>
        <h3 className={styles.title}>Оформить заказ</h3>
        <p className={styles.text}>
          Обсудите все детали заказа по телефону или сами укажите все
          подробности онлайн
        </p>
        <form className={styles.form}>
          <Input label="Имя" type="text" />
          <Input label="Номер телефона" type="number" />
          <InputRadio text="Тест-день! Получить скидку -30%?" />
          <InputRadio text="Согласен с" link="условиями сотрудничества" />
          <div className={styles.block}>
            <button
              className={`${styles.button} ${styles.button_phone} button`}
            >
              Заказ по телефону
            </button>
            <span className={styles.span}>или</span>
            <button
              className={`${styles.button} ${styles.button_online} button`}
            >
              Онлайн заказ
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
