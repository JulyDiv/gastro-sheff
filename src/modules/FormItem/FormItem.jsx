/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { AppContext } from "../../context/AppContext";
import { Input } from "../../components/Input/Input";
import { InputCheckbox } from "../../components/InputCheckbox/InputCheckbox";
import styles from "./FormItem.module.sass";
import axios from "axios";
import { InputBlock } from "../InputBlock/InputBlock";
import { ModalOrder } from "../ModalOrder/ModalOrder";

export const FormItem = ({
  text,
  title,
  button,
  isLoginForm,
  isSignForm,
  setIsLoginForm,
  setIsSignForm,
  isForm,
  setIsForm,
}) => {
  //const [isModalOrder, setIsModalOrder] = useState(false);
  //const [isTextError, setIsTextError] = useState(false);
  //const [isTextUser, setIsTextUser] = useState(false);
  //const [isSingError, setIsSingError] = useState(false);
  //const [userName, setUserName] = useState();

  const { users, sing, error, user, isLogged, setIsLogged, setUserName } =
    useContext(AppContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });

  // const error = "Такой пользователь не зарегистрирован";
  // const sing = "Такой пользователь уже зарегистрирован";
  // const user = "Добро пожаловать, ";

  const onSubmit = (data) => {
    const { name, phone } = data;
    let login = users.filter((item) => item.phone === phone);

    if (isForm) {
      if (login.length === 1) {
        login.forEach((item) => {
          if (item.phone === phone) {
            console.log(user, item.name);
            setUserName(item.name);
            setIsLogged(item);
            localStorage.setItem("user", JSON.stringify(item));
            setIsForm(false);
          }
        });
      } else if (login.length === 0) {
        console.log(error);
        setIsSignForm(true);
        setIsForm(false);
      }
    } else {
      if (login.length === 1) {
        login.forEach((item) => {
          console.log(item);
          if (item.phone === phone) {
            console.log(sing);
            console.log(user, item.name);
            setUserName(item.name);
            setIsLogged(item);
            setIsSignForm(false);
            localStorage.setItem("user", JSON.stringify(item));
          }
        });
      } else if (login.length === 0) {
        console.log("Новый пользователь");
        setIsSignForm(false);
        axios
          .post(`${process.env.NEXT_PUBLIC_API_HOST}/users`, {
            name: name,
            phone: phone,
            date: new Date().toLocaleString(),
          })
          .then(({ data }) => {
            window.location.reload();
            reset();
          })
          .catch(function (error) {
            console.log(error.message);
          });
      }
    }
  };

  return (
    <>
      <div id="form" className={styles.contact}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.text}>{text}</p>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          {isSignForm && (
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
          )}
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
          <div className={styles.block}>
            <button
              type="submit"
              className={`${styles.button} ${styles.button_phone} button`}
            >
              {button}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
