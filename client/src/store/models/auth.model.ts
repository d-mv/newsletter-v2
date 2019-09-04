export interface AuthForm {
  email: string;
  password: string;
}
export const EmptyAuthForm: AuthForm = { email: '', password: '' };

export interface AuthState {
  form: AuthForm;
  auth: {};
  loading: boolean;
  message: string;
  status: boolean;
}
export const INITIAL_AUTH_STATE: AuthState = {
  form:EmptyAuthForm,
  auth: {},
  loading: false,
  message:'',
  status: false
};

export interface AuthObject {
  _id?: string;
  email: string;
  password: string;
}