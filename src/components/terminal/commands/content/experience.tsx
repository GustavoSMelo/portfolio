import { BsArrowRightShort } from "react-icons/bs";

const Experience = () => (
    <ul
        style={{
            borderTop: "solid 3px #fff",
            marginTop: "20px",
        }}
    >
        <li>
            <h2>Webjump</h2>
            <h3>
                Estagiário em Desenvolvedor PHP Backend <BsArrowRightShort />{" "}
                Desenvolvedor PHP Backend Jr
            </h3>
            <p>
                Eu estagiei na webjump para iniciar minha carreira profissional
                em desenvolvimento de software, nesse estágio eu aprendi como o
                framework magento funciona <br />
                Após isso fui promovido a jr. e trabalhei no &quot;broto&quot; um
                e-commerce do Banco do Brasil com foco em agronomia
            </p>
        </li>

        <li>
            <h2>Infracommerce</h2>
            <h3>Desenvolvedor Fullstack Typescript jr.</h3>
            <p>
                <ul>
                    <li>
                        Trabalhei em anti-fraude, atualizando um sistema legado para
                        um novo escrito em node e react.js
                    </li>
                    <li>
                        Após isso trabalhei no sistema de automação de cobranças,
                        onde fui responsável por fazer backend e frontend
                    </li>
                    <li>
                        Fui movido alguns meses após a automação de cobranças para
                        ajudar a equipe do provedor de pagamentos com muitos bugs
                        no frontend
                    </li>
                    <li>
                        E fui realocado no sistema de crédito para ajudar a equipe
                        a finalizar o projeto dentro do orçamento estabelecido
                    </li>
                </ul>
            </p>
        </li>

        <li>
            <h2>Point Media</h2>
            <h3>Desenvolvedor Fullstack Typescript e PHP PL</h3>
            <p>
                <ul>
                    <li>
                        Criei um novo software chamado &quot;dynamic.ads&quot; onde
                        você pode criar toneladas de anúncios em uma simples
                        planilha
                    </li>
                    <li>
                        Corrigindo bugs e melhorando qualidade de código no
                        software &quot;replicate&quot;
                    </li>
                    <li>
                        Corrigindo bugs e melhorando qualidade de código no
                        software &quot;master motion&quot;
                    </li>
                    <li>Treinando vozes de LLMs no ElevenLabs</li>
                    <li>Criando um SaaS para o sistema Reanimate.ads</li>
                    <li>
                        Criando Landing Pages para clientes da Point Media
                        (Nestle, Tim, Claro, Serasa, Seara)
                    </li>
                </ul>
            </p>
        </li>
    </ul>
);

export default Experience;
