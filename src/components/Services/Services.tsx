import React from 'react';
import styles from './styles.module.scss';
import { 
    FaBalanceScale, FaChartLine, FaFileInvoice, FaUsers, 
    FaCalculator, FaCertificate, FaBuilding, FaUser, FaMoneyCheckAlt 
} from "react-icons/fa";

const title = 
{title: "Nossos", colorTitle: "Serviços",}
const services = [
    { nome: "Contabilidade", icone: <FaBalanceScale />, descricao: "Gerenciamos a contabilidade da sua empresa de forma eficiente." },
    { nome: "Orçamento Empresarial", icone: <FaChartLine />, descricao: "Planejamento financeiro estratégico para seu negócio." },
    { nome: "Escrita Fiscal", icone: <FaFileInvoice />, descricao: "Organização e controle da escrituração fiscal." },
    { nome: "Departamento Pessoal", icone: <FaUsers />, descricao: "Gestão completa do seu departamento pessoal." },
    { nome: "Controle de Custos", icone: <FaCalculator />, descricao: "Monitoramento e otimização dos custos empresariais." },
    { nome: "Certificado Digital", icone: <FaCertificate />, descricao: "Emissão e renovação de certificados digitais." },
    { nome: "Societário", icone: <FaBuilding />, descricao: "Abertura, alterações e encerramento de empresas." },
    { nome: "Pessoa Física", icone: <FaUser />, descricao: "Serviços contábeis especializados para pessoa física." },
    { nome: "Folha de Pagamento", icone: <FaMoneyCheckAlt />, descricao: "Gestão e processamento da folha de pagamento." }
];

export default function Services() {
    return (
        <div className={styles.servicesContainer}>
            <div className={styles.servicesItem}>
            <div className={styles.title}>
            <h1>{title.title}</h1><h1>{title.colorTitle}</h1>
            </div>
            <div className={styles.servicesContent}>
                {services.map((service, index) => (
                    <div key={index} className={styles.serviceCard}>
                        <span className={styles.serviceIcon}>{service.icone}</span>
                        <h3 className={styles.serviceTitle}>{service.nome}</h3>
                        <p className={styles.serviceDescription}>{service.descricao}</p>
                    </div>
                ))}
            </div>
                </div>
        </div>
    );
}
