const React = require("react");
const Navbar = require("../components/Navbar");

class Signin extends React.Component {
  render() {
    return (
      <div>
        <head>
          <link rel="stylesheet" href="/CSS/app.css" />
        </head>
        <Navbar />
        <h1>Sign in to Your Account</h1>
        <form action="/user/signin" method="POST">
          <fieldset>
            <legend>Sign In</legend>

            <label htmlFor="email">Email</label>
            <br />
            <input type="text" name="email" required />
            <br />
            <label htmlFor="password">Password</label>
            <br />
            <input type="text" name="password" required />
            <br />
            <input type="submit" value="Signin" />
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

module.exports = Signin;
