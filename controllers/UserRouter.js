const express = require("express");
const UserModel = require("../models/UserSchema");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const user = await UserModel.find({});
    res.send(user);
  } catch (error) {
    console.log(error);
    res.status(403).send("Cannot get");
  }
});

module.exports = router;
