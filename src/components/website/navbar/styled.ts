import styled from "styled-components";
import vars from "../../../global/style/vars.style";

const Container = styled.nav`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 20px 15%;
    background-color: ${vars.themes.dark.dark01};
    margin: 0;
    position: absolute;
    width: 100%;

    .IconContent {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .IconContent > p {
        margin-left: 10px;
    }

    .IconContent > .coffee-icon {
        width: 20px;
        height: 20px;
    }

    div > p, div > ul > span > li, div > ul > span > p {
        background-color: ${vars.themes.dark.dark01};
        color: ${vars.themes.light.white01};
        font-weight: bold;
        font-size: 16pt;
    }

    div > ul {
        display: flex;
        list-style-type: none;
    }

    div > ul > span {
        display: flex;
    }

    div > ul > span > p {
        padding-left: 20px;
    }

    div > ul > span {
        padding: 10px;
        transition: 0.5s;
        text-decoration: none;
    }

    div > ul > span > li {
        cursor: pointer;
    }
`;


export {Container};
