import { useContext, useEffect } from 'react';
import ThemeContext from '../../../../global/context/theme.context';

export const Theme = () => {
    const { setTheme, theme } = useContext(ThemeContext);

    useEffect(() => {
        theme === 'dark' ? setTheme('light') : setTheme('dark');
    }, []);

    return <></>;
};

export default Theme;
