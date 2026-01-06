import express from "express";
import {
  apiGetPosts,
  apiCreatePost,
  apiUpdatePost,
  apiDeletePost,
} from "../controllers/postApiController.js";

import { validatePost } from "../middlewares/validatePost.js";

const router = express.Router();

router.get("/posts", apiGetPosts);
router.post("/posts", validatePost, apiCreatePost);
router.patch("/posts/:id", validatePost, apiUpdatePost);
router.delete("/posts/:id", apiDeletePost);

export default router;
