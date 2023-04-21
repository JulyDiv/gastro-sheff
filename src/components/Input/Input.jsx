import React, { useState } from "react";
import styles from "./Input.module.sass";
//import { useForm } from "react-hook-form";

export const Input = ({ label, type }) => {

  const [isActive, setIsActive] = useState(false);

  const onClick = (label) => {
    //setIsActive((current) => !current);
    setIsActive(label);
    if (isActive === "Имя") {
      setIsActive(false);
    }
    if (isActive === "Номер телефона") {
      setIsActive(false);
    }
    //console.log(isActive);
  };

  return (
    <>
      <div className={styles.form}>
        <label
          className={
            isActive === label
              ? `${styles.label} ${styles.label_active}`
              : `${styles.label}`
          }
        >
          {label}
        </label>
        <div
          className={
            isActive === label
              ? `${styles.block} ${styles.block_active}`
              : `${styles.block}`
          }
          onClick={() => onClick(label)}
        >
          <input className={styles.input} type={type} />
          <div
            className={
              isActive
                ? `${styles.indicator} ${styles.indicator_active}`
                : `${styles.indicator}`
            }
          ></div>
        </div>
      </div>
    </>
  );
};
