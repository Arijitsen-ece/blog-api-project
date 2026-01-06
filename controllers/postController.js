import Post from "../models/postModel.js";

// GET all posts
export const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.render("index.ejs", { posts });
  } catch (error) {
    res.status(500).send("Error fetching posts");
  }
};

// SHOW new post form
export const showNewPostForm = (req, res) => {
  res.render("modify.ejs", {
    heading: "New Post",
    submit: "Create Post",
    post: null,
  });
};

// SHOW edit post form
export const showEditPostForm = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.render("modify.ejs", {
      heading: "Edit Post",
      submit: "Update Post",
      post,
    });
  } catch (error) {
    res.status(404).send("Post not found");
  }
};

// CREATE post
export const createPost = async (req, res) => {
  try {
    await Post.create(req.body);
    res.redirect("/");
  } catch (error) {
    res.status(400).send("Error creating post");
  }
};

// UPDATE post
export const updatePost = async (req, res) => {
  try {
    await Post.findByIdAndUpdate(req.params.id, req.body);
    res.redirect("/");
  } catch (error) {
    res.status(400).send("Error updating post");
  }
};

// DELETE post
export const deletePost = async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params.id);
    res.redirect("/");
  } catch (error) {
    res.status(400).send("Error deleting post");
  }
};
