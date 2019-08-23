import { combineReducers } from 'redux';
import PostReducer from './Post.reducers';
import AuthReducer from './Auth.reducers';

export default combineReducers({
  post: PostReducer,
  auth: AuthReducer
});
