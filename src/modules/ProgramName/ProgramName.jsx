import React from "react";
import styles from "./ProgramName.module.sass";

export const ProgramName = ({ program, onClick }) => {
  return (
    <li key={program.id} className={styles.item} onClick={onClick}>
      <span className={styles.name}>{program.name}</span>
      <span className={styles.calorie}>{program.calories}</span>
    </li>
  );
};