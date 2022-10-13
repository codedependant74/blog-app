const React = require("react");

class Blogs extends React.Component {
  render() {
    const { BlogModel } = this.props;
    return (
      <div>
        <head>{/* <link rel="stylesheet" href="/css/app.css">  */}</head>
        <h1>Blogs</h1>
      </div>
    );
  }
}
