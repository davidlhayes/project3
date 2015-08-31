-- Created when I thought I would use Sinatra
CREATE DATABASE PandaPay;
-- connect to database
\c PandaPay;

CREATE TABLE payment (
  trans_id SERIAL PRIMARY KEY,
  processor_name varchar(25),
  customer_name varchar(25),
  trans_date timestamp,
  trans_subtotal currency,
  trans_tax currency,
  trans_shipping currency,
  trans_total currency,
  trans_memo varchar(255),
);
