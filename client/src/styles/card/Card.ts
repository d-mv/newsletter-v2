import styled from 'styled-components';
import { textShadow } from '../tokens/ui';
import { grey } from '../tokens/colors';
import { transition } from '../tokens/animations';

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
    text-shadow: ${textShadow};
  }
`;
