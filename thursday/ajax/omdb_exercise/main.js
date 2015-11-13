console.log("running");

$("#search-button").click(function () {blob()})

function blob() {
  var searchString = $("#search-input").val();
  console.log("yaroo");
  console.log(searchString);

  var request = new XMLHttpRequest();

  request.onreadystatechange = function(){
    // console.log("Ready state: " + request.readystate);
    console.log("Ready state: ", request.readyState);

    if (request.readyState === 4) {
      //finishe
      var jsonString = request.responseText;
      var data = JSON.parse(jsonString);
      $data = $(data);
      console.log(jsonString);
      console.log(data);
      $("#response").append(jsonString);
      // for ()

      $.each(item, function(i, val) {
        console.log(i);
        console.log(val)
      }
    }
  }

  request.open("GET", "http://www.omdbapi.com/?t=" + searchString);
  request.send();





}





function setupQuery(searchString) {
  console.log(searchString);

}
