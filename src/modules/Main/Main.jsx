import React from "react";
import { ContactForm } from "../ContactForm/ContactForm";
import { Faq } from "../Faq/Faq";
import styles from "./Main.module.sass";

export const Main = () => {
  return (
    <>
      <section className={styles.main}>
        <div className="container">
          <div className={styles.wrapper}>
            <ContactForm />
            <Faq />
            </div>
        </div>
      </section>
    </>
  );
};
