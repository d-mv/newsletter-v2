import React from 'react';
import { storiesOf } from '@storybook/react';

import Global from '../src/styles/Global';
import { white } from '../src/styles/tokens/colors';
import PrimaryButton from '../src/styles/buttons/PrimaryButton';
import SecondaryButton from '../src/styles/buttons/SecondaryButton';
import AttentionButton from '../src/styles/buttons/AttentionButton';



storiesOf('Atoms', module).add('Buttons', () => (
  <div
    style={{
      backgroundColor: white,
      padding: '2rem',
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap'
    }}>
    <Global />
    <div style={{ margin: '1rem' }}>
      <PrimaryButton>
        <span>Main</span>
      </PrimaryButton>
    </div>
    <div style={{ margin: '1rem' }}>
      <PrimaryButton disabled>
        <span>Main Disabled</span>
      </PrimaryButton>
    </div>
    <div style={{ margin: '1rem' }}>
      <SecondaryButton>
        <span>Secondary</span>
      </SecondaryButton>
    </div>
    <div style={{ margin: '1rem' }}>
      <SecondaryButton disabled>
        <span>Secondary Disabled</span>
      </SecondaryButton>
    </div>
    <div style={{ margin: '1rem' }}>
      <AttentionButton>
        <span>Attention</span>
      </AttentionButton>
    </div>
    <div style={{ margin: '1rem' }}>
      <AttentionButton disabled>
        <span>Attention Disabled</span>
      </AttentionButton>
    </div>
  </div>
));
