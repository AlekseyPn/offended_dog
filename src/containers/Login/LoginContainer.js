import { Component } from 'react';
import { Login } from '../../components/Login/Login';

export class LoginContainer extends Component {
  state = {
    submitError: '',
  };

  onSubmit = (event, { login, password }) => {
    event.preventDefault();
    console.log(login, password);
  };

  render() {
    return <Login onSubmit={this.onSubmit} submitError={this.submitError} />;
  }
}
