import { initDBConnection } from "../../db/db-connection.js";

let db;

export function initDb() {
  db = initDBConnection();
}

export const itemsByCategory = async () => {
  const { rows: items } = await db.query(
    `SELECT
    C.ID,
    C.CATEGORY_NAME as categoryName ,
    C.DESCRIPTION,
   (
        SELECT json_agg(json_build_object(
            'id', ID,
            'itemName', ITEM_NAME,
            'price', PRICE
        ))
        FROM ITEM
        WHERE
            CATEGORY_ID = C.ID AND ACTIVE IS TRUE
    ) AS  ITEMS
FROM CATEGORY C
ORDER BY C.ID ASC;`
  );

  return items;
};

// FOR CONTACT PAGE
export const contactMessage = async (user) => {
  const insertQuery = `INSERT INTO contact(name, email, phone_number, message) 
                 VALUES($1, $2, $3, $4)
                 RETURNING *`;
  const values = [user.name, user.email, user.phoneNumber, user.message];

  const result = await db.query(insertQuery, values);

  return result;
};
