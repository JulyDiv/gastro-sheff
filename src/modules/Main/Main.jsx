/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useContext, useState } from "react";
import styles from "./Main.module.sass";
import { AppContext } from "../../context/AppContext";
import { ContactForm } from "../ContactForm/ContactForm";
import { Faq } from "../Faq/Faq";
import { Form } from "../Form/Form";
import { Test } from "../ATest/Test";
import { FormItem } from "../FormItem/FormItem";

export const Main = () => {
  //const [isSignForm, setIsSignForm] = useState(false);
  const [isLoginForm, setIsLoginForm] = useState(false);
  //const [isForm, setIsForm] = useState(false);
  const [isOrder, setIsOrder] = useState(false);

  const {
    isLogged,
    setIsLogged,
    orders,
    getOrder,
    user,
    isSignForm,
    setIsSignForm,
    isForm,
    setIsForm,
    setOrders
  } = useContext(AppContext);

  //console.log(isLogged);

  const logOut = () => {
    setIsLogged(false);
    setTimeout(() => {
      window.location.reload();
    }, 2000);
    //setIsLogged(localStorage.clear());
  }

  const onClick = (id) => {
    //getOrder();
    let newOrders = [...orders].filter((item) => item.userId === isLogged.id);
    setIsOrder(true);
    setOrders(newOrders);
    isOrder ? setIsOrder(false) : setIsOrder(true);
    //getOrder();
  };

  console.log(isLogged.id);

  return (
    <>
      <section className={styles.main}>
        <div className="container">
          <button onClick={() => logOut()}>Log Out</button>
          <br />
          <button onClick={() => setIsForm(true)}>Log In</button>
          <div className={styles.wrapper}>
            {isForm | isSignForm ? (
              <FormItem
                title={isForm ? "Вход" : "Регистрация"}
                button={isForm ? "Войти" : "Зарегистрироваться"}
                text={
                  isForm
                    ? "Войдите в личный кабинет"
                    : "Зарегистрируйте личный кабинет"
                }
                isForm={isForm}
                isSignForm={isSignForm}
                setIsForm={setIsForm}
                setIsSignForm={setIsSignForm}
              />
            ) : (
              ""
            )}
          </div>
          {isLogged && (
            <>
              <h1>{user + isLogged.name}</h1>
              <button onClick={() => onClick(isLogged.id)}>Click</button>
              {isOrder &&
                orders.map((order, id) => (
                  <div key={id}>
                    <p>{order.name}</p>
                    <p>{order.userId}</p>
                    <p>{order.program}</p>
                    <p>{order.sum}</p>
                    <p>{order.date}</p>
                  </div>
                ))}
            </>
          )}
        </div>
      </section>
    </>
  );
};
