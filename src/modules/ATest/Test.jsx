import React, { useState } from "react";
import styles from "./Test.module.sass";

export const Test = ({ order }) => {
  const [] = useState();
  const onClick = () => {
  };
  return (
    <>
      <div>
        <p>{order.program}</p>
        <p>{order.sum}</p>
        <p>{order.date}</p>
      </div>
      {/* {orders.length
        ? orders.map(({ name, id, userId, program, sum, date }) => (
            <div key={id}>
              <p>{program}</p>
              <p>{sum}</p>
              <p>{date}</p>
            </div>
          ))
        : "Список заказов пуст"} */}
    </>
  );
};