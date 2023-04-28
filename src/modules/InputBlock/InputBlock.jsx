import React, { useState } from "react";
import styles from "./InputBlock.module.sass";
import { Input } from "../../components/Input/Input";

export const InputBlock = ({
  name,
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

  const onClick = (name) => {
    setIsActive(name);
    if (isActive === "Имя") {
      setIsActive(false);
    }
    if (isActive === "Номер телефона") {
      setIsActive(false);
    }
  };

  //console.log(isActive);

  return (
    <>
      <div className={styles.form}>
        <label
          className={
            isActive === name
              ? `${styles.label} ${styles.label_active}`
              : `${styles.label}`
          }
          style={{ color: errors && "#F87676" }}
        >
          {name}
        </label>
        <div
          className={
            isActive === name
              ? `${styles.block} ${styles.block_active}`
              : `${styles.block}`
          }
          style={{ border: errors && "1px solid #F87676" }}
          onClick={() => onClick(name)}
        >
          <Input
            register={register}
            item={item}
            placeholder={placeholder}
            type={type}
            message={message}
            messageErr={messageErr}
            className={styles.input}
          />
          <div
            className={
              isActive === name
                ? `${styles.indicator} ${styles.indicator_active}`
                : `${styles.indicator}`
              // errors
              //   ? `${styles.indicator} ${styles.indicator_error}`
              //   : `${styles.indicator}`)
            }
            //style={{ backgroundColor: errors ? "#F87676" : "#64D370" }}
            style={{ backgroundColor: errors && "#F87676" }}
          ></div>
        </div>
      </div>
    </>
  );
};
