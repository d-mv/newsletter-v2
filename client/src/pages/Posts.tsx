import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { AppState } from '../store/models/appState.model';
import { PostType } from '../store/models';
import { getPosts } from '../store/actions';
import { List } from '../styles/layout';
import PostCard from '../components/Card';
import Global from '../styles/Global';

interface PProps {
  posts: PostType[];
  error: string;
  loading: boolean;
  getPosts: () => void;
}
const Posts = ({ posts, error, loading,getPosts }: PProps) => {
  // TODO: remove below
  useEffect(() => {
    getPosts();
  }, []);
  useEffect(() => {
    console.log(posts);
    console.log(error);
    console.log(loading);
  }, [posts, error, loading]);
  return (
    <List data-id='posts__list'>
      {posts.map(post => (
        <PostCard key={post._id} post={post} />
      ))}
    </List>
  );
};

const mapStateToProps = (state: AppState) => ({
  posts: state.post.posts,
  error: state.post.error,
  loading: state.post.loading
});

export default connect(
  mapStateToProps,
  { getPosts }
)(Posts);
