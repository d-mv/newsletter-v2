import { combineReducers } from 'redux';
import PostReducer from './Post.reducers';

export default combineReducers({
  post: PostReducer
});
