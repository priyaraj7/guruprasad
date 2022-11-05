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


ALTER TABLE item
  RENAME COLUMN status TO active;

  ALTER TABLE item
  ALTER COLUMN active SET DEFAULT TRUE;


  CREATE TABLE contact(
   id serial PRIMARY KEY,
   name VARCHAR (255) NOT NULL,
   email VARCHAR (255) NOT NULL,
  phone_number TEXT,
  message VARCHAR  NOT NULL,
  messaged_at TIMESTAMP DEFAULT NOW(),
);


-- QUERY

select item.id, item.category_id,item.item_name, item.price, item.active, category.category_name from item inner Join category on item.category_id = category.id WHERE category_id = 4;

SELECT item.id, item.item_name,item.price, item.active,item.category_id,category.category_name FROM item RIGHT JOIN category ON item.category_id = 1;

-- adding column

ALTER TABLE category 
ADD COLUMN description VARCHAR;

SELECT 
category.id, category.category_name, category.description
    FROM category
     INNER JOIN 
    item on item.category_id = category.id 
    WHERE  item.active = TRUE
    ORDER BY id ASC;


    select json_agg(item)
from (
  select * from item where item.category_id  = 1
) as item;


select row_to_json(cat) as category
from(
  select c.id, c.category_name, 
  (select json_agg(ite)
  from ( 
    select * from item where category_id = c.id
  ) ite
) as item
from category as c) cat;


-- JSON_COMPOSE creates a JSON document composed of the input parameters specified.
-- This function provides a complex composition of a JSON document when used in
--  conjunction with the JSON_AGG function.


SELECT JSON_Compose(T.company, T.empAge AS age, T.employees)
FROM
 (
  SELECT company, empAge, 
     JSON_agg(empID AS id, 
              empName AS name) AS employees 
  FROM emp_table
  GROUP BY company, empAge
 ) AS T;

--  ALTER TABLE category rename column category_name to Cname