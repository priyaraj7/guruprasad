import { initDBConnection } from "../../db/db-connection.js";

let db;

export function initDb() {
  db = initDBConnection();
}

export const itemModel = async (id) => {
  const { rows: items } = await db.query(
    `SELECT item.id, item.category_id, item.item_name, item.price, category.category_name, category.description
    FROM 
    item INNER JOIN 
    category on item.category_id = category.id 
    WHERE category_id = ${id} AND item.active = TRUE
    ORDER BY id ASC;`
  );
  if (items.length) {
    const result = {
      categoryId: items[0].category_id,
      categoryName: items[0].category_name,
      description: items[0].description,
      items,
    };
    return result;
  }

  return null;
};
