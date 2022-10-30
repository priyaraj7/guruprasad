DROP DATABASE IF EXISTS guruprasad;

CREATE DATABASE guruprasad;

\c guruprasad

CREATE TABLE category(
   id serial PRIMARY KEY,
   category_name VARCHAR (255) UNIQUE NOT NULL
);

CREATE TABLE item(
   id serial PRIMARY KEY,
   item_name VARCHAR (255) UNIQUE NOT NULL,
   price FLOAT,
   status BOOLEAN,
   category_id  INT,
   CONSTRAINT fk_category
      FOREIGN KEY(category_id) 
	  REFERENCES category(id)
);

CREATE TYPE status_type AS ENUM ('received', 'processing', 'completed');

CREATE TABLE order(
   id serial PRIMARY KEY,
   customer_name VARCHAR (255) NOT NULL,
   phone_number TEXT,
   ordered_at TIMESTAMP DEFAULT NOW(),
   status status_type
);

CREATE TABLE order_item(
   id serial PRIMARY KEY,
     order_id  INT,
    CONSTRAINT fk_order
      FOREIGN KEY(order_id) 
	  REFERENCES order(id),
      item_id  INT,
    CONSTRAINT fk_item
      FOREIGN KEY(item_id) 
	  REFERENCES item(id)
);

-- QUERY

ALTER TABLE item
  RENAME COLUMN status TO active;

select item.id, item.item_name, item.price, item.status, category.category_name from item inner Join category on item.category_id = category.id WHERE category_id = 4;