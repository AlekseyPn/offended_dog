import classes from './Login.module.css';
import logo from '../../assets/logo.svg';
import { FormInput } from '../Shared/Forms/Inputs/FormInput';
import { FormInputPassword } from '../Shared/Forms/Inputs/FormInputPassword';
import { FormButton } from '../Shared/Forms/Buttons/FormButton';
import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

const LOGIN_MIN_LENGTH = 4;
const PASSWORD_MIN_LENGTH = 6;

export function Login({ onSubmit, submitError }) {
  const textInput = useRef(null);
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [submitDisabled, setSubmitDisabled] = useState(true);

  function onLoginInput(event) {
    const value = event.target.value;

    setLogin(value);

    if (value.length < LOGIN_MIN_LENGTH) {
      setLoginError(`Login is invalid, minimum length is ${LOGIN_MIN_LENGTH}`);
      return;
    }

    if (loginError) {
      setLoginError('');
    }

    if (submitError) {
      setPasswordError('');
    }
  }

  function onPasswordInput(event) {
    const value = event.target.value;
    setPassword(value);

    if (value.length < PASSWORD_MIN_LENGTH) {
      setPasswordError(
        `Password is invalid, minimum length is ${PASSWORD_MIN_LENGTH}`
      );
      return;
    }

    if (passwordError) {
      setPasswordError('');
    }

    if (submitError) {
      setPasswordError('');
    }
  }

  useEffect(() => {
    textInput.current.focus();
  }, []);

  useEffect(() => {
    setSubmitDisabled(
      !login || !password || !!loginError || !!passwordError || !!submitError
    );
  }, [loginError, passwordError, login, password, submitError]);

  return (
    <section className={classes.container}>
      <div className={classes.logo}>
        <img src={logo} alt="Dog" className={classes.logoImg} />
      </div>
      <h1 className={classes.title}>Hello my little friend!</h1>
      <form
        onSubmit={(event) => onSubmit(event, { login, password })}
        className={classes.form}
      >
        <FormInput
          ref={textInput}
          id="login"
          additionalClass={classes.formItem}
          label="Enter your nickname"
          type="text"
          value={login}
          onChange={onLoginInput}
          error={!!submitError}
          errorText={loginError}
        />
        <FormInputPassword
          id="password"
          additionalClass={classes.formItem}
          label="Enter your password"
          value={password}
          onChange={onPasswordInput}
          errorText={passwordError || submitError}
        />
        <FormButton type="submit" disabled={submitDisabled}>
          Sign in
        </FormButton>
      </form>
    </section>
  );
}

Login.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  submitError: PropTypes.string,
};
