
$(document).ready(function(){
	var song = new mixtape.Song({
		name: "Poison",
		artist: "Alice Cooper",
		lyrics: lyrics1()
	});

	var song2 = new mixtape.Song({
		name: "Song 2",
		artist: "Blur",
		lyrics: lyrics2()
	});

	mixtape.songList = new mixtape.SongList([song, song2]);
	mixtape.View = new mixtape.MixtapeView(mixtape.songList);
	mixtape.View.render();

	mixtape.router = new mixtape.Router();
	Backbone.history.start();
});


function lyrics1() {
	var words = `
	<br>
	Your cruel device,<br>
	Your blood like ice.<br>
	One look could kill,<br>
	My pain, your thrill.<br>
	<br>
	I wanna love you, but I better not touch (don't touch)<br>
	I wanna hold you, but my senses tell me to stop<br>
	I wanna kiss you, but I want it too much (too much)<br>
	I wanna taste you, but your lips are venomous poison<br>
	<br>
	You're poison runnin through my veins<br>
	You're poison, I don't wanna break these chains.<br>
	<br>
	Your mouth, so hot<br>
	Your web, I'm caught<br>
	Your skin, so wet<br>
	Black lace on sweat<br>
	<br>
	I hear you callin and it's needles and pins (and pins)<br>
	I wanna hurt you just to hear you screaming my name<br>
	Don't wanna touch you, but you're under my skin (deep in)<br>
	I wanna kiss you, but your lips are venomous poison<br>
	<br>
	You're poison runnin through my veins<br>
	You're poison, I don't wanna break these chains<br>
	Poison<br>
	<br>
	One look (one look), could kill (could kill),<br>
	My pain, your thrill.<br>
	<br>
	I wanna love you, but I better not touch (don't touch)<br>
	I wanna hold you, but my senses tell me to stop<br>
	I wanna kiss you, but I want it too much (too much)<br>
	I wanna taste you, but your lips are venomous poison<br>
	<br>
	You're poison runnin through my veins<br>
	You're poison, I don't wanna break these chains<br>
	Poison<br>
	<br>
	I wanna love you, but I better not touch (don't touch)<br>
	I wanna hold you, but my senses tell me to stop<br>
	I wanna kiss you, but I wanna too much (too much)<br>
	I wanna taste you, but your lips are venomous poison<br>
	<br>
	Yeah<br>
	Well I don't wanna break these chains<br>
	Poison<br>
	<br>
	Runnin deep inside my veins<br>
	Burnin deep inside my veins<br>
	Poison<br>
	I don't wanna break these chains
	`;
	return words;
}

function lyrics2 () {
	var lyrics =
	`this is another song`
	return lyrics;
}
