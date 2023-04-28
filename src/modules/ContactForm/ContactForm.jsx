import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Input } from "../../components/Input/Input";
import { InputCheckbox } from "../../components/InputCheckbox/InputCheckbox";
import styles from "./ContactForm.module.sass";
import axios from "axios";
import Link from "next/link";
import { InputBlock } from "../InputBlock/InputBlock";
import { ModalOrder } from "../ModalOrder/ModalOrder";

export const ContactForm = () => {

  const [isOpenModalOrder, setIsOpenModalOrder] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = (data) => {
    const { name, phone, test, agree } = data;
  axios
    .post(`https://63e3933fc919fe386c09ab87.mockapi.io/order`, {
      name: name,
      phone: phone,
      test: test,
      agree: agree,
      date: new Date().toLocaleString(),
    })
    .then(({ data }) => {
      console.log(data);
      reset();
    })
    .catch(function (error) {
      console.log(error.message);
    });
  };

  //console.log(isActive);

  return (
    <>
      <div id="form" className={styles.contact}>
        <h3 className={styles.title}>Оформить заказ</h3>
        <p className={styles.text}>
          Обсудите все детали заказа по телефону или сами укажите все
          подробности онлайн
        </p>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <InputBlock
            register={register}
            item={"name"}
            placeholder="Имя"
            name="Имя"
            type="text"
            message="Поле обязательно для ввода"
            messageErr="Неверные символы"
            errors={errors.name}
          />
          <InputBlock
            register={register}
            item={"phone"}
            placeholder="Номер телефона"
            name="Номер телефона"
            type="number"
            message="Поле обязательно для ввода"
            messageErr="Неверные символы"
            errors={errors.phone}
          />
          {/* <Input
            register={register}
            item={"name"}
            placeholder="Имя"
            name="Имя"
            type="text"
            message="Поле обязательно для ввода"
            messageErr="Неверные символы"
            errors={errors.name}
          />
          <Input
            register={register}
            item={"phone"}
            placeholder="Номер телефона"
            name="Номер телефона"
            type="number"
            message="Поле обязательно для ввода"
            messageErr="Неверные символы"
            errors={errors.phone}
          /> */}
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
            {/* <Link
              href="#program"
              className={`${styles.button} ${styles.button_online} button`}
            >
              Онлайн заказ
            </Link> */}
            <button
              className={`${styles.button} ${styles.button_online} button`}
              onClick={() => setIsOpenModalOrder(true)}
            >
              Онлайн заказ
            </button>
          </div>
        </form>
      </div>
      {/* {!isOpenModalOrder && (
        <ModalOrder
          isOpenModalOrder={isOpenModalOrder}
          setIsOpenModalOrder={setIsOpenModalOrder}
        />
      )} */}
    </>
  );
};
