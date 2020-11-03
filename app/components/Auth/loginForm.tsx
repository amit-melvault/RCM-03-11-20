import * as React from 'react';
import Logo from '../../images/melody.svg';
import './loginForm.css';

interface ComponentProps { }
interface ComponentState {
  username: any;
  password: any;
}
class AuthForm extends React.Component<ComponentProps, ComponentState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  handleChnage = (e: React.ChangeEvent<HTMLInputElement>) => {
    let target = e.target as HTMLInputElement;
    e.preventDefault()
    this.setState({
      username:target.value, 
      password:target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(this.state));
  };

  render() {
    return (
      <div className="main">
        <img className="Melody-Logo" src={Logo} alt="img" />
        <header className="header">
          <h3>Login Page</h3>
        </header>
        <form className="form-group" onSubmit={this.handleSubmit}>
          <label htmlFor="UserName">UserName</label>
          <input
            type="text"
            placeholder="User name"
            className="form-control"
            name="username"
            value={this.state.username}
            onChange={this.handleChnage}
          />
          <label htmlFor="password">Password</label>
          <input
            type="text"
            placeholder="password"
            className="form-control"
            name="password"
            value={this.state.password}
            onChange={this.handleChnage}
          />
          <button type="submit" className="btn btn-primary btn-block">
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default AuthForm;
