import { useState } from 'react';
import { Login } from '../../components/Login/Login';

export function LoginContainer() {
  const { submitError, setSubmitError } = useState('');

  function onSubmit(event, { login, password }) {
    event.preventDefault();
    console.log(login, password);
    setSubmitError('User with this email or password not found');
  }

  return <Login onSubmit={onSubmit} submitError={submitError} />;
}
