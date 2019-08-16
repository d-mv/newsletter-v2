import styled from 'styled-components';
import { shadow, textShadow } from '../tokens/ui';
import { blackTrans, grey } from '../tokens/colors';
import { transition, appear } from '../tokens/animations';

export interface CProps {
  disabled: boolean;
}

export const Card = styled.article<CProps>`
  margin: 1rem 0.5rem;
  width: 30rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: ${props => (props.disabled ? grey : undefined)};
  cursor: pointer;
  transition: ${transition};

  &:hover {
    /* border: 1px solid grey; */
    text-shadow: ${textShadow};
  }
`;
