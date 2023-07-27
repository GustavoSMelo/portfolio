import styled from "styled-components";
import vars from "../../../../global/style/vars.style";

const ErrorContainer = styled.p`
    color: ${vars.colors.aurora.red};
`

const Error = () => (
    <ErrorContainer>
        command not founded, use the command `help` to see all supported
        executables
    </ErrorContainer>
);

export default Error;
