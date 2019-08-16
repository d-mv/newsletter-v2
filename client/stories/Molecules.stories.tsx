import React from 'react';
import { storiesOf } from '@storybook/react';

import sampleData from './sample_data';

import Global from '../src/styles/Global';
import { H1, H2, H3, H4, H5, H6, P } from '../src/styles/tokens/typography';
import { Card, Icon, Source, Footer, Text, Title } from '../src/styles/card/';
import { List, Line, Block } from '../src/styles/layout';
import { white } from '../src/styles/tokens/colors';
import { Pin } from '../src/icons';
import PinIcon from '../src/components/Card/PinIcon';
import FooterLine from '../src/components/Card/Footer';
import { makeSource } from '../src/lib';

storiesOf('Molecules', module).add('Card', () => (
  <div style={{ backgroundColor: white }}>
    <Global />
    <List>
      {sampleData.map(post => (
        <Card disabled={post.read}>
          <Block justify='flex-start' align='flex-start'>
            <Line justify='space-between' align='flex-start'>
              <Title>{post.title}</Title>
              <PinIcon star={post.star} _id={post._id} />
            </Line>
            <Source>{makeSource(post.sourceId)}</Source>
            <Text>{post.text.slice(0, Math.random() * 300)}</Text>
          </Block>
          <FooterLine published={post.published} readTime={post.readTime} />
        </Card>
      ))}
    </List>
  </div>
));
