import Link from "next/link";
import React, { useState } from "react";
import styles from "./InputRadio.module.sass";
//import { useForm } from "react-hook-form";

export const InputRadio = ({ label, link, text }) => {

  const [isActive, setIsActive] = useState(false);


  const onClick = (text) => {
    //setIsActive((current) => !current);
    setIsActive(text);
    console.log(isActive);
    if (isActive === "Тест-день! Получить скидку -30%?") {
      setIsActive(false);
    }
    if (isActive === "Согласен с") {
      setIsActive(false);
    }
  }
  return (
    <>
      <label className={styles.form}>
        <input className={styles.input} type="checkbox" />
        <div className={styles.block} onClick={() => onClick(text)}>
          {/* <input className={styles.input} type="checkbox" /> */}
          <div
            className={
              isActive === text
                ? `${styles.radio} ${styles.radio_active}`
                : `${styles.radio}`
            }
          ></div>
        </div>

        <span className={styles.text}>
          {text}
          <Link href="#" className={styles.link}>
            {" "}
            {link}
          </Link>
        </span>
      </label>
      {/* <div className={styles.form}>
        <div className={styles.block}>
          <input className={styles.input} type="checkbox" />
          <div className={styles.radio}></div>
        </div>

        <label className={styles.label}>
          {label}
          <Link href="#" className={styles.link}>
            {link}
          </Link>
        </label>
      </div> */}
    </>
  );
};
