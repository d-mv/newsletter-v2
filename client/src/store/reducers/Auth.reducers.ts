import { AuthActionTypes } from '../models/actions.model';
import { AuthState, INITIAL_AUTH_STATE } from '../models';

export const AuthReducer = (
  state: AuthState = INITIAL_AUTH_STATE,
  action: { type: AuthActionTypes; payload: any }
) => {
  switch (action.type) {
    case AuthActionTypes.TYPING:
      const form = { ...state.form, ...action.payload };
      return { ...state, form };
    case AuthActionTypes.LOADING:
      return { ...state, loading: action.payload };
    case AuthActionTypes.SET_ERROR:
      return { ...state, message: action.payload, status: false };
    case AuthActionTypes.SET_AUTH:
      return { ...state, auth: action.payload, status: true };
    default:
      return state;
  }
};

export default AuthReducer;
