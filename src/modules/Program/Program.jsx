/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useContext, useEffect } from "react";
import styles from "./Program.module.sass";
import { AppContext } from "../../context/AppContext";
import { ProgramItem } from "../ProgramItem/ProgramItem";
import { InfoBlock } from "../InfoBlock/InfoBlock";
import { ProgramName } from "../ProgramName/ProgramName";

export const Program = () => {
  //const [isExpressFit, setIsExpressFit] = useState(false);
  //const [isSlim, setIsSlim] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const { programs, getData } = useContext(AppContext);

  useEffect(() => {
    getData();
  }, []);

  // const onExpressFit = () => {
  //   setIsSlim(false);
  //   setIsExpressFit(true);
  // };

  // const onSlim = () => {
  //   setIsExpressFit(false);
  //   setIsSlim(true);
  // };

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
                  {programs.expressFit.map((program, id) => (
                    <ProgramName
                      key={id}
                      program={program}
                      //onClick={onExpressFit}
                      isActive={isActive}
                      setIsActive={setIsActive}
                    />
                  ))}
                </>
              ) : (
                ""
              )}
              {programs.slim ? (
                <>
                  {programs.slim.map((program, id) => (
                    <ProgramName
                      key={id}
                      program={program}
                      //onClick={onSlim}
                      isActive={isActive}
                      setIsActive={setIsActive}
                    />
                  ))}
                </>
              ) : (
                ""
              )}
            </ul>

            <div className={styles.block}>
              {isActive === "Express Fit" && (
                <>
                  {programs.expressFit.map((program, id) => (
                    <ProgramItem key={id} program={program} />
                  ))}
                </>
              )}
              {isActive === "Slim" && (
                <>
                  {programs.slim.map((program, id) => (
                    <ProgramItem key={id} program={program} />
                  ))}
                </>
              )}
              {/* {isExpressFit && (
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
              )} */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
