import { loginUser, registerUser } from "../services/auth.service.js";
import { deleteUser } from "../services/user.service.js";

//Register
export const register = async (req, res) => {
  try {
    const newUser = await registerUser(req.body);

    const { password, ...userData } = newUser._doc;
    res.status(200).json({
      userData,
      message: "user has been registered successfully.",
    });
  } catch (error) {
    res.status(500).json({
      error: error,
      message: "an error occurred registering user.",
    });
    console.log(error);
  }
};

//Login
export const login = async (req, res) => {
  try {
    const user = await loginUser(req.body, res);
    const { password, ...userData } = user._doc;

    res.status(200).json({
      message: "User logged in successfully.",
      userData,
    });
  } catch (error) {
    res.status(500).json({
      error: error,
      message: "An error occurred logging in the user.",
    });
    console.log(error);
  }
};