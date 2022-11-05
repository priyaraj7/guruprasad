import express from "express";
import {
  itemController,
  contactUsController,
} from "../controller/itemController.js";

const router = express.Router();

router.get("/menu", itemController);

router.post("/contact", contactUsController);

export default router;
