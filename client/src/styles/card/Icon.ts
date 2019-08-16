import styled from 'styled-components';
import { transition } from '../tokens/animations';

export const Icon = styled.span`
  padding: 0.5rem 1rem;
  svg {
    height: 1.5rem;
    width: 1.5rem;
    transition: ${transition};
  }
  &:hover {
    svg {
      transform: rotate(-45deg);
    }
  }
  &:active {
    svg {
      transform: scale(0.9) rotate(-45deg);
    }
  }
`;
