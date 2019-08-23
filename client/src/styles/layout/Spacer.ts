import styled from 'styled-components';

interface SProps {
  margin: number;
}

export const Spacer = styled.div<SProps>`
  margin-top: ${props => `${props.margin}rem`};
  margin-bottom: ${props => `${props.margin}rem`};
`;
