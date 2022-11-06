import express from "express";
import {
  itemController,
  contactUsController,
  getMessageController,
  deleteMessageController,
} from "../controller/itemController.js";

const router = express.Router();

router.get("/menu", itemController);

router.get("/message", getMessageController);

router.post("/message", contactUsController);
router.delete("/message/:id", deleteMessageController);

export default router;
