import mongoose from "mongoose";

export const connectionToMongoDB = async () => {
  try {
    mongoose.connect(process.env.MONGODB_URI);
    console.log(`Connected to Databse`);
  } catch (error) {
    console.log(`Error connection to DB: ${error}`);
  }
};
