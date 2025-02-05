import React from 'react';
import styles from './styles.module.scss';
import { 
    FaBalanceScale, FaChartLine, FaFileInvoice, FaUsers, 
    FaCalculator, FaCertificate, FaBuilding, FaUser, FaMoneyCheckAlt 
} from "react-icons/fa";
import servicesDataJson from './utils/informations.json'; // Importando o JSON

interface Service {
  nome: string;
  icone: string; 
  descricao: string;
}

interface Title {
  title: string;
  colorTitle: string;
}

interface ServicesData {
  servicos: Title;
  servicosLista: Service[];
}

const getIcon = (iconName: string) => {
  switch (iconName) {
    case "FaBalanceScale":
      return <FaBalanceScale />;
    case "FaChartLine":
      return <FaChartLine />;
    case "FaFileInvoice":
      return <FaFileInvoice />;
    case "FaUsers":
      return <FaUsers />;
    case "FaCalculator":
      return <FaCalculator />;
    case "FaCertificate":
      return <FaCertificate />;
    case "FaBuilding":
      return <FaBuilding />;
    case "FaUser":
      return <FaUser />;
    case "FaMoneyCheckAlt":
      return <FaMoneyCheckAlt />;
    default:
      return null;
  }
};

export default function Services() {
  const servicesData: ServicesData = servicesDataJson;

  return (
    <div className={styles.servicesContainer}>
      <div className={styles.servicesItem}>
        <div className={styles.title}>
          <h1>{servicesData.servicos.title}</h1>
          <h1>{servicesData.servicos.colorTitle}</h1>
        </div>
        <div className={styles.servicesContent}>
          {servicesData.servicosLista.map((service, index) => (
            <div key={index} className={styles.serviceCard}>
              <span className={styles.serviceIcon}>
                {getIcon(service.icone)} 
              </span>
              <h3 className={styles.serviceTitle}>{service.nome}</h3>
              <p className={styles.serviceDescription}>{service.descricao}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}