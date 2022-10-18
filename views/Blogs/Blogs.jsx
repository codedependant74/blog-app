const React = require("react");
const Navbar = require("../components/Navbar");

class Blogs extends React.Component {
  render() {
    const { blogs, loggedInUser } = this.props;
    console.log(loggedInUser);
    return (
      <div>
        <head>
          <link rel="stylesheet" href="/CSS/app.css" />
        </head>

        <Navbar loggedInUser={loggedInUser} />

        <h1>Blogs</h1>

        <section className="blogContainer">
          {blogs.map((blog) => (
            <div>
              <a href={`/blog/${blog._id}`}>
                {" "}
                <h2>{blog.title}</h2>
              </a>
              <div className="blogBody">
                <p>{blog.body}</p>
              </div>
              <h6 style={styles.name}>Written by: {blog.author}</h6>
              <br />
              {blog.author === loggedInUser ? (
                <div>
                  <a href={`/blog/${blog._id}/edit`} style={styles.btn}>
                    Edit Blog
                  </a>
                </div>
              ) : null}
            </div>
          ))}
        </section>
      </div>
    );
  }
}

const styles = {
  name: {
    margin: "30px",
    fontSize: "20px",
    color: "#d4a373",
  },
  btn: {
    margin: "auto 20px auto 20px",
    padding: "7px",
    border: "1px solid black",
    borderRadius: "30px",
    color: "#d9af82",
    backgroundColor: "#EEDDD3",
  },
};

module.exports = Blogs;
