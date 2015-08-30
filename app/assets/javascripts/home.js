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
  url: '/api/payments?key='
    + window.localStorage.PANDACARD_API_KEY
});
// model view
payments.blueprints.modelView = Backbone.View.extend({
  initialize: function() {
    // every modelView should have a model
    // using an underscore.js template, spelled out in index.html.erb
    this.template = _.template($('#payments-template').html());
    // console.log(this.template);
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
    for (var model in collection) {
      //console.log(collection[model].attributes);
      // memory purposes
      new payments.blueprints.modelView({
        el: $('#payment-row'),
        model: collection[model]
      });
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

  $('#refresh-list').on('click',function() {
    payments.active.collection.fetch();
  });

  $('#filter-list').on('click',function() {
    // payments.active.collection. fetch some<---------------finish
  });

});
