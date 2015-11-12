# Ajax

There is a nice plugin for chrome that formats JSON nicely.

```
<script>

var request = new XMLHttpRequest();

request.onreadystatechange = function(){
  // console.log("Ready state: " + request.readystate);
  console.log("Ready state: ", request.readyState);
}

request.open("GET", "http://api.doughnuts.ga/doughnuts");
request.send();

</script>
```


## there are four ready states - this is about establishing the connection

JSON.parse("{"key": 22}")

this turns a string and turns it into a JSON object.





# document.createTextNode(jsonString)
# document.createElement



# JQuery

has some cool stuff


```
<script>
console.log("helllo");

$.ajax({
  url: "http://api.doughnuts.ga/doughnuts",
  type: "GET",
  data: {
  },
  dataType: "json", // you don't need this but it's recommended
  success: function(data) {
    console.log("success", data);
    console.log("stringified: ", JSON.stringify(data));

  },
  error: function(xhr, status, errorMessage) {
    console.log("error", errorMessage);
  },
  complete: function(xhr, status) {
    console.log("always");
  }
});

</script>
```

this is the other way of doing things


```

$.ajax({
  url: "http://api.doughnuts.ga/doughnuts",
  type: "GET",
  data: {
  },
  dataType: "json"
}).done(function(data){
  console.log("success", data);
}).fail(function(xhr, status errorMessage)){
  console.log("fail", status, errorMessage);
}).always(function(xhr, status){
  console.log("always", status);
});

```


# Cross origin resource sharing (CORS - these are errors normally when you come across them

  jsonp is a thing that helps you around this sort of problem.

# JSONP
Look it up...


# Infinite scrolling

$(document).height()

$(window).height()

$(window).scrollTop()
