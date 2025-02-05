import React from "react";
import NavBar from "../../components/Navbar/NavBar.tsx";
import Main from "../../components/Main/index.tsx";
import Results from "../../components/Results/Results.tsx";
import Services from "../../components/Services/Services.tsx";
import About from "../../components/About/About.tsx";
import Contact from "../../components/Contact/Contatct.tsx";
import Footer from "../../components/Footer/Footer.tsx";


export default function Home() {
    return (
        <div>
            <NavBar />
            <Main />
            <Results />
            <Services />
            <About />
            <Contact />
            <Footer />
        </div>
    );
}