import React, { useState } from "react";
import styles from "./Input.module.sass";

export const Input = ({
  label,
  type,
  register,
  placeholder,
  messageErr,
  item,
  message,
  value,
  errors,
}) => {
  const [isActive, setIsActive] = useState(false);

  const onClick = (label) => {
    setIsActive(label);
    if (isActive === "Имя") {
      setIsActive(false);
    }
    if (isActive === "Номер телефона") {
      setIsActive(false);
    }
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
          <input
            {...register(item, {
              required: {
                value: message ? true : false,
                message: message,
              },
              pattern: {
                value: value,
                message: messageErr,
              },
            })}
            style={{ border: errors && "1px solid #a00303" }}
            className={styles.input}
            placeholder={placeholder}
            type={type}
          />
          {/* {errors?.message && <span>{errors?.message}</span>} */}
          {/* <input className={styles.input} type={type} /> */}
          <div
            className={
              (isActive
                ? `${styles.indicator} ${styles.indicator_active}`
                : `${styles.indicator}`,
              errors?.message
                ? `${styles.indicator} ${styles.indicator_error}`
                : `${styles.indicator}`)
            }
          ></div>
        </div>
      </div>
    </>
  );
};
