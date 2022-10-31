import express from "express";
import {
  earlyBreakfastController,
  breakfastController,
  supperController,
  beveragesController,
  itemController,
} from "../controller/itemController.js";

const router = express.Router();

// router.get("/early-breakfast", earlyBreakfastController);
// router.get("/breakfast", breakfastController);
// router.get("/supper", supperController);
// router.get("/beverages", beveragesController);

router.get("/:categoryId", itemController);

export default router;
