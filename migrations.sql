CREATE DATABASE PandaPay;
-- connect to database
\c PandaPay;

CREATE TABLE payment (
  trans_id SERIAL PRIMARY KEY,
  processor_id integer,
  customer_id integer,
  trans_date timestamp,
  trans_subtotal currency,
  trans_tax currency,
  trans_shipping currency,
  trans_total currency,
  trans_memo varchar(255),
);
