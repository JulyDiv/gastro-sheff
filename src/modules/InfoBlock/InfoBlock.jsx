import React from "react";
import styles from "./InfoBlock.module.sass";
import { InfoBlockItem } from "../../components/InfoBlockItem/InfoBlockItem";

export const InfoBlock = () => {
    return (
      <div className={styles.info}>
        <div className={styles.wrapper}>
          <InfoBlockItem
            img="/img/info-icon-1.svg"
            description="Бережём природу. Эко-тара и приборы."
          />
          <InfoBlockItem
            img="/img/info-icon-2.svg"
            description="28 дней без повторения, более 300 блюд!"
          />
          <InfoBlockItem
            img="/img/info-icon-3.svg"
            description="Бесплатно заменяем блюда и ингредиенты."
          />
          <InfoBlockItem
            img="/img/info-icon-4.svg"
            description="Готовим ночью, упаковываем и отправляем Вам!"
          />
          <InfoBlockItem
            img="/img/info-icon-5.svg"
            description="Ежедневная удобная и бесплатная доставка с 6:00 до 10:00"
          />
          <InfoBlockItem
            img="/img/info-icon-6.svg"
            description="Сохраняем Вашу энергию и до 14 часов в неделю освобождая от готовки!"
          />
        </div>
      </div>
    );
};