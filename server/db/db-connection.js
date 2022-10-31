import pg from "pg";

let db;
export const initDBConnection = () => {
  const { Pool } = pg;
  console.log(process.env.DATABASE_URL, "url");
  if (!db) {
    db = new Pool({
      connectionString: process.env.DATABASE_URL,
    });
  }
  return db;
};