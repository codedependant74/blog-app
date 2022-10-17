const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const methodOverride = require("method-override");
const session = require("express-session");
const MongoStore = require("connect-mongo");

require("dotenv").config();

const app = express();

const PORT = 3000;

//! Middleware
app.use(express.static("public"));
app.use(morgan("dev"));
app.use(express.json());
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: false }));
app.use(
  session({
    secret: process.env.SECRET,
    store: MongoStore.create({ mongoUrl: process.env.MONGO_URI }),
    resave: false,
    saveUninitialized: true,
  })
);

//! App settings
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

app.use("/blog", require("./controllers/BlogRouter"));
app.use("/user", require("./controllers/UserRouter"));

app.get("/", (req, res) => {
  res.render("pages/HomePage");
});

app.listen(PORT, () => {
  console.log(`Sever running on port: ${PORT}`);

  mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  mongoose.connection.once("open", () => {
    console.log("connect to mongo");
  });
});
