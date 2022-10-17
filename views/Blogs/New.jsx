const React = require("react");
const Navbar = require("../components/Navbar");

class NewBlog extends React.Component {
  render() {
    return (
      <div>
        <head>
          <link rel="stylesheet" href="/CSS/app.css" />
        </head>
        <Navbar />
        <h1>New Blog Post</h1>
        <form action="/blog" method="POST">
          Title: <input type="text" name="title" required />
          <br />
          What would you like to write about:{" "}
          <textarea
            name="body"
            cols="50"
            rows="24"
            style={styles.body}
            required
          ></textarea>
          {/* <input type="text" name="body" style={styles.body} /> */}
          {/* <br /> */}
          {/* Author <input type="text" name="author" /> */}
          <br />
          <input type="submit" value="Create new blog post" />
        </form>
      </div>
    );
  }
}

const styles = {
  body: {
    height: "50px",
    width: "200px",
    resize: "both",
  },
};

module.exports = NewBlog;
