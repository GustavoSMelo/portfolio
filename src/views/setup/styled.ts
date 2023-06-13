import styled from 'styled-components';
import vars from '../../global/style/vars.style';

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    .wrapper {
        display: flex;
        flex-direction: flex;
        align-items: center;
        justify-content: space-between;
    }

    div {
        display: flex;
        flex-direction: row;
        cursor: pointer;
        align-items: center;
    }

    div:hover {
        text-decoration: underline;
    }

    .btnLink {
        margin-top: 10px;
        width: fit-content;
        cursor: pointer;
        padding: 10px 30px;
        border-radius: 5px;
        border: none;
        box-shadow: 1px 1px 5px ${vars.colors.others.gray};
    }
`;
