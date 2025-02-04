import React from 'react';
import styles from './styles.module.scss';
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import logo from '../../assets/images/logo.png';
import { CiMail } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";


export default function NavBar(){

    const socials = [
        {
            name: "facebook",
            icon: <FaFacebookF />
        },
        {
            name: "instagram",
            icon: <FaInstagram />
        },
        {
            name: "linkedin",
            icon: <FaLinkedinIn />
        }
    ]

    const [navLeft, setNavLeft] = React.useState(true);
    const [navRight, setNavRight] = React.useState(false);

    return(
        <>
                <div className={styles.navbarSocial}>
                    {socials.map((social, index) => (
                        <span key={index}>
                            {social.icon}
                        </span>
                        
                    ))}
                </div>
            <div className={styles.navbar}>
                <div className={styles.navbarMenu}>
                    {navLeft && (
                        <>
                            <div className={styles.contactCard}>
                                <p>
                               <CiMail /> loremipsum@gmail.com
                                </p>
                                <p>
                                <FaPhoneAlt /> xxxx xxx xxxx
                                </p>
                            </div>
                            <div className={styles.navbarMenuLeft}>
                                <div className={styles.navItems}>
                                <a href="#">Inicio</a>
                                <a href="#">Sobre</a>
                                <a href="#">Serviços</a>
                                <a href="#">Contato</a>
                                </div>
                            <img src={logo} />
                            </div>
                        </>
                    )}
                    {navRight && (
                        <>
                        
                        </>
                    )}
                </div>
            </div>
        </>
    )
}