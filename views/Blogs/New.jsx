const React = require("react");

class NewBlog extends React.Component {
  render() {
    return (
      <div>
        <head>
          <link rel="stylesheet" href="/CSS/app.css" />
        </head>
        <h1>New Blog Post</h1>
        <form action="/blog" method="POST">
          Title: <input type="text" name="title" />
          <br />
          What would you like to write about: <input type="text" name="body" />
          <br />
          Author <input type="text" name="author" />
          <br />
          <input type="submit" value="Create new blog post" />
        </form>
      </div>
    );
  }
}

module.exports = NewBlog;
