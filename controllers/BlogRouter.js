const express = require("express");
const BlogModel = require("../models/BlogSchema");

const router = express.Router();

//* Get all blogs
router.get("/", async (req, res) => {
  try {
    const blogs = await BlogModel.find({});
    res.render("Blogs/Blogs", { blogs: blogs });
  } catch (error) {
    console.log(error);
    res.status(403).send("Cannot get");
  }
});

router.get("/new", async (req, res) => {
  try {
    const newPost = await BlogModel.find({});
    res.render("Blogs/New", { newblog: newPost });
  } catch (error) {
    console.log(error);
    res.status(403).send("Cannot get");
  }
});

router.get("/:id/edit", async (req, res) => {
  try {
    const updatedBlog = await BlogModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { returnDocument: "after" }
    );
    res.redirect(`/blog/${blog.id}/edit`);
  } catch (error) {
    console.log(error);
    res.status(403).send("Cannot get");
  }
});

//* Get blog by ID
router.get("/:id", async (req, res) => {
  try {
    const blog = await BlogModel.findById(req.params.id);
    res.render("Blogs/Show", { blog: blog });
  } catch (error) {
    console.log(error);
    res.status(403).send("Cannot get");
  }
});

//* POST: CREATE a New Blog
router.post("/", async (req, res) => {
  try {
    const newBlog = await BlogModel.create(req.body);
    res.redirect("/blog");
  } catch (error) {
    console.log(error);
    res.status(403).send("Cannot create");
  }
});

// const updatedBlog = await BlogModel.findByIdAndUpdate(req.params.id, req.body, {'returnDocument' : "after"})

//* PUT: Update by ID
router.put("/:id", async (req, res) => {
  try {
    const updatedBlog = await BlogModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { returnDocument: "after" }
    );
    res.send(updatedBlog);
  } catch (error) {
    console.log(error);
    res.status(403).send("Cannot put");
  }
});

//* Delete
router.delete("/:id", async (req, res) => {
  try {
    const deletedBlog = await BlogModel.findByIdAndRemove(req.params.id);
    console.log(deletedBlog);
    res.send("Blog Deleted");
  } catch (error) {
    console.log(error);
    res.status(403).send("Cannot delete");
  }
});

module.exports = router;
