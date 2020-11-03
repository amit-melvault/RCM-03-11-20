import * as React from 'react';
import { LoginStyle } from './LoginStyle';
import '@patternfly/react-core/dist/styles/base.css';
import { LoginForm, LoginPage } from '@patternfly/react-core';
import ExclamationCircleIcon from '@patternfly/react-icons/dist/js/icons/exclamation-circle-icon';


interface state {
  username: any,
  password: any,
  showHelperText: boolean,
  isValidUsername: boolean,
  isValidPassword: boolean,
}

class Login extends React.Component<{}, state> {
  constructor(props: {}) {
    super(props);
    this.state = {
      username: '',
      password: '',
      showHelperText: false,
      isValidUsername: true,
      isValidPassword: true,
    };
  }
  onLoginButtonClick = event => {
    event.preventDefault();
    this.setState({ isValidUsername: !!this.state.username });
    this.setState({ isValidPassword: !!this.state.password });
    this.setState({
      showHelperText: !this.state.username || !this.state.password,
    });
  };

  handleChange = (e) => {
    this.setState({ username: e.target.value, password: e.target.value })
  }

  render() {
    const loginForm = (
      <LoginForm
        showHelperText={this.state.showHelperText}
        helperTextIcon={<ExclamationCircleIcon />}
        usernameLabel="Username"
        usernameValue={this.state.username}
        onChangeUsername={this.handleChange}
        isValidUsername={this.state.isValidUsername}
        passwordLabel="Password"
        passwordValue={this.state.password}
        onChangePassword={this.handleChange}
        isValidPassword={this.state.isValidPassword}
        onLoginButtonClick={this.onLoginButtonClick}
      />
    );

    return (
      <LoginStyle>
        <LoginPage loginTitle="Log in">{loginForm}</LoginPage>
      </LoginStyle>
    );
  }
}

export default Login;
