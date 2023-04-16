/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import styles from "./ButtonAcc.module.sass";

export const ButtonAcc = ({ title, text, isAcc, setIsAcc }) => {

  const [isActive, setIsActive] = useState(false);

  const onClick = () => {
    isAcc ? setIsAcc(false) : setIsAcc(true);
    isActive ? setIsActive(false) : setIsActive(true);
    //e.currentTarget.classList.toggle("")
  };

  return (
    <>
      <div className={styles.wrapper}>
        <button
          className={
            isActive
              ? `${styles.button_active} ${styles.button}`
              : styles.button
          }
          onClick={() => onClick()}
        >
          <div className={styles.block}>
            {title}
            {isAcc ? (
              <img
                src="/img/arrow-right.svg"
                alt="arrow right"
                className={`${styles.arrow} ${styles.arrow_active}`}
              />
            ) : (
              <img
                src="/img/arrow-black.svg"
                alt="arrow down"
                className={`${styles.arrow}`}
              />
            )}
          </div>
          {isAcc && <p className={styles.text}>{text}</p>}
        </button>
      </div>
    </>
  );
};
