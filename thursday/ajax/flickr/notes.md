# Things I want to do with app

## Questions

Inside the jQuery image there is a whole load of stuff. How do you get in there.

Why would you end up with loads of ajax requests going on?
<<<<<<< HEAD

## Front end dev work - you don't get to know quite when t's all broken - need to do more user interactivity etc

`_.throttle` - you can tell an event to fire only so often.

## inside a form tac



on("submit"), function(event){
  event.preventDefault();
}


## Rails

```
rails new secrets --database-postgresql --skip-turbolinks
```
```
rails generate scaffold secret content:text
```



Todo when making Backbone Rails app

* Home page with .erb file to put in BB html
  * route to that home page
  * check that home is working
* put underscore.js somewhere
* put backbone.js somewhere


* Create secret model(BB)
  * app/assets/javascripts/secrets.js
  * Create a secret in Rails using the JS console

* Create secret collection(BB)
  * Load all secrets from RAils

* Secret view
* App view
* html
* check we can see a list of secrets on the home page


## Notes
* Home page with .erb file to put in BB html
* route to that home page
* check that home is working
* create some js files
  * app/assets/javascripts/views
  * app/assets/javascripts/models
  * app/assets/javascripts/collections
  * app/assets/javascripts/routers
  * app/assets/javascripts/secrets.js
* put underscore.js somewhere
* put backbone.js somewhere




## Need to copy some stuff
Put other peoples stuff in the vendor directory


Sprockets and the asset pipeline are the same things - the funny `//=` is the way to invoke stuff here.
It's really important the order in which you import the javascript files into Rails, so you can't use the last bit


DELETE `//= require_tree .`




command for console

```
secrets.fetch();

secrets.models[0].attributes
```

in backbone


in one model
`urlRoot = "/secrets"
this acts as the prefix, allows you to add post requests etc.
```

in a collection, on the other hand,
```
url: "/secrets"
```
this only gives you the get and nothing like `/secrets/1`
=======
>>>>>>> 8d7879f01c7c06f3b1d24430d4905ea780791823
