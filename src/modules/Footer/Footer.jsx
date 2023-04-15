/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./Footer.module.sass";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={`${styles.block} ${styles.left}`}>
            <Link href="#" className={styles.link}>
              Програмы питания
            </Link>
            <Link href="#" className={styles.link}>
              О нас
            </Link>
            <Link href="#" className={styles.link}>
              Бизнес-ланчи
            </Link>
            <Link href="#" className={styles.link}>
              Gastro Shop
            </Link>
            <Link href="#" className={styles.link}>
              Блог
            </Link>
          </div>
          <div className={`${styles.block} ${styles.img}`}>
            <img src="/img/logo.png" alt="logo" />
            <span>сервис здорового питания</span>
          </div>
          <div className={`${styles.block} ${styles.right}`}>
            <Link href="#" className={styles.link} style={{ textAlign: "right" }}>
              Условия сотрудничества
            </Link>
            <Link href="#" className={styles.link}>
              FAQ
            </Link>
            <div className={styles.icon_block}>
              <Link
                href="#"
                className={`${styles.icon} ${styles.icon_instagram}`}
              ></Link>
              <Link
                href="#"
                className={`${styles.icon} ${styles.icon_facebook}`}
              ></Link>
              <Link
                href="#"
                className={`${styles.icon} ${styles.icon_wapp}`}
              ></Link>
              <Link
                href="#"
                className={`${styles.icon} ${styles.icon_telegram}`}
              ></Link>
            </div>
            <Link href="#" className={styles.phone}>
              +38 (068) 949 - 49 - 19
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
