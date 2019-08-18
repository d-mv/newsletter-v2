import React from 'react';
import { storiesOf } from '@storybook/react';

import Global from '../src/styles/Global';
import {
  white,
  black,
  darkGrey,
  grey,
  primary,
  accent,
  attention,
  attentionTrans,
  primaryTrans,
} from '../src/styles/tokens/colors';
import {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  P,
  Code,
  CodeInline
} from '../src/styles/tokens/typography';

storiesOf('Tokens', module).add('Color', () => (
  <div
    style={{
      backgroundColor: white,
      padding: '2rem',
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap'
    }}>
    <br />
    <P style={{ color: black, margin: '0.5rem 1rem' }}>black</P>
    <P style={{ color: darkGrey, margin: '0.5rem 1rem' }}>dark grey</P>
    <P style={{ color: grey, margin: '0.5rem 1rem' }}>grey</P>
    <P style={{ color: primary, margin: '0.5rem 1rem' }}>primary</P>
    <P style={{ color: primaryTrans, margin: '0.5rem 1rem' }}>primaryTrans</P>
    <P style={{ color: accent, margin: '0.5rem 1rem' }}>accent</P>
    <P style={{ color: attention, margin: '0.5rem 1rem' }}>attention</P>
    <P style={{ color: attentionTrans, margin: '0.5rem 1rem' }}>attentionTrans</P>
  </div>
));
storiesOf('Tokens', module).add('Typography', () => (
  <div>
    <Global />
    <H1>Title H1</H1>
    <H2>Typography sample H2</H2>
    <H3>Образец текста H3</H3>
    <H4>H4</H4>
    <H5>H5</H5>
    <H6>H6</H6>
    <P>
      Laborum consequat cillum et anim deserunt incididunt dolore non. Qui ut
      reprehenderit qui sunt nostrud deserunt non sint quis consectetur anim labore.
      Cupidatat consequat veniam minim amet velit. In consequat proident{' '}
      <CodeInline>with code inLine </CodeInline>cupidatat consequat commodo ea fugiat
      minim. Enim irure id adipisicing enim nulla tempor est fugiat voluptate et Lorem.
    </P>
    <P>This is a paragraph</P>
    <H5>This is code:</H5>
    <Code>
      {`<div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'>
            Learn React
          </a>
        </header>
      </div>`}
    </Code>
  </div>
));
storiesOf('Tokens', module).add('UI', () => <div />);
storiesOf('Tokens', module).add('Animations', () => <div />);
storiesOf('Tokens', module).add('Icons', () => <div />);
