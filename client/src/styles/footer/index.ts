import styled from 'styled-components';
import { primaryTrans } from '../tokens/colors';

export * from './Element'

const Footer = styled.footer`
  width: 90%;
  margin: 1rem auto 0 auto;
  padding: 0.5rem 0;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  border-top: 0.1rem solid ${primaryTrans};
`;

export default Footer