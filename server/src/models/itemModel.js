import { initDBConnection } from "../../db/db-connection.js";

let db;

export function initDb() {
  db = initDBConnection();
}

export const itemModel = async (id) => {
  const { rows: items } = await db.query(
    `SELECT item.id, item.category_id,item.item_name, item.price, item.active, category.category_name 
    FROM 
    item INNER JOIN 
    category on item.category_id = category.id 
    WHERE category_id = ${id};`
  );
  return items;
};
