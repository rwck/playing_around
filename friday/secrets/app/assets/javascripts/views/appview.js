var app = app || {}

app.AppView = Backbone.View.extend({
  el: "#main",

  render: function() {
    var template = $("#appViewTemplate").html();
    this.$el.html(template);
  }
});
