import {
  earlyBreakfastModel,
  breakfastModel,
  supperModel,
  beveragesModel,
  itemModel,
} from "../models/itemModel.js";

export const earlyBreakfastController = async (req, res) => {
  try {
    const earlyBreakfast = await earlyBreakfastModel();
    //console.log(earlyBreakfast);
    res.send(earlyBreakfast);
  } catch (e) {
    return res.status(400).json({ e });
  }
};

export const breakfastController = async (req, res) => {
  try {
    const breakfast = await breakfastModel();
    res.send(breakfast);
  } catch {
    return res.status(400).json({ e });
  }
};

export const supperController = async (req, res) => {
  try {
    const supper = await supperModel();
    res.send(supper);
  } catch {
    return res.status(400).json({ e });
  }
};

export const beveragesController = async (req, res) => {
  try {
    const beverages = await beveragesModel();
    res.send(beverages);
  } catch {
    return res.status(400).json({ e });
  }
};

export const itemController = async (req, res) => {
  console.log(req.params);
  // const params = new URLSearchParams({
  //   id: req.query.id,
  // });
  // console.log(params);
  //const category = req.params.category;
  //categoryId
  const id = Number(req.params.categoryId);
  console.log(typeof id, "id");
  try {
    const item = await itemModel(id);
    res.send(item);
  } catch (e) {
    console.log(e);
    return res.status(400).json({ e });
  }
};
