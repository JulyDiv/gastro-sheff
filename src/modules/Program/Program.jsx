import React from "react";
import styles from "./Program.module.sass";
// import { InfoBlock } from "../InfoBlock/InfoBlock";
// import { MenuProgram } from "../MenuProgram/MenuProgram";
// import { Price } from "../Price/Price";
// import { InfoProgram } from "../InfoProgram/InfoProgram";
// import { DayProgram } from "../DayProgram/DayProgram";

export const Program = () => {
  return (
    <>
      <section className={styles.program}>
        {/* <InfoBlock /> */}
        <div className="container">
          <div className={styles.wrapper}>
            <div className={styles.button}>
              <button className={`${styles.button_button} button`}>
                Программы питания
              </button>
              <button className={`${styles.button_button} button`} disabled>
                Специальные программы
              </button>
            </div>
            <ul className={styles.list}>
              <li className={styles.list_item}>
                <span className={styles.list_name}>express fit</span>
                <span className={styles.list_calorie}>800 ккал</span>
              </li>
              <li className={styles.list_item}>
                <span className={styles.list_name}>slim</span>
                <span className={styles.list_calorie}>1000 ккал</span>
              </li>
              <li className={styles.list_item}>
                <span className={styles.list_name}>fitness</span>
                <span className={styles.list_calorie}>1300 ккал</span>
              </li>
              <li className={styles.list_item}>
                <span className={styles.list_name}>balance</span>
                <span className={styles.list_calorie}>1600 ккал</span>
              </li>
              <li className={styles.list_item}>
                <span className={styles.list_name}>balance +</span>
                <span className={styles.list_calorie}>1800 ккал</span>
              </li>
              <li className={styles.list_item}>
                <span className={styles.list_name}>strong</span>
                <span className={styles.list_calorie}>2000 ккал</span>
              </li>
              <li className={styles.list_item}>
                <span className={styles.list_name}>maxi fit</span>
                <span className={styles.list_calorie}>2400 ккал</span>
              </li>
            </ul>
            <div className={styles.block}>
              <div className={styles.info}>
                {/* <InfoProgram /> */}
                {/* <Price /> */}
                <button className={`${styles.info_button} button`}>
                  Заказать
                </button>
              </div>
              <div className={styles.chart}>
                {/* <DayProgram /> */}
                {/* <MenuProgram /> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
