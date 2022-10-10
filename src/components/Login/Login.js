import classes from './Login.module.css';
import logo from '../../assets/logo.svg';
import { FormInput } from '../Shared/Forms/Inputs/FormInput';
import { FormInputPassword } from '../Shared/Forms/Inputs/FormInputPassword';
import { FormButton } from '../Shared/Forms/Buttons/FormButton';
import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

export function Login({
  onSubmit,
  passwordError,
  loginError,
  resetErrors,
  submitDisabled,
}) {
  const textInput = useRef(null);
  const [login, setLogin] = useState();
  const [password, setPassword] = useState();

  function onLoginInput(event) {
    setLogin(event.target.value);
    if (loginError || passwordError) {
      resetErrors();
    }
  }

  function onPasswordInput(event) {
    setPassword(event.target.value);
    if (loginError || passwordError) {
      resetErrors();
    }
  }

  useEffect(() => {
    textInput.current.focus();
  }, []);

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
          error={loginError}
        />
        <FormInputPassword
          id="password"
          additionalClass={classes.formItem}
          label="Enter your password"
          value={password}
          onChange={onPasswordInput}
          error={passwordError}
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
  resetErrors: PropTypes.func,
  loginError: PropTypes.string,
  passwordError: PropTypes.string,
  submitDisabled: PropTypes.bool,
};
