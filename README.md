# PandaCard
### Project 3 for General Assembly Web Development Immersive class
an API Server + a Backbone.js front-end

![PandaCard screenshot](https://raw.githubusercontent.com/davidlhayes/project3/master/app/assets/images/screen-pandacard.png)

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

1. Ruby 1.9.3
2. Rails 4.2.4 framework - Chosen over Sinatra for purposes of education and experience.
3. Postgresql - Reliable storage of the data model
4. ActiveRecord - Easy interaction with Postgresql
5. Backbone.js with Underscore.js for templating
6. JavaScript with jQuery
7. Postman for testing API and populating data (CocoaREST could also be used)
7. Sass - for variables and nesting capabilities in CSS
8. Ruby Gems - <code>figaro</code> (to support placing the API key in an environment variable), <code>rack-cors</code> (to support Cross Origin Resource Sharing)

# Instructions

In order to impelement PandaCard elsewhere, ensure that the technologies listed are avaiable. Then follow these stesp:
1. Clone this GitHub repository to your local computer.
2. cd to the newly created project3 directory
3. Run Postgresql
4. Run db:create
5. Run db:migrate
6. Add a file named application.yml in the config directory. Aside from any comment, it should contain only the string: 'API_PANDACARD_KEY: XXXXXXXXX' The actual value is up to you, but must also be added to line 24 of home.js. UPDATE: API Key requirement has been deactivated.
7. Run rails s
8. Use Postman or CocoaREST and insert localhost:3000/api/payments/?key=XXXXXX into the URL field to populate database using keys listed below. Use the POST method. Currently, the return from a succesful post is NULL. For a satisfactory display demonstration, dates should be formatted as such YYYY-MM-DD with leading zeros where necessary to fill all digits. For demo purposes, amounts should not contain trailing zeroes.

For Convenience, a file named Sample Data to Load in Postman.txt has been provided to allow placing full sample records in Postman's Bulk Edit mode. Once the keys and values are loaded, the data can be submitted with the POST method (url: localhost:3000/api/payments)

9. Navigate to localhost:3000 for the main page.

## Security

Note: API Key requirement has been deactivated.

An API Key will used to keep the API secure. For version 1.0, their will be one
fixed key and it will return the results for every PandaCard payment processor.
In the app, it means that with every GET, POST, PUT, PATCH, DELETE request, there
must be appended a key string in the form of <code>/?key=abcdef</code>

# App Premise

## PandaCard - A Fictitious Credit Card Company

PandaCard has members who are businesses which collect PandaCard payments and members who are customers who make payments using PandaCard.

![PandaCard wireframe](https://raw.githubusercontent.com/davidlhayes/project3/master/app/assets/images/PandCard%20WIreframe.png)


# User Stories

## End User

The end user is a business that collects payments by PandaCard. The business needs to see records of payments collected. They hire someone to build an app to manage their data. That developer needs access to the real-time data posessed by PandaCard.

## Admin

PandaCard needs to manage the payments processed by its member businesses. For maintenance purposes, at least, it needs to view, update, create, and destroy records of payments.

# App Description

## API

The Application Programming Interface (API) is a key-protected access point for viewing and managing PandaCard data. All of the usual database functions are avaiable: Create, Read, Update, Destroy. See below for a description of the data (model) used.

## Admin Panel

The front-end of this app is an administration panel, containing credit card purchase information for all PandaCard holders. It allows Transaction ID, Processor Name, Customer Name, and Transaction Date to be sorted up or down. A text input field is provided to allow the user to enter the name of a Processor. Upon refreshing, the results are filtered, demonstrating the end goal of providing transaction information to a business that only that business should see.

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

# Important files
A rails application is a structured collection of files, most of which generated automatically for every new rails application. Many are necessary for configuration. Some could be removed for the final version of this application, but are kept at this time for reference, future expansion, and to avoid creating a problem by disappointing a unexpected dependency. For the sake of guidance, here is a short list of the files that contain the bulk of code and information manually created for this application:

- app/assets/javascripts/home.js (Backbone models, collections, and views located here)
- app/assets/stylesheets/style.scss (all styling)
- app/controllers/payments_controller.rb (Ruby API CRUD controller)
- app/views/home/layouts/application.html.erb (The header and footer of the app's single view plus controls for refreshing, filter, and sorting the rendered collection and the underscore template for the rendered table)
- config/application.yml (Not stored on GitHub. See installation instructions)
- Gemfile (see list of Gems added to defaults.)
- Public/assets/images/panda-310814_1280.png (logo)
- public/assets/images/pandacard-header-background.png (header background)

# Challenges and Solutions

1. **Online Deployment**--Once PandaCard worked succesfully on my local computer, I uploaded it to Heroku. Heroku returned a 503 error page, application not available. A solution was never found. PandaCard has since been deployed on a Digital Ocean droplet.

2. **View Formatting**--The data is stored in the Postgresql table in specified formats: strings, dates, and fixed precision numbers for currency column. The values transferred to the view were all strings, meaning that sorting columns would only provide the expected results if numbers had no zeroes in the rightmost digit and if dates were kept in the year-month-day format, keeping leading 0s for single digit days/months.

*Solution*--I explored several methods for converting the strings appearing in the JSON, including forcing the desired format in the Rails route and also a method to convert the string in the template. I wanted to keep logic out of the template, though. I explored Underscore View Helpers, but abandoned that path after many errors.

3. **Sorting & Filtering**--I found several sources that indicated Backbone approaches to sorting and filtering. They seemed to involve instantiating a separate view. The methods looked involved and possibly out of scope of the one-view expectation of this project.

*Solution*--I eventually concluded that adding simple code to the existing view would produce the desired effect, though it was a challenge to determine where it would be in the correct scope to have access and to be accessible.

The following is from the CollectionView blueprint section of home.js. It shows the how the collectionView only accepts models with a targeted processor name and also how the included models' transaction totals are summed for display beneath the collection:

```js
render: function() {
  var collection = this.collection.models;
  this.$el.html('');
  var sum = 0;
  for (var model in collection) {
    // code to filter results
    if ((collection[model].get('processor_name') ==  $('#processor_name_target').val()) || $('#processor_name_target').val()=='') {
      // sum the total
      sum = sum + Number(collection[model].get('trans_total'));
      sum = Math.round(sum * 100) / 100
      new payments.blueprints.modelView({
        el: $('#payment-row'),
        model: collection[model]
      });
    }
    // post the total
    $('#pmtTotal').html(sum);
}
```

The following code is from the section of home.js that is executed after the document has loaded. It shows how the transaction ID is sorted up or down in response to a click. Below that is the corresponding code for sorting processor name. Sorting an integer in reverse simply requires negating the id returned from the model. Sorting on a string is more involved. It uses Underscore's map function and looks at character codes. Credit for this functioning goes to Andrew De Andrade on Stack Overflow. I believe it could be made more DRY, but time would be required to pull out the repetitive portion and correctly identify the input and the output of the isolated function.

```js
// transaction id sort buttons
$('#sort-id-up').on('click',function() {
  payments.active.collection.comparator = function(model) {
    return -model.get('id');
  }
  console.log('id up got clicked');
  // call the sort
  payments.active.collection.sort();
  payments.active.collectionView.render();
});

$('#sort-id-down').on('click',function() {
  payments.active.collection.comparator = function(model) {
    return model.get('id');
  }
  console.log('id down got clicked');
  // call the sort
  payments.active.collection.sort();
  payments.active.collectionView.render();
});
// processor sort buttons
$('#sort-proc-up').on('click',function() {
  payments.active.collection.comparator = function(model) {
    var str = model.get('processor_name');
    str = str.toLowerCase();
    str = str.split("");
    str = _.map(str, function(letter){
      return String.fromCharCode(-(letter.charCodeAt(0)));
    });
  return str;
  }
  console.log('processor up got clicked');
  // call the sort
  payments.active.collection.sort();
  payments.active.collectionView.render();
});

$('#sort-proc-down').on('click',function() {
  payments.active.collection.comparator = function(model) {
    return model.get('processor_name');
  }
  console.log('processor down got clicked');
  // call the sort
  payments.active.collection.sort();
  payments.active.collectionView.render();
});
```
4. **Security**--The API was secured as intended and instructed for implementation the Figaro gem. The key was placed in an environment variable through an application.yml configuration file that was listed in .gitignore so as to stay off GitHub. Client-side implementation of the API key was implemented by storing the API key in a window.localstorage variable and accessed there by home.js. This seemed not to work properly once the app was deployed on Digital Ocean and the API string was hard-coded into home.js. Neither hard-coding or window.localstorage of the plain-text API key seems ideal, but for this demo, was considered a low priority concern.

# Version 2.0 Wish List

1. Realistically, PROCESSORS and CUSTOMERS should be in separate models and referenced in the currently used PAYMENTS model by id and joined with one to many relationships (one PAYMENT to one PROCESSOR, one CUSTOMER), because PandaCard has more information about each than just their names.

2. The value of the PandaCard payments API is most evident when processors and customers can see transaction data specific to them. Separate apps could be developed for processors and customers, but that means that each API key must be checked against a table to determine which records are permitted to be returned.

3. The data formatting must be robust for sorting and consistent display.

4. Security needs to be corrected, such that the client-side app does not reveal the API key, in operation, or on GitHub (realizing that exposure is not completely avoidable).

# Future development

A look at a comparable existing service quickly shines a light on other components necessary if I was to develop PandaCard into a functioning enterprise.

1. PandaCard would collect fees, handle refunds and disputes.

2. Canceled or incomplete transactions would not be deleted, but tracked separately.

3. Security must be leading edge, for the apps, the API, the log-ins.

4.   (I have since read that US money should be dealt with using integers/pennies and would like to explore that idea).

# General Observations

Ruby on Rails and Backbone.js are new technologies to this developer. The underlying objective of this project was to learn and explore. As with a new language or new culture, it's useful to immerse oneself in the environment and experience the world in operation despite not understanding every part of it or how it works together. One follows the customs by mimicking for the sake of compliance. Patterns must be recognized and become familiar before the reasoning behind the elements of the environment can become evident.

At this point, I appreciate that for this project Ruby on Rails handles the database. It is not exposed in the browser and is therefore more secure. Backbone.js is a bit harder to understand, but I've learned that the point is to create a structure in which the model (the data) and it's presentation can be kept separate. After all, what is presented is almost always a subset of what is stored and the view needs to be manipulated and that may or may not impact the model.

This project gave me a glimpse into how models, collections, and views operate. I added some functions and in the process gained some understanding. More experience is needed to be certain that my code additions fit the intended relationships. There appears to be much freedom in where code is placed, but understanding is required to place it in the wisest place.
