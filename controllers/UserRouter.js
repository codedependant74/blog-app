const express = require("express");
const UserModel = require("../models/UserSchema");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const users = await UserModel.find({});
    res.send(URLSearchParams);
  } catch (error) {
    console.log(error);
    res.status(403).send("Cannot get");
  }
});

router.get("/:id", async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.id);
    res.send(blog);
  } catch (error) {
    console.log(error);
    res.status(403).send("Cannot get");
  }
});

//POST: CREATE a New Blog
router.post("/", async (req, res) => {
  try {
    const newUser = await UserModel.create(req.body);
    res.send(newUser);
  } catch (error) {
    console.log(error);
    res.status(403).send("Cannot create");
  }
});

// PUT: Update by ID
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

//Delete
router.delete("/:id", async (req, res) => {
  try {
    const deletedUser = await UserModel.findByIdAndRemove(req.params.id);
    console.log(deletedUser);
    res.send("User Deleted");
  } catch (error) {
    console.log(error);
    res.status(403).send("Cannot delete");
  }
});

module.exports = router;
