import type { IList } from "../../../../types/interface/components/list.interface";
import {
    About,
    Education,
    Experience,
    SocialMedia,
    Help,
    Personal,
    Gui,
    Contact,
} from "../exports";

const returnCommandList = (): IList[] => {
    return [
        {
            name: "help",
            description: "Lista todos os comandos disponíveis",
            component: <Help />,
        },
        {
            name: "gui",
            description: "Abre o site usando a interface gráfica do usuário",
            component: <Gui />,
        },
        {
            name: "about",
            description: "Mostra uma breve descrição sobre mim",
            component: <About />,
        },
        {
            name: "education",
            description: "Mostra todas as informações da minha formação acadêmica",
            component: <Education />,
        },
        {
            name: "experience",
            description: "Mostra todas as informações da minha experiência profissional",
            component: <Experience />,
        },
        {
            name: "socialmedia",
            description: "Mostra todas as redes sociais disponíveis",
            component: <SocialMedia />,
        },
        {
            name: "personal",
            description:
                "Mostra algumas informações pessoais, como meus hobbies, séries/animes/desenhos/filmes que estou assistindo, etc",
            component: <Personal />,
        },
        {
            name: "clear",
            description: "Limpa o terminal",
            component: <></>,
        },
        {
            name: "contact",
            description:
                "Entre em contato comigo pelo whatsapp (abre automaticamente o whatsapp)",
            component: <Contact />,
        },
    ];
};

export default returnCommandList;
