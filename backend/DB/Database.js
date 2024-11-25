import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const MONGODB_URL = process.env.MONGODB_URL;

export const connect = async () => {
  try {
    await mongoose.connect(MONGODB_URL);
    console.log("DB Connection Success");
  } catch (err) {
    console.error("DB Connection Failed");
    console.error(err);
    process.exit(1);
  }
};
