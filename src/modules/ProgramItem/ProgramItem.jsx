import React, { useState } from "react";
import styles from "./ProgramItem.module.sass";
import { weekdayData } from "../../utils/weekday";
import { ButtonWeek } from "../../components/ButtonWeek/ButtonWeek";
import { ProgramList } from "../ProgramList/ProgramList";
import { ProgramWeek } from "../ProgramWeek/ProgramWeek";

export const ProgramItem = ({ program }) => {
  const [monday, setMonday] = useState(false);
  const [tuesday, setTuesday] = useState(false);
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={styles.block}>
      <div className={styles.info}>
        <div className={styles.program}>
          <span className={styles.title}>{program.name}</span>
          <span className={styles.span}>{program.calories}</span>
          <p className={styles.text}>{program.text}</p>
        </div>
        <div className={styles.price}>
          {program.pack.map((item, id) => (
            <ProgramWeek key={id} item={item} />
          ))}
        </div>
        <button className={`${styles.info_button} button`}>Заказать</button>
      </div>

      <div className={styles.chart}>
        <div className={styles.day}>
          {weekdayData.map(({ title, id }) => (
            <ButtonWeek
              key={id}
              title={title}
              isActive={isActive}
              setIsActive={setIsActive}
            />
          ))}
          {/* {program.monday.map(({ name, id }) => (
            <ButtonWeek
              key={id}
              name={name}
              isActive={isActive}
              setIsActive={setIsActive}
            />
          ))}
          {program.tuesday.map(({ name, id }) => (
            <ButtonWeek
              key={id}
              name={name}
              isActive={isActive}
              setIsActive={setIsActive}
            />
          ))} */}
        </div>
        <div className={styles.menu}>
          {isActive === "ПН" && (
            <>
              {program.monday.map((item, id) => (
                <ProgramList key={id} item={item} />
              ))}
            </>
          )}
          {isActive === "ВТ" && (
            <>
              {program.tuesday.map((item, id) => (
                <ProgramList key={id} item={item} />
              ))}
            </>
          )}
          {/* {monday && (
            <>
              {program.monday.map((item, id) => (
                <ProgramList key={id} item={item} />
              ))}
            </>
          )} */}
          {/* {tuesday && (
            <>
              {program.tuesday.map((item, id) => (
                <ProgramList key={id} item={item} />
              ))}
            </>
          )} */}
        </div>
      </div>
    </div>
  );
};
