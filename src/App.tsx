import { useState } from 'react';
import GlobalContainerStyle from './global/style/global.style';
import Routes from './routes';
import ThemeContext from './global/context/theme.context';
import LangContext from './global/context/language.context';
import { ELangs } from './global/enum/langs.enum';

const App = () => {
    const [theme, setTheme] = useState('dark');
    const [lang, setLang] = useState(ELangs.ENG);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <LangContext.Provider value={{ lang, setLang }}>
                <Routes />
                <GlobalContainerStyle colorTheme={theme} />
            </LangContext.Provider>
        </ThemeContext.Provider>
    );
};

export default App;
