import React, { Component } from 'react';
import { loginUtil } from '../../utils/authUtil';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      error: {}
    };
  }

  onChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  onSubmit() {
    const { email, password } = this.state;
    loginUtil({ email, password });
  }

  render() {
    const { email, password } = this.state;

    return (
      <div className="login-base">
        <div className="row">
          <div className="col s12">
            <div className="input-field col s6">
              <input
                id="email"
                type="text"
                className="validate"
                name="email"
                value={email}
                onChange={e => {
                  this.onChange(e);
                }}
              />
              <label htmlFor="email">Email</label>
              <span
                className="helper-text"
                data-error="Invalid Email"
                data-success="Valid Email"
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col s12">
            <div className="input-field col s6">
              <input
                id="password"
                type="password"
                className="validate"
                name="password"
                value={password}
                onChange={e => {
                  this.onChange(e);
                }}
              />
              <label htmlFor="password">Password</label>
            </div>
          </div>
        </div>
        <button
          className="btn waves-effect waves-light"
          name="submit"
          onClick={() => {
            this.onSubmit();
          }}
        >
          Submit
          <i className="material-icons right">send</i>
        </button>
      </div>
    );
  }
}

export default Login;
