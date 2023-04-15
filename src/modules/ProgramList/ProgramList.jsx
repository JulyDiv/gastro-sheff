import React from "react";
import styles from "./ProgramList.module.sass";

export const ProgramList = ({ item }) => {
    return (
      <ul key={item.id} className={styles.listProgram}>
        <li className={styles.itemProgram}>
          <h4 className={styles.titleProgram}>{item.title}</h4>
          <span className={styles.span}>{item.time}</span>
        </li>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
          }}
        >
          {item.menu.map((item) => (
            <>
              <li
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
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