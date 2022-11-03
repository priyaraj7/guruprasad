import { initDBConnection } from "../../db/db-connection.js";

let db;

export function initDb() {
  db = initDBConnection();
}

export const itemsByCategory = async () => {
  const { rows: items } = await db.query(
    `SELECT
    C.ID,
    C.CATEGORY_NAME,
    C.DESCRIPTION,
   (
        SELECT json_agg(json_build_object(
            'id', ID,
            'itemname', ITEM_NAME,
            'price', PRICE
        ))
        FROM ITEM
        WHERE
            CATEGORY_ID = C.ID AND ACTIVE IS TRUE
    ) AS  ITEM    
FROM CATEGORY C
ORDER BY C.ID ASC;`
  );

  return items.length ? items : "NO items";
};
