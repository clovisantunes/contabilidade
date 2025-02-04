import React from "react";
import styles from "./styles.module.scss";

export default function Main() {
  const texts = {
    title: "XX Anos de experiência",
    text: "Confiança que controi seu sucesso",
  };

  return (
    <main className={styles.mainContainer}>
      <h1>{texts.title}</h1>
      <h2>{texts.text}</h2>
    </main>
  );
}
