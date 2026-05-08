import { useState, type FC } from 'react';
import styles from './ContactModal.module.css';

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const contacts = [
    {
        name: 'WhatsApp',
        icon: '📱',
        value: '+55 11 99999-9999',
        link: 'https://wa.me/5511999999999',
    },
    {
        name: 'Gmail',
        icon: '✉️',
        value: 'guty.dev@gmail.com',
        link: 'mailto:guty.dev@gmail.com',
    },
    {
        name: 'GitHub',
        icon: '💻',
        value: '@gutydev',
        link: 'https://github.com/gutydev',
    },
    {
        name: 'LinkedIn',
        icon: '💼',
        value: '/in/gutydev',
        link: 'https://linkedin.com/in/gutydev',
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
        const link = document.createElement('a');
        link.href = '/cv.pdf';
        link.download = 'Guty.dev-CV.pdf';
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
                            <span className={styles.icon}>{contact.icon}</span>
                            <span className={styles.name}>{contact.name}</span>
                            <span className={styles.value}>{contact.value}</span>
                        </a>
                    ))}
                </div>
                <button className={styles.cvButton} onClick={handleCvClick}>
                    📄 Download CV
                </button>
            </div>
        </div>
    );
};

export default ContactModal;