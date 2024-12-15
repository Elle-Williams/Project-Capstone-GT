import express from "express";
import {
  createPostController,
  deletePostController,
  getAllPostsController,
  getPostController,
  getTimelinePostsController,
  likeAndDislikeController,
  updatePostController,
} from "../controllers/post.controller.js";
import { parser } from "../config/cloudinary.js";
// import { parser } from "../config/cloudinary.js";

const router = express.Router();

//create a post
router.post("/create-post/", parser.single("img"), createPostController);

//update a post
router.put("/update-post/:id", updatePostController);

//delete a post
router.delete("/delete-post/:id", deletePostController);

//like and dislike a post
router.put("/like-post/:id", likeAndDislikeController);

//get a post
router.get("/get-post/:id", getPostController);

//get all posts
router.get("/", getAllPostsController);

//timeline posts
router.get("/get-timeline-posts/:username", getTimelinePostsController);


export default router;
