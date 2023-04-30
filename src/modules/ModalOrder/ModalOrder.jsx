import React, { useState, useContext } from "react";
import styles from "./ModalOrder.module.sass";
import axios from "axios";
import { useForm } from "react-hook-form";
import { AppContext } from "../../context/AppContext";
import { ModalOverlay } from "../ModalOverlay/ModalOverlay";
import { Input } from "../../components/Input/Input";
import { InputCheckbox } from "../../components/InputCheckbox/InputCheckbox";

export const ModalOrder = ({
  isOpenModalOrder,
  setIsOpenModalOrder,
  pack,
  programName,
}) => {
  const { programs, users, isLogged } = useContext(AppContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });

  //console.log(users);
  // const user = users.map((item) => (
  //   item
  // ));
  // const user = {
  //   ...users
  // }
  //console.log(user);
  //console.log(isLogged);

  const onSubmit = (data) => {
    const { name, phone, test, agree, email, time, id, userId } = data;
    //let user = users.filter((item) => item.name);
    //const userId = users.filter((item) => item.id === id);
    //const userId = { ...user };
    //console.log(users);
    //console.log(id);
    axios
      .post(
        `https://642992c4ebb1476fcc4c4270.mockapi.io/users/${isLogged.id}/orders`,
        {
          name: isLogged.name,
          phone: isLogged.phone,
          email: email,
          program: programName,
          sum: pack.sale,
          time: time,
          test: test,
          agree: agree,
          date: new Date().toLocaleString(),
        }
      )
      .then(({ data }) => {
        console.log(data);
        reset();
      })
      .catch(function (error) {
        console.log(error.message);
      });
    //console.log(data);
  };

  const onClick = () => {};

  //console.log(programs);

  return (
    <>
      <ModalOverlay
        isOpenModalOrder={isOpenModalOrder}
        setIsOpenModalOrder={setIsOpenModalOrder}
      />
      <div className={styles.modal}>
        <div className={styles.wrapper}>
          <div className={styles.header}>
            <span className={styles.error}>Заполните все поля правильно</span>
            <button
              className={styles.close}
              onClick={() => setIsOpenModalOrder(false)}
            ></button>
          </div>
          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.block}>
              {/* <div className={styles.inputBlock}> */}
              {/* <Input
                register={register}
                item={"name"}
                placeholder="Имя"
                type="text"
                message="Поле обязательно для ввода"
                messageErr="Неверные символы"
                value={/[A-Za-z]+/i}
                className={styles.input}
                errors={errors.name}
              /> */}
              {/* </div> */}
              {/* <Input
                register={register}
                item={"phone"}
                placeholder="Телефон"
                type="text"
                message="Поле обязательно для ввода"
                messageErr="Неверные символы"
                value={/[A-Za-z]+/i}
                className={styles.input}
                errors={errors.phone}
              /> */}
              <Input
                register={register}
                item={"email"}
                placeholder="Электронный адрес"
                type="email"
                messageErr="Неверные символы"
                //value={/[A-Za-z]+/i}
                className={styles.input}
                errors={errors.email}
              />
              <span className={styles.span}>{programName}</span>
              <span className={styles.span}>{pack.name}</span>
              <span className={styles.span}>{pack.price}</span>
              <span className={styles.span}>{pack.sale}</span>
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
              <button type="submit" className={`${styles.button} button`}>
                Заказать
              </button>
            </div>
            <div className={styles.block}>
              <select {...register("time")}>
                <option selected>Выберите время доставки</option>
                <option>11:00</option>
                <option>12:00</option>
                <option>13:00</option>
                <option>14:00</option>
                <option>15:00</option>
              </select>
              {/* <select {...register("time")}>
                <option>Выберите время доставки</option>
                {programs.map(({ name, id, sum }) => (
                  <>
                    <option key={id} value={time}></option>
                    <input
                      {...register("sum")}
                      style={{ display: "none" }}
                    />
                  </>
                ))}
              </select> */}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
