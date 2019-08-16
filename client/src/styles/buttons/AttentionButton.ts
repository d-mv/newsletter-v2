import styled from 'styled-components';
import { DefaultButton } from './default';
import { white, attention, attentionTrans, transparent } from '../tokens/colors';
import { button } from '../tokens/typography';
import { shadow } from '../tokens/ui';

const AttentionButton = styled(DefaultButton)`
  padding: 1rem 2rem 0.7rem 2rem;
  background-color: ${attention};
  color: ${white};
  font: ${button};
  border-bottom: 0.3rem solid ${attention} !important;
  text-transform: uppercase;

  &:hover {
    box-shadow: ${shadow(attentionTrans)};
    border-bottom: 0.3rem solid ${white} !important;
  }
  &:disabled {
    background-color: ${attentionTrans};
    border-bottom: 0.3rem solid ${transparent} !important;
    color: ${attention};
  }
`;

export default AttentionButton;
