import styled from 'styled-components';

import { DefaultButton } from './default';
import { primary, white, accent, transparent, primaryTrans } from '../tokens/colors';
import { button } from '../tokens/typography';
import { buttonShadow, textShadow } from '../tokens/ui';

const SecondaryButton = styled(DefaultButton)`
  padding: 1rem 2rem 0.8rem 2rem;
  background-color: ${white};
  color: ${primary};
  font: ${button};
  span {
    border-bottom: 0.2rem solid ${primary};
  }
  &:hover {
    span {
      text-shadow: ${textShadow};
      border-bottom: 0.2rem solid ${accent};
    }
  }
  &:disabled {
    span {
      color: ${primaryTrans};
      border-bottom: 0.2rem solid ${transparent};
    }
  }

`;

export default SecondaryButton;
