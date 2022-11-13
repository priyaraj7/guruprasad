import express from "express";
import dotenv from "dotenv";
import { expressjwt } from "express-jwt";
import * as jwks from "jwks-rsa";

dotenv.config();

const jwtCheck = expressjwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: process.env.JWKS_URI,
  }),
  audience: process.env.AUDIENCE,
  issuer: process.env.ISSUER,
  algorithms: [process.env.ALGORITHMS],
});

import {
  getItemController,
  addItemController,
  toggleStatusController,
  getMessageController,
  deleteMessageController,
  updateItemController,
} from "../controller/adminController.js";

const router = express.Router();

router.get("/menu", jwtCheck, getItemController);
router.post("/menu/", jwtCheck, addItemController);
router.put("/menu/:id/status", jwtCheck, toggleStatusController);
router.put("/menu/:id", jwtCheck, updateItemController);

router.get("/message", jwtCheck, getMessageController);
router.delete("/message/:id", jwtCheck, deleteMessageController);

export default router;
