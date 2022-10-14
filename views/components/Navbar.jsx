const React = require("react");

class Navbar extends React.Component {
  render() {
    return (
      <nav style={styles.container}>
        <a href="/">Home</a>
        <a href="/blog">Blogs</a>
        <a href="/blog/new">Create New Blog</a>
        <a href="/signin">Signin/up</a>
      </nav>
    );
  }
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "space-between",
    background: "#EDEDE8",
  },
};

module.exports = Navbar;
