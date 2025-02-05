import React from "react";
import styles from "./styles.module.scss";
import texts from './utils/informations.json';

export default function Main() {


  return (
    <main className={styles.mainContainer}>
      <div className={styles.textCard}>
      <h1>{texts.title}</h1>
      <h2>{texts.text}</h2>
      </div>
    </main>
  );
}
