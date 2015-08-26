# project3
an API Server + a Backbone.js front-end

# Project Parameters

## Server-side

1. Create a Database + Migration files
2. Create a single model RESTful API using Ruby
3. Add some form of authentication
4. Test with CocoaREST
5. Add both Backbone.js request body support and params support
6. Deployment on Digital Ocean.

## Client-Side

1. Create a Backbone.js app with minimum 1 model, 1 model view, 1 collection, 1 collection view
2. Create and application namespace for blueprints and active instantiated objects
3. Render API
4. Responsive design for views

## Technologies Used

1. Ruby
2. Backbone.js
3. Sinatra - Chosen over Rails because it is lightweight and flexible 
4. Bootstrap - A powerful styling framework with-in built-in responsive design abilities

## Security

An member id will be required as a parameter in each request.

# App Description

## PandaCard - A Fictitious Credit Card Company
### The front-end of this app will allow a business to access transaction information for clients who pay with PandaCard

### The API will contain credit card purchase information for all PandaCard holders. PandaCard businesses will create apps to
### access the API, but their member key will be required with each request and only return payments made to them
###

### The API Table

### Columns

1. member_id
2. trans_id
2. customer_id
4. trans_date
5. trans_subtotal
6. trans_tax
7. trans_shipping
4. trans_total
5. trans_memo

API payment object JSON example:

{ 
  'member_id': "12341234",
  "trans_id": "12341234",
  "customer_id": "12341234",
  "trans_date": "2015-8-26 08:34:00",
  "trans_subtotal": "20.00",
  "trans_tax": "2.00",
  "trans_shipping": "4.00",
  "trans_total": "26.00",
  "trans_memo": "Check out our selection of all-in-one printers!"
}

### The PayPal REST API serves as inspiration. Of course, it returns far more attributes in a payment object. It also contains ### sub-objects. If I were to mimic their exmaple more faithfully, for instance, trans_subtotal, trans_tax, trans_shipping, and ### trans_total would all be attributes of a sub-object named amount.
