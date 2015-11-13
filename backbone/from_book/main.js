var Todo = Backbone.Model.extend({
  defaults: {
    title: "",
    completed: false
  }
});

var myTodo = new Todo({
  title: "Try to get your head around backbone.js"
});

var TodoView = Backbone.View.extend({

  tagName: 'li',

  todoTemplate: _.template( $('#item-template').html() ),

  events: {
    'dbclick label': 'edit',
    'keypress .edit': 'updateOnEnter',
    'blur .edit': 'close'
  },

  initialize: function() {
    this.$el = $('#todo');
  },

  render: function() {
    this.$el.html( this.todoTemplate( this.model.toJSON() ) );
    this.input = this.$('.edit');
    return this;
  },

  edit: function() {

  },

  close: function() {

  },

  updateOnEnter: function( e ) {

  }

});

var todoView = new TodoView({model: myTodo});
todoView.render();
