import styled from 'styled-components';
import { h5 } from '../tokens/typography';

export const Footer = styled.footer`
         margin-top: 1rem;
         display: flex;
         flex-flow: row nowrap;
         justify-content: space-between;
         span {
           font: ${h5};
         }
       `;