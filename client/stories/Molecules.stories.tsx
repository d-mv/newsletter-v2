import React from 'react';
import { storiesOf } from '@storybook/react';

import sampleData from './sample_data';

import Global from '../src/styles/Global';
import { H1, H2, H3, H4, H5, H6, P } from '../src/styles/tokens/typography';
import { Card, Icon, Source, Text, Title } from '../src/styles/card/';
import { List, Line, Block } from '../src/styles/layout';
import { white } from '../src/styles/tokens/colors';
import { Pin } from '../src/icons';
import PinIcon from '../src/components/Card/PinIcon';
import FooterLine from '../src/components/Card/Footer';
import { makeSource } from '../src/lib';
import Header, { TimeStamp, Title as HeaderTitle } from '../src/styles/header/';
import Footer, { Element } from '../src/styles/footer';
import { Article, Text as PostText } from '../src/styles/layout';
import { Input, Label } from '../src/styles/form';

storiesOf('Molecules', module).add('Post', () => (
  <Article>
    <Global />
    <div>
      <Header>
        <HeaderTitle>title</HeaderTitle>
        <TimeStamp>timestamp</TimeStamp>
      </Header>
      <PostText>
        Consectetur qui officia mollit enim nulla consectetur qui incididunt enim qui
        mollit eiusmod. Quis veniam do mollit quis sint incididunt sunt pariatur ullamco
        ex labore. Eu incididunt sit minim cillum proident adipisicing fugiat nostrud eu
        ut ad nostrud. Commodo duis reprehenderit tempor sint consectetur adipisicing
        quis. Eiusmod tempor non aute aliquip laboris aute consequat aliqua et
        exercitation magna commodo quis officia. Consectetur qui officia mollit enim nulla
        consectetur qui incididunt enim qui mollit eiusmod. Quis veniam do mollit quis
        sint incididunt sunt pariatur ullamco ex labore. Eu incididunt sit minim cillum
        proident adipisicing fugiat nostrud eu ut ad nostrud. Commodo duis reprehenderit
        tempor sint consectetur adipisicing quis. Eiusmod tempor non aute aliquip laboris
        aute consequat aliqua et exercitation magna commodo quis officia. Consectetur qui
        officia mollit enim nulla consectetur qui incididunt enim qui mollit eiusmod. Quis
        veniam do mollit quis sint incididunt sunt pariatur ullamco ex labore. Eu
        incididunt sit minim cillum proident adipisicing fugiat nostrud eu ut ad nostrud.
        Commodo duis reprehenderit tempor sint consectetur adipisicing quis. Eiusmod
        tempor non aute aliquip laboris aute consequat aliqua et exercitation magna
        commodo quis officia.
      </PostText>
    </div>
    <Footer>
      <Element>published</Element>
      <Element>parsed</Element>
      <Element>words</Element>
    </Footer>
  </Article>
));
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

storiesOf('Molecules', module).add('Form', () => (
  <div>
    <Global />
      <Line justify='flex-start'>
        <Label>input 1</Label>
        <Input placeholder='please, input text' />
      </Line>
  </div>
));
