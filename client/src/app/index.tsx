import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { AppState } from '../store/models/appState.model';
import { PostType } from '../store/models';
import { getPosts } from '../store/actions';
import { List } from '../styles/layout';
import PostCard from '../components/Card';
import Global from '../styles/Global';
import Welcome from '../pages/Welcome';
import Posts from '../pages/Posts';

// TODO: remove
axios.defaults.headers.common = {
  Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDU1YTcwODRmZTMzNTAwZTQyZmUwYjAiLCJpYXQiOjE1NjU5NjAwNDN9.78_OIPy6WQobUaEyCD6Is54kvMxou1cJGuFLqBp-wVo`
};

export interface AppProps {}

const App = ({  }: AppProps) => (
  <Router>
    <Global />
    <Route path='/' exact component={Welcome} />
    <Route path='/posts/' component={Posts} />
  </Router>
);

export default App;
