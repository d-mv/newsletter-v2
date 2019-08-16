import styled from 'styled-components';
import { transition } from '../tokens/animations';

export const DefaultButton = styled.button`
  appearance: none;
  border: none;
  text-rendering: auto;
  letter-spacing: 0.1rem;
  word-spacing: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  display: inline-block;
  text-align: center;
  align-items: center;
  cursor: pointer;
  box-sizing: border-box;
  transition: ${transition};
  outline: none;
  &:enabled {
    &:active {
      transform: scale(0.9);
    }
  }
  &:disabled {
    box-shadow: none !important;
    span {
      text-shadow: none !important;
    }
    cursor: default;
  }
`;
