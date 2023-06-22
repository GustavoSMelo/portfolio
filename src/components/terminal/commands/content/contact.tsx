import { useCallback, useEffect } from "react";

const Contact = () => {
    const openContact = useCallback(() => {
        window.open('https://wa.me/5511993791209', '_blank');
    }, [])
    useEffect(() => {
        openContact()
    });

    return <p>Whatsapp opened</p>
}

export default Contact;
