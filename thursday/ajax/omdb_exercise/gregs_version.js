// this is the javascript version - not 100% sure it will work on my page given some of the ids etc.

function displayData(data) {
  console.log(data);
  var results = data["Search"];
  var ul = document.createElement("ul");
  for (var i = 0; i < results.length; i++) {
    var row = results[i];
    var textNode = document.createTextNode(row["Title"]);
    var li = document.createElement("li");
    li.appendChild(textNode);
    ul.appendChild(li);
  }
  document.body.appendChild(ul);
}

function omdbRequest(query, callback) {
  var request = new XMLHttpRequest();
  request.onreadystatechange = function() {
    console.log("ready state: ", request.readyState);

    if (request.readyState === 4) {
      var jsonString = request.responseText;
      var data = JSON.parse(jsonString);
      $data = $(data);
      callback($data);
    }
  }
  var url = "http://www.omdbapi.com/?s=" + query;
  request.open("GET", url);
  request.send();
}

function onClick() {
  var textField = document.getElementsByTagName("input")[0];
  var searchText = textField.value;
  console.log(searchText);
  omdbRequest(searchText, displayData);
}
