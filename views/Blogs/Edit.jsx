const React = require("react");

class EditBlog extends React.Component {
  render() {
    const { blog } = this.props;
    return (
      <div>
        <head>
          <link rel="stylesheet" href="/CSS/app.css" />
        </head>
        <h1>Edit Blog Post</h1>
        <form action={`/blog/${blog._id}?_method=PUT`} method="POST">
          Title: <input type="text" name="title" defaultValue={blog.title} />
          <br />
          What would you like to write about:{" "}
          <input type="text" name="body" defaultValue={blog.body} />
          <br />
          Author <input type="text" name="author" defaultValue={blog.author} />
          <br />
          Sponsored:{" "}
          {blog.sponsored ? (
            <input type="checkbox" name="sponsored" defaultChecked />
          ) : (
            <input type="checkbox" name="sponsored" />
          )}{" "}
          <input type="checkbox" name="sponsored" />
          <input type="submit" value="Edit Blog Post" />
        </form>
      </div>
    );
  }
}

module.exports = EditBlog;
