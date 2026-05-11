import { createContext } from 'react';
import { ILangContext } from '../interface/language.context.interface';
import { ELangs } from '../enum/langs.enum';

const LangContext = createContext<ILangContext>({
    lang: ELangs.ENG,
    setLang: () => null,
});

export default LangContext;
