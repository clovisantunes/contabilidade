import React from "react";
import styles from "./styles.module.scss";
import texts from "./utils/informations.json";

export default function Results() {
  const results = {
    title: texts.title,
    colorTitle: texts.colorTitle,
    resultItems:{

        trabalhosConcluidos: {
            valor: texts.trabalhosConcluidos.valor,
            texto: texts.trabalhosConcluidos.texto,
        },
        clientesSatisfeitos: {
            valor: texts.clientesSatisfeitos.valor,
            texto: texts.clientesSatisfeitos.texto,
        },
        equipes: {
            valor: texts.equipes.valor,
            texto: texts.equipes.texto,
        },
    }
  };

  return (
    <>
      <div className={styles.resultsContainer}>
        <div className={styles.resultContent}>

            <div className={styles.resultTitle}>
            <h1>{results.title}</h1>
            <h1>{results.colorTitle}</h1>
            </div>
          <div className={styles.resultItem}>
        {Object.keys(results.resultItems).map((key) => (
            <div className={styles.resultCard}>
              <h1>+{results.resultItems[key].valor}</h1>
              <h2>{results.resultItems[key].texto}</h2>
            </div>
        ))}
        </div>
        </div>
      </div>
    </>
  );
}
