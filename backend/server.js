import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors"

import { router } from "./routes/auth.routes.js";
import { messageRouter } from "./routes/message.routes.js";
import { connectionToMongoDB } from "./db/connectDB.js";
import { userRouter } from "./routes/user.routes.js";

const app = express();

dotenv.config();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());
app.use(cors())

app.use("/api/auth", router);
app.use("/api/messages", messageRouter);
app.use("/api/users", userRouter);

app.listen(PORT, () => {
  connectionToMongoDB();
  console.log(`Server connected at ${PORT}`);
});
