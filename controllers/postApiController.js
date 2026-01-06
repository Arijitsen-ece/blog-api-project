import Post from "../models/postModel.js";

// GET all posts (JSON)
export const apiGetPosts = async (req, res) => {
  const posts = await Post.find();
  res.status(200).json(posts);
};

// CREATE post
export const apiCreatePost = async (req, res) => {
  const post = await Post.create(req.body);
  res.status(201).json(post);
};

// UPDATE post
export const apiUpdatePost = async (req, res) => {
  const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(post);
};

// DELETE post
export const apiDeletePost = async (req, res) => {
  await Post.findByIdAndDelete(req.params.id);
  res.status(204).send();
};
