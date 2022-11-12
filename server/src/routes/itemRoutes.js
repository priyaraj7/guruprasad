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
  itemController,
  postMessageController,
  getMessageController,
  deleteMessageController,
} from "../controller/itemController.js";

const router = express.Router();

router.get("/menu", itemController);

router.get("/message", jwtCheck, getMessageController);
router.post("/message", postMessageController);
router.delete("/message/:id", jwtCheck, deleteMessageController);

export default router;
