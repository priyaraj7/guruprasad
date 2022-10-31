import express from "express";
import { itemController } from "../controller/itemController.js";

const router = express.Router();

router.get("/:categoryId", itemController);

export default router;
