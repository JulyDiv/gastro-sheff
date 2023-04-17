import React, { useState } from "react";
import styles from "./SidebarItem.module.sass";
import Link from "next/link";

export const SidebarItem = ({ liStyleName, linkStyle, linkActive, span, text, isSpan }) => {

  const [isActive, setIsActive] = useState(false);
  const [] = useState(false);

  const onClick = () => {
    setIsActive((current) => !current);
  };

  return (
    <li
      className={
        isActive ? `${styles.item} ${styles.item_active}` : `${styles.item}`
      }
      onClick={() => onClick()}
    >
      {text && (
        <span
          className={
            isActive ? `${liStyleName} ${linkActive}` : `${liStyleName}`
          }
        >
          {text}
        </span>
      )}
      {linkStyle && (
        <div className={styles.block}>
          {isSpan && (
            <span
              className={
                isActive
                  ? `${styles.span} ${styles.span_active}`
                  : `${styles.span}`
              }
            >
              5
            </span>
          )}
          <Link
            href="#"
            className={
              isActive
                ? `${styles.link} ${linkStyle} ${linkActive}`
                : `${styles.link} ${linkStyle}`
            }
            onClick={(e) => e.preventDefault()}
          ></Link>
        </div>
      )}
      <span className={`${styles.spanActive}`}>{span}</span>
    </li>
  );
};
