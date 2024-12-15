import UserModel from "../models/user.model.js";
// A library to help you hash passwords.
import bcrypt from "bcrypt";

export const registerUser = async (body) => {
  //hash the req.body.password
  const hashedPassword = bcrypt.hashSync(body.password, 10);

  const newUser = new UserModel({
    username: body.username,
    email: body.email,
    password: hashedPassword,
  });

  await newUser.save();

  return newUser;
};

export const loginUser = async (body) => {
  const user = await UserModel.findOne({ email: body.email });
  !user && res.status(404).json("Username or password is incorrect.");

  const passwordCheck = await bcrypt.compare(body.password, user.password);
  !passwordCheck && res.status(400).json("Username or password is incorrect.");

  return user;
};
