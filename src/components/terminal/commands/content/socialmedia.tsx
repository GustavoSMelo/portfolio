import {
    AiFillLinkedin,
    AiOutlineWhatsApp,
    AiOutlineMail,
    AiFillGithub,
} from "react-icons/ai";

const SocialMedia = () => (
    <ul
        style={{
            borderTop: "solid 3px #fff",
            marginTop: "20px",
        }}
    >
        <li>
            <AiFillLinkedin /> Linkedin:
            https://www.linkedin.com/in/gustavo-santos-melo-66092317a/
        </li>
        <li>
            <AiOutlineWhatsApp /> Whatsapp: +55 (11) 99379-1209
        </li>
        <li>
            <AiOutlineMail /> E-mail: gsantos15569@gmail.com
        </li>
        <li>
            <AiFillGithub /> Github: https://github.com/GustavoSMelo
        </li>
    </ul>
);

export default SocialMedia;
