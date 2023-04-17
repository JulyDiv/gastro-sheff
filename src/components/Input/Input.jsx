import React, { useState } from "react";
import styles from "./Input.module.sass";
//import { useForm } from "react-hook-form";

export const Input = ({ label, type }) => {

  const [isActive, setIsActive] = useState(false);

  const onClick = () => {
    // setIsActive(true);
    setIsActive((current) => !current);
  };

  return (
    <>
      <div className={styles.form}>
        <label
          className={
            isActive
              ? `${styles.label} ${styles.label_active}`
              : `${styles.label}`
          }
        >
          {label}
        </label>
        <div
          className={
            isActive
              ? `${styles.block} ${styles.block_active}`
              : `${styles.block}`
          }
          onClick={() => onClick()}
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
