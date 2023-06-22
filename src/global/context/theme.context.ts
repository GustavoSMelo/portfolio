import { createContext } from 'react';
import { IThemeContext } from '../interface/theme.context.interface';

const ThemeContext = createContext<IThemeContext>({
    setTheme: (): void => undefined,
    theme: 'dark',
});

export default ThemeContext;
