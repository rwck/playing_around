var zoo = zoo || {};

zoo.AnimalView = Backbone.View.extend({
  template: _.template($("#animal-template").html()),
  className: "animal",
  events: {
    "click .save-animal": "onSave",
    "click .name": "onEdit",
    "click .remove-animal": "onRemove"
  },

  onRemove: function() {
    console.log("onRemove");
    this.model.destroy();
  },

  initialize: function() {
    this.listenTo(this.model, "change", this.render);
  },

  render: function() {
    var templateResult = this.template(
      this.model.attributes
    );
    this.$el.html(templateResult);

    if (this.model.get("name") === "" && this.model.get("legs") === "" && this.model.get("wings") === "") {
      this.$el.addClass("mode-editing");
    }
  },

  onSave: function() {
    console.log("onSave");

    var name = this.$(".name-input").val();
    var legs = this.$(".legs-input").val();
    var wings = this.$(".wings-input").val();

    this.model.set({
      name: name,
      legs: legs,
      wings: wings
    });

    this.$el.removeClass("mode-editing");
  },

  onEdit: function() {
    console.log("onEdit");

    this.$el.addClass("mode-editing");
    this.$(".name-input").focus();
  }
});
