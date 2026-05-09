import { useState, type FC } from "react";
import styles from "./App.module.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Technologies from "./components/Technologies";
import CoffeeSpill from "./components/CoffeeSpill";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Avaliacoes from "./components/Review";
import Footer from "./components/Footer";
import ContactModal from "./components/ContactModal";

const App: FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

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

export default App;
