import React, { useState } from "react";
import styles from "./ProgramItem.module.sass";
import { weekdayData } from "../../utils/weekday";
import { ButtonWeek } from "../../components/ButtonWeek/ButtonWeek";
import { ProgramList } from "../ProgramList/ProgramList";
import { ProgramWeek } from "../ProgramWeek/ProgramWeek";
import { ModalOrder } from "../ModalOrder/ModalOrder";

export const ProgramItem = ({ program }) => {
  const [isOpenModalOrder, setIsOpenModalOrder] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [pack, setPack] = useState("");

  const onClick = () => {
    setIsOpenModalOrder(true);
    //console.log(program);
  };

  //console.log(pack);

  return (
    <div key={program.id} className={styles.block}>
      <div className={styles.info}>
        <div className={styles.program}>
          <span className={styles.title}>{program.name}</span>
          <span className={styles.span}>{program.calories}</span>
          <p className={styles.text}>{program.text}</p>
        </div>
        <div className={styles.price}>
          {program.pack.map((item, id) => (
            <ProgramWeek key={id} item={item} pack={pack} setPack={setPack} />
          ))}
        </div>
        {/* <Link href="#form" className={`${styles.info_button} button`}>Заказать</Link> */}
        <button
          className={`${styles.info_button} button`}
          onClick={() => onClick()}
        >
          Заказать
        </button>
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
        </div>
      </div>
      {isOpenModalOrder && (
        <ModalOrder
          programName={program.name}
          pack={pack}
          isOpenModalOrder={isOpenModalOrder}
          setIsOpenModalOrder={setIsOpenModalOrder}
        />
      )}
    </div>
  );
};
