import styled from 'styled-components';

interface CProps {
  justify: string;
  align: string;
}

export const Column = styled.div<CProps>`
  display: flex;
  flex-direction: column;
  justify-content: ${props => props.justify};
  align-content: ${props => props.align};
`;
