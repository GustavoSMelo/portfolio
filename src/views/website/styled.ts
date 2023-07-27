import styled from "styled-components";
import vars from "../../global/style/vars.style";
import { IChoosedExperience } from "../../types/interface/components/choosedExperience.interface";

const Container = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;

`

const PresentationSection = styled.section`
    margin-top: 200px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: ${vars.themes.dark.dark02};
    width: 60%;
    padding: 50px;
    border: solid 5px ${vars.themes.dark.dark04};
    border-radius: 10px;
    box-shadow: 0px 0px 5px 0px ${vars.themes.dark.dark04};

    * {
        background-color: transparent;
    }

     figure,  figure > img {
        width: 300px;
        margin: 20px 0px;
        border-radius: 300px;
    }

     figure > img {
        border: solid 5px ${vars.themes.dark.dark04};
    }

     div {
        width: 50%;
    }

     div > * {
        background-color: transparent;
    }

     div > h2 {
        font-size: 26pt;
        margin-bottom: 40px;
    }

     div > p {
       font-size: 14pt;
       line-height: 27px;
       text-align: justify;
    }

    @media screen and (max-width: 1024px) {
        width: 90%;
        justify-content: center;
    }
`;

const ExperienceSection = styled.section<IChoosedExperience>`
    display: flex;
    margin: 150px 0px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;

    * {
        background-color: ${vars.themes.dark.dark02};
    }

    span {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        max-width: 60%;
        padding: 20px 0px;
        border-radius: 30px;
    }

    h1 {
        background-color: transparent;
        margin-bottom: 30px;
    }

    .timePipe {
        position: relative;
        width: 120%;
        height: 3px;
        border-radius: 10px;
        transform: rotate(90deg);
        z-index: 0;
        right: 10px;
        background-color: ${vars.themes.light.white01};
    }

    .tabControlBtns {
        display: flex;
        flex-direction: column;
        margin-bottom: 30px;
    }

    .tabControlBtns > li {
        z-index: 1;
        margin: 0px 30px;
        cursor: pointer;
        font-size: 16pt;
        list-style-type: none;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px;
        border-radius: 120px;
        margin-bottom: 60px;
    }

    .tabControlBtns > li#${props => props.experienceId} {
        background-color: ${vars.themes.light.white01};
    }

    .tabControlBtns > li > img {
        width: 30px;
        height: 30px;
        border-radius: 120px;
    }

    .exp-content {
        width: 1024px;
    }

`;

const TecnologiesSection = styled.section`
    text-align: center;

    h1 {
        margin-bottom: 30px;
    }

    div, ul {
        display: flex;
    }

    div {
        align-items: center;
    }

    li {
        list-style-type: none;
        background-color: ${vars.themes.dark.dark03};
        margin: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 5px;
        padding: 30px;
        flex-direction: column;
    }

    li > .icon {
        background-color: transparent;
        font-size: 16pt;
        margin: 5px;
    }
`;

const ContactSection = styled.section`
    display: flex;
    flex-direction: column;
    margin: 120px 0px;
    align-items: center;
    justify-content: center;

    span {
        display: flex;
    }

    .link {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 30px;
        list-style-type: none;
        margin: 30px;
        cursor: pointer;
        border-radius: 5px;
        text-decoration: none;
    }

    .link.Github {
        background-color: ${vars.colors.others.black};
    }

    .link.Email {
        background-color: ${vars.colors.aurora.red};
    }

    .link.Wpp {
        background-color: ${vars.colors.others.darkGreen};
    }

    .link.In {
        background-color: ${vars.colors.others.blue};
    }
`;

export {Container, PresentationSection, ExperienceSection, TecnologiesSection, ContactSection};
