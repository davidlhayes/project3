// #people-template
// #people-list
// namespace this app!
var payments = payments || {};
// the constructor namespace
payments.blueprints = payments.blueprints || {};
// the instantiated models
payments.active = payments.active || {};


//blueprints
// single model (payment record)
payments.blueprints.model = Backbone.Model.extend();
// model collection (payment record list)
payments.blueprints.collection = Backbone.Collection.extend({
  model: payments.blueprints.model,

  comparator: function(model) {
    // console.log(model.get('trans_total'));
    // PaymentsTotal = PaymentsTotal + model.get('trans_total');
    return model.get('customer_name');
  },
  url: '/api/payments?key='
    + window.localStorage.PANDACARD_API_KEY
});
// model view

payments.blueprints.modelView = Backbone.View.extend({
  initialize: function() {
    // every modelView should have a model
    // using an underscore.js template, spelled out in index.html.erb
    this.template = _.template($('#payments-template').html());
    this.render();
  },
  render: function() {
    var data = this.model.attributes;
    this.$el.append(this.template(data));
  }
});
// collection view
payments.blueprints.collectionView = Backbone.View.extend({
  initialize: function() {
    var that = this;
    // every collectionView should have a collection
    this.collection.on('sync', function() {
      that.$el.html('');
      that.render();
      // console.log('sync');
    });
    // retrieve data from my API 'all get' route
    this.collection.fetch();
    this.$el.html(''); // empty out any content inside of my $el
    // console.log('the el has been emptied');
  },
  render: function() {
    var collection = this.collection.models;
    this.$el.html('');
    var sum = 0;
    for (var model in collection) {
      // code started below to filter results
      // if (collection[model].get('processor_name') == 'Zero My Hero') {
        // sum the total
        sum = sum + Number(collection[model].get('trans_total'));
        new payments.blueprints.modelView({
          el: $('#payment-row'),
          model: collection[model]
        });
      // }
      // post the total
      $('#pmtTotal').html(sum);
    }

  }
});

//end blueprints

// ...and action!
$(document).ready(function(event) {

  // instantiate collection + collectionView
  payments.active.collection = new payments.blueprints.collection();
  payments.active.collectionView = new payments.blueprints.collectionView({
    collection: payments.active.collection,
    el: $('#payment-row')
  });


  // refresh sort buttons;
  $('#refresh-list').on('click',function() {
    payments.active.collection.sort();
    console.log('refresh pressed');
    payments.active.collection.fetch();
  });
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

  // customer sort buttons
  $('#sort-cust-up').on('click',function() {
    payments.active.collection.comparator =  function(model) {
      var str = model.get('customer_name');
      str = str.toLowerCase();
      str = str.split("");
      str = _.map(str, function(letter){
        return String.fromCharCode(-(letter.charCodeAt(0)));
      });
    return str;
    }
    console.log('customer up got clicked');
    // call the sort
    payments.active.collection.sort();
    payments.active.collectionView.render();
  });

  $('#sort-cust-down').on('click',function() {
    payments.active.collection.comparator = function(model) {
      return model.get('customer_name');
    }
    console.log('customer down got clicked');
    // call the sort
    payments.active.collection.sort();
    payments.active.collectionView.render();
  });
  // date sort buttons
  $('#sort-date-up').on('click',function() {
    payments.active.collection.comparator = function(model) {
      var str = model.get('trans_date');
      str = str.toLowerCase();
      str = str.split("");
      str = _.map(str, function(letter){
        return String.fromCharCode(-(letter.charCodeAt(0)));
      });
      return str;
    }
    console.log('date up got clicked');
    // call the sort
    payments.active.collection.sort();
    payments.active.collectionView.render();
  });

  $('#sort-date-down').on('click',function() {
    payments.active.collection.comparator = function(model) {
      return model.get('trans_date');
    }
    console.log('date down got clicked');
    // call the sort
    payments.active.collection.sort();
    payments.active.collectionView.render();
  });
  console.log('hi');


});
