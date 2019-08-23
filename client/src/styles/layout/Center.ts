import styled from 'styled-components';

interface CProps {
  width: string;
}

export const Center = styled.section<CProps>`
  margin: 0 auto;
  width: ${props => props.width};
`;
