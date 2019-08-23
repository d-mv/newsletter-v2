import styled from 'styled-components';
import { p } from '../tokens/typography';
import { black } from '../tokens/colors';

export const Text = styled.div`
  width: 90%;
  margin: 0 auto;
  max-width: 60rem;
  font: ${p};
  letter-spacing: 0.03rem;
  line-height: 2rem;
  color: ${black};
`;
