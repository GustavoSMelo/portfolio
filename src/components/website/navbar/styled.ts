import styled from "styled-components";
import vars from "../../../global/style/vars.style";

const Container = styled.nav`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    background-color: ${vars.themes.light.white03};
    margin: 0;

    div > p, div > ul > li {
        background-color: ${vars.themes.light.white03};
        color: ${vars.themes.dark.dark01};
        cursor: pointer;
    }

    div > ul {
        display: flex;
        list-style-type: none;
    }

    div > ul > li {
        padding: 10px;
    }
`;

export {Container};
