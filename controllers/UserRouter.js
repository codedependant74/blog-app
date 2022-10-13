const express = require("express");
const UserModel = require("../models/UserSchema");

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
router.post("/", async (req, res) => {
  try {
    const userAlreadyExist = await UserModel.find({ email: req.body.email });
    const newUser = await UserModel.create(req.body);
    res.send(newUser);
  } catch (error) {
    console.log(error);
    res.status(403).send("Cannot create");
  }
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
