import styled from 'styled-components';

export interface LProps {
  justify: string;
  align?: string;
}

export const Line = styled.div<LProps>`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: ${props => props.justify};
  align-items: ${props => (props.align ? props.align : 'center')};
`;
