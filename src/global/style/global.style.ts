import { createGlobalStyle } from 'styled-components';
import { IGlobalStyle } from '../interface/global.style.interface';
import vars from './vars.style';

const GlobalContainerStyle = createGlobalStyle<IGlobalStyle>`
    * {
        border: 0;
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: ${(props) =>
            props.colorTheme === 'dark'
                ? vars.themes.dark.dark01
                : vars.themes.light.white01};

        color: ${(props) =>
            props.colorTheme === 'dark'
                ? vars.themes.light.white01
                : vars.themes.dark.dark01};
        font-family: Verdana, Geneva, Tahoma, sans-serif;
    }
`;

export default GlobalContainerStyle;
