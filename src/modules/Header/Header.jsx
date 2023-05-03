/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./Header.module.sass";
import { Navbar } from "../Navbar/Navbar";

export const Header = () => {

  return (
    <>
      <header className={styles.header}>
        <div className={styles.wrapper}>
          <div className={styles.logo}>
            <img src="/img/logo.png" alt="logo" className={styles.img} />
            <span className={styles.span}>сервис здорового питания</span>
          </div>
          <Navbar />
        </div>
      </header>
    </>
  );
};
