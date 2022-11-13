import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import itemRouter from "./src/routes/customerRoutes.js";
import adminRouter from "./src/routes/adminRoutes.js";
import googleAPIrouter from "./api/googleApi.js";

import { initDb } from "./src/models/customerModel.js";

const app = express();
app.use(express.json()); // body parser
app.use(cors());
dotenv.config();
initDb();

//Set the port that you want the server to run on
const PORT = process.env.PORT || 4000;
//creates an endpoint for the route /api
app.get("/", (req, res) => {
  res.json({ message: "Hello from ExpressJS" });
});

app.use("/place", googleAPIrouter);
app.use("/api", itemRouter);
app.use("/admin", adminRouter);

// console.log that your server is up and running
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
