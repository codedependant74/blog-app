const React = require("react");
const Navbar = require("../components/Navbar");

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <head>
          <link rel="stylesheet" href="/CSS/app.css"></link>
        </head>
        <Navbar />
        <h1>Welcome to My Blog</h1>
        <img
          src="https://images.unsplash.com/photo-1575193506520-45ff0a377fb8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          style={styles.img}
        />

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
          facere accusantium, tenetur excepturi, architecto placeat at vitae,
          sunt voluptatum fugiat nulla temporibus quisquam dolorum ipsum saepe
          aut unde ad quam!
        </p>

        <section>
          <h2>Bio</h2>
          <div>
            <img
              src="https://images.unsplash.com/photo-1512238701577-f182d9ef8af7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
              style={styles.bioimg}
            />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi
              obcaecati eaque odit placeat, iure maiores veritatis harum minima
              distinctio praesentium soluta ipsam molestias ratione in quos
              fugit nisi quisquam fugiat. Distinctio, autem quos! Laborum iusto
              numquam modi repellendus odit rerum at commodi tempore. Officia
              eum, distinctio exercitationem hic necessitatibus labore tempora
              quae possimus, aperiam molestias ullam, reprehenderit a
              repellendus mollitia.
            </p>
          </div>
        </section>
        <section>
          <h2>Featured Blog</h2>
          <div>
            <h3>Getting started with crochet</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam,
              fugiat laudantium optio maiores laboriosam sint qui amet in
              mollitia aspernatur ullam dicta consectetur veritatis odio nihil
              repellat iusto doloremque modi! Ad illum natus qui vitae error
              consectetur molestiae repudiandae, vel expedita delectus aliquid
              molestias hic nobis, eaque ipsum? Minus labore saepe maiores vero
              repellendus voluptate voluptatem corrupti eaque pariatur sint?
              Similique consequuntur accusamus rerum beatae obcaecati neque
              consequatur aspernatur provident, quisquam suscipit ratione nam
              repudiandae aliquid unde quos! Illum magnam temporibus, blanditiis
              consectetur eligendi non voluptates laborum. Nam, repellendus at!
              Iste sit nam, eveniet aperiam enim a dolor ipsa quod aliquid
              veniam beatae quaerat nesciunt dolore ipsum facere quis animi
              eligendi minus. Officiis ipsam accusantium perferendis velit,
              pariatur voluptatum mollitia?
            </p>
            <span>Author: Brenda</span>
          </div>
        </section>
      </div>
    );
  }
}

const styles = {
  img: { width: "100%", height: "400px", objectFit: "cover" },
  bioimg: {
    width: "200px",
    height: "200px",
    borderRadius: "50%",
    objectFit: "fill",
    marginLeft: "20px",
  },
};

module.exports = HomePage;
