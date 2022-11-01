import express from "express";
import { itemController } from "../controller/itemController.js";

const router = express.Router();

// router.get("/getByCategories", async (req, resp) => {
//   console.log(req.query.categoryId);
//   return resp.send("OK -" + req.query.categoryId.join(", "));
// });
router.get("/:categoryId", itemController);

export default router;
