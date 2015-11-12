# Pros and cons of Javascript apps
- Much more control when you make http requests etc than Rails
- Less bandwidth, less html being sent backwards and forwards
- This costs less to the likes of Google
- Feels more responsive - the next page loads instantly, for example

## Drawbacks
- Increases complexity
- Can cost more in terms of people / actually building the thing
- You still need some stuff on the server end as well
- You lose your SEO: there are some ways around this, but it's more difficult because a lot of your content is actually hidden or buried away

## In summary, really large companies get more benefit from taking this kind of approach - they have more money to chuck at things
## Stuff you need for backbone app
Backbone.js Underscore.js Jquery

You need to be careful about the order you include:

```
<script src="jquery-2.1.4.min.js"></script>
<script src="underscore-min.js"></script>
<script src="backbone-min.js"></script>
```

# Callbacks
The key thing about callbacks is that they will happen _later_. It's very easy to forget the order that code is going to run. It doesn't happen in the order that it happens in the code.

```
var callback = function() {
  alert("button was clicked")
}
$('button').on('click', callback);

# Also
$('button').on('click', function() {
  // anonymous function
  });
```

The more Javascript you do the more you realise that JS uses callbacks a lot. A real lot.

## Scope
Put arguments into your callbacks. Make sure they have all the information they need. And the callbacks don't touch anything outside of themselves. They can trust that.

Passing in the event, as below, helps this situation.

```
$('button').on('click', function(event) {
  // anonymous function
  });
```

JS `var LineN = ["", "", ""]` Ruby `line = RailLine.new("stuff")`

`var song = new Song("artist", "title")`

`class Song < ActiveRecord::Base
`

```
mixtape = {};
mixtape.Song = Backbone.Model.extend( ... )
mixtape.Song;
```


## There is no private keyword in JavasScript
An underscore in JS means pay no attention to this.


```
poison.get("artist")
```

```
poison.set({artist: "X"})
```

## Views need to listen to Models
Every time the model changes the view changes because it's listening.

```
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
    });
  }
});
```

__This bit of code is really really useful in case stuff isn't working as you expect it to be, because it's telling you all the events that are being fired in the code__

```
this.on("all", function(event) {
  console.log(event);
});
```

```
poison.destroy();
```

## Also to look up
Different JS MVC appraoches - Angular, Ember
NPM

## Views

Listen to model events
And DOM events

## You can have multiple views of one model

## Never style something that is going to be in a list unless it is in a list.
