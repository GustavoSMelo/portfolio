import Navbar from '../../components/website/navbar';
import {
    ContactSection,
    Container,
    ExperienceSection,
    PresentationSection,
    TecnologiesSection,
} from './styled';
import ProfilePixelArt from '../../assets/profilepixelart.png';
import IFCIcon from '../../assets/ifc.jpeg';
import WJIcon from '../../assets/wj.jpg';
import { useState } from 'react';
import ChoosedExperience from '../../components/website/choosedExperience';
import {
    SiNodedotjs,
    SiNestjs,
    SiExpress,
    SiPhp,
    SiLaravel,
    SiReact,
    SiElectron,
    SiFlutter,
    SiLinux,
    SiPostgresql,
    SiMongodb,
    SiRender,
    SiVercel,
    SiDocker,
    SiLinkedin,
    SiGithub,
    SiGmail,
    SiWhatsapp,
} from 'react-icons/si';
import Footer from '../../components/website/footer';

const Website = () => {
    const [experienceChoosed, setExperienceChoosed] = useState('wj');

    const openExternalLink = (url: string) => {
        window.open(url, '_blank');
    };

    return (
        <>
            <Container>
                <Navbar />

                <PresentationSection>
                    <figure>
                        <img src={ProfilePixelArt} alt='pixel art' />
                    </figure>
                    <div>
                        <h2>Desenvolvedor de E-commerce / Software</h2>
                        <p>
                            Estou a 2 anos no mercado de tecnologia com foco
                            principalmente em desenvolvimento de feature e
                            resolucao de bugs em varejos digitais <br />
                            Possuindo experiencia tambem em sistemas de
                            pagamento, desde sistema crediario ate anti-fraude{' '}
                            <br />
                            Porem estou aberto a outras oportunidades que nao
                            estajam diretamente ligadas a e-commerce.
                        </p>
                    </div>
                </PresentationSection>

                <ExperienceSection experienceId={experienceChoosed}>
                    <h1>Experiencias: </h1>

                    <span>
                        <ul className='tabControlBtns'>
                            <li
                                id='wj'
                                onClick={() => setExperienceChoosed('wj')}
                            >
                                <img src={WJIcon} alt='Webjump' />
                            </li>
                            <hr className='timePipe' />
                            <li
                                id='ifc'
                                onClick={() => setExperienceChoosed('ifc')}
                            >
                                <img src={IFCIcon} alt='Infracommerce' />
                            </li>
                        </ul>

                        <div className='exp-content'>
                            <ChoosedExperience
                                experienceId={experienceChoosed}
                            />
                        </div>
                    </span>
                </ExperienceSection>

                <TecnologiesSection>
                    <h1>Tecnologies: </h1>

                    <div>
                        <h2>Backend: </h2>

                        <ul>
                            <li>
                                <SiNodedotjs className='icon' />
                                Node.js
                            </li>
                            <li>
                                <SiNestjs className='icon' />
                                Nest.js
                            </li>
                            <li>
                                <SiExpress className='icon' />
                                Express.js
                            </li>
                            <li>
                                <SiPhp className='icon' />
                                PHP
                            </li>
                            <li>
                                <SiLaravel className='icon' />
                                Laravel
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h2>Frontend: </h2>

                        <ul>
                            <li>
                                <SiReact className='icon' />
                                React.js
                            </li>
                            <li>
                                <SiReact className='icon' />
                                React Native
                            </li>
                            <li>
                                <SiElectron className='icon' />
                                Electron
                            </li>
                            <li>
                                <SiFlutter className='icon' />
                                Flutter
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h2>Others: </h2>
                        <ul>
                            <li>
                                <SiLinux className='icon' />
                                Linux
                            </li>
                            <li>
                                <SiPostgresql className='icon' />
                                SQL
                            </li>
                            <li>
                                <SiMongodb className='icon' />
                                MongoDB
                            </li>
                            <li>
                                <SiRender className='icon' />
                                Render
                            </li>
                            <li>
                                <SiVercel className='icon' />
                                Vercel
                            </li>
                            <li>
                                <SiDocker className='icon' />
                                Docker
                            </li>
                        </ul>
                    </div>
                </TecnologiesSection>

                <ContactSection>
                    <h1>
                        Voce consegue entrar em contato comigo atraves dessas
                        plataformas:
                    </h1>
                    <span>
                        <div
                            onClick={() =>
                                openExternalLink(
                                    'https://github.com/GustavoSMelo'
                                )
                            }
                            className='link Github'
                        >
                            <SiGithub />
                            Github
                        </div>
                        <div
                            onClick={() =>
                                openExternalLink(
                                    'mailto:gsantos15569@gmail.com'
                                )
                            }
                            className='link Email'
                        >
                            <SiGmail />
                            Email
                        </div>
                        <div
                            onClick={() =>
                                openExternalLink('https://wa.me/11993791209')
                            }
                            className='link Wpp'
                        >
                            <SiWhatsapp className='iconWpp' />
                            Whatsapp
                        </div>
                        <div
                            onClick={() =>
                                openExternalLink(
                                    'https://www.linkedin.com/in/gustavo-santos-melo-66092317a/'
                                )
                            }
                            className='link In'
                        >
                            <SiLinkedin />
                            Linkedin
                        </div>
                    </span>
                </ContactSection>
            </Container>
            <Footer />
        </>
    );
};

export default Website;
