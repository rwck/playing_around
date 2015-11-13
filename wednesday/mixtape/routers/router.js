var mixtape = mixtape || {};

mixtape.Router = Backbone.Router.extend({
  routes: {
    "songs/:id": "showSong", // :id = characters that aren't
    "*other": "showSongList" // *other = wildcard

  },

  showSong: function(cid) {
    console.log("showSong", cid);

    var song = mixtape.songList.get(cid);
    var view = new mixtape.SongLyricsView({model: song});
    view.render();

    this.showPage("song-lyrics-page");

  },

  showSongList: function() {
    console.log("showSongList");
    this.showPage("song-list-page");

    // TODO
  },

  showPage: function(pageClass) {
    // hide all the pages
    // show just the page specified
    $(".page").hide();
    $("." + pageClass).show();
  }

});
