import Link from "next/link";
import React from "react";
import styles from "./InputRadio.module.sass";

export const InputRadio = ({ link, text, type, register, item, label, id }) => {

  return (
    <>
      <div className={styles.block}>
        <input
          {...register(item)}
          className={styles.input}
          type={type}
          id={id}
        />
        <label className={styles.label} htmlFor={label}></label>
        <span className={styles.text}>
          {text}
          <Link href="#" className={styles.link}>
            {" "}
            {link}
          </Link>
        </span>
      </div>
    </>
  );
};
