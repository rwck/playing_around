var object = $(".box");

_.extend(object, Backbone.Events);

object.on("blob", function(msg) {
  console.log("Triggered " + msg);
});

object.trigger("blob", "a special event");

var Sidebar = Backbone.Model.extend({
  promptColor: function() {
    var cssColor = prompt("Please enter a CSS colour:");
    this.set({color: cssColor});
  }
});

window.sidebar = new Sidebar;

sidebar.on('change:color', function(model, color) {
  $('#sidebar').css({background: color});
});

sidebar.set({color: "white"});

sidebar.promptColor();

sidebar.get("color");

sidebar.set("color", 988);

sidebar.has("color");

// sidebar.unset("color")

// sidebar.clear();

sidebar.id // doesn't do anything at the moment

sidebar.cid // unique identifier

sidebar.attributes



sidebar.changed // the things that have changed since the model was last set.

var Meal = Backbone.Model.extend({
  defaults: {
    "appetizer": "caesar salad",
    "entree": "ravioli",
    "dessert": "cheesecake"
  }
});

console.log("Dessert will be " + (new Meal).get("dessert"));


var Book = Backbone.Model.extend({
  "title": "My book"
})

var Restaurant = Backbone.Collection.extend({
  model: Meal
})
