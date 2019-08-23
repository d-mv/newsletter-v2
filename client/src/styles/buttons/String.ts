import styled from 'styled-components';
import { DefaultButton } from './default';
import { accent, primary } from '../tokens/colors';

const String = styled(DefaultButton)`
  background: none;
  border-bottom: 0.1rem solid ${primary};
  padding: 0.5rem 0 .1rem 0;
  &:hover {
    border-bottom: 0.1rem solid ${accent};
  }
`;

export default String;
