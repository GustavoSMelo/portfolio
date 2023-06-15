import styled from 'styled-components';
import vars from '../../global/style/vars.style';

export const Container = styled.main`
    display: flex;
    flex-direction: column;

    margin: 10px;
    padding: 10px;

    form,
    form > label {
        display: flex;
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

    form > input:focus {
        outline: none;
    }
`;

export const TerminalAlert = styled.span`
    color: ${vars.colors.aurora.yellow};
`
