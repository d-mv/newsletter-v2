import { PostState, INITIAL_POST_STATE } from '../models';
import { PostActionTypes } from '../models/actions.model';

const PostReducer = (
  state: PostState = INITIAL_POST_STATE,
  action: { type: PostActionTypes; payload: any }
) => {
  switch (action.type) {
    case PostActionTypes.LOADING:
      return { ...state, loading: action.payload };
    case PostActionTypes.ERROR:
      return { ...state, error: action.payload };
    case PostActionTypes.GET_POSTS:
      return { ...state, posts: action.payload };
    default:
      return state;
  }
};

export default PostReducer;