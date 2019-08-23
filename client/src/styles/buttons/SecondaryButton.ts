import styled from 'styled-components';

import { DefaultButton } from './default';
import { primary, accent, transparent, primaryTrans } from '../tokens/colors';
import { button } from '../tokens/typography';
import { textShadow } from '../tokens/ui';

const SecondaryButton = styled(DefaultButton)`
  padding: 1rem 2rem 0.8rem 2rem;
  background:none;
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
