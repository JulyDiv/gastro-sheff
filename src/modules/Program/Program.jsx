/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useContext, useEffect } from "react";
import styles from "./Program.module.sass";
import { AppContext } from "../../context/AppContext";
import { ProgramItem } from "../ProgramItem/ProgramItem";
// import { InfoBlock } from "../InfoBlock/InfoBlock";
// import { MenuProgram } from "../MenuProgram/MenuProgram";
// import { Price } from "../Price/Price";
// import { InfoProgram } from "../InfoProgram/InfoProgram";
// import { DayProgram } from "../DayProgram/DayProgram";

export const Program = () => {

  const [isExpressFit, setIsExpressFit] = useState(false);
  const [isSlim, setIsSlim] = useState(false);

  const { programs, getData } = useContext(AppContext);

  useEffect(() => {
    getData();
  }, []);

  const onExpressFit = () => {
    setIsSlim(false);
    setIsExpressFit(true);
  };

  const onSlim = () => {
    setIsExpressFit(false);
    setIsSlim(true);
  };

  // console.log(programs);
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
              {programs.expressFit ? (
                <>
                  {programs.expressFit.map((program) => (
                    <li
                      key={program.id}
                      className={styles.item}
                      onClick={() => onExpressFit()}
                    >
                      <span className={styles.name}>{program.name}</span>
                      <span className={styles.calorie}>{program.calories}</span>
                    </li>
                  ))}
                </>
              ) : (
                ""
              )}
              {programs.slim ? (
                <>
                  {programs.slim.map((program) => (
                    <li
                      key={program.id}
                      className={styles.item}
                      onClick={() => onSlim()}
                    >
                      <span className={styles.name}>{program.name}</span>
                      <span className={styles.calorie}>{program.calories}</span>
                    </li>
                  ))}
                </>
              ) : (
                ""
              )}
            </ul>

            <div className={styles.block}>
              {isExpressFit && (
                <>
                  {programs.expressFit.map((program, id) => (
                    <ProgramItem key={id} program={program} />
                  ))}
                </>
              )}
              {isSlim && (
                <>
                  {programs.slim.map((program, id) => (
                    <ProgramItem key={id} program={program} />
                  ))}
                </>
              )}
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
