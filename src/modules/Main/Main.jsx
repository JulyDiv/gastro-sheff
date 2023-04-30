/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useContext, useState } from "react";
import styles from "./Main.module.sass";
import { AppContext } from "../../context/AppContext";
import { ContactForm } from "../ContactForm/ContactForm";
import { Faq } from "../Faq/Faq";
import { Form } from "../Form/Form";
import { Test } from "../ATest/Test";

export const Main = () => {
  const [isSignForm, setIsSignForm] = useState(false);
  const [isLoginForm, setIsLoginForm] = useState(false);
  const [isOrder, setIsOrder] = useState(false);

  const { setLogins, users, isLogged, setIsLogged, orders, getOrder, storage } =
    useContext(AppContext);

  // useEffect(() => {
  //   getOrder();
  // }, []);

  //console.log(isLogged);

  const onClick = () => {
    getOrder();
    setIsOrder(true);
  };

  return (
    <>
      <section className={styles.main}>
        <div className="container">
          {/* <div className={styles.wrapper}>
            <ContactForm />
            <Faq />
          </div> */}
          {/* <button onClick={() => setIsSignForm(true)}>Sign In</button> */}
          <button onClick={() => setIsLoginForm(true)}>Log In</button>
          <br />
          <button onClick={() => setIsLogged(false)}>Log Out</button>
          <div className={styles.wrapper}>
            {/* {isSignForm || isLoginForm && (
                <Form
                  title={isSignForm ? "Регистрация" : "Вход"}
                  button={isSignForm ? "Зарегистрироваться" : "Войти"}
                  text={
                    isSignForm
                      ? "Зарегистрируйте личный кабинет"
                      : "Войдите в личный кабинет"
                  }
                  isSignForm={isSignForm}
                  isLoginForm={isLoginForm}
                />
              )} */}
            {isSignForm && (
              <Form
                title="Регистрация"
                button="Зарегистрироваться"
                text="Зарегистрируйте личный кабинет"
                isSignForm={isSignForm}
              />
            )}
            {isLoginForm && (
              <Form
                title="Вход"
                button="Войти"
                text="Войдите в личный кабинет"
                isLoginForm={isLoginForm}
                setIsLoginForm={setIsLoginForm}
              />
            )}
          </div>
        </div>
        {isLogged ? (
          <>
            <h1>{isLogged.name}</h1>
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
        ) : (
          "Ass"
        )}
      </section>
    </>
  );
};
