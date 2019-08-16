import styled from 'styled-components';
import { shadow } from '../tokens/ui';
import { black,blackTrans } from '../tokens/colors';

export const Card = styled.article`
         margin: 1rem 0.5rem;
         width: 30rem;
         padding: 0 1rem;
         display:flex;
         flex-direction:column;
         justify-content:space-between;
         box-shadow: ${shadow(blackTrans)};
       `;