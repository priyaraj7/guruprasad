import { itemModel } from "../models/itemModel.js";

export const itemController = async (req, res) => {
  //console.log(req.params);

  const id = Number(req.params.categoryId);
  // console.log(typeof id, "id");
  try {
    const item = await itemModel(id);
    res.send(item);
  } catch (e) {
    //console.log(e);
    return res.status(400).json({ e });
  }
};
