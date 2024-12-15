import express from "express";
import {
  deleteUserController,
  getUserController,
  updateUserController,
  followUserController,
  unfollowUserController,
  getUserProfileController,
  updateProfilePictureController,
} from "../controllers/user.controller.js";
import { parser } from "../config/cloudinary.js";

const router = express.Router();

//render test
// router.get("/", (req, res) => {
//     res.send("These are the test users.")
// });

//update USER
router.put("/:id", updateUserController);

//update profile picture
router.put(
  "/:id/profile-picture",
  parser.single("profilePicture"),
  updateProfilePictureController
);

//delete user
router.delete("/:id", deleteUserController);

//get a user
router.get("/:id", getUserController);

//get user profile
router.get("/", getUserProfileController);

//follow a user
router.put("/follow/:id", followUserController);

//unfollow a user
router.put("/unfollow/:id", unfollowUserController);

export default router;
