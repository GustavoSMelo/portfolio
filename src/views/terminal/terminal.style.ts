import styled from 'styled-components';
import vars from '../../global/style/vars.style';

export const Container = styled.main`
    display: flex;
    flex-direction: column;

    margin: 15px;
    padding: 10px;

    p {
        margin-top: 10px;
    }

    form,
    form > label {
        display: flex;
        margin-top: 10px;
        align-items: center;
    }

    form > label {
        margin-right: 10px;
    }

    form > label > .userName {
        color: ${vars.colors.aurora.red};
    }

    form > label > .host {
        color: ${vars.colors.aurora.green};
    }

    form > input {
        width: 50%;
        margin-top: 18px;
    }

    form > input:focus {
        outline: none;

    }

    form > input:focus::placeholder {
        color: transparent;
    }
`;

export const TerminalAlert = styled.span`
    color: ${vars.colors.aurora.yellow};
`
