import {
  itemsByCategory,
  postMessage,
  getMessage,
  deleteMessage,
} from "../models/itemModel.js";

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

// Contact us Message
// Get request

export const getMessageController = async (req, res) => {
  try {
    const { rows: messages } = await getMessage();
    return res.json(messages);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error });
  }
};

// Post request
export const contactUsController = async (req, res) => {
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

// for future use

// export const getItem = () => {}
// export const createItem = () => {}
// export const deleteItem = () => {}
// export const updateItem = () => {}
