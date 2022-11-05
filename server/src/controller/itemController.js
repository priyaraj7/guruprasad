import { itemsByCategory, contactMessage } from "../models/itemModel.js";

export const itemController = async (req, res) => {
  //console.log(req.params);
  //debugger;

  try {
    const item = await itemsByCategory();
    res.json(item);
  } catch (e) {
    console.log(error);
    return res.status(400).json({ error });
  }
};

export const contactUsController = async (req, res) => {
  try {
    const userInfo = await contactMessage(user);
    res.json(userInfo);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error });
  }
};

// for future use

// export const getItem = () => {}
// export const createItem = () => {}
// export const deleteItem = () => {}
// export const updateItem = () => {}
