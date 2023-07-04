import { useCallback, useEffect } from "react";
import { styled } from "styled-components";
import vars from "../../../../global/style/vars.style";

const Container = styled.p`
    color: ${vars.colors.aurora.green};
    cursor: pointer;
`;

const Contact = () => {
    const openContact = useCallback(() => {
        window.open('https://wa.me/5511993791209', '_blank');
    }, []);

    return <Container onClick={() => openContact()}>Click here to open the whatsapp</Container>
}

export default Contact;
