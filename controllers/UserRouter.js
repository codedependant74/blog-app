const express = require("express");
const UserModel = require("../models/UserSchema");
const bcrypt = require("bcryptjs");

const router = express.Router();

//* See all Users | Main Route
router.get("/", async (req, res) => {
  try {
    const users = await UserModel.find({});
    res.send(users);
  } catch (error) {
    console.log(error);
    res.status(403).send("Cannot get");
  }
});

//* Render a Signup Form
router.get("/signup", (req, res) => {
  res.render("Users/Signup");
});

//* Render the sign in form
router.get("/signin", (req, res) => {
  res.render("Users/Signin");
});

// Signout User and destroy session
router.get("/signout", (req, res) => {
  try {
    req.session.destroy();
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
});

//* See user with specific ID
router.get("/:id", async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.id);
    res.send(user);
  } catch (error) {
    console.log(error);
    res.status(403).send("Cannot get");
  }
});

//* POST: CREATE a New User
router.post("/signup", async (req, res) => {
  try {
    const userAlreadyExist = await UserModel.find({ email: req.body.email });

    if (userAlreadyExist[0]) {
      return res.send("User Already Exist!");
    }
    //* Create a new User
    const SALT = await bcrypt.genSalt(10); //* How secure your hash will be
    //* Reassign the password to the hashed password
    req.body.password = await bcrypt.hash(req.body.password, SALT);
    const newUser = await UserModel.create(req.body);
    res.redirect("/user/signin");
  } catch (error) {
    console.log(error);
    res.status(403).send("Cannot create");
  }
});

router.post("/signin", async (req, res) => {
  try {
    //* find user by email in db
    const user = await UserModel.findOne({ email: req.body.email });
    if (!user) return res.send("Please check your email and password!");
    //* checks if passwords match
    const decodedPwd = await bcrypt.compare(req.body.password, user.password);
    if (!decodedPwd) return res.send("Please check your email and password");
    //* set the user session
    //* create a new username in the session obj using the user info from db
    req.session.username = user.username;
    req.session.loggedIn = true;
    //* redirect user by email
    res.redirect("/blog");
  } catch (error) {}
});

//* PUT: Update User by ID
router.put("/:id", async (req, res) => {
  try {
    const updatedUser = await UserModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { returnDocument: "after" }
    );
    res.send(updatedUser);
  } catch (error) {
    console.log(error);
    res.status(403).send("Cannot put");
  }
});

//* Delete User by ID
router.delete("/:id", async (req, res) => {
  try {
    const deletedUser = await UserModel.findByIdAndRemove(req.params.id);
    if (userAlreadyExist[0]) {
      return res.send("User Already exist!");
    }
    console.log(deletedUser);
    res.send("User Deleted");
  } catch (error) {
    console.log(error);
    res.status(403).send("Cannot delete");
  }
});

module.exports = router;
