const frontendDataQuery = `SELECT
 item.id,
 item_name AS itemName,
 price,
 active,
 category_name AS categoryName,
 category_id as categoryId,
 description
from
 item
 left join category on category_id = category.id`;

export default function (db) {
  return {
    getAllItem: async () => {
      const { rows: items } = await db.query(
        `${frontendDataQuery} ORDER BY item.id ASC`
      );

      return items;
    },

    // https://stackoverflow.com/questions/59232370/adding-a-left-join-on-a-insert-into-returning
    //   /* A WITH query allows a record returned from an initial query,
    //   including data returned from a RETURNING clause, which is stored in a
    //   temporary table that can be accessed in the expression that follows
    //   it to continue work on it, including using a JOIN expression. */
    addItem: async (item) => {
      const insertQuery = `
    with item as (INSERT INTO
      item(item_name, price, category_id)
    VALUES($1, $2, $3) RETURNING *)   
    ${frontendDataQuery}`;
      const values = [item.itemName, item.price, item.categoryId];

      return await db.query(insertQuery, values);
    },
    toggleActiveStatus: async (id) => {
      return await db.query(
        `UPDATE item SET active = NOT active WHERE id = ${id} RETURNING *`
      );
    },

    updateItem: async (id, item) => {
      const query = `with item as (Update item SET item_name = $1, price = $2,category_id = $3 where id = $4 RETURNING *) ${frontendDataQuery}`;
      const values = [item.itemname, item.price, item.categoryId, id];
      return await db.query(query, values);
    },

    getMessage: async () => {
      const getQuery = `SELECT * FROM message ORDER BY messaged_at DESC`;
      return await db.query(getQuery);
    },

    deleteMessage: async (id) => {
      return await db.query(`DELETE FROM message WHERE id = $1`, [id]);
    },
  };
}
