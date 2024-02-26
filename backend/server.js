import express from "express";
import dotenv from "dotenv";

import { router } from "./routes/auth.routes.js";
import { messageRouter } from "./routes/message.routes.js";
import { connectionToMongoDB } from "./db/connectDB.js";

const app = express();

dotenv.config();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use("/api/auth", router);
app.use("/api/messages", messageRouter);

app.listen(PORT, () => {
  connectionToMongoDB();
  console.log(`Server connected at ${PORT}`);
});
