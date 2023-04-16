import React from "react";
import styles from "./Sidebar.module.sass";
import Link from "next/link";

export const Sidebar = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li
          className={`${styles.item} ${styles.item_active} ${styles.link_calories}`}
        >
          Ккал
          {/* <Link
            href="#"
            className={`${styles.link} ${styles.link_calories}`}
          ></Link> */}
          <span className={`${styles.span_hidden} ${styles.span_active}`}>
            Ккал
          </span>
        </li>
        <li className={`${styles.item} ${styles.item_active}`}>
          <Link
            href="#"
            className={`${styles.link} ${styles.link_fish}`}
          ></Link>
          <span className={`${styles.span_hidden} ${styles.span_active}`}>
            Fish
          </span>
        </li>
        <li className={`${styles.item} ${styles.item_active}`}>
          <Link
            href="#"
            className={`${styles.link} ${styles.link_carrot}`}
          ></Link>
          <span className={`${styles.span_hidden} ${styles.span_active}`}>
            Carrot
          </span>
        </li>
        <li className={`${styles.item} ${styles.item_active}`}>
          <Link
            href="#"
            className={`${styles.link} ${styles.link_bottle}`}
          ></Link>
          <span className={`${styles.span_hidden} ${styles.span_active}`}>
            Bottle
          </span>
        </li>
        <li className={`${styles.item} ${styles.item_active}`}>
          <Link
            href="#"
            className={`${styles.link} ${styles.link_meat}`}
          ></Link>
          <span className={`${styles.span_hidden} ${styles.span_active}`}>
            Meat
          </span>
        </li>
        <li className={`${styles.item} ${styles.item_active}`}>
          <div className={styles.block}>
            <span className={styles.span}>5</span>
            <Link
              href="#"
              className={`${styles.link} ${styles.link_table}`}
            ></Link>
          </div>
          <span className={`${styles.span_hidden} ${styles.span_active}`}>
            Table
          </span>
        </li>
      </ul>
    </nav>
  );
};
