var zoo = zoo || {};

zoo.AnimalList = Backbone.Collection.extend({
  model: zoo.Animal,

  initialize: function() {
    this.on("all", function(event){
      console.log("animal list", event);
    });
  }
});
