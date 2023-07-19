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
`;

const ExperienceSection = styled.section<IChoosedExperience>`
    display: flex;
    margin: 250px 0px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding-top: 120px;

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

export {Container, PresentationSection, ExperienceSection};
