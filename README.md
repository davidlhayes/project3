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
2. Rails - Chosen over Sinatra for purposes of education and experience.
3. Backbone.js
4. Bootstrap - A powerful styling framework with-in built-in responsive design abilities

## Security

An API Key will used to keep the API secure. For ver 1.0, their will be one
fixed key and it will return the results for every PandaCard payment processor.
In the app, it means that with every GET, POST, PUT, PATCH, DELETE request, there
must be appended a key string in the form of <code>/?key=abcdef</code>

# App Premise

## PandaCard - A Fictitious Credit Card Company

PandaCard has members who are businesses which collect PandaCard payments and members who are customers who make payments using PandaCard.

# User Stories

## End User

The end user is a business that collects payments by PandaCard. The business needs to see records of payments collected. They hire someone to build an app to manage their data. That developer needs access to the real-time data posessed by PandaCard.

## Admin

PandaCard needs to manage the payments processed by its member businesses. For maintenance purposes, at least, it needs to view, update, create, and destroy records of payments.

# App Description

## API

The Application Programming Interface is a key-protected access point for viewing and managing PandaCard data. All of the usual database functions are avaiable: Create, Read, Update, Destroy. See below for a description of the data (model) used.

## Admin Panel

The front-end of this app is an administration panel, containing credit card purchase information for all PandaCard holders.

##

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

The PayPal REST API serves as inspiration. Of course, it returns far more attributes in a payment object. It also contains ### sub-objects. If I were to mimic their exmaple more faithfully, for instance, trans_subtotal, trans_tax, trans_shipping, and ### trans_total would all be attributes of a sub-object named amount.
