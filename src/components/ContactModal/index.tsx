import { useState, type FC } from "react";
import styles from "./contactmodal.module.css";
import whatsapp from "../../assets/whatsapp(1).png";
import gmail from "../../assets/gmail.png";
import github from "../../assets/github(1).png";
import linkedin from "../../assets/linkedin(1).png";

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const contacts = [
    {
        name: "WhatsApp",
        icon: whatsapp,
        value: "+55 11 99379-1209",
        link: "https://wa.me/5511993791209",
    },
    {
        name: "Gmail",
        icon: gmail,
        value: "gsantos15569@gmail.com",
        link: "mailto:gsantos15569@gmail.com",
    },
    {
        name: "GitHub",
        icon: github,
        value: "GustavoSMelo",
        link: "https://github.com/GustavoSMelo",
    },
    {
        name: "LinkedIn",
        icon: linkedin,
        value: "/in/gustavo-s-melo-66092317a",
        link: "https://www.linkedin.com/in/gustavo-s-melo-66092317a/?skipRedirect=true",
    },
];

const ContactModal: FC<ContactModalProps> = ({ isOpen, onClose }) => {
    const [isExiting, setIsExiting] = useState(false);

    if (!isOpen && !isExiting) return null;

    const handleClose = () => {
        setIsExiting(true);
    };

    const handleAnimationEnd = () => {
        if (isExiting) {
            setIsExiting(false);
            onClose();
        }
    };

    const handleCvClick = () => {
        const link = document.createElement("a");
        link.href = "/GustavoSMelo-CV.pdf";
        link.download = "Guty.dev-CV.pdf";
        link.click();
    };

    return (
        <div
            className={`${styles.overlay} ${isExiting ? styles.overlayExiting : styles.overlayEntering}`}
            onClick={handleClose}
        >
            <div
                className={`${styles.modal} ${isExiting ? styles.modalExiting : styles.modalEntering}`}
                onClick={(e) => e.stopPropagation()}
                onAnimationEnd={handleAnimationEnd}
            >
                <button className={styles.closeBtn} onClick={handleClose}>
                    ×
                </button>
                <h2 className={styles.title}>Contato</h2>
                <div className={styles.grid}>
                    {contacts.map((contact, i) => (
                        <a
                            key={i}
                            href={contact.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.card}
                        >
                            <img
                                src={contact.icon}
                                alt={contact.name}
                                className={styles.icon}
                            />
                            <span className={styles.name}>{contact.name}</span>
                            <span className={styles.value}>
                                {contact.value}
                            </span>
                        </a>
                    ))}
                </div>
                <button className={styles.cvButton} onClick={handleCvClick}>
                    Download CV
                </button>
            </div>
        </div>
    );
};

export default ContactModal;
