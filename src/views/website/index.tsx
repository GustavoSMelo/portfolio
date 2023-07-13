import Navbar from '../../components/website/navbar';
import { Container, ExperienceSection, PresentationSection } from './styled';
import ProfilePixelArt from '../../assets/profilepixelart.png';
import IFCIcon from '../../assets/ifc.jpeg';
import WJIcon from '../../assets/wj.jpg';
import { useState } from 'react';
import ChoosedExperience from '../../components/website/choosedExperience';

const Website = () => {
    const [experienceChoosed, setExperienceChoosed] = useState('ifc');

    return (
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
                        principalmente em desenvolvimento de feature e resolucao
                        de bugs em varejos digitais <br />
                        Possuindo experiencia tambem em sistemas de pagamento,
                        desde sistema crediario ate anti-fraude <br />
                        Porem estou aberto a outras oportunidades que nao
                        estajam diretamente ligadas a e-commerce.
                    </p>
                </div>
            </PresentationSection>

            <ExperienceSection experienceId={experienceChoosed}>
                <h1>Experiencias: </h1>

                <ul className='tabControlBtns'>
                    <li id='ifc' onClick={() => setExperienceChoosed('ifc')}>
                        <img src={IFCIcon} alt='Infracommerce' />
                        Infracommerce
                    </li>
                    <li id='wj' onClick={() => setExperienceChoosed('wj')}>
                        <img src={WJIcon} alt='Webjump' />
                        Webjump
                    </li>
                </ul>

                <ChoosedExperience experienceId={experienceChoosed} />
            </ExperienceSection>
        </Container>
    );
};

export default Website;
