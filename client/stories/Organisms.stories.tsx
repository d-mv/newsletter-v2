import React from 'react';
import { storiesOf } from '@storybook/react';
import Global from '../src/styles/Global';
import { Block, Line, Spacer } from '../src/styles/layout';
import { Input, Label } from '../src/styles/form';
import PrimaryButton from '../src/styles/buttons/PrimaryButton';
import SecondaryButton from '../src/styles/buttons/SecondaryButton';

storiesOf('Organisms', module).add('Form', () => (
  <div>
    <Global />
    <Block justify='flex-start' align='flex-start'>
      <Line justify='flex-end'>
        <Label>Email</Label>
        <Input placeholder='you@email.com' />
      </Line>
      <Line justify='flex-end'>
        <Label>Password</Label>
        <Input placeholder='******' />
      </Line>
      <Spacer margin={2} />
      <Line justify='flex-start'>
        <PrimaryButton disabled>
          <span>Main Disabled</span>
        </PrimaryButton>
        <SecondaryButton>
          <span>Secondary</span>
        </SecondaryButton>
      </Line>
    </Block>
  </div>
));
