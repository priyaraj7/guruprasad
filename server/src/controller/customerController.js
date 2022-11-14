import { itemsByCategory, postMessage } from "../models/customerModel.js";

export const itemController = async (req, res) => {
  try {
    const item = await itemsByCategory();
    return res.json(item);
  } catch (e) {
    console.log(error);
    return res.status(400).json({ error });
  }
};

// Contact us Message

// Post request
export const postMessageController = async (req, res) => {
  const user = {
    name: req.body.name,
    email: req.body.email,
    phoneNumber: req.body.phoneNumber,
    message: req.body.message,
  };
  console.log(req.body);

  try {
    const userInfo = await postMessage(user);
    res.json(userInfo.rows[0]);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error });
  }
};
