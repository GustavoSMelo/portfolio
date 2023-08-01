import styled from 'styled-components';
import vars from '../../../../../global/style/vars.style';

export const Container = styled.table`
    .commandDescriptionTitle {
        color: ${vars.colors.aurora.green};
    }

    .commandNameTitle {
        color: ${vars.colors.aurora.yellow};
    }

    td {
        padding: 5px 0px;
    }
`;
