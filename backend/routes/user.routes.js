import express from "express";
import { protectRoute } from "../middleware/protectRoute.js";
import { getUsersSidebar } from "../controllers/user.controller.js";

export const userRouter = express.Router();

userRouter.get("/", protectRoute, getUsersSidebar);
