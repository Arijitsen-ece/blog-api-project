import express from "express";
import {
  getAllPosts,
  showNewPostForm,
  showEditPostForm,
  createPost,
  updatePost,
  deletePost,
} from "../controllers/postController.js";

const router = express.Router();

router.get("/", getAllPosts);
router.get("/new", showNewPostForm);
router.get("/edit/:id", showEditPostForm);
router.post("/posts", createPost);
router.post("/posts/:id", updatePost);
router.get("/posts/delete/:id", deletePost);

export default router;
