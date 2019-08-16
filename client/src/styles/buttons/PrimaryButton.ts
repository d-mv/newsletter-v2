import styled from 'styled-components';
import { DefaultButton } from './default';
import { primary, white, accent, primaryTrans, transparent } from '../tokens/colors';
import { button } from '../tokens/typography';
import { buttonShadow } from '../tokens/ui';

const PrimaryButton = styled(DefaultButton)`
  padding: 1rem 2rem 0.7rem 2rem;
  background-color: ${primary};
  color: ${white};
  font: ${button};
  border-bottom: 0.3rem solid ${primary} !important;
  text-transform: uppercase;

  &:hover {
    box-shadow: ${buttonShadow};
    border-bottom: 0.3rem solid ${accent} !important;
  }
  &:disabled {
    background-color: ${primaryTrans};
    border-bottom: 0.3rem solid ${transparent} !important;
    color: ${primary};
  }
`;

export default PrimaryButton;
