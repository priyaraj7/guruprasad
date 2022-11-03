import express from "express";
import { itemController } from "../controller/itemController.js";

const router = express.Router();

router.get("/menu", itemController);

export default router;
