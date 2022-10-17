const React = require("react");
const Navbar = require("../components/Navbar");

class EditBlog extends React.Component {
  render() {
    const { blog } = this.props;
    return (
      <div>
        <head>
          <link rel="stylesheet" href="/CSS/app.css" />
        </head>
        <Navbar />
        <h1>Edit Blog Post</h1>
        <form action={`/blog/${blog._id}?_method=PUT`} method="POST">
          Title: <input type="text" name="title" defaultValue={blog.title} />
          <br />
          <label htmlFor="title">
            What would you like to write about:
          </label>{" "}
          <textarea
            name="body"
            type="text"
            value={blog.body}
            cols="50"
            rows="24"
          ></textarea>{" "}
          <br />
          <label htmlFor="sponsored">Sponsored:</label>
          <input
            type="checkbox"
            name="sponsored"
            defaultChecked={blog.sponsored ? "on" : null}
          />
          <input type="submit" value="Edit Blog Post" />
        </form>

        <form action={`/blog/${blog._id}?_method=delete`} method="POST">
          <input type="submit" value="Delete Blog" />
        </form>
      </div>
    );
  }
}

const styles = {
  body: {
    height: "50px",
    width: "50px",
  },
};

module.exports = EditBlog;
