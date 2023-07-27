import styled from 'styled-components';

export const PreArea = styled.pre`
  font-family: monospace;
  font-size: 1rem;
  line-height: 1;
  overflow: auto;
  padding: 1rem;
  white-space: pre;

  @media screen and (max-width: 890px) {
    font-size: 8pt;
  }

  @media screen and (max-width: 620px) {
    font-size: 6pt;
  }

  @media screen and (max-width: 490px) {
    font-size: 3pt;
  }
`;
