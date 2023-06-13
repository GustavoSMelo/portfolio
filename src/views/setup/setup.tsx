import { useContext, useState } from 'react';
import { Container } from './styled';
import { FaArrowRight } from 'react-icons/fa';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import ThemeContext from '../../global/context/theme.context';
import LangContext from '../../global/context/language.context';
import { Link } from 'react-router-dom';
import { ELangs } from '../../global/enum/langs.enum';

const Setup = () => {
    const { setTheme } = useContext(ThemeContext);
    const { lang, setLang } = useContext(LangContext);

    const [selectedTheme, setSelectedTheme] = useState('dark');
    const [websiteStyle, setWebsiteStyle] = useState<'website' | 'terminal'>(
        'website'
    );

    const switchDarkTheme = () => {
        setSelectedTheme('dark');
        setTheme('dark');
    };

    const switchLightTheme = () => {
        setSelectedTheme('light');
        setTheme('light');
    };

    return (
        <Container>
            <h1>Welcome to my portfolio, first answer some questions 🙂</h1>
            <span className='wrapper'>
                <section>
                    <h3>Choose your theme: </h3>
                    <div onClick={() => switchDarkTheme()}>
                        <p>
                            <span>
                                {selectedTheme === 'dark' ? (
                                    <MdOutlineKeyboardArrowRight />
                                ) : (
                                    <></>
                                )}
                            </span>
                            Dark Theme 🌑
                        </p>
                    </div>
                    <div onClick={() => switchLightTheme()}>
                        <p>
                            <span>
                                {selectedTheme === 'light' ? (
                                    <MdOutlineKeyboardArrowRight />
                                ) : (
                                    <></>
                                )}
                            </span>
                            Light Theme ☀️
                        </p>
                    </div>
                </section>

                <section>
                    <h3>Choose a website style: </h3>
                    <div onClick={() => setWebsiteStyle('website')}>
                        <p>
                            <span>
                                {websiteStyle === 'website' ? (
                                    <MdOutlineKeyboardArrowRight />
                                ) : (
                                    <></>
                                )}
                            </span>
                            Website 🌐
                        </p>
                    </div>
                    <div onClick={() => setWebsiteStyle('terminal')}>
                        <p>
                            <span>
                                {websiteStyle === 'terminal' ? (
                                    <MdOutlineKeyboardArrowRight />
                                ) : (
                                    <></>
                                )}
                            </span>
                            Terminal 💻
                        </p>
                    </div>
                </section>

                <section>
                    <h3>Choose a language: </h3>
                    <div onClick={() => setLang(ELangs.PTBR)}>
                        <p>
                            <span>
                                {lang === ELangs.PTBR ? (
                                    <MdOutlineKeyboardArrowRight />
                                ) : (
                                    <></>
                                )}
                            </span>
                            PT-BR 🇧🇷
                        </p>
                    </div>
                    <div onClick={() => setLang(ELangs.ENG)}>
                        <p>
                            <span>
                                {lang === ELangs.ENG ? (
                                    <MdOutlineKeyboardArrowRight />
                                ) : (
                                    <></>
                                )}
                            </span>
                            ENG 🇺🇸
                        </p>
                    </div>
                </section>
            </span>

            <Link className='btnLink' to={`/${websiteStyle}`}>
                Next <FaArrowRight />
            </Link>
        </Container>
    );
};

export default Setup;
