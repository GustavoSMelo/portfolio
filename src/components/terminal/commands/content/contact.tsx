import { useCallback } from "react";
import styles from "./contact.module.css";

const Contact = () => {
    const openContact = useCallback(() => {
        window.open('https://wa.me/5511992827719', '_blank');
    }, []);

    return <p onClick={() => openContact()} className={styles.container}>Clique aqui para abrir o whatsapp</p>
}

export default Contact;
