import styled from 'styled-components';

export interface BProps {
  justify?: string;
  align?: string;
}

export const Block = styled.div<BProps>`
  display: flex;
  flex-direction: column;
  justify-content: ${props => (props.justify ? props.justify : 'center')};
  align-items: ${props => (props.align ? props.align : 'center')};
`;
