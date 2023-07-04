import { useCallback, useContext } from 'react';
import ThemeContext from '../../../../global/context/theme.context';
import { styled } from 'styled-components';
import vars from '../../../../global/style/vars.style';

export const Container = styled.p`
    color: ${vars.colors.aurora.green};
    cursor: pointer;
`;

export const Theme = () => {
    const { setTheme, theme } = useContext(ThemeContext);

    const changeTheme = useCallback(() => {
        console.log(theme);
        theme === 'dark' ? setTheme('light') : setTheme('dark');
    }, [setTheme, theme]);


    return <Container onClick={() => changeTheme()}>Click here to change the theme</Container>;
};

export default Theme;
