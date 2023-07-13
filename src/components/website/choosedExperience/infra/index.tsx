import { Infra } from "./style";

const Infracommerce = () => {
    return (
        <Infra>
            <h1>Desenvolvedor FullStack Typescript Jr.</h1>
            <p>
                <span>Na infracommerce fui responsavel por implementacao de novas
                features em:</span>
                <ul>
                    <li>
                        Sistema crediario (credito)
                        <ul className="actvDescription">
                            <li>
                                No sistema credito desenvolvi e melhorei a
                                performance de funcionalidades ja existentes.
                            </li>
                        </ul>
                    </li>
                    <li>
                        Sistema de antifraude
                        <ul className="actvDescription">
                            <li>
                                Migramos um proxy de seguranca legado (rodando
                                PHP 5.3) para um antifraude com novas
                                tecnologias (Nest.JS, React.JS)
                            </li>
                        </ul>
                    </li>
                    <li>
                        Sistema de controladoria de contas interna (Automate
                        Billing)
                        <ul className="actvDescription">
                            <li>
                                No sistema de automate fui responsavel por
                                grande parcela do front-end, alem de arrumar
                                bugs ja existentes no front e melhorias do
                                backend
                            </li>
                        </ul>
                    </li>
                    <li>
                        Provedor de pagamentos
                        <ul className="actvDescription">
                            <li>
                                Integracao de webhook santander para o provedor
                                da infracommerce, alem de correcao de
                                inconformidades no frontend
                            </li>
                        </ul>
                    </li>
                </ul>
            </p>
        </Infra>
    );
};

export default Infracommerce;
