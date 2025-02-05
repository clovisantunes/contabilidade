import React from 'react';
import styles from './styles.module.scss';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import contactDataJson from './utils/informations.json'; // Importando o JSON

// Definindo as interfaces
interface Contato {
  tipo: string;
  icone: string; // Nome do ícone como string
  detalhes: string[];
}

interface ContactData {
  titulo: string;
  descricao: string;
  contatos: Contato[];
}

// Função para obter o ícone correto com base no nome
const getIcon = (iconName: string) => {
  switch (iconName) {
    case "FaMapMarkerAlt":
      return <FaMapMarkerAlt />;
    case "FaPhoneAlt":
      return <FaPhoneAlt />;
    case "FaEnvelope":
      return <FaEnvelope />;
    default:
      return null;
  }
};

export default function Contact() {
  const contactData: ContactData = contactDataJson;

  return (
    <div className={styles.contactContainer}>
      <div className={styles.contactContent}>
        <div className={styles.contactTitles}>
          <h2 className={styles.contactTitle}>{contactData.titulo}</h2>
          <h2>{contactData.colorTitle}</h2>
        </div>
        <p className={styles.contactDescription}>{contactData.descricao}</p>

        <div className={styles.contactCards}>
          {contactData.contatos.map((contato, index) => (
            <div key={index} className={styles.contactCard}>
              <span className={styles.contactIcon}>
                {getIcon(contato.icone)} {/* Obtém o ícone com base no nome */}
              </span>
              <h3 className={styles.contactType}>{contato.tipo}</h3>
              <div className={styles.contactDetails}>
                {contato.detalhes.map((item, i) => (
                  <p key={i}>{item}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}