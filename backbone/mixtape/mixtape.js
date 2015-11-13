var mixtape = mixtape || {};

mixtape.Song = Backbone.Model.extend({
  //stuff in here
  defaults: {
    name: "Piano Man",
    artist: "Billy Joel"
  },

  initialize: function() {
    this.on("all", function(event) {
      console.log(event);
    });
    this.on("change:artist", function(model) {
      console.log("Song now written by " + model.get("artist"));
    })
  }
});

mixtape.Songlist = Backbone.Collection.extend({
  model: mixtape.Song,

  initialize: function() {
    this.on("all", function(event) {
      console.log("list", event);
    });
  }
});




// var poison = new mixtape.Song({name: "Poison", artist: "Alice Cooper"});
//
// var song = new mixtape.Song();
//
// console.log(poison);
// console.log(song);



mixtape.SongView = Backbone.View.extend({
  // fetch our song template out of the HTML and prepare it for use

  template: _.template($("#song-template").html()),

  className: "song",

  events: {
    "click .save-song": "onSave",
    "click .viewing": "onEdit",
  },

  initialize: function() {
    // listen to the model. When it changes, redraw the screen
    this.listenTo(this.model, "change", this.render)
  },

  // backbone will call this when it need to 'redraw' the song
  render: function() {
    // render the song template using the data from the model
    var templateResult = this.template(
      this.model.attributes
    );
    // put the result into the HTML DOM
    // el is a thing provided by backbone

    this.$el.html(templateResult);

    if (this.model.get("artist") === "" && this.model.get("name") === "") {
      this.$el.addClass("mode-editing");
    }
  },

  onSave: function(clickEvent) {
    console.log("onSave");
    // this.model.set
    // var name = $(".name-input")
    // the dollar below is from backbone
    var newName = this.$(".name-input").val();
    var newArtist = this.$(".artist-input").val();
    this.model.set({
      name: newName,
      artist: newArtist
    });

    this.$el.removeClass("mode-editing");
  },

  onEdit: function() {
    console.log("onEdit");
    // $(".song")fadeOut("slow");
    this.$el.addClass("mode-editing");
    this.$(".name-input").focus();
  }
});

mixtape.MixtapeView = Backbone.View.extend({
  el: $('.mixtape'),

  events: {
    "click .add-song": "onAddSong",
  },

  initialize: function(songList) {
    this.songList = songList;
    this.listenTo(this.songList, "update", this.render);
  },

  render: function() {
    this.$(".song-list").empty();

    for (var i = 0; i < this.songList.length; i++) {
      
    }
    )
  }



})

$(document).ready(function() {
  var song = new mixtape.Song({
    name: "Poison",
    artist: "Alice Cooper"
  });

  var songView = new mixtape.SongView({
    model: song,
    el: $(".song")
  });

  // var songView2 = new mixtape.SongView({
  //   model: song,
  //   el: $(".song2")
  // });


  songView.render();

});
