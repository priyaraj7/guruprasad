import { initDBConnection } from "../../db/db-connection.js";

let db;

export function initDb() {
  db = initDBConnection();
}

const joinQuery = `SELECT item.id, 
item.item_name, 
item.price, 
item.active, 
category.category_name,
category.id
FROM item 
  INNER JOIN category
ON item.category_id = category.id`;

export const earlyBreakfastModel = async () => {
  console.log(`${joinQuery} WHERE category_id = 1`);
  const { rows: earlyBreakfast } = await db.query(
    `${joinQuery} WHERE category_id = 1`
  );
  return earlyBreakfast;
};

export const breakfastModel = async () => {
  const { rows: breakfast } = await db.query(
    `${joinQuery} WHERE category_id = 2`
  );
  return breakfast;
};

export const supperModel = async () => {
  const { rows: supper } = await db.query(`${joinQuery} WHERE category_id = 3`);
  return supper;
};

export const beveragesModel = async () => {
  const { rows: beverage } = await db.query(
    `${joinQuery} WHERE category_id = 4`
  );
  return beverage;
};

export const itemModel = async (id) => {
  // `${joinQuery} WHERE category_id = ${id}`
  // console.log(`${joinQuery} WHERE category_name = ${category} RETURNING *`);
  const { rows: earlyBreakfast } = await db.query(
    `select item.id, item.category_id,item.item_name, item.price, item.active, category.category_name from item inner Join category on item.category_id = category.id WHERE category_id = ${id};`
  );
  return earlyBreakfast;
};
