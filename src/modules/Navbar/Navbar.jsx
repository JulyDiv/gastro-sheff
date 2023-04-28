import React from "react";
import Link from "next/link";
import styles from "./Navbar.module.sass";

export const Navbar = () => {

  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.wrapper}>
          <ul className={styles.list}>
            <li className={styles.item}>
              <Link href="#" className={styles.link}>
                Програмы питания
              </Link>
            </li>
            <li className={styles.item}>
              <Link href="#" className={styles.link}>
                Бизнес-ланчи
              </Link>
            </li>
            <li className={styles.item}>
              <Link href="#" className={styles.link}>
                Gastro Shop
              </Link>
            </li>
            <li className={styles.item}>
              <Link href="#" className={styles.link}>
                О нас
              </Link>
            </li>
            <li className={styles.item}>
              <Link href="#" className={styles.link}>
                Блог
              </Link>
            </li>
          </ul>
        </div>
        {/* <Link href="#" className={styles.phone}>
          +38 (068) 949 - 49 - 19
        </Link> */}
        <Link href="#" className={styles.phone}>
          Заказать звонок
        </Link>
      </div>
    </>
  );
};
