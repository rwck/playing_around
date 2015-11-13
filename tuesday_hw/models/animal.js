var zoo = zoo || {};

zoo.Animal = Backbone.Model.extend({
  initialize: function() {
    this.on("all", function(event){
      console.log("animal", event);
    });
  }
});
