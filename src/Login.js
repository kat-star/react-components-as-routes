import React from 'react'

class Login extends React.PureComponent {
  render() {
    return (
      <form>
        <div>
          <input type="text" name="username" placeholder="Username" />
          <label htmlForm="username">Username</label>
        </div>
        <div>
          <input type="text" name="password" placeholder="Password" />
          <label htmlForm="password">Password</label>
        </div>
        <input type="submit" value="Login" />
      </form>
    )
  }
}

export default Login;