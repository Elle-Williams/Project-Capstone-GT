import bcrypt from "bcrypt";
import userModel from "../models/user.model.js";

export const updateUser = async (userId, updateData) => {
  if (updateData.password) {
    try {
      updateData.password = await bcrypt.hashSync(updateData.password, 10);
    } catch (err) {
      throw err;
    }
  }
  try {
    const user = await userModel.findByIdAndUpdate(
      userId,
      {
        $set: updateData,
      },
      {
        new: true,
      }
    );
    return user;
  } catch (err) {
    throw err;
  }
};

export const updateProfilePicture = async (userId, newProfilePicture) => {
  try {
    const user = await userModel.findByIdAndUpdate(
      userId,
      {
        $set: { profilePicture: newProfilePicture },
      },
      {
        new: true,
      }
    );
    return user;
  } catch (err) {
    throw err;
  }
};

export const deleteUser = async (userId) => {
  try {
    await userModel.findByIdAndDelete(userId);
  } catch (err) {
    throw err;
  }
};

export const getUser = async (userId) => {
  try {
    const user = await userModel.findById(userId);
    return user;
  } catch (err) {
    throw err;
  }
};

export const followUser = async (userdata, updateData) => {
  if (userdata.userId === updateData.id) {
    throw new Error("Nice try. But, you cannot follow yourself.");
  } else {
    try {
      const user = await userModel.findById(userdata.userId);
      const currentUser = await userModel.findById(updateData.id);
      // console.log(user);
      // console.log(currentUser);
      if (!user.following.includes(updateData.id)) {
        await currentUser.updateOne({ $push: { followers: userdata.userId } });
        await user.updateOne({ $push: { following: updateData.id } });
        return { user, currentUser };
      } else {
        throw new Error(
          "You are already following this user. Try sending them a message."
        );
      }
    } catch (error) {
      throw error;
    }
  }
};
export const unfollowUser = async (userdata, updateData) => {
  if (userdata.userId === updateData.id) {
    throw new Error("You cannot un-follow yourself. You doing okay?");
  } else {
    try {
      const user = await userModel.findById(userdata.userId);
      const currentUser = await userModel.findById(updateData.id);
      // console.log(user);
      // console.log(updateData);
      if (user.following.includes(updateData.id)) {
        await currentUser.updateOne(
          { $pull: { followers: userdata.userId } },
          { new: true }
        );
        await user.updateOne(
          {
            $pull: { following: updateData.id },
          },
          { new: true }
        );
        return { user, currentUser };
      } else {
        throw new Error("You were not following this user.");
      }
    } catch (error) {
      throw error;
    }
  }
};

export const getUserProfile = async (query) => {
  try {
    const user = await userModel.findOne({ username: query.username });
    return user;
  } catch (err) {
    throw err;
  }
};

// Get all users...

// const User = require('../models/user');

// async function getAllUsers() {
//   return await User.find({});
// }

// module.exports = {
//   getAllUsers,
// };
