import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

import itemRouter from "./src/routes/customerRoutes.js";
import adminRouter from "./src/routes/adminRoutes.js";
import googleAPIrouter from "./api/googleApi.js";

import { initDb } from "./src/models/customerModel.js";

const app = express();
app.use(express.json()); // body parser
app.use(cors());
dotenv.config();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
initDb();

const REACT_BUILD_DIR = path.join(__dirname, "..", "client", "build");

//Set the port that you want the server to run on
const PORT = process.env.PORT || 4000;
//creates an endpoint for the route /api

app.use(express.static(REACT_BUILD_DIR));

app.use("/place", googleAPIrouter);
app.use("/api", itemRouter);
app.use("/admin", adminRouter);

app.get("*", (req, res) => {
  res.sendFile(path.join(REACT_BUILD_DIR, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
