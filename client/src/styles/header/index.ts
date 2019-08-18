import styled from 'styled-components';
import { grey,primaryTrans } from '../tokens/colors';

export * from './TimeStamp'
export * from './Title'

const Header = styled.header`
  width: 90%;
  margin: 0 auto 1rem auto;
  padding-top: 0.5rem;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.1rem solid ${primaryTrans};
`;

export default Header;
