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
2. Rails framework - Chosen over Sinatra for purposes of education and experience.
3. Backbone.js with Underscore.js for templating
4. JavaScript with jQuery

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

1. id -- a sepcific transaction
2. processor_name - a business that collects PandaCard payments
2. customer_name - the customer who made a payment to the processor
4. trans_date - the date of the transaction
5. trans_subtotal - the total of the items or service prices
6. trans_tax - tax charged for this transaction
7. trans_shipping - shipping charged for this transaction
4. trans_total - the total of the subtotal + tax + shipping
5. trans_memo - a memo line that was issued on the customer's receipt

API payment object JSON example:

{
  'member_id': "12341234",
  "trans_name": "Wilma's Pastries",
  "customer_name": "Edward Long",
  "trans_date": "8-29-2015",
  "trans_subtotal": "20.00",
  "trans_tax": "2.00",
  "trans_shipping": "4.00",
  "trans_total": "26.00",
  "trans_memo": "Check out our selection of crullers!"
}

The PayPal REST API serves as inspiration. Of course, it returns far more attributes in a payment object. It also contains sub-objects. If I were to mimic their exmaple more faithfully, for instance, trans_subtotal, trans_tax, trans_shipping, and trans_total would all be attributes of a sub-object named amount.

# Challenges and Solutions



# Version 2.0 Wish List

1. Realistically, PROCESSORS and CUSTOMERS should be in separate models and referenced in the currently used PAYMENTS model by id and joined with one to many relationships (one PAYMENT to one PROCESSOR, one CUSTOMER), because PandaCard has more information about each than just their names.

2. The value of the PandaCard payments API is most evident when processors and customers can see transaction data specific to them. Separate apps could be developed for processors and customers, but that means that each API key must be checked against a table to determine which records are permitted to be returned.

# Future development

A look at a comparable existing service quickly shines a light on other components necessary if I was to develop PandaCard into a functioning enterprise.

1. PandaCard would collect fees, handle refunds and disputes.

2. Canceled or incomplete transactions would not be deleted, but tracked separately.

3. Security must be leading edge, for the apps, the API, the log-ins.
