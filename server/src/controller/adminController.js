import initAdminModel from "../models/adminModel.js";
import { initDBConnection } from "../../db/db-connection.js";

const {
  getAllItem,
  addItem,
  toggleActiveStatus,
  updateItem,
  getMessage,
  deleteMessage,
} = initAdminModel(initDBConnection());

// import getAdminModel from "../models/adminModel.js";

// const {
//   getAllItem,
//   addItem,
//   toggleActiveStatus,
//   updateItem,
//   getMessage,
//   deleteMessage,
// } = getAdminModel()
export const getItemController = async (req, res) => {
  try {
    const item = await getAllItem();
    return res.json(item);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error });
  }
};

// Post request
export const addItemController = async (req, res) => {
  const categoryid = Number(req.body.categoryid);
  console.log(categoryid);
  const newItem = {
    itemName: req.body.itemname,
    price: req.body.price,
    categoryid: categoryid,
  };

  try {
    const item = await addItem(newItem);
    res.json(item.rows[0]);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error });
  }
};

export const toggleStatusController = async (req, res) => {
  const id = Number.parseInt(req.params.id, 10);
  console.log(id);

  try {
    const item = await toggleActiveStatus(id);
    res.json(item.rows[0]);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error });
  }
};

// update  item request
export const updateItemController = async (req, res) => {
  const id = Number.parseInt(req.params.id, 10);
  const items = req.body;
  console.log(items);

  try {
    const item = await updateItem(id, items);
    res.json(item.rows[0]);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error });
  }
};

// Get request Message
export const getMessageController = async (req, res) => {
  try {
    const { rows: messages } = await getMessage();
    return res.json(messages);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error });
  }
};

// Delete request
export const deleteMessageController = async (req, res) => {
  const id = parseInt(req.params.id);

  try {
    await deleteMessage(id);
    res.send({ status: "success" });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error });
  }
};
