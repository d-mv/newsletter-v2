import { AuthActionTypes } from '../models/actions.model';
import { AuthObject } from '../models';
import { Dispatch } from 'redux';
import { postReq } from '../services/api.service';

export const typingForm = (formObject: { [index: string]: string }) => ({
  type: AuthActionTypes.TYPING,
  payload: formObject
});

export const login = (loginObj: AuthObject) => (dispatch: Dispatch) => {
  dispatch({
    type: AuthActionTypes.LOADING,
    payload: true
  });
  postReq('/users/login', loginObj)
    .then(res => {
      dispatch({
        type: AuthActionTypes.SET_AUTH,
        payload: res.data
      });
      dispatch({ type: AuthActionTypes.LOADING, payload: false });
    })
    .catch(e => {
      dispatch({ type: AuthActionTypes.SET_ERROR, payload: e.toJSON().message });
      dispatch({ type: AuthActionTypes.LOADING, payload: false });
    });
};
