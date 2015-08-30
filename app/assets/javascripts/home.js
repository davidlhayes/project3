// #people-template
// #people-list

var app = app || {};
var active = active || {};

//blueprints
app.model = Backbone.Model.extend();
app.collection = Backbone.Collection.extend({
  model: app.model,
  url: '/api/payments?key='
    + window.localStorage.PANDACARD_API_KEY
});
app.modelView = Backbone.View.extend({
  initialize: function() {
    // every modelView should have a model
    //this.model
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
    // every collectionView should have a collection
    this.collection.on('sync', function() {
      that.$el.html('');
      that.render();
      console.log('sync');
    });
    // retrieve data from my API 'all get' route
    this.collection.fetch();
    this.$el.html(''); // empty out any content inside of my $el
    console.log('the el has been emptied');
  },
  render: function() {
    var collection = this.collection.models;
    for (var model in collection) {
      //console.log(collection[model].attributes);
      // memory purposes
      new app.modelView({
        el: $('#payment-row'),
        model: collection[model]
      });
    }
  }
});
//end blueprints

$(document).ready(function(event) {

  // instantiate collection + collectionView
  active.collection = new app.collection();
  active.collectionView = new app.collectionView({
    collection: active.collection,
    el: $('#payment-row')
  });

  $('#refresh-list').on('click',function() {
    active.collection.fetch();
  });


});
