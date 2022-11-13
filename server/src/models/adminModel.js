import { initDBConnection } from "../../db/db-connection.js";

let db;

// This function is because I got the error query is undefined
function ensureDb() {
  if (!db) {
    db = initDBConnection();
  }
}

const frontendDataQuery = `SELECT
 item.id,
 item_name AS itemName,
 price,
 active,
 category_name AS categoryName,
 description
from
 item
 left join category on category_id = category.id;`;

export const getAllItem = async () => {
  ensureDb();
  // debugger;
  // console.log(db);
  const { rows: items } = await db.query(frontendDataQuery);

  return items;
};

export const addItem = async (item) => {
  ensureDb();
  // https://stackoverflow.com/questions/59232370/adding-a-left-join-on-a-insert-into-returning
  /* A WITH query allows a record returned from an initial query, 
  including data returned from a RETURNING clause, which is stored in a 
  temporary table that can be accessed in the expression that follows 
  it to continue work on it, including using a JOIN expression. */
  const insertQuery = `
  with item as (INSERT INTO
    item(item_name, price, category_id)
  VALUES($1, $2, $3) RETURNING *)   
  ${frontendDataQuery}`;
  const values = [item.itemName, item.price, item.categoryId];

  // console.log(`query ====> ${insertQuery}`);
  return await db.query(insertQuery, values);
};

export const toggleActiveStatus = async (id) => {
  // debugger;
  return await db.query(
    `UPDATE item SET active = NOT active WHERE id = ${id} RETURNING *`
  );
};

export const updateItem = async (id, item) => {
  const query = `Update item SET item_name = $1, price = $2,category_id = $3 where id = $4 RETURNING *`;
  const values = [item.itemname, item.price, item.categoryId, id];
  return await db.query(query, values);
};

// FOR CONTACT PAGE
// get query
export const getMessage = async () => {
  // debugger;
  const getQuery = `SELECT * FROM message`;
  return await db.query(getQuery);
};

// Delete query
export const deleteMessage = async (id) => {
  return await db.query(`DELETE FROM message WHERE id = $1`, [id]);
};

// export const editItem = async (itemId) => {
//   const editQuery = `UPDATE
//       item
//       SET item_name =$1, price= $2, active=$3)
//     VALUES($ 1, $ 2, $ 3 )
//         WHERE id = ${itemId}`;
//   const values = [item.itemName, item.price, item.active];

//   return await db.query(editQuery, values);
// };
