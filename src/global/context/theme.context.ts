import { createContext } from 'react';
import { IThemeContext } from '../interface/theme.context.interface';

const ThemeContext = createContext<IThemeContext>({
    setTheme: () => null,
    theme: 'dark',
});

export default ThemeContext;
