import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Input } from "../../components/Input/Input";
import { InputCheckbox } from "../../components/InputCheckbox/InputCheckbox";
import styles from "./ContactForm.module.sass";
import axios from "axios";

export const ContactForm = () => {

  const [isActive, setIsActive] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = (data) => {
    reset();
    console.log(data);
  };

  //console.log(isActive);

  return (
    <>
      <div className={styles.contact}>
        <h3 className={styles.title}>Оформить заказ</h3>
        <p className={styles.text}>
          Обсудите все детали заказа по телефону или сами укажите все
          подробности онлайн
        </p>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <Input
            register={register}
            item={"name"}
            placeholder="Имя"
            //label="Имя"
            name="Имя"
            type="text"
            //id="name"
            message="Поле обязательно для ввода"
            messageErr="Неверные символы"
            //value={/[A-Za-z]+/i}
            errors={errors.name}
          />
          <Input
            register={register}
            item={"phone"}
            placeholder="Номер телефона"
            //label="Номер телефона"
            name="Номер телефона"
            type="number"
            //id="phone"
            message="Поле обязательно для ввода"
            messageErr="Неверные символы"
            //value={/^[1-9]+[0-9]*$/}
            errors={errors.phone}
          />
          <InputCheckbox
            register={register}
            item={"test"}
            text="Тест-день! Получить скидку -30%?"
            type="checkbox"
            label="test"
            id="test"
          />
          <InputCheckbox
            register={register}
            item={"agree"}
            text="Согласен с"
            link="условиями сотрудничества"
            type="checkbox"
            label="agree"
            id="agree"
          />
          <div className={styles.block}>
            <button
              type="submit"
              className={`${styles.button} ${styles.button_phone} button`}
            >
              Заказ по телефону
            </button>
            <span className={styles.span}>или</span>
            <button
              type="submit"
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
