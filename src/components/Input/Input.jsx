import React, { useState } from "react";
import styles from "./Input.module.sass";

export const Input = ({ label, type }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <div className={styles.form}>
        <label className={styles.label}>{label}</label>
        <div className={styles.block}>
          <input className={styles.input} type={type} />
          <div className={styles.indicator}></div>
        </div>
      </div>
    </>
  );
};
