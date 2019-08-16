import React from 'react';
import { storiesOf } from '@storybook/react';
import axios from 'axios';
import dotenv from 'dotenv';

import { PostType } from '../src/models';

import Global from '../src/styles/Global';
import { white } from '../src/styles/tokens/colors';
import PrimaryButton from '../src/styles/buttons/PrimaryButton';
import SecondaryButton from '../src/styles/buttons/SecondaryButton';
import AttentionButton from '../src/styles/buttons/AttentionButton';

storiesOf('Molecules', module).add('Card', () => (
  <div>
    {getData().map(() => {})}
    {
      // Title
      // Text
      // Source
      // Published / Read time
    }
  </div>
));
