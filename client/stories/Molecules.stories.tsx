import React from 'react';
import { storiesOf } from '@storybook/react';

import sampleData from './sample_data';

import Global from '../src/styles/Global';
import { H1, H2, H3, H4, H5, H6, P } from '../src/styles/tokens/typography';
import { Card, Icon } from '../src/styles/card/';
import { List, Line } from '../src/styles/layout';
import { white } from '../src/styles/tokens/colors';
import { Pin } from '../src/icons';
import { data } from '../src/data';

const compareDates = (date1: Date, date2: Date): boolean =>
  date1.getDay() === date2.getDay() &&
  date1.getMonth() === date2.getMonth() &&
  date1.getFullYear() === date2.getFullYear();

const makeDateFromText = (text: string | Date): string => {
  let date: Date = text as Date;
  if (typeof text === 'string') {
    date = new Date(text);
  }
  const today = new Date();
  const yesterday = new Date();
  yesterday.setDate(today.getDate() - 1);

  let result = '';
  if (compareDates(date, today)) {
    result = 'today';
  } else if (compareDates(date, yesterday)) {
    result = 'yesterday';
  } else {
    result = `${data.days[date.getDay() + 1]}, ${date.getDate()} ${
      data.months[date.getMonth()]
    } '${date.getFullYear() - 2000}`;
  }
  return result;
};
const makeReadTime = (time: number) => `~${time} min`;
const makeSource = (source: string) => `@ ${source}`;
storiesOf('Molecules', module).add('Card', () => (
  <div style={{ backgroundColor: white }}>
    <Global />
    <List>
      {sampleData.map(post => (
        <Card>
          <Line justify='space-between' align='flex-start'>
            <H4>{post.title}</H4>
            <Icon>
              <Pin star={post.star} hover={false} />
            </Icon>
          </Line>
          <P>{makeSource(post.sourceId)}</P>
          <P>{post.text.slice(0, Math.random() * 300)}</P>
          <Line justify='space-between'>
            <P>{makeDateFromText(post.published)}</P>
            <P>{makeReadTime(post.readTime)}</P>
          </Line>
          {
            // <P>{post.read}</P>
          }
        </Card>
      ))}
    </List>
  </div>
));
