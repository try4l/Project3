import React, { Component } from 'react';
//import './loginControls.css';

class LoginControls extends Component {
  handleClick = (event) => {
    console.log('SIGN IN CLICK');
    
  };

  render() {
    return (
      <div className="login">
        <form>
          {/* USERNAME */}
          <div className="form-group">
            <label for="username">Username</label>
            <input type="text"
                  className="form-control"
                  id="username"
                  name="username"
                  placeholder="you@email.com" />
          </div>
          {/* PASSWORD */}
          <div className="form-group">
            <label for="password">Password</label>
            <input type="password"
                  className="form-control"
                  id="password"
                  name="password" />
          </div>
        </form>
        {/* SIGN IN */}
        <button className="btn btn-danger"
                onClick={this.handleClick}>Sign In</button>
      </div>
    );
  }
}

export default LoginControls;
