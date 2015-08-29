// #payments-template
// #payment-row

// obviously I don't want this defind here. The question is how to set it elsewhere
var apiKey = '5ea222e9adea47398320f432d3e341b1'

var app = app || {};
var active = active || {};

// blueprints
app.model = Backbone.Model.extend();
app.collection = Backbone.Collection.extend({
  model: app.model,
  url: '/api/payments?key=' + apiKey
});
app.modelView = Backbone.View.extend({
  intialize: function() {
  this.template = _.template($('#payments-template').html());
  // console.log(this.template);
  this.render();
  },
  render: function() {
    var data = this.model.attributes;
    this.$el.append(this.template(data));
  }
});
app.collectionView = Backbone.View.extend({
  initialize: function() {
    var that = this;
    this.collection.on('sync',function() {
      that.render();
    });
    // retrieve data from my API 'all get' route
    this.collection.fetch();
    this.$el.html(''); // empty out any content inside of my $el
  },
  render: function() {
    var collection = this.collection.models;
    for (var model in collection) {
      // console.log(collection[model].attributes);
      new app.modelView({
        el: $('#payment-row'),
        model: collection[model]
      });
    }
  }
});

// end blueprints


$(document).ready(function(event) {

  // instantiate collection & CollectionView
  active.collection = new app.collection();
  active.collectionView = new app.collectionView({
    collection: active.collection,
    el: $('#payment-row')
  });

});
