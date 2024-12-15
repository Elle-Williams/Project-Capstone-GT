import {
  createPost,
  updatePost,
  deletePost,
  likeAndDislike,
  getPost,
  getTimelinePosts,
  getAllPosts,
} from "../services/post.service.js";

export const createPostController = async (req, res) => {
  try {
    const newPost = await createPost(req.body, req.file.path);
    res.status(200).json({
      newPost,
      message: "post created successfully.",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "post creation failed.",
      err,
    });
  }
};

export const updatePostController = async (req, res) => {
  try {
    const updatedPost = await updatePost(req.params, req.body);
    res.status(200).json({
      updatedPost,
      message: "post updated successfully.",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "post update failed.",
      err,
    });
  }
};
export const deletePostController = async (req, res) => {
  try {
    const deletedPost = await deletePost(req.params, req.body);
    res.status(200).json({
      deletedPost,
      message: "post deleted successfully.",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "post deletion failed.",
      err,
    });
  }
};

export const likeAndDislikeController = async (req, res) => {
  try {
    const post = await likeAndDislike(req.params, req.body);
    res.status(200).json({
      post,
      message: "post has been liked or disliked successfully.",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "post like or dislike failed.",
      err,
    });
  }
};

export const getPostController = async (req, res) => {
  try {
    const post = await getPost(req.params);
    res.status(200).json({
      post,
      message: "post fetched successfully.",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "post fetch has failed.",
      err,
    });
  }
};

export const getTimelinePostsController = async (req, res) => {
  try {
    const posts = await getTimelinePosts(req.params);
    res.status(200).json({
      posts,
      message: "timeline posts fetched successfully.",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "timeline posts fetch has failed.",
      err,
    });
  }
};

export const getAllPostsController = async (req, res) => {
  try {
    const posts = await getAllPosts();
    res.status(200).json({
      posts,
      message: "posts fetched successfully.",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "posts fetch has failed.",
      err,
    });
  }
};