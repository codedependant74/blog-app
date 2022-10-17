const React = require("react");
const Navbar = require("../components/Navbar");

class Signup extends React.Component {
  render() {
    return (
      <div>
        <head>
          <link rel="stylesheet" href="/CSS/app.css" />
        </head>
        <Navbar />
        <h1>Create New Account</h1>
        <form action="/user/signup" method="POST">
          <fieldset>
            <legend>Sign Up</legend>
            <label htmlFor="username">Username</label>
            <br />
            <input type="text" name="username" required />
            <br />
            <label htmlFor="email">Email</label>
            <br />
            <input type="text" name="email" required />
            <br />
            <label htmlFor="password">Password</label>
            <br />
            <input type="text" name="password" required />
            <br />
            <input type="submit" value="Signup" />
          </fieldset>
        </form>

        <div>
          <p>
            Already have an account? <a href="/user/signin">Sign In</a>
          </p>
        </div>
      </div>
    );
  }
}

module.exports = Signup;
