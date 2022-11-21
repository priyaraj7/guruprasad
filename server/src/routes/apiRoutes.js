import express from "express";

import {
  itemController,
  postMessageController,
} from "../controller/customerController.js";

import adminRoutes from "./adminApiRoutes.js";

const router = express.Router();
router.use("/admin", adminRoutes);

router.get("/menu", itemController);

router.post("/message", postMessageController);

export default router;
