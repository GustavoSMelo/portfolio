import { ELangs } from '../enum/langs.enum';

export interface ILangContext {
    lang: ELangs;
    setLang: React.Dispatch<React.SetStateAction<ELangs>>;
}
