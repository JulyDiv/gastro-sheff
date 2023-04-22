import React, { useState } from "react";
import styles from "./ProgramName.module.sass";

export const ProgramName = ({ program, onClick, isActive, setIsActive }) => {

  //const [isActive, setIsActive] = useState(false);

  const onActive = (name) => {
    //onClick();
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
    // <li
    //   key={program.id}
    //   className={isActive ? `${styles.item} ${styles.item_active}` : `${styles.item}`}
    //   onClick={() => onClick()}
    // >
    //   <span className={styles.name}>{program.name}</span>
    //   <span className={styles.calorie}>{program.calories}</span>
    // </li>
  );
};
