import React, { Component } from 'react'

export class Login extends Component {
  render() {
    return (
      <div>
        <div className="welcome">
        <h1>Welcome Back</h1>
        </div>

        <div className="input login">
        <form action="">
        <input type="text" placeholder="Email" />
        </form>
        </div>

        <div className="input login">
        <form action="">
        <input type="text" placeholder="Password" />
        </form>
        </div>

        <div>
          <button>Login</button>

        </div>


      </div>
    )
  }
}

export default Login
