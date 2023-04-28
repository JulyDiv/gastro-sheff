import React, { useState } from "react";
import styles from "./ProgramName.module.sass";

export const ProgramName = ({ program, isActive, setIsActive }) => {

  const onActive = (name) => {
    setIsActive(name);
  };

  return (
    <li
      key={program.id}
      className={
        isActive === program.name ? `${styles.item} ${styles.item_active}` : `${styles.item}`
      }
      onClick={() => onActive(program.name)}
    >
      <span className={styles.name}>{program.name}</span>
      <span className={styles.calorie}>{program.calories}</span>
    </li>
  );
};
