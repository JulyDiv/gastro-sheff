import React from "react";
import styles from "./ProgramList.module.sass";

export const ProgramList = ({ item }) => {
    return (
      <ul key={item.id} className={styles.list}>
        <li className={styles.item}>
          <h4 className={styles.title}>{item.title}</h4>
          <span className={styles.span}>{item.time}</span>
        </li>
        <div
          className={styles.block}
        >
          {item.menu.map((item) => (
            <>
              <li
                className={styles.name}
              >
                <span key={item.id} className={styles.span}>
                  {item.title}
                </span>

                <span className={styles.span}>{item.total}</span>
              </li>
            </>
          ))}
        </div>
      </ul>
    );
}