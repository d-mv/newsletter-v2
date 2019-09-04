import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import ReduxThunk from 'redux-thunk';
import logger from 'redux-logger'

const devMode = process.env.NODE_ENV === 'development';

export const store = devMode
  ? createStore(reducers, {}, applyMiddleware(ReduxThunk, logger))
  : createStore(reducers, {}, applyMiddleware(ReduxThunk));
