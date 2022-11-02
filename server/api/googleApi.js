import express from "express";
import fetch from "node-fetch";

const router = express.Router();

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

export default router;

// router.get("/getByCategories", async (req, resp) => {
//   console.log(req.query.categoryId);
//   return resp.send("OK -" + req.query.categoryId.join(", "));
// });
