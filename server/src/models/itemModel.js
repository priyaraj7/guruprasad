import { initDBConnection } from "../../db/db-connection.js";

let db;

export function initDb() {
  db = initDBConnection();
}

// export const itemsByCategory = async () => {
//   const { rows: items } = await db.query(
//     `SELECT item.id, item.category_id, item.item_name, item.price, category.category_name, category.description
//     FROM
//     item INNER JOIN
//     category on item.category_id = category.id
//     WHERE  item.active = TRUE
//     ORDER BY id ASC;`
//   );
//   if (items.length) {
//     const result = {
//       categoryId: items.category_id,
//       categoryName: items.category_name,
//       description: items.description,
//       items,
//     };
//     return result;
//   }

//   return null;
// };

export const itemsByCategory = async () => {
  const { rows: items } = await db.query(
    `select * 
    from(
      select c.id, c.category_name, c.description, 
      (select json_agg(ite)
      from ( 
        select id, item_name As itemName, price  from item where category_id = c.id AND active = TRUE
      ) ite 
    ) as item
    from category as c) category
    ORDER BY category.id ASC;`
  );
  // if (items.length) {
  //   const result = {
  //     categoryId: items.category_id,
  //     categoryName: items.category_name,
  //     description: items.description,
  //     items,
  //   };
  //   return result;
  // }

  return items;
};
