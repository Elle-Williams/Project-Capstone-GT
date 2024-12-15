import mongoose from "mongoose";

export const dbConnect = () => {
  try {
    //MongoDB Atlas. Fully managed MongoDB in the cloud. - url moved to .env
    mongoose.connect(process.env.DB_URL);
    console.log("MongoDB connected successfully.");
  } catch (error) {
    console.log(error);
  }
};
