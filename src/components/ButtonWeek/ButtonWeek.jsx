import React, { useState } from "react";
import styles from "./ButtonWeek.module.sass";

export const ButtonWeek = ({
  title,
  setIsActive,
  isActive
}) => {

  const onClick = (title) => {
    setIsActive((current) => !current);
    setIsActive(title);
    //console.log(isActive);
  };

  return (
    <>
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
    </>
  );
};
