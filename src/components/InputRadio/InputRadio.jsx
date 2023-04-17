import Link from "next/link";
import React, { useState } from "react";
import styles from "./InputRadio.module.sass";
//import { useForm } from "react-hook-form";

export const InputRadio = ({ label, link, text }) => {
  return (
    <>
      <label className={styles.form}>
        <input className={styles.input} type="checkbox" />
        <div className={styles.block}>
          {/* <input className={styles.input} type="checkbox" /> */}
          <div className={styles.radio}></div>
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
