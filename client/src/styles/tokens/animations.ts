import styled, { keyframes } from 'styled-components';
import { accent } from './colors';

export const transition = `all 0.5s ease-in-out`;
export interface UProps {
  color?: string;
}
export const Underline = styled.span<UProps>`
  position: relative;
  &::before {
    content: '';
    position: absolute;
    left: 50%;
    bottom: 0;
    width: 100%;
    height: 2px;
    background-color: ${props => (props.color ? props.color : accent)};
    @media (prefers-color-scheme: dark) {
      background-color: ${accent};
    }
    transform-origin: center;
    transform: translate(-50%, 0) scaleX(0);
    transition: transform 0.3s ease-in-out;
  }
  &:hover::before {
    transform: translate(-50%, 0) scaleX(1);
  }
`;

export const appear = keyframes`
0 % { opacity: 0 };
100 % { opacity: 1 }`;
