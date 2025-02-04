import React from 'react';
import styles from './styles.module.scss';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import logo from '../../assets/images/logo.png';
import texts from './utils/informations.json'; // Importando o JSON

export default function NavBar() {
    const [navLeft, setNavLeft] = React.useState(true);
    const [navRight, setNavRight] = React.useState(false);

    const iconComponents = {
        FaFacebookF: <FaFacebookF />,
        FaInstagram: <FaInstagram />,
        FaLinkedinIn: <FaLinkedinIn />
    };

    return (
        <>
            <div className={styles.navbarSocial}>
                {texts.socials.map((social, index) => (
                    <span key={index}>
                        {iconComponents[social.icon]}
                    </span>
                ))}
            </div>
            <div className={styles.navbar}>
                <div className={styles.navbarMenu}>
                    {navLeft && (
                        <>
                            <div className={styles.contactCard}>
                                <p>
                                    <CiMail /> {texts.contact.email}
                                </p>
                                <p>
                                    <FaPhoneAlt /> {texts.contact.phone}
                                </p>
                            </div>
                            <div className={styles.navbarMenuLeft}>
                                <div className={styles.navItems}>
                                    {texts.menu.items.map((item, index) => (
                                        <a key={index} href={item.href}>
                                            {item.label}
                                        </a>
                                    ))}
                                </div>
                                <img src={logo} alt="Logo" />
                            </div>
                        </>
                    )}
                    {navRight && (
                        <>
                            {/* Conteúdo da direita */}
                        </>
                    )}
                </div>
            </div>
        </>
    );
}