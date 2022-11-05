import { itemsByCategory } from "../models/itemModel.js";

export const itemController = async (req, res) => {
  //console.log(req.params);
  //debugger;

  try {
    const item = await itemsByCategory();
    res.json(item);
  } catch (e) {
    console.log(e);
    return res.status(400).json({ e });
  }
};

// for future use

// export const getItem = () => {}
// export const createItem = () => {}
// export const deleteItem = () => {}
// export const updateItem = () => {}
