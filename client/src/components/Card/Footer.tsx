import React from 'react';

import { makeDateFromText, makeReadTime } from '../../lib';

import { Footer } from '../../styles/card';

export interface FLProps {
  published: string | Date;
  readTime: number;
}

const FooterLine = ({ published, readTime }: FLProps) => (
  <Footer data-id='post__card_footer'>
    <span data-id='post__card_published'>{makeDateFromText(published)}</span>
    <span data-id='post__card_read-time'>{makeReadTime(readTime)}</span>
  </Footer>
);

export default FooterLine;
