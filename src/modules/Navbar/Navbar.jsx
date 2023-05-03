import React, { useContext, useState } from "react";
import Link from "next/link";
import styles from "./Navbar.module.sass";
import { AppContext } from "../../context/AppContext";
import { FormItem } from "../FormItem/FormItem";

export const Navbar = () => {
  const [isOpenCall, setIsOpenCall] = useState(false);

  const { isSignForm, setIsSignForm, isForm, setIsForm } =
    useContext(AppContext);

  const onClick = () => {
    isOpenCall ? setIsOpenCall(false) : setIsOpenCall(true);
  };

  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.wrapper}>
          <ul className={styles.list}>
            <li className={styles.item}>
              <Link href="/" className={styles.link}>
                Главная
              </Link>
            </li>
            <li className={styles.item}>
              <Link href="#" className={styles.link}>
                Меню
              </Link>
            </li>
            <li className={styles.item}>
              <Link href="#" className={styles.link}>
                Ацкии
              </Link>
            </li>
            <li className={styles.item}>
              <Link href="#" className={styles.link}>
                Вакансии
              </Link>
            </li>
            <li className={styles.item}>
              <Link href="#" className={styles.link}>
                О нас
              </Link>
            </li>
          </ul>
        </div>
        <button className={styles.phone} onClick={() => onClick()}>
          Заказать звонок
        </button>
      </div>
      <div className={styles.block}>
        {isOpenCall && (
          <FormItem
            button="Заказать звонок"
            isSignForm={true}
            setIsSignForm={setIsSignForm}
          />
        )}
      </div>
    </>
  );
};
