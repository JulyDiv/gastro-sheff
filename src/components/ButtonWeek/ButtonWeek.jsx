import React, { useState } from "react";
import styles from "./ButtonWeek.module.sass";

export const ButtonWeek = ({
  title,
  name,
  setIsActive,
  isActive
}) => {

  const onClick = (name) => {
    setIsActive((current) => !current);
    setIsActive(name);
    //console.log(isActive);
  };

  return (
    <>
      {/* <button
        className={
          isActive === name
            ? `${styles.button} ${styles.button_active}`
            : `${styles.button}`
        }
        onClick={() => onClick(name)}
      >
        {name}
      </button> */}
      <button
        className={
          isActive === title
            ? `${styles.button} ${styles.button_active}`
            : `${styles.button}`
        }
        onClick={() => onClick(title)}
      >
        {title}
      </button>
      {/* <button className={isActive ? `${styles.button} ${styles.button_active}` : `${styles.button}`} onClick={() => onMonday()}>
        пн
      </button>
      <button className={styles.button} onClick={() => onTuesday()}>
        вт
      </button>
      <button className={styles.button} onClick={() => {}}>
        ср
      </button>
      <button className={styles.button} onClick={() => {}}>
        чт
      </button>
      <button className={styles.button} onClick={() => {}}>
        пт
      </button>
      <button className={styles.button} onClick={() => {}}>
        сб
      </button>
      <button className={styles.button} onClick={() => {}}>
        вс
      </button> */}
    </>
  );
};
