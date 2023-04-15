/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from "react";
import styles from "./Program.module.sass";
import { AppContext } from "../../context/AppContext";
import { ProgramItem } from "../ProgramItem/ProgramItem";
// import { InfoBlock } from "../InfoBlock/InfoBlock";
// import { MenuProgram } from "../MenuProgram/MenuProgram";
// import { Price } from "../Price/Price";
// import { InfoProgram } from "../InfoProgram/InfoProgram";
// import { DayProgram } from "../DayProgram/DayProgram";

export const Program = () => {

  const { programs, getData } = useContext(AppContext);

  useEffect(() => {
    getData();
  }, [])

  console.log(programs);
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
              {programs.map((program) => (
                <li key={program.id} className={styles.item}>
                  <span className={styles.name}>{program.name}</span>
                  <span className={styles.calorie}>{program.calories}</span>
                </li>
              ))}
            </ul>

            <div className={styles.block}>
              {programs.map((program, id) => (
                <ProgramItem key={id} program={program} />
              ))}
            </div>

            {/* <div className={styles.block}>
              <div className={styles.info}>
                <InfoProgram />
                <Price />
                <button className={`${styles.info_button} button`}>
                  Заказать
                </button>
              </div>
              <div className={styles.chart}>
                <DayProgram />
                <MenuProgram />
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};
