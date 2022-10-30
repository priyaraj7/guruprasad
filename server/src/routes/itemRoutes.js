import express from "express";
import {
  earlyBreakfastController,
  breakfastController,
  supperController,
  beveragesController,
} from "../controller/itemController.js";

const router = express.Router();

router.get("/early-breakfast", earlyBreakfastController);
router.get("/breakfast", breakfastController);
router.get("/supper", supperController);
router.get("/beverages", beveragesController);

export default router;
