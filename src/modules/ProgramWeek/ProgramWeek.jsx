import React from "react";
import styles from "./ProgramWeek.module.sass";

export const ProgramWeek = ({ item }) => {
  return (
    <ul key={item.id} className={styles.list}>
      <li className={`${styles.item} ${styles.item_name}`}>
        <span>{item.name}</span>
      </li>
      {item.price && (
        <li className={`${styles.item} ${styles.item_price}`}>
          <span>{item.price}</span>
        </li>
      )}
      {item.percent && (
        <li className={`${styles.item} ${styles.item_percent}`}>
          <span>{item.percent}</span>
        </li>
      )}
      <li className={`${styles.item} ${styles.item_sale}`}>
        <span>{item.sale}</span>
      </li>
    </ul>
  );
};