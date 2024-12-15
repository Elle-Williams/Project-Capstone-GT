import axios from "axios";

export const API = axios.create({
  baseURL: "http://localhost:3030/api/v1/",
});

export const getTimelinePost = (username) =>
  API.get(`/posts/get-timeline-posts/${username}`);
export const getAllPosts = () => API.get("/posts");
export const getUserData = (userId) => API.get(`/users/${userId}`);
export const getUserProfileData = (username) =>
  API.get(`/users?username=${username}`);

export const likeAndDislikePost = (postId, userId) =>
  API.get(`/posts/like-post/${postId}`, { userId: userId });
export const uploadPost = async (userId, desc, img) => {
  const formData = new FormData();
  formData.append("userId", userId);
  formData.append("desc", desc);
  formData.append("img", img);

  const res = await API.post("/posts/create-post", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return res.data;
};

export const unfollowUser = (userId, id) =>
  API.put(`/users/unfollow/${id}`, { userId: userId });

export const followUser = (userId, id) =>
  API.put(`/users/follow/${id}`, { userId: userId });
