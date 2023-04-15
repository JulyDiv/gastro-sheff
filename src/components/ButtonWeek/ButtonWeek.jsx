import React from "react";
import styles from "./ButtonWeek.module.sass";

export const ButtonWeek = ({ setMonday, setTuesday }) => {

  const onMonday = () => {
    setTuesday(false);
    setMonday(true);
  };

  const onTuesday = () => {
    setMonday(false);
    setTuesday(true);
  };

  return (
    <>
      <button className={styles.button} onClick={() => onMonday()}>
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
      </button>
    </>
  );
};
