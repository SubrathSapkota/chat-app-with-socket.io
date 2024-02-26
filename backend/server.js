import express from "express";
import dotenv from "dotenv";

import { router } from "./routes/auth.routes.js";
import { connectionToMongoDB } from "./db/connectDB.js";

const app = express();

dotenv.config();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use("/api/auth", router);

app.listen(PORT, () => {
  connectionToMongoDB();
  console.log(`Server connected at ${PORT}`);
});
