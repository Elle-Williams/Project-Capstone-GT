import mongoose from "mongoose";
import { Schema } from "mongoose";

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    min: 3,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  profilePicture: {
    type: String,
    default: "",
  },
  coverPicture: {
    type: String,
    default: "",
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  desc: {
    type: String,
  },
  timeZone: {
    type: String,
    default: "not set",
  },

  platform: {
    type: String,
    default: "not set",
  },

  style: {
    type: String,
    default: "not set",
  },

  //cut later - relationship status not necessary for gt
  // relationship: {
  //   type: Number,
  //   enum: [1, 2, 3],
  // },
  followers: {
    type: Array,
    default: [],
  },
  following: {
    type: Array,
    default: [],
  },
});

export default mongoose.model("User", userSchema);
