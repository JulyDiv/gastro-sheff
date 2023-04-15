/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./PhotoHome.module.sass";

export const PhotoHome = () => {
    return (
      <>
        <section className={styles.photo}>
          <h2 className={styles.title}>Фото блюд</h2>
          <div className={styles.wrapper}>
            <img
              src="/img/photo-home-1.jpg"
              alt="photo-eat"
              className={styles.img}
            />
            <img
              src="/img/photo-home-2.jpg"
              alt="photo-eat"
              className={styles.img}
            />
            <img
              src="/img/photo-home-3.jpg"
              alt="photo-eat"
              className={styles.img}
            />
            <img
              src="/img/photo-home-4.jpg"
              alt="photo-eat"
              className={styles.img}
            />
          </div>
        </section>
      </>
    );
}