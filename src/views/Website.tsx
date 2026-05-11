import { useEffect, useState, type FC } from "react";
import styles from "../styles/website.module.css";
import Navbar from "../components/Navbar/index";
import Hero from "../components/Hero/index";
import Technologies from "../components/Technologies/index";
import CoffeeSpill from "../components/CoffeeSpill/index";
import Projects from "../components/Projects/index";
import Experience from "../components/Experience/index";
import Avaliacoes from "../components/Review/index";
import Footer from "../components/Footer/index";
import ContactModal from "../components/ContactModal/index";

const Website: FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Navbar onContactClick={() => setIsModalOpen(true)} />
            <Hero onContactClick={() => setIsModalOpen(true)} />
            <Technologies />
            <CoffeeSpill />
            <Projects />
            <div className={styles.projectsBorder}></div>
            <Experience />
            <Avaliacoes />
            <Footer />
            <ContactModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </>
    );
};

export default Website;
