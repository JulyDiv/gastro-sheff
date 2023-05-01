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
  const [isSignForm, setIsSignForm] = useState(false);
  const [isLoginForm, setIsLoginForm] = useState(false);
  const [isForm, setIsForm] = useState(false);
  const [isOrder, setIsOrder] = useState(false);

  const { isLogged, setIsLogged, orders, getOrder, user } =
    useContext(AppContext);

  //console.log(isLogged);

  const onClick = () => {
    getOrder();
    setIsOrder(true);
  };

  //console.log(isOrder);

  return (
    <>
      <section className={styles.main}>
        <div className="container">
          <button onClick={() => setIsLogged(false)}>Log Out</button>
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
                isLoginForm={isLoginForm}
                isSignForm={isSignForm}
                setIsForm={setIsForm}
                setIsSignForm={setIsSignForm}
                setIsLoginForm={setIsLoginForm}
              />
            ) : ""}
          </div>
          {isLogged && (
            <>
              <h1>{user + isLogged.name}</h1>
              <button onClick={() => onClick()}>Click</button>
              {isOrder &&
                orders.map((order, id) => (
                  <div key={id}>
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
