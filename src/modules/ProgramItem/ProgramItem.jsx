import React from "react";
import styles from "./ProgramItem.module.sass";

export const ProgramItem = ({ program }) => {
  return (
    <>
      <div className={styles.info}>
        <div className={styles.program}>
          <span className={styles.title}>{program.name}</span>
          <span className={styles.span}>{program.calories}</span>
          <p className={styles.text}>{program.text}</p>
        </div>
        <div className={styles.price}>
          {program.pack.map((item) => (
            <ul key={item.id} className={styles.listPrice}>
              <li className={styles.listPrice_name}>
                <span>{item.name}</span>
              </li>
              {item.price && (
                <li className={styles.listPrice_price}>
                  <span>{item.price}</span>
                </li>
              )}
              {item.percent && (
                <li className={styles.listPrice_percent}>
                  <span>{item.percent}</span>
                </li>
              )}
              <li className={styles.listPrice_sale}>
                <span>{item.sale}</span>
              </li>
            </ul>
          ))}
        </div>
        <button className={`${styles.info_button} button`}>Заказать</button>
      </div>
      <div className={styles.chart}>
        <div className={styles.day}>
          {program.weekDay.map((item) => (
            <button key={item.id} className={styles.button}>
              {item}
            </button>
          ))}
        </div>
        <div className={styles.menu}>
          {program.monday.map((item) => (
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
                        justifyContent: "space-between"
                      }}
                      //   className={styles.item}
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
          ))}
        </div>
      </div>

      {/* <li key={program.id} className={styles.item}>
        <span className={styles.name}>{program.name}</span>
        <span className={styles.calorie}>{program.calories}</span>
      </li> */}
    </>
  );
};
