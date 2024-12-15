import {
  deleteUser,
  followUser,
  getUser,
  updateUser,
  unfollowUser,
  getUserProfile,
  updateProfilePicture,
} from "../services/user.service.js";

export const updateUserController = async (req, res) => {
  // if conditional to matching params user id or admin to perform user update
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    try {
      const user = await updateUser(req.params.id, req.body);
      res.status(200).json({
        user,
        message: "account updated successfully.",
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  } else {
    res.status(500).json("you can only update your own account.");
  }
};

export const updateProfilePictureController = async (req, res) => {
  // if conditional to matching params user id or admin to perform user update
  try {
    const user = await updateProfilePicture(req.params.id, req.file.path);
    res.status(200).json({
      user,
      message: "profile picture updated successfully.",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

export const deleteUserController = async (req, res) => {
  // if conditional to matching params user id or admin to perform user delete
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    try {
      await deleteUser(req.params.id);
      res.status(200).json({
        message: "account deleted successfully.",
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  } else {
    res.status(500).json("you can only delete your own account.");
  }
};

export const getUserController = async (req, res) => {
  try {
    const user = await getUser(req.params.id);
    //password is not returned upon fetch
    const { password, ...data } = user._doc;
    res.status(200).json({
      userInfo: data,
      message: "account fetched successfully.",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

export const followUserController = async (req, res) => {
  try {
    const data = await followUser(req.body, req.params);
    data,
      res.status(200).json({
        data,
        message: "user followed successfully.",
      });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

export const unfollowUserController = async (req, res) => {
  try {
    const data = await unfollowUser(req.body, req.params);
    data,
      res.status(200).json({
        data,
        message: "user un-followed successfully.",
      });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

export const getUserProfileController = async (req, res) => {
  try {
    const user = await getUserProfile(req.query);
    //password is not returned upon fetch
    const { password, ...data } = user._doc;
    res.status(200).json({
      userInfo: data,
      message: "profile fetched successfully.",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};
