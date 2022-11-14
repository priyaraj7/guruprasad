import express from "express";

import {
  itemController,
  postMessageController,
} from "../controller/customerController.js";

const router = express.Router();

router.get("/menu", itemController);

router.post("/message", postMessageController);

export default router;
