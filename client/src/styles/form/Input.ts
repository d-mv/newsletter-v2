import styled from 'styled-components';
import { p, placeholder } from '../tokens/typography';
import {
  accent,
  background,
  primary,
  primaryTrans,
  grey,
  attention
} from '../tokens/colors';
import { transition } from '../tokens/animations';
import { shadow } from '../tokens/ui';

interface IProps {
  attention?: boolean;
}

export const Input = styled.input<IProps>`
  font: ${p};
  appearance: none;
  border: none;
  border-bottom: 0.1rem solid ${props => (props.attention ? attention : grey)};
  background-color: ${background};
  padding: 0.5rem 0;
  margin: 0.5rem;
  transition: ${transition};
  &:hover {
    box-shadow: ${shadow(primaryTrans)};
    border-bottom: 0.1rem solid ${props => (props.attention ? attention : primary)};
  }
  &:focus {
    border-bottom: 0.1rem solid ${props => (props.attention ? attention : accent)};
  }
  &::placeholder {
    font: ${placeholder};
    color: ${grey};
  }
`;
