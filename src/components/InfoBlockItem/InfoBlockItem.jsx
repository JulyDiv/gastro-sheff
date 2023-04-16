/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./InfoBlockItem.module.sass";

export const InfoBlockItem = ({ img, description }) => {
  return (
    <div className={styles.block}>
      <img src={img} alt="icon" className={styles.img} />
      <span className={styles.span}>{description}</span>
    </div>
  );
};