var zoo = zoo || {};

zoo.ZooView = Backbone.View.extend({
  el: $(".zoo"),

  events: {
    "click .add-animal": "onAddAnimal",
  },

  initialize: function(animalList) {
    this.animalList = animalList;
    this.listenTo(this.animalList, "update", this.render);
  },

  render: function() {
    this.$(".song-list").empty();

    for (var i =0; i < this.animalList.length; i++) {
      var animal = this.animalList.at(i);
      var view = new zoo.AnimalView({
        model: animal
      });
      view.render();
      this.$(".animal-list").append(view.el);
    }
  },

  onAddAnimal: function() {
    console.log("onAddAnimal");
    this.animalList.unshift({name: "", legs: "", wings: ""})
  }
});
