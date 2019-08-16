import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { AppState } from './store/models/appState.model';
import { PostType } from './store/models';
import { getPosts } from './store/actions/';
import { List } from './styles/layout';
import PostCard from './components/Card';
import Global from './styles/Global';

// TODO: remove
axios.defaults.headers.common = {
  Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDU1YTcwODRmZTMzNTAwZTQyZmUwYjAiLCJpYXQiOjE1NjU5NjAwNDN9.78_OIPy6WQobUaEyCD6Is54kvMxou1cJGuFLqBp-wVo`
};

export interface AppProps {
  posts: PostType[];
  error: string;
  loading: boolean;
  getPosts: () => void;
}

const App = ({ posts, error, loading, getPosts }: AppProps) => {
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
    // TODO: make wrapper
    <div id='this-is-app'>
      <Global />
      {
        // TODO: add header
        // TODO: make content changer
        // TODO: add router
      }
      <List data-id='posts__list'>
        {posts.map(post => (
          <PostCard key={post._id} post={post} />
        ))}
      </List>
    </div>
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
)(App);
