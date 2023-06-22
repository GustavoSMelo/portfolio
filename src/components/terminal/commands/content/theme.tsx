import { useCallback, useContext, useEffect } from 'react';
import ThemeContext from '../../../../global/context/theme.context';

export const Theme = () => {
    const { setTheme, theme } = useContext(ThemeContext);

    const changeTheme = useCallback(() => {
        console.log(theme);
        theme === 'dark' ? setTheme('light') : setTheme('dark');
    }, [setTheme, theme]);

    useEffect(() => {
        changeTheme();
    }, []);

    return null;
};

export default Theme;
