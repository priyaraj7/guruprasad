import express from "express";
import fetch from "node-fetch";

import { mockGoogleApiData } from "./mockGoogleApiData .js";

const router = express.Router();

// MOCK-API-DATA FETCHING

router.get("/reviews", async (req, res) => {
  res.json(mockGoogleApiData);
});

/*
// REAL API FETCHING --- Don't Delete

router.get("/reviews", async (req, res) => {
  const url = `https://maps.googleapis.com/maps/api/place/details/json?placeid=${process.env.PLACE_ID}&key=${process.env.GOOGLE_API}`;

  try {
    const googleApiResponse = await fetch(url);

    if (!googleApiResponse.ok) throw await googleApiResponse.json();
    console.log(googleApiResponse);
    return res.json(await googleApiResponse.json());
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error: "Failed to get reviews" });
  }
});

*/

export default router;
