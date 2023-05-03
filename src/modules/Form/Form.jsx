/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { AppContext } from "../../context/AppContext";
import { Input } from "../../components/Input/Input";
import { InputCheckbox } from "../../components/InputCheckbox/InputCheckbox";
import styles from "./Form.module.sass";
import axios from "axios";
import { InputBlock } from "../InputBlock/InputBlock";
import { ModalOrder } from "../ModalOrder/ModalOrder";

export const Form = ({
  text,
  title,
  button,
  isLoginForm,
  isSingForm,
  setIsLoginForm,
}) => {
  const [isModalOrder, setIsModalOrder] = useState(false);
  const [isTextError, setIsTextError] = useState(false);
  const [isTextUser, setIsTextUser] = useState(false);
  const [isSingError, setIsSingError] = useState(false);
  const [userName, setUserName] = useState();

  const {
    logins,
    setLogins,
    pass,
    users,
    isLogged,
    setIsLogged,
    getUser,
    setStorage,
    getOrder,
  } = useContext(AppContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });

  // useEffect(() => {
  //   getOrder();
  // }, []);

  // let newLogin = logins.forEach((item) => {
  //   let res = item.name === name;
  //   if (res === true) {
  //     setLogins(newLogin);
  //   }
  //   return newLogin;
  // });

  const error = "Такой пользователь не зарегистрирован";
  const sing = "Такой пользователь уже зарегистрирован";
  const user = "Добро пожаловать, ";

  const onSubmit = (data) => {
    const { name, phone } = data;
    let login = users.filter((item) => item.name === name);

    if (isLoginForm) {
    if (login.length === 1) {
      login.forEach((item) => {
        if (item.name === name) {
          console.log(user, item.name);
          setUserName(item.name);
          setIsLogged(item);
          setIsTextError(false);
          setIsTextUser(true);
          localStorage.setItem("user", JSON.stringify(item));
          setIsLoginForm(false);
          getOrder();
        }
      });
    } else if (login.length === 0) {
      console.log(error);
      setIsTextError(true);
      setIsTextUser(false);
      //setIsLogged(false);
      }
    } else {
      if (login.length === 1) {
        login.forEach((item) => {
          console.log(item);
          if (item.name === name) {
            console.log(sing);
            setIsSingError(true);
          }
        });
      } else if (login.length === 0) {
        console.log("Новый пользователь");
        setIsSingError(false);
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
    //getOrder();
    //reset();
  };

  //console.log(typeof isLogged.name);

  return (
    <>
      <div id="form" className={styles.contact}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.text}>{text}</p>
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
          {/* <InputBlock
            register={register}
            item={"phone"}
            placeholder="Номер телефона"
            name="Номер телефона"
            type="number"
            message="Поле обязательно для ввода"
            messageErr="Неверные символы"
            errors={errors.phone}
          /> */}
          <div className={styles.block}>
            <button
              type="submit"
              className={`${styles.button} ${styles.button_phone} button`}
            >
              {button}
            </button>
          </div>
        </form>
        {isTextError && error}
        {isLogged && isTextUser && user + userName}
        {isSingError && sing}
      </div>
    </>
  );
};
