import { Component } from 'react';
import { Login } from '../../components/Login/Login';

export class LoginContainer extends Component {
  state = {
    loginError: '',
    passwordError: '',
    submitDisabled: true,
  };

  onSubmit = ({ login, password }) => {
    console.log(login, password);
  };

  resetErrors = () => {
    this.setState({ loginError: '', passwordError: '' });
  };

  render() {
    return (
      <Login
        onSubmit={this.onSubmit}
        resetErrors={this.resetErrors}
        loginError={this.state.loginError}
        passwordError={this.state.passwordError}
        submitDisabled={this.state.submitDisabled}
      />
    );
  }
}
