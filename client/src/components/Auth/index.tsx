import React, { useState, useEffect, ChangeEvent } from 'react';
import { connect } from 'react-redux';

import { AppState } from '../../store/models/appState.model';

import { Block, Line, Spacer, Column } from '../../styles/layout';
import { Label, Input } from '../../styles/form';
import PrimaryButton from '../../styles/buttons/PrimaryButton';
import SecondaryButton from '../../styles/buttons/SecondaryButton';
import { StringButton } from './StringButton';
import { Center } from '../../styles/layout/Center';
import { AuthForm, AuthState, AuthObject } from '../../store/models';
import { typingForm, login } from '../../store/actions';
interface FProps {
  form: AuthForm;
  auth: {};
  message: string;
  loading: boolean;
  status: boolean;
  typingForm: (arg0: { [index: string]: string }) => void;
  login: (arg0: AuthObject) => void;
}

const Form = ({ form, typingForm, auth, login }: FProps) => {
  const [isLogin, setIsLogin] = useState(true);
  const [isDisabled, setIsDisabled] = useState(true);
  const [secondPassword, setSecondPassword] = useState('');

  const toggleRegister = () => setIsLogin(!isLogin);
  const toggleDisabled = () => setIsDisabled(!isDisabled);

  const handleEmail = (email: ChangeEvent<HTMLInputElement>) =>
    typingForm({ email: email.target.value });
  const handlePassword = (password: ChangeEvent<HTMLInputElement>) =>
    typingForm({ password: password.target.value });
  const handleSecondPassword = (password: ChangeEvent<HTMLInputElement>) =>
    setSecondPassword(password.target.value);
  const handleSubmit = () => login(form);

  useEffect(() => {
    if (isLogin) {
      if (isDisabled) {
        if (form.email && form.password.length >= 6) setIsDisabled(false);
      } else {
        if (!form.email || form.password.length < 6) setIsDisabled(true);
      }
    } else {
      if (isDisabled) {
        if (form.email && form.password.length >= 6 && form.password === secondPassword)
          setIsDisabled(false);
      } else {
        if (!form.email || form.password.length < 6 || form.password !== secondPassword)
          setIsDisabled(true);
      }
    }
  }, [isLogin, isDisabled, form, secondPassword]);

  return (
    <Center width='70%'>
      <Spacer margin={1} />
      <Block justify='center' align='center'>
        {/* <Center width='50%'> */}
        <Column justify='space-around' align='center'>
          <Line justify='space-between'>
            <Label>Email</Label>
            <Input
              placeholder='you@email.com'
              value={form.email}
              onChange={handleEmail}
              type='email'
            />
          </Line>
          <Line justify='space-between'>
            <Label>Password</Label>
            <Input
              attention={!isLogin && form.password !== secondPassword}
              placeholder='******'
              value={form.password}
              onChange={handlePassword}
              type='password'
            />
          </Line>
        </Column>
        {!isLogin && (
          <Line justify='center'>
            <Label>Repeat Password</Label>
            <Input
              attention={!isLogin && form.password !== secondPassword}
              placeholder='******'
              value={secondPassword}
              onChange={handleSecondPassword}
              type='password'
            />
          </Line>
        )}
        {/* </Center> */}
        <Spacer margin={1} />
        <StringButton
          label={isLogin ? 'No account? Register here.' : 'Already registered? Log in.'}
          onClick={toggleRegister}
        />
        <Spacer margin={1} />
        <Line justify='center'>
          <PrimaryButton disabled={isDisabled} onClick={() => handleSubmit()}>
            <span>{isLogin ? 'Login' : 'Register'}</span>
          </PrimaryButton>
          <SecondaryButton onClick={() => toggleDisabled()}>
            <span>Cancel</span>
          </SecondaryButton>
        </Line>
      </Block>
    </Center>
  );
};

const mapStateToProps = (state: AppState) => ({
  form: state.auth.form,
  auth: state.auth.auth,
  message: state.auth.message,
  status: state.auth.status,
  loading: state.auth.loading
});

export default connect(
  mapStateToProps,
  { typingForm, login }
)(Form);
