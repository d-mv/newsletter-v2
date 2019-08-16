import { Dispatch } from 'redux';
import { PostActionTypes } from '../models/actions.model';
import { getReq } from '../services/api.service';
import { AxiosResponse } from 'axios';

export const getPosts = () => (dispatch: Dispatch) => {
  dispatch({
    type: PostActionTypes.LOADING,
    payload: true
  });
  getReq('/posts')
    .then((res: AxiosResponse) => {
      dispatch({
        type: PostActionTypes.GET_POSTS,
        payload: res.data
      });
      dispatch({
        type: PostActionTypes.LOADING,
        payload: false
      });
    })
    .catch(e => {
      dispatch({
        type: PostActionTypes.ERROR,
        payload: e.message
      });
      dispatch({
        type: PostActionTypes.LOADING,
        payload: false
      });
    });
};
