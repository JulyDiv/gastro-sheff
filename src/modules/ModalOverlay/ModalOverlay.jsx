import React, { useState } from "react";
import styles from "./ModalOverlay.module.sass";

export const ModalOverlay = ({ isOpenModalOrder, setIsOpenModalOrder }) => {

  const [] = useState();

  const onClick = () => {
    setIsOpenModalOrder(false);
  };

  return (
    <>
      <div
        className={styles.overlay}
        onClick={() => onClick()}
      ></div>
    </>
  );
};