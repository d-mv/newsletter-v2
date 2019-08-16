import React from 'react';

import { makeSource } from '../../lib';

import { PostType } from '../../store/models';

import PinIcon from './PinIcon';
import FooterLine from './Footer';

import { Card, Title, Source, Text } from '../../styles/card';
import { Block, Line } from '../../styles/layout';

export interface PCProps {
  post: PostType;
}

const PostCard = ({ post }: PCProps) => (
  <Card data-id={`post__card-${post._id}`} disabled={post.read}>
    <Block data-id='post__card_block' justify='flex-start' align='flex-start'>
      <Line data-id='post__card_line' justify='space-between' align='flex-start'>
        <Title data-id='post__card_title'>{post.title}</Title>
        <PinIcon data-id='post__card_pinIcon' star={post.star} _id={post._id} />
      </Line>
      <Source data-id='post__card_source'>{makeSource(post.sourceId)}</Source>
      <Text data-id='post__card_text'>{post.text.slice(0, Math.random() * 300)}</Text>
    </Block>
    <FooterLine published={post.published} readTime={post.readTime} />
  </Card>
);

export default PostCard;
